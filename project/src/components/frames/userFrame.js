import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'
import { user } from '../../objects/users.js'

export function UserText(){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>Password Change</h2>
    <form action="">
    Previous password: <br/>
    <input id="ms-pre-pwd" name="Searchname" placeholder="previous password" type="password"></input>
    <br/>
    New password: <br/>
    <input id="ms-new-pwd" name="Searchid" placeholder="new password" type="password"></input>
    <br/>
    Repeated new password: <br/>
    <input id="ms-new-rpt" name="Searchid" placeholder="repeated password" type="password"></input>
    <br/>

    </form>
    <label id="pwd-message"></label>
    <br/>
    <button type="submit"  onClick={change_password}>Submit</button>

  </div>);
}

function change_password(){
  var prevpwd = document.getElementById('ms-pre-pwd');
  var newpwd = document.getElementById('ms-new-pwd');
  var repeated = document.getElementById('ms-new-rpt');
  var msg = document.getElementById('pwd-message');
  if(newpwd.value  !== repeated.value ){
    msg.innerText="repeated password is not correct!";
    newpwd.setAttribute("value","");
    repeated.setAttribute("value","");
    prevpwd.setAttribute("value","");
  }
  else{
    msg.innerText="";
    user.modifyPassword(prevpwd.value, newpwd.value);
  }
}
