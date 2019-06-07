import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'
import { Stock } from '../../objects/stock.js'
import { user } from '../../objects/users.js'
import { StockText, UpdatePage } from './stockFrame.js';
import { MainText } from './mainFrame.js';
import SiderDemo from '../mainLayout.js';

function getInstructionList(id, instructionList){
    var plist = []
    for(var i=0; i< instructionList.length; i++){
        var element = <p id={id+"-"+(i).toString()}>{instructionList[0].print()}</p> 
        plist.push(element)
    }
    return plist;

}

function restorePage(){
    ReactDOM.render(<SiderDemo user={user} directTo="/stock"/> , document.getElementById('root'));
}

 export class DetailText extends React.Component{
    render() {return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>{user.tmpStock.stock_name}</h2>
    <h5>id:{user.tmpStock.stock_id}, latest_price:{user.tmpStock.latest_price}</h5>
    <h4>BuyInsts</h4>
    <div id="ms-detailed-buylist">{getInstructionList("ms-detailed-buylist",user.tmpStock.BuyInsts)}</div>
    <h4>SellInsts</h4>
    <div id="ms-detailed-selllist">{getInstructionList("ms-detailed-selllist",user.tmpStock.SellInsts)}</div>
    <button onClick={restorePage}>return</button>
  </div>);
  }
}
