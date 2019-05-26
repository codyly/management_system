import React from 'react';
import ReactDOM from 'react-dom';


export class Stock{
  constructor(_id, _name, _price, _ulm, _llm, _state){
    this._id = _id;
    this._name = _name;
    this._price = _price;
    this._ulm = _ulm;
    this._llm = _llm;
    this._state = _state;
  }

  set id(_id){
    this._id = _id;
  }

  get id(){
    return this._id;
  }

  set name(_name){
    this._name = _name;
  }

  get name(){
    return this._name;
  }

  set ulm(_ulm){
    this._ulm = _ulm;
  }

  get ulm(){
    return this._ulm;
  }

  set llm(_llm){
    this._llm = _llm;
  }

  get llm(){
    return this._llm;
  }

  set state(_state){
    this._state = _state;
  }

  get state(){
    return this._state;
  }

}
