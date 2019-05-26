import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'

export function StockText(){
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
    <td>涨幅  <button onClick={modify}>修改</button></td>
    <td>跌幅  <button onClick={modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    <tr class="alt">
    <td>中国宝安</td>
    <td>5.70</td>
    <td>5.77</td>
    <td>6.40</td>
    <td>涨幅  <button onClick={modify}>修改</button></td>
    <td>跌幅  <button onClick={modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    <tr>
    <td>Google</td>
    <td>Larry Page</td>
    <td>USA</td>
    <td>China</td>
    <td>涨幅  <button onClick={modify}>修改</button></td>
    <td>跌幅  <button onClick={modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    <tr class="alt">
    <td>Lenovo</td>
    <td>Liu Chuanzhi</td>
    <td>China</td>
    <td>China</td>
    <td>涨幅  <button onClick={modify}>修改</button></td>
    <td>跌幅  <button onClick={modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    <tr>
    <td>Microsoft</td>
    <td>Bill Gates</td>
    <td>USA</td>
    <td>China</td>
    <td>涨幅  <button onClick={modify}>修改</button></td>
    <td>跌幅  <button onClick={modify}>修改</button></td>
    <td><button onClick={stop}>中止交易</button></td>
    <td><button onClick={restart}>重启交易</button></td>
    </tr>
    <tr class="alt">
    <td>Nokia</td>
    <td>Stephen Elop</td>
    <td>Finland</td>
    <td>China</td>
    <td>涨幅  <button onClick={modify}>修改</button></td>
    <td>跌幅  <button onClick={modify}>修改</button></td>
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

function restart(){
    alert("restart");
}
function stop(){
    alert("stop");
}
function modify(){
    prompt("输入数值")
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
    btnmodify.onclick=modify;
    upCell.append(btnmodify)
    var lowCell = document.createElement('td');//创建第三列low
    lowCell.innerHTML = s.low+' '; 
    row.appendChild(lowCell); 
    var btnmodify = document.createElement('button'); 
    btnmodify.innerHTML='修改';
    //删除操作 
    btnmodify.onclick=modify;
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