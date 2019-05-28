import React from 'react';
import ReactDOM from 'react-dom';
import { service } from './main.js';
import { m, s, u, a} from '../index.js'
import { user } from '../objects/users.js'
import { STATE_LOGIN }  from '../globals.js'

function setclasstop1(){
    service.mainFrame=m;
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'active');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
    service.draw();
}
function setclasstop2(){
    service.mainFrame=s;
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'active');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
    service.draw();
}
function setclasstop3(){
    service.mainFrame=u;
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'active');
    item4.setAttribute('class', 'inactive');
    service.draw();
}
function setclasstop4(){
    service.mainFrame=a;
    var item1 = document.getElementById('top1');
    var item2 = document.getElementById('top2');
    var item3 = document.getElementById('top3');
    var item4 = document.getElementById('top4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'active');
    service.draw();
}

export function Top(props) {
  var element;
  if(user.state !== STATE_LOGIN){
    element = <ul class="topnav" id="topnav">
        <li><a class="active" id="top1" href="#home" onClick={setclasstop1}>主页</a></li>
        <li><a class="inactive" id="top2" href="#mainframe" onClick={setclasstop2}>股票</a></li>
        <li><a class="inactive" id="top3" href="#contact" onClick={setclasstop3}>用户</a></li>
        <li ><a class="inactive" id="top4" href="#about" onClick={setclasstop4}>关于</a></li>
        <li style={{float:'right'}}><a class="inactive" id="top5" href="#about" onClick={login}>登录</a></li>
        </ul>;
  }
  else{
    element = <ul class="topnav" id="topnav">
        <li><a class="active" id="top1" href="#home" onClick={setclasstop1}>主页</a></li>
        <li><a class="inactive" id="top2" href="#mainframe" onClick={setclasstop2}>股票</a></li>
        <li><a class="inactive" id="top3" href="#contact" onClick={setclasstop3}>用户</a></li>
        <li ><a class="inactive" id="top4" href="#about" onClick={setclasstop4}>关于</a></li>
        <li style={{float:'right'}}><a class="inactive" id="top5" href="#about" onClick={logout}>登出</a></li>
        </ul>;
  }
  return element;
}

window.addEventListener('scroll', (e) =>
{
    var hand=document.getElementById("topnav");
    var left=document.getElementById("sidenav");
    var navHeight=hand.offsetHeight;
    var last_scroll_position=window.scrollY;
    if (last_scroll_position < navHeight) {
      hand.style.position="relative";
    } else {
      hand.style.position="relative";
    }
});

function getClientHeight()
{
  var clientHeight=0;
  if(document.body.clientHeight&&document.documentElement.clientHeight)
  {
  var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
  }
  else
  {
  var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
  }
  return clientHeight;
}

function login() {
    user.login();
}

function logout() {
    user.logout();
}
// const element = <ul>
// <li><a class="active" href="#home">主页</a></li>
// <li><a href="#news">股票</a></li>
// <li><a href="#contact">用户</a></li>
// <li><a href="#about">关于</a></li>
// </ul>;
