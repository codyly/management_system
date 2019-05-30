import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../components/main.js';
import { SetPer } from '../components/frames/stockFrame.js'
import { SetPer_user } from '../components/frames/aboutFrame.js'
import { URLParam, GETRequest, POSTRquest } from '../utils/httpRequest.js';
import { Stock, Instruction } from './stock.js';
import { STATE_LOGIN_OUT, STATE_LOGIN, LOGIN_URL, LOGIN_URL_TEST, 
         MOD_STATE_URL, MOD_PASSWORD_URL,MOD_LIMIT_URL,GET_ALL_URL,
         GET_STOCK_DETAIL_URL ,T_URL,SEARCH_BY_NAME,SEARCH_BY_ID,
         GET_ALL_USR, MOD_MNG_AHU, ADD_NEW_MNG, RST_PASSWORD_URL, 
         SEARCH_MNG_BY_NAME}  from '../globals.js'
import { DetailText } from '../components/frames/detailFrame.js';
import { CookieInstance } from '../utils/simple-cookie.js';
export var per = [];

export function AdminUser(name, auth) {
    this.name = name;
    this.auth = auth;
    this.passwd = "";
    this.bool_para = false;
    this.state = STATE_LOGIN_OUT;
    this.tmpStock = new Stock("id","name",100,2,23,0,20,20,20,1,2);

    this.show = () => {
      return <h1>User: {this.name}, Auth: {this.auth}</h1>;
    }

    this.loginCallback = (data) => {
      var LOGIN_SUCCESS = 0;
      var INVALID_PASSWORD = -1;
      var INVALID_USERNAME = -2;
      data = {"stateCode":LOGIN_SUCCESS, "username":user.name, "authority": 2};
      var stateCode = data["stateCode"];
      if(stateCode === LOGIN_SUCCESS){
        this.name = data["username"];
        this.auth = data["authority"];
        if(this.auth === -1){
          this.state = STATE_LOGIN_OUT;
        }
        this.state = STATE_LOGIN;
        console.log("callback: " + this.name);
        var name_list = ["username", "password"];
        var para_list = [this.name, this.passwd];
        console.log(this.bool_para);
        CookieInstance.setCookie(name_list, para_list,1, this.bool_para);
      }
      else if(stateCode === INVALID_PASSWORD ){
        alert("wrong password!");
      }
      else if(stateCode === INVALID_USERNAME ){
        alert("invalid username!");
      }
      // service.toolBar = (
      //   <div>
      //     <p id="userinfo">Welcome, {this.name}</p>
      //   </div>
      // );
      service.draw();
    }

    this.login = (passwd, save_password) => {
      var url = LOGIN_URL_TEST;
      var url2 = URLParam(url, "username", this.name);
      url2 = URLParam(url2, "passwd", passwd);
      this.passwd = passwd;
      this.bool_para = save_password;
      console.log(url2);
      this.loginCallback(url);
      //GETRequest(url2, this.loginCallback);
    }

    this.modifyCallback = (data) => {
      var stateCode = data['stateCode'];
      if(stateCode === 0){
        alert("succeed");
      }
      this.load_all_stock();
    }

    this.modifyPassword = (prePassword, newPassword) => {
      var url = MOD_PASSWORD_URL;
      var data = {"username": this.name, "old_passwd": "1",
       "new_passwd": newPassword};
      console.log(data);
      POSTRquest(url, data, this.modifyCallback);
    }

    this.logout = () => {
      this.state = STATE_LOGIN_OUT;
      service.draw();
    }

    this.modify_limit = (id, upper, lower) => {
      var url = MOD_LIMIT_URL;
      var data = {"stock_id": id, "upper_limit": upper, "lower_limit": lower};
      console.log(data);
      POSTRquest(url, data, this.modifyCallback);
    }

    this.modify_state = (id, state) => {
      var url = MOD_STATE_URL;
      var data = {"stock_id": id, "state": state};
      console.log(data);
      POSTRquest(url, data, this.modifyCallback);
    }

    this.load_all_stock = () => {
      var url =  GET_ALL_URL;
      var url2 = URLParam(url, "authority", this.auth);
      console.log(url2);
      GETRequest(url2, this.load_all_callback);
    }

    this.load_all_user = () => {
      var url =  GET_ALL_USR;
      var url2 = URLParam(url, "own_authority", this.auth);
      console.log(url2);
      GETRequest(url2, this.load_user_callback);
    }

    this.load_all_callback = (data) => {
      var stateCode = data['stateCode'];
      var dataset = data['stocks']
      if(stateCode === 0){
        SetPer(dataset);
      }
      else{
        alert("failed!");
      }
    }

    this.load_user_callback = (data) => {
      var stateCode = data['stateCode'];
      var dataset = data['users']
      if(stateCode === 0){
        SetPer_user(dataset);
      }
      else{
        alert("failed!");
      }
      
    }

    this.get_detail_callback=(data) => {
      var data = {"latest_price": 1.0, "latest_num": 2, "latest_type": "A",
                  "BuyInsts": [{"inst_no":0, "inst_type":"A", "inst_num":2, "price":5000, 
                    "stock_id":"sn123211", "user_id":"123456", "op_time":"2018-08-08"}], 
                  "SellInsts":[{"inst_no":0, "inst_type":"A", "inst_num":2, "price":5000, 
                  "stock_id":"sn123211", "user_id":"123456", "op_time":"2018-08-08"}],
                  "stateCode": 1};
      var stateCode = data['stateCode'];
      var i = 0;
      var BuyInsts=[];
      var SellInsts=[];
      for(i=0;i<data['BuyInsts'].length;i++){
        BuyInsts.push(new Instruction(data['BuyInsts'][i]));
      }
      for(i=0;i<data['BuyInsts'].length;i++){
        SellInsts.push(new Instruction(data['SellInsts'][i]));
      }
      this.tmpStock.latest_num = data['latest_num'];
      this.tmpStock.latest_price = data['latest_price'];
      this.tmpStock.latest_type = data['latest_type'];
      this.tmpStock.BuyInsts = BuyInsts;
      this.tmpStock.SellInsts = SellInsts;
      console.log(this.tmpStock.SellInsts[0].op_time)
      service.mainFrame = new DetailText(this.tmpStock);
      service.draw(); 
    }

    this.get_stock_detail = (selected_stock) =>{
      var url = GET_STOCK_DETAIL_URL;
      this.tmpStock = selected_stock;
      var url2 = URLParam(url, "stock_id", selected_stock.stock_id);
      console.log(url2);
      GETRequest(url2, this.get_detail_callback);
      this.get_detail_callback();
    }

    this.search = (method, string) =>{
      var url;
      var url2;
      if(method === "words"){
        url = SEARCH_BY_NAME;
        url2 = URLParam(url,  "stock_name", string);
        url2 = URLParam(url2,  "authority", this.auth);
      }
      else if(method === "id"){
        url = SEARCH_BY_ID;
        url2 = URLParam(url,  "stock_id", string);
        url2 = URLParam(url2,  "authority", this.auth);
      }
      console.log(url2);
      GETRequest(url2, this.load_all_callback);
    }

    this.search_user = (method, string) => {
      var url;
      var url2;
      if(method === "username"){
        url = SEARCH_MNG_BY_NAME;
        url2 = URLParam(url,  "username", string);
        url2 = URLParam(url2,  "own_authority", this.auth);
      }
      console.log(url2);
      GETRequest(url2, this.load_user_callback);
    }

    this.reset_user_pwd_call = (data) => {

    }

    this.reset_user_pwd = (user_name) => {
      var url = RST_PASSWORD_URL;
      var data = {"own_authority": this.auth, "username": user_name};
      console.log(data);
      POSTRquest(url, data, this.reset_user_pwd_call);
    }

    this.modify_auth_call = (data) => {
        this.load_all_user();
    }

    this.modify_auth = (user_name, auth) => {
      var url = MOD_MNG_AHU;
      var data = {"own_authority": this.auth, "username": user_name, "authority": auth};
      console.log(data);
      POSTRquest(url, data, this.modify_auth_call);
    }
  
};

export var user = new AdminUser("1", 3);
