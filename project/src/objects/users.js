import React from 'react';
import ReactDOM from 'react-dom';
import { request } from '../utils/httpRequest.js';
import { service } from '../components/main.js';
import { SetPer } from '../components/frames/stockFrame.js'
import { URLParam, GETRequest, POSTRquest } from '../utils/httpRequest.js';
import { STATE_LOGIN_OUT, STATE_LOGIN, LOGIN_URL, LOGIN_URL_TEST, MOD_STATE_URL,
  MOD_PASSWORD_URL,MOD_LIMIT_URL,GET_ALL_URL }  from '../globals.js'

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
      var data = [{name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
      {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
      {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
      {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
      {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
      {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
      {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
      {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
      {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
      {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
      {name:'apple',id:'003',price:'56.14',state:'off',up:'200',low:'0'}];
      SetPer(data);
      
    }

};

export var user = new AdminUser("1", 3);
