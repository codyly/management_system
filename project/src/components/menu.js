import React from 'react';
import ReactDOM from 'react-dom';
import { service } from './main.js';
import { m, s, u, a} from '../index.js'

export function Side(props) {
    return (<ul class="sidenav">
        <li><a class="active" id="side1" href="#home" onClick={setclassside1}>主页</a></li>
        <li><a class="inactive" id="side2" href="#mainframe" onClick={setclassside2}>股票</a></li>
        <li><a class="inactive" id="side3" href="#mainframe" onClick={setclassside3}>用户</a></li>
        <li><a class="inactive" id="side4" href="#mainframe" onClick={setclassside4}>关于</a></li>
        </ul>);
}

export function setclassside1(){
    service.mainFrame=m;
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'active');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
    service.draw();
}
export function setclassside2(){
    service.mainFrame=s;
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'active');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'inactive');
    service.draw();
}
export function setclassside3(){
    service.mainFrame=u;
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'active');
    item4.setAttribute('class', 'inactive');
    service.draw();
}
export function setclassside4(){
    service.mainFrame=a;
    var item1 = document.getElementById('side1');
    var item2 = document.getElementById('side2');
    var item3 = document.getElementById('side3');
    var item4 = document.getElementById('side4');
    item1.setAttribute('class', 'inactive');
    item2.setAttribute('class', 'inactive');
    item3.setAttribute('class', 'inactive');
    item4.setAttribute('class', 'active');
    service.draw();
}
