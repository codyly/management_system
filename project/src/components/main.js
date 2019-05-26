import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';



export class main{

  constructor(_mainFrame, _toolBar, _menu){
    this._mainFrame = _mainFrame;
    this._toolBar = _toolBar;
    this._menu = _menu;
  }

  set mainFrame(_mainFrame){
    this._mainFrame = _mainFrame;
  }

  get mainFrame(){
    return this._mainFrame;
  }

  set toolBar(_toolBar){
    this._toolBar = _toolBar;
  }

  get toolBar(){
    return this._toolBar;
  }

  set menu(_menu){
    this._menu = _menu;
  }

  get menu(){
    return this._menu;
  }

  draw(){
    const main_element = (
      <div class="ms-container">
        <div id="ms-toolBar">{this._toolBar}}</div>
        <div id="ms-menu-mainFrame-container">
          <div id="ms-menu">
            {this._menu}
          </div>
          <div id="ms-mainFrame">
            {this._mainFrame}
          </div>
        </div>
      </div>
    );
    ReactDOM.render(main_element, document.getElementById('root'));
  }
}

var service = new main();

export var service;
