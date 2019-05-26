import React from 'react';
import ReactDOM from 'react-dom';
import { request } from '../utils/httpRequest.js';
import { service } from '../components/main.js';
import { URLParam, GETRequest } from '../utils/httpRequest.js';
import { STATE_LOGIN_OUT, STATE_LOGIN,  LOGIN_URL, MOD_PASSWORD_URL }  from '../globals.js'

export function AdminUser(name, auth) {
    this.name = name;
    this.auth = auth;
    this.id = 0;
    this.state = STATE_LOGIN_OUT;

    this.show = () => {
      return <h1>User: {this.name}, Auth: {this.auth}</h1>;
    }

    this.loginCallback = (data) => {
      this.name = "Admin"
      this.id = data[0]["ID"];
      this.auth = data[0]["authority"];
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
      var url = LOGIN_URL_TEST;
      var url2 = URLParam(url, "username", this.name);
      url2 = URLParam(url2, "password", "1");
      console.log(url2);
      GETRequest(url2, this.loginCallback);
    }

    this.modifyPasswordCallback = (data) => {

    }

    this.modifyPassword = (newPassword) => {
      var url = MOD_PASSWORD_URL;
      url = URLParam(url, "username", this.name);
      url = URLParam(url, "newPassword", newPassword);
      GETRequest(url, this.modifyPasswordCallback);
    }

    this.logout = () => {
      this.state = STATE_LOGIN_OUT;
      service.draw();
    }

};

export var user = new AdminUser("1", 3);
