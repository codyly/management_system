import React from 'react';
import ReactDOM from 'react-dom';

export function Cookie(){
  this.setCookie=(name, value, expired)=>{
    var d = new Date();
    d.setTime(d.getTime() + expired*24*60*60*1000);
    var expires = "expires="+d.toUTCString();
    document.cookie = name+"="+";" + expires + ";path=/";
  }
  this.getCookie=(cname) =>{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
  }
  this.checkCookie=() => {
    var username = this.getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            this.setCookie("username", username, 365);
        }
    }
  }
}
