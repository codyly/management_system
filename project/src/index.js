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
    return (<ul class="sidenav">
        <li><a class="active" id="side1" href="#home" onClick={setclassside1}>主页</a></li>
        <li><a class="inactive" id="side2" href="#mainframe" onClick={setclassside2}>股票</a></li>
        <li><a class="inactive" id="side3" href="#mainframe" onClick={setclassside3}>用户</a></li>
        <li><a class="inactive" id="side4" href="#mainframe" onClick={setclassside4}>关于</a></li>
        </ul>);
}
function setclassside1(){
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'active');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
}
function setclassside2(){
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'active');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
}
function setclassside3(){
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'active');
    item4.setAttribute('class', 'inactive');
}
function setclassside4(){
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'active');
}
function setclasstop1(){
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'active');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
}
function setclasstop2(){
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'active');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
}
function setclasstop3(){
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'active');
    item4.setAttribute('class', 'inactive');
}
function setclasstop4(){
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'active');
}
function Top(props) {
    return (<ul class="topnav">
        <li><a class="active" id="top1" href="#home" onClick={setclasstop1}>主页</a></li>
        <li><a class="inactive" id="top2" href="#mainframe" onClick={setclasstop2}>股票</a></li>
        <li><a class="inactive" id="top3" href="#contact" onClick={setclasstop3}>用户</a></li>
        <li><a class="inactive" id="top4" href="#about" onClick={setclasstop4}>关于</a></li>
        </ul>);
}

function test() {
}

function Text(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
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



function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}

const hel = <HelloMessage name="Runoob"/>;

const name = user.name;

//var text=<p>123</p><p>456</p>;

var text=<div><p>123</p><p>456</p></div>

var nav=<Side />
var nav2=<Top />
var t=<Text />


const element = <ul>
<li><a class="active" href="#home">主页</a></li>
<li><a href="#news">股票</a></li>
<li><a href="#contact">用户</a></li>
<li><a href="#about">关于</a></li>
</ul>;

service.menu=nav;
service.mainFrame=t;
service.toolBar=nav2;
service.draw();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
