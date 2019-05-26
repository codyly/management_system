import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'

export function UserText(){
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
