import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


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
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import LoginApp from './login.js';
import SiderDemo from './components/mainLayout.js';

export var navside=<Side />
export var navtop=<Top />
export var m=<MainText />
export var u=<UserText />
export var s=<StockText />
export var a=<AboutText />

ReactDOM.render((
    <BrowserRouter>
      {/* <Route exact path = "/" component = {App}/> */}
      {/* <Route exact path = "/main" component = {SiderDemo}/> */}
      <Route exact path = "/" component = {LoginApp}/> 
   </BrowserRouter>
 ), document.getElementById('root'));

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
