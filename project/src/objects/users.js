import React from 'react';
import ReactDOM from 'react-dom';
import { request } from '../utils/httpRequest.js';
import { service } from '../components/main.js';
import { URLParam, GETRequest, POSTRquest } from '../utils/httpRequest.js';
import { STATE_LOGIN_OUT, STATE_LOGIN, LOGIN_URL, LOGIN_URL_TEST, MOD_PASSWORD_URL }  from '../globals.js'

export function AdminUser(name, auth) {
    this.name = name;
    this.auth = auth;
    this.id = 1;
    this.state = STATE_LOGIN_OUT;

    this.show = () => {
      return <h1>User: {this.name}, Auth: {this.auth}</h1>;
    }

    this.loginCallback = (data) => {
      this.name = "Admin"
      this.id = data["id"];
      this.auth = data["authority"];
      this.name = this.id;
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

    this.login = () => {
      var url = LOGIN_URL;
      var url2 = URLParam(url, "ID", this.id);
      url2 = URLParam(url2, "passwd", "1");
      console.log(url2);
      GETRequest(url, this.loginCallback);
    }

    this.modifyPasswordCallback = (data) => {
      var stateCode = data['stateCode'];
      if(stateCode === 0){
        alert("succeed");
      }
    }

    this.modifyPassword = (prePassword, newPassword) => {
      var url = MOD_PASSWORD_URL;
      var data = {"ID": 1, "old_passwd": "1",
       "new_passwd": newPassword};
      console.log(data);
      POSTRquest(url, data, this.modifyPasswordCallback);
    }

    this.logout = () => {
      this.state = STATE_LOGIN_OUT;
      service.draw();
    }

};

export var user = new AdminUser("1", 3);
