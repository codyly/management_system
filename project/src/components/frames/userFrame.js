import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'
import { user } from '../../objects/users.js'
import { Row,Col,Carousel,Button, Card,Input } from 'antd';
import photo3 from './3.jpg'
const Search=Input.Search;

export function UserText(){
    return (<div class="mainframe"style={{height:"1000px",background:"rgba(240,242,245)"}}>
<br/><br/><br/>
    <div className="gutter-example" style={{marginLeft:"40px",marginRight:"40px"}}>
    <div>
      <img  src={photo3} class="initImg coverImg"></img>
    </div>
    </div>

    <div><br/></div>
<div className="gutter-example" style={{marginLeft:"40px",marginRight:"40px"}}>
<Card  title="修改密码" bordered={false}>
    <Row>
        <Col span={1}>
        </Col>
        <Col span={2}>
            <label for="ms-pre-pwd">Previous password:</label>
        </Col>
        <Col span={21}>
        <Input id='ms-pre-pwd' placeholder="previous password"  size="large" />
        </Col>
    </Row>
      <br/><br/>
      <Row>
        <Col span={1}>
        </Col>
        <Col span={2}>
            <label for="ms-new-pwd">New password:</label>
        </Col>
        <Col span={21}>
        <Input id='ms-new-pwd' placeholder="new password"  size="large" />
        </Col>
    </Row>
      <br/><br/>
      <Row>
        <Col span={1}>
        </Col>
        <Col span={2}>
            <label for="ms-new-rpt">New password:</label>
        </Col>
        <Col span={21}>
        <Input id='ms-new-rpt' placeholder="repeated password"  size="large" />
        </Col>
    </Row>
      <br/><br/>
    <Row>
      <Col span={1}></Col>
      <Col>
      <Button type='primary' onClick={change_password}>Submit</Button>
      </Col>
      </Row>
      </Card>

      </div>




    {/*
    <h2 class="text-center">Password Change</h2>
    <form action="">
    <label for="ms-pre-pwd" class="col-md-2 control-label">Previous password:</label>
    <input id="ms-pre-pwd" class="form-control" name="Searchname" placeholder="previous password" type="password"></input>
    <br/>
    <label for="ms-new-pwd" class="col-md-2 control-label">New password:</label>
    <input id="ms-new-pwd" class="form-control" name="Searchid" placeholder="new password" type="password"></input>
    <br/>
    <label for="ms-new-rpt" class="col-md-2 control-label">New password:</label>
    <input id="ms-new-rpt" class="form-control" name="Searchid" placeholder="repeated password" type="password"></input>
    <br/>

    </form>
    <label id="pwd-message"></label>
    <br/>
    <button type="submit"  class="btn btn-default" onClick={change_password}>Submit</button>*/}

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
