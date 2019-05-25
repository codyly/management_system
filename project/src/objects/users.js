import React from 'react';
import ReactDOM from 'react-dom';

export class AdminUser {
  constructor(_name, _auth, _state) {
        this._name = _name;
        this._auth = _auth;
        this._state = _state;
    }
    get name() {
        return this._name;
    }
    set name(_name) {
        this._name = _name;
    }
};
