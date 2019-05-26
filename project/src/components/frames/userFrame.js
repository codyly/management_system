import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'

export function UserText(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>Password Change</h2>
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
