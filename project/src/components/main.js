import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import { user } from '../objects/users.js';
import { STATE_LOGIN }  from '../globals.js'
import { m, s, u, a } from '../index.js'
import {Top} from './toolbar.js'
import {Side} from './menu.js'
import {MainText} from './frames/mainFrame.js'

var not_login_flushed = 0;


export function main(mainFrame, toolBar, menu){
  this.mainFrame = mainFrame;
  this.toolBar = toolBar;
  this.menu = menu;

  this.draw = () =>{
    this.flush();
    const main_element = (
      <div class="ms-container">
        <div id="ms-toolBar">{this.toolBar}}</div>
        <div id="ms-menu-mainFrame-container">
          <div id="ms-menu">
            {this.menu}
          </div>
          <div id="ms-mainFrame">
            {this.mainFrame}
          </div>
        </div>
      </div>
    );
    ReactDOM.render(main_element, document.getElementById('root'));
  }

  this.flush = ()=>{
    if(user.state !== STATE_LOGIN){
      not_login_flushed = 0; 
      this.mainFrame = <h1>Not logged in!</h1>;
    }
    else if(not_login_flushed === 0){
      this.mainFrame = <MainText />;
      not_login_flushed = 1;
    }
    this.menu=<Side />;
    this.toolBar=<Top />;
  }
}

var service = new main();

export var service;
