import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../components/main.js';
import { SetPer } from '../components/frames/stockFrame.js'
import { URLParam, GETRequest, POSTRquest } from '../utils/httpRequest.js';
import { Stock, Instruction } from './stock.js';
import { STATE_LOGIN_OUT, STATE_LOGIN, LOGIN_URL, LOGIN_URL_TEST, MOD_STATE_URL,
  MOD_PASSWORD_URL,MOD_LIMIT_URL,GET_ALL_URL,GET_STOCK_DETAIL_URL ,T_URL}  from '../globals.js'
import { DetailText } from '../components/frames/detailFrame.js';

export function AdminUser(name, auth) {
    this.name = name;
    this.auth = auth;
    this.state = STATE_LOGIN_OUT;
    this.tmpStock = new Stock("id","name",100,2,23,0,20,20,20,1,2);

    this.show = () => {
      return <h1>User: {this.name}, Auth: {this.auth}</h1>;
    }

    this.loginCallback = (data) => {
      this.name = data["username"];
      this.auth = data["authority"];
      if(this.auth === -1){
        this.state = STATE_LOGIN_OUT;
      }
      this.state = STATE_LOGIN;
      console.log("callback: " + this.name);
      // service.toolBar = (
      //   <div>
      //     <p id="userinfo">Welcome, {this.name}</p>
      //   </div>
      // );
      service.draw();
    }

    this.login = (passwd) => {
      var url = LOGIN_URL_TEST;
      var url2 = URLParam(url, "username", this.name);
      url2 = URLParam(url2, "passwd", passwd);
      console.log(url2);
      GETRequest(url2, this.loginCallback);
    }

    this.modifyCallback = (data) => {
      var stateCode = data['stateCode'];
      if(stateCode === 0){
        alert("succeed");
      }
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
      var url = T_URL; //GET_ALL_URL;
      var url2 = URLParam(url, "authority", this.auth);
      console.log(url2);
      GETRequest(url, this.load_all_callback);
    }

    this.load_all_callback = (data) => {
      // var stateCode = data['stateCode'];
      // var dataset = data['stocks']
      SetPer(data);
      
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
      this.get_detail_callback();
    }

    this.search = (method, string) =>{
      var url = T_URL; //GET_ALL_URL;
      var url2;
      if(method === "words"){
        url2 = URLParam(url,  "stock_name", string);
        url2 = URLParam(url,  "authority", this.auth);
      }
      else if(method === "id"){
        url2 = URLParam(url,  "stock_id", string);
        url2 = URLParam(url,  "authority", this.auth);
      }
      console.log(url2);
      GETRequest(url, this.load_all_callback);
    }
  
};

export var user = new AdminUser("1", 3);
