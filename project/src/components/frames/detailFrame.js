import React from 'react';
import ReactDOM from 'react-dom';
import { service } from '../main.js';
import { m, s, u, a} from '../../index.js'
import { Stock } from '../../objects/stock.js'
import { user } from '../../objects/users.js'
import { StockText, UpdatePage } from './stockFrame.js';

 export function DetailText(stock){
    
    this.getInstructionList = (id, instructionList) =>{
        var plist = []
        for(var i=0; i< instructionList.length; i++){
            var element = <p id={id+"-"+(i).toString()}>{instructionList[0].print()}</p> 
            plist.push(element)
        }
        return plist;

    }

    this.restorePage = ()=>{
        service.mainFrame = <StockText/>;
        service.draw();
        user.load_all_stock();
        
        // UpdatePage(2);
    }
    
    return (<div class="mainframe"style={{padding:"1px 16px",height:"1000px"}}>
    <h2>{stock.stock_name}</h2>
    <h5>id:{stock.stock_id}, latest_price:{stock.latest_price}</h5>
    <h4>BuyInsts</h4>
    <div id="ms-detailed-buylist">{this.getInstructionList("ms-detailed-buylist", stock.BuyInsts)}</div>
    <h4>SellInsts</h4>
    <div id="ms-detailed-selllist">{this.getInstructionList("ms-detailed-selllist", stock.SellInsts)}</div>
    <button onClick={this.restorePage}>return</button>
  </div>);
}
