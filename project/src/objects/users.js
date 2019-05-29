import React from 'react';
import ReactDOM from 'react-dom';
import { request } from '../utils/httpRequest.js';
import { service } from '../components/main.js';
import { SetPer } from '../components/frames/stockFrame.js'
import { URLParam, GETRequest, POSTRquest } from '../utils/httpRequest.js';
import { STATE_LOGIN_OUT, STATE_LOGIN, LOGIN_URL, LOGIN_URL_TEST, MOD_STATE_URL,
  MOD_PASSWORD_URL,MOD_LIMIT_URL,GET_ALL_URL,GET_STOCK_DETAIL_URL }  from '../globals.js'

export function AdminUser(name, auth) {
    this.name = name;
    this.auth = auth;
    this.state = STATE_LOGIN_OUT;

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
      var url = LOGIN_URL;
      var url2 = URLParam(url, "username", this.name);
      url2 = URLParam(url2, "passwd", passwd);
      console.log(url2);
      GETRequest(url, this.loginCallback);
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
      var url = GET_ALL_URL;
      var url2 = URLParam(url, "authority", this.auth);
      console.log(url2);
      this.load_all_callback();
      //GETRequest(url2, this.load_all_callback);
    }

    this.load_all_callback = (data) => {
      // var stateCode = data['stateCode'];
      // var dataset = data['stocks']
      var data = [
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        },
        {
            "stock_id": "sn000010",
            "stock_name": "A",
            "stock_price": 123,
            "upper_limit": 100,
            "lower_limit": 0,
            "stock_state": 0
        }
    ];
      SetPer(data);
    }

    this.get_detail_callback=(data) => {
      var data = {"latest_price": 1.0, "latest_num": 2, "latest_type": "A",
    "BuyInsts": [{"inst_no":0, "isnt_type":"A", "isnt_num":2, "price":5000, 
      "stock_id":"sn123211", "user_id":"123456", "op_time":"2018-08-08"}], 
    "SellInsts":[{"inst_no":0, "isnt_type":"A", "isnt_num":2, "price":5000, 
    "stock_id":"sn123211", "user_id":"123456", "op_time":"2018-08-08"}],
    "stateCode": 1
    }

    this.get_stock_detail = (stock_id) =>{
      var url = GET_STOCK_DETAIL_URL;
      var url2 = URLParam(url, "stock_id", stock_id);
      console.log(url2);
      this.get_detail_callback();
    }
  }
};

export var user = new AdminUser("1", 3);
