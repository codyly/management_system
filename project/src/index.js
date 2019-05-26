import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { user } from './objects/users.js';
import { Stock } from './objects/stock.js';
import { service } from './components/main.js';
import { Side } from './components/menu.js'
import { Top } from './components/toolbar.js'
import { MainText } from './components/frames/mainFrame.js'
import { StockText } from './components/frames/stockFrame.js'
import { AboutText } from './components/frames/aboutFrame.js'
import { UserText } from './components/frames/userFrame.js'



service.menu = <p>This.is.the.toolBar.</p>;
service.toolBar = service.toolBar = (<div>
  <p id="userinfo">Welcome, {user.name}!
  <button onClick={user.login}>login</button></p>
  </div>);


export var navside=<Side />
export var navtop=<Top />
export var m=<MainText />
export var u=<UserText />
export var s=<StockText />
export var a=<AboutText />

// function HelloMessage(props) {
//     return <h1>Hello {props.name}!</h1>;
// }
//
// const hel = <HelloMessage name="Runoob"/>;

const name = user.name;


service.menu=navside;
service.mainFrame=m;

// service.toolBar=navtop;

service.draw();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
