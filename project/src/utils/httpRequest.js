import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../components/main.js';

export function URLParam(url, name, value) {
  url += (url.indexOf('?') == -1 ) ? '?' : '&' ;
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);

  return url;
}


export function postDataFormat(obj){
    if(typeof obj != "object" ) {
        alert("输入的参数必须是对象");
        return;
    }
    if(typeof FormData == "function") {
        var data = new FormData();
        for(var attr in obj) {
            data.append(attr,obj[attr]);
        }
        return data;
    }else {
        var arr = new Array();
        var i = 0;
        for(var attr in obj) {
            arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
            i++;
        }
        return arr.join("&");
    }
}


export function GETRequest(url, callback){
    var req =new XMLHttpRequest();
    req.open("GET", url, true);
    req.send(null);
    req.onreadystatechange=(e)=>{
      if (req.readyState === 4) {
        var str = JSON.parse(req.responseText);
        var name = str[0];
        callback(str);
      }
    }
}

export function POSTRquest(url, data, callback){
  var req =new XMLHttpRequest();
  req.open("post", url, true);
  if(typeof FormData == "undefined") {
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  req.send(postDataFormat(data));
  req.onreadystatechange=(e)=>{
    if (req.readyState === 4) {
      var str = JSON.parse(req.responseText);
      var name = str[0];
      callback(str);
    }
  }
}
