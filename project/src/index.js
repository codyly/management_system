import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AdminUser } from './objects/users.js';
import { Stock } from './objects/stock.js';
import { service } from './components/main.js';

var user = new AdminUser("123", 3);
service.menu = <p>This.is.the.toolBar.</p>;
service.toolBar = <p>Welcome, {user.name}!</p>;
service.mainFrame = <h1>This.is.the.main.frame.</h1>;


function Side(props) {
    return (<ul>
        <li><a class="active" href="#home">主页</a></li>
        <li><a href="#news">股票</a></li>
        <li><a href="#contact">用户</a></li>
        <li><a href="#about">关于</a></li>
        </ul>);
}

function Text(){
    return (<div style="margin-left:25%;padding:1px 16px;height:1000px;">
    <h2>Fixed Full-height Side Nav</h2>
    <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
    <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
    <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
    <p>Some text..</p>
    <p>Some text..</p>
    <p>Some text..</p>
    <p>Some text..</p>
    <p>Some text..</p>
    <p>Some text..</p>
    <p>Some text..</p>
  </div>);
}

/*function All(){
    return ();
}*/

function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}

const hel = <HelloMessage name="Runoob"/>;

const name = user.name;

var nav=<Side />
var t=<Text />
var all=<div>
    <Side />
    <Text />
</div>

const element = <ul>
<li><a class="active" href="#home">主页</a></li>
<li><a href="#news">股票</a></li>
<li><a href="#contact">用户</a></li>
<li><a href="#about">关于</a></li>
</ul>;

service.draw();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
