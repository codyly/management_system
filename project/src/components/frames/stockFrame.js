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
