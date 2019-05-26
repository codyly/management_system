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
var navside=<Side />
var navtop=<Top />
var m=<MainText />
var u=<UserText />
var s=<StockText />
var a=<AboutText />



function Side(props) {
    return (<ul class="sidenav">
        <li><a class="active" id="side1" href="#home" onClick={setclassside1}>主页</a></li>
        <li><a class="inactive" id="side2" href="#mainframe" onClick={setclassside2}>股票</a></li>
        <li><a class="inactive" id="side3" href="#mainframe" onClick={setclassside3}>用户</a></li>
        <li><a class="inactive" id="side4" href="#mainframe" onClick={setclassside4}>关于</a></li>
        </ul>);
}
function setclassside1(){
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
function setclassside2(){
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
    Onload();
}
function setclassside3(){
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
function setclassside4(){
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
function Top(props) {
    return (<ul class="topnav">
        <li><a class="active" id="top1" href="#home" onClick={setclasstop1}>主页</a></li>
        <li><a class="inactive" id="top2" href="#mainframe" onClick={setclasstop2}>股票</a></li>
        <li><a class="inactive" id="top3" href="#contact" onClick={setclasstop3}>用户</a></li>
        <li ><a class="inactive" id="top4" href="#about" onClick={setclasstop4}>关于</a></li>
        <li style={{float:'right'}}><a class="inactive" id="top5" href="#about" onClick={login}>登录</a></li>
        </ul>);
}


function login() {
    prompt("请输入密码");
}


function MainText(){
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

function UserText(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>Fixed Full-height Side Nav</h2>
    <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
    <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
    <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
    <br/>
    <form action="">
    用户名:<br/>
    <input type="text" name="Searchname" value="张三"></input>
    <br/>
    权限:<br/>
    <input type="text" name="Searchid" value="3"></input>
    <br/>
    个人信息:<br/>
    <input type="text" name="Searchid" value="3"></input>
    <br/>
    <input type="submit" value="Submit"></input>
    </form>
  </div>);
}

function restart(){
    alert("restart");
}
function stop(){
    alert("stop");
}
function Modify(){
    prompt("输入数值")
}

function Onload(){ 
    var per = [ 
        {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
        {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
        {name:'apple',id:'003',price:'56.14',state:'off',up:'200',low:'0'} 
        ]; 
     var tbody = document.getElementById('stocktable'); 
     for(var i = 0;i < per.length; i++){ //遍历一下json数据 
       var trow = getDataRow(per[i]); //定义一个方法,返回tr数据 
       tbody.appendChild(trow); 
    }
    }

function StockText(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>Fixed Full-height Side Nav</h2>
    <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
    <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
    <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
    <button onClick={Onload}>加载</button>
    <table id="stocktable">
    <tr>
    <th>公司名称</th>
    <th>代码</th>
    <th>价格</th>
    <th>状态</th>
    <th>涨幅</th>
    <th>跌幅</th>
    <th>中止</th>
    <th>重启</th>
    </tr>
    <tr>
    <td>万 科Ａ</td>
    <td>26.90</td>
    <td>27.06</td>
    <td>29.36</td>
    <td>涨幅  <button onClick={Modify}>修改</button></td>
    <td>跌幅  <button onClick={Modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    <tr class="alt">
    <td>中国宝安</td>
    <td>5.70</td>
    <td>5.77</td>
    <td>6.40</td>
    <td>涨幅  <button onClick={Modify}>修改</button></td>
    <td>跌幅  <button onClick={Modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    </table>
    <br/>
    <form action="">
    Search name:<br/>
    <input type="text" name="Searchname" value="万科A"></input>
    <br/>
    Search id:<br/>
    <input type="text" name="Searchid" value="000002"></input>
    <br/>
    <input type="submit" value="Submit"></input>
    </form>
  </div>);
}

function getDataRow(s){ 
    var row = document.createElement('tr'); //创建行 
    var nameCell = document.createElement('td'); //创建第一列name
    nameCell.innerHTML = s.name; //填充数据 
    row.appendChild(nameCell); //加入行 ，下面类似 
    var idCell = document.createElement('td');//创建第二列id
    idCell.innerHTML = s.id; 
    row.appendChild(idCell); 
    var priceCell = document.createElement('td');//创建第三列price
    priceCell.innerHTML = s.price; 
    row.appendChild(priceCell); 
    var stateCell = document.createElement('td');//创建第三列state
    stateCell.innerHTML = s.state; 
    row.appendChild(stateCell); 
    var upCell = document.createElement('td');//创建第三列up
    upCell.innerHTML = s.up+' '; 
    row.appendChild(upCell); 
    var btnmodify = document.createElement('button'); 
    btnmodify.innerHTML='修改';
    //删除操作 
    btnmodify.onclick=Modify;
    upCell.append(btnmodify)
    var lowCell = document.createElement('td');//创建第三列low
    lowCell.innerHTML = s.low+' '; 
    row.appendChild(lowCell); 
    var btnmodify = document.createElement('button'); 
    btnmodify.innerHTML='修改';
    //删除操作 
    btnmodify.onclick=Modify;
    lowCell.append(btnmodify)
    //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮 
    var btnCell = document.createElement('td');//创建第四列，操作列 
    row.appendChild(btnCell); 
    var btnstop = document.createElement('button'); 
    btnstop.innerHTML='中止交易';
    //btnstop.setAttribute('value','中止交易'); 
    //删除操作 
    btnstop.onclick=stop;
    btnCell.appendChild(btnstop); //把删除按钮加入td，别忘了 
    var btnCell = document.createElement('td');//创建第四列，操作列 
    row.appendChild(btnCell); 
    var btnre = document.createElement('button'); 
    //btnre.setAttribute('value','重启交易'); 
    btnre.innerHTML='重启交易';
    //删除操作 
    btnre.onclick=restart;
    btnCell.appendChild(btnre); //把删除按钮加入td，别忘了 
    return row; //返回tr数据   
    }


     


function AboutText(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>Fixed Full-height Side Nav</h2>
    <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
    <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
    <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
    <p>Some text..</p>
    <p>Some text..</p>
    <p>About text..</p>
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




const element = <ul>
<li><a class="active" href="#home">主页</a></li>
<li><a href="#news">股票</a></li>
<li><a href="#contact">用户</a></li>
<li><a href="#about">关于</a></li>
</ul>;

service.menu=navside;
service.mainFrame=m;
service.toolBar=navtop;
service.draw();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
