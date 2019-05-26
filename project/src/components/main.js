import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';



export function main(mainFrame, toolBar, menu){
  this.mainFrame = mainFrame;
  this.toolBar = toolBar;
  this.menu = menu;

  this.draw = () =>{
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
}

var service = new main();

export var service;
