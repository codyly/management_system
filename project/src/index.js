import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AdminUser } from './objects/users.js';
import { service } from './components/main.js';

var user = new AdminUser("123", 3);
service.toolBar = <p>This.is.the.toolBar.</p>;
service.menu = <p>This is the menu</p>;
service.mainFrame = <h1>This.is.the.main.frame.</h1>;



const name = user.name;

service.draw();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
