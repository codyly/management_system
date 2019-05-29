import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js';
import { user } from '../../objects/users.js';
import { STATE_LOGIN } from '../../globals.js';

export function MainText () {
  if(user.state == STATE_LOGIN){
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
        <h2>Welcome {user.name}! </h2>
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
  else{
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
      <h2 class="text-center">Log in</h2>
      <form action="">
      <label for="ms-username" class="col-md-2 control-label">User-name</label>
      <input id="ms-username" class="form-control" name="ms-username" placeholder="enter username" type="text"></input>
      <br/>
      <label for="ms-passwd" class="col-md-2 control-label">Password</label>
      <input id="ms-passwd" class="form-control" name="ms-passwd" placeholder="enter password" type="password"></input>
      <br/>
      <input id="ms-rem-passwd" name="ms-rem-passwd" type="checkbox"></input><label>Remember Password</label>
      <br/>
      <input id="ms-auto-login" name="ms-auto-login" type="checkbox"></input><label>Auto Login</label>
      </form>
      <label id="login-message"></label>
      <br/>
      <button type="submit" class="btn btn-default" onClick={login}>Submit</button>

    </div>);
  }
};

export function login(){
  var userName = document.getElementById('ms-username').value;
  var passwd = document.getElementById('ms-passwd').value;
  user.name = userName;
  user.login(passwd);
}
