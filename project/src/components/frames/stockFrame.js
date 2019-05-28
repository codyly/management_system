import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'
import Button from 'react-bootstrap/Button';
import { user } from '../../objects/users.js';

export class StockText extends React.Component{

    componentDidMount() {
        Onload();
        //Unload();
    }

    render(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>Fixed Full-height Side Nav</h2>
    <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
    <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
    <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
    <table id="stocktable">
    <tbody>
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
    </tbody>
    </table>
    <br/>
    <div id="pagediv">
    <ul class="pagination" >
    <li><a class="inactive" href="#" id="pre" onClick={Pagechange.bind(this,0)}>«</a></li>
    <li><a class="active" href="#" id="first" onClick={Pagechange.bind(this,1)}>1</a></li>
    <li><a class="inactive" href="#" id="second" onClick={Pagechange.bind(this,2)}>2</a></li>
    <li><a class="inactive" href="#" id="third" onClick={Pagechange.bind(this,3)}>3</a></li>
    <li><a class="inactive" href="#" id="forth" onClick={Pagechange.bind(this,4)}>4</a></li>
    <li><a class="inactive" href="#" id="fifth" onClick={Pagechange.bind(this,5)}>5</a></li>
    <li><a class="inactive" href="#" id="sixth" onClick={Pagechange.bind(this,6)}>6</a></li>
    <li><a class="inactive" href="#" id="seventh" onClick={Pagechange.bind(this,7)}>7</a></li>
    <li><a class="inactive" href="#" id="next" onClick={Pagechange.bind(this,8)}>»</a></li>
    </ul>
    </div>
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
  </div>);}
}

function restart(id,event){
    var row=document.getElementById(id);
    if(row.childNodes[3].innerHTML=='on')
    {
        alert('Error : It is on now' );
    }
    else
    {
        row.childNodes[3].innerHTML='on';
        alert('restart success');
    }

}
function stop(id,event){
    var row=document.getElementById(id);
    if(row.childNodes[3].innerHTML=='off')
    {
        alert('Error : It is off now' );
    }
    else
    {
        row.childNodes[3].innerHTML='off';
        alert('stop success');
    }

}
function modify(id,type,num,event){
    var v=prompt("输入数值");
    var row=document.getElementById(id);
    console.log(row);
    var id = row.childNodes[1].innerText;
    if(type=='up')
    {
        if(v===null){
            v = row.childNodes[4].childNodes[0].innerHTML;
        }
        row.childNodes[4].childNodes[0].innerHTML=v+' ';
        modify_limit(id, parseFloat(v), parseFloat(row.childNodes[5].childNodes[0].innerHTML));
        
    }
    else if(type=='low')
    {
        if(v===null){
            v = row.childNodes[5].childNodes[0].innerHTML;
        }
        row.childNodes[5].childNodes[0].innerHTML=v+' ';
        modify_limit(id, parseFloat(row.childNodes[4].childNodes[0].innerHTML), parseFloat(v))
    }
    else if(type=="start")
    {
        modify_state(id, 1);
    }
    else if(type=="stop")
    {
        modify_state(id, 0);
    }
}

function Pagechange(i,type,event){  
    

}

function getDataRow(s,i){ 
    var row = document.createElement('tr'); //创建行 
    (i%2)==0?row.setAttribute('class','alt'):row.setAttribute('class','noalt');
    row.setAttribute('id','stockrow'+i);
    var nameCell = document.createElement('td'); //创建第一列name
    nameCell.innerHTML = s.name; //填充数据 
    row.appendChild(nameCell); //加入行 ，下面类似 
    var idCell = document.createElement('td');//创建第二列id
    idCell.innerHTML = s.id; 
    row.appendChild(idCell); 
    var priceCell = document.createElement('td');//创建第3列price
    priceCell.innerHTML = s.price; 
    row.appendChild(priceCell); 
    var stateCell = document.createElement('td');//创建第4列state
    stateCell.innerHTML = s.state; 
    row.appendChild(stateCell); 
    var upCell = document.createElement('td');//创建第5列up
    var celltext=document.createElement('span');
    celltext.innerHTML = s.up+' '; 
    upCell.appendChild(celltext);
    row.appendChild(upCell); 
    var btnmodify = document.createElement('button'); 
    btnmodify.setAttribute('id',i);
    btnmodify.innerHTML='修改';
    //删除操作 
    btnmodify.onclick=modify.bind(this,'stockrow'+i,'up', i);
    upCell.append(btnmodify)
    var lowCell = document.createElement('td');//6 low
    var celltext=document.createElement('span');
    celltext.innerHTML = s.low+' '; 
    lowCell.appendChild(celltext);
    row.appendChild(lowCell); 
    var btnmodify = document.createElement('button'); 
    btnmodify.setAttribute('id',i);
    btnmodify.innerHTML='修改';
    //删除操作 
    btnmodify.onclick=modify.bind(this,'stockrow'+i,'low', i);
    lowCell.append(btnmodify)
    //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮 
    var btnCell = document.createElement('td');//创建第四列，操作列 
    row.appendChild(btnCell); 
    var btnstop = document.createElement('button'); //7 stop
    btnmodify.setAttribute('id',i);
    btnstop.innerHTML='中止交易';
    //btnstop.setAttribute('value','中止交易'); 
    //删除操作 
    btnstop.onclick=stop.bind(this,'stockrow'+i,'stop',i);
    btnCell.appendChild(btnstop); //把删除按钮加入td，别忘了 
    var btnCell = document.createElement('td');//创建第四列，操作列 
    row.appendChild(btnCell); 
    var btnre = document.createElement('button'); 
    btnmodify.setAttribute('id',i);
    //btnre.setAttribute('value','重启交易'); 
    btnre.innerHTML='重启交易';//8 restart
    //删除操作 
    btnre.onclick=restart.bind(this,'stockrow'+i,'start', i);
    btnCell.appendChild(btnre); //把删除按钮加入td，别忘了 
    return row; //返回tr数据   
}

    function Onload(){ 
        var per = [ 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'apple',id:'003',price:'56.14',state:'off',up:'200',low:'0'},
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'apple',id:'003',price:'56.14',state:'off',up:'200',low:'0'},
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'apple',id:'003',price:'56.14',state:'off',up:'200',low:'0'},
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'}, 
            {name:'huawei',id:'001',price:'10.23',state:'on',up:'100',low:'0'}, 
            {name:'sumsung',id:'002',price:'1.24',state:'on',up:'100',low:'0'} 
            ]; 
         var tbody = document.getElementById('stocktable'); 
         for(var i = 0;i < per.length; i++){ //遍历一下json数据 
           var trow = getDataRow(per[i],i); //定义一个方法,返回tr数据 
           tbody.appendChild(trow); 
        }
        }

    function Unload(){ 
        var tbody = document.getElementById('stocktable'); 
        var childs = tbody.childNodes; 
        for(var i = childs .length - 1; i >= 1; i--) {
        tbody.removeChild(childs[i]);
        }
    }

    function modify_limit(id, upper, lower){
        user.modify_limit(id, upper, lower);
    }

    function modify_state(id, state){
        user.modify_state(id, state);
    }



