"use strict";
import React from 'react'; 
import {Header, Check} from '../../src/build';
import classNames from 'classnames';
import checkdata from '../../pagejson/check'

export default class RadioView extends React.Component{

	  constructor(props) {
	    super(props);
      this.state = {
        radiodata:{
          options:checkdata[0].options,
          choose:checkdata[0].choose
        },
        radiodataone:{
          options:checkdata[1].options,
          choose:checkdata[1].choose
        }
      } 
  	}
    
    RadioChoose(e,json){
      let index = json.choose.indexOf(e.target.value)
      if(index >= 0){
        json.choose.splice(index, 1);
      }else{
        json.choose.push(e.target.value)
      }
      this.setState(this.state)
    }

    RadioValue(json){
      let value='';
      for(let i = 0; i< json.options.length;i++){
        let index = json.choose.indexOf(json.options[i].value);
        index>=0?value+='('+json.options[i].value+')'+json.options[i].label:'';
      }
      return value;
    }  

  	render() {

    return (<div className="page-flex page-radio">
      <Header arrow="true" center="check"></Header>
      <div className="page-content">
      <div className="radio-list">
        <div className="radio-head">你喜欢什么样的女生</div>       
        <Check data={this.state.radiodata} RadioChoose={(e)=>{ return this.RadioChoose(e,this.state.radiodata)}}></Check>
        <div className="radio-foot">你选择了{this.RadioValue(this.state.radiodata)}</div>
      </div>
      <div className="radio-list">
        <div className="radio-head">你喜欢什么样的基友</div>       
        <Check data={this.state.radiodataone} RadioChoose={(e)=>{ return this.RadioChoose(e,this.state.radiodataone)}} ></Check>
        <div className="radio-foot">你选择了{this.state.radiodataone.choose}</div>
      </div>
      </div>
    </div>)
   }

};