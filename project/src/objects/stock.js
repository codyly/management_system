import React from 'react';
import ReactDOM from 'react-dom';

export function Stock(id, name, price, ulm, llm, state){
    this.id = id;
    this.name = name;
    this.price = price;
    this.ulm = ulm;
    this.llm = llm;
    this.state = state;
}
