import React from 'react';
import ReactDOM from 'react-dom';
import { request } from '../utils/httpRequest.js';
import { service } from '../components/main.js';
import { URLParam, GETRequest } from '../utils/httpRequest.js';
import { STATE_LOGIN_OUT, STATE_LOGIN,  LOGIN_URL, MOD_PASSWORD_URL }  from '../globals.js'

export function AdminUser(name, auth) {
    this.name = name;
    this.auth = auth;
    this.state = STATE_LOGIN_OUT;

    this.show = () => {
      return <h1>User: {this.name}, Auth: {this.auth}</h1>;
    }

    this.loginCallback = (data) => {
      this.name = data[0]["username"];
      this.auth = data[0]["authority"];
      this.state = STATE_LOGIN;
      console.log("callback: " + this.name);
      service.toolBar = (
        <div>
          <p id="userinfo">Welcome, {this.name}</p>
        </div>
      );
      service.draw();
    }

    this.login = () => {
      var url = LOGIN_URL;
      var url2 = URLParam(url, "username", this.name);
      url2 = URLParam(url2, "password", "88888888");
      GETRequest(url, this.loginCallback);
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
    }

};
