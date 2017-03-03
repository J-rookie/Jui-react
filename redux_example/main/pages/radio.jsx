"use strict";
import React from 'react'; 
import {Header, Radio} from '../../src/build';
import classNames from 'classnames';
import radiodata from '../../pagejson/radio'

export default class RadioView extends React.Component{

	  constructor(props) {
	    super(props);
      this.state = {
        radiodata:{
          options:radiodata[0].options,
          choose:radiodata[0].choose
        },
        radiodataone:{
          options:radiodata[1].options,
          choose:radiodata[1].choose
        }
      } 
  	}
    
    RadioChoose(e,json){
      json.choose = e.target.value;
      this.setState(this.state)
    }

    RadioValue(json){
      let value='什么也不干';
      for(let i = 0; i< json.options.length;i++){
        if(json.options[i].value==json.choose){
          value = '('+json.options[i].value+')'+json.options[i].label;
          break;
        }
      }
      return value;
    }  

  	render() {

    return (<div className="page-flex page-radio">
      <Header arrow="true" center="radio"></Header>
      <div className="page-content">
      <div className="radio-list">
        <div className="radio-head">你喜欢什么样的女生</div>       
        <Radio data={this.state.radiodata} RadioChoose={(e)=>{ return this.RadioChoose(e,this.state.radiodata)}}></Radio>
        <div className="radio-foot">你选择了{this.RadioValue(this.state.radiodata)}</div>
      </div>
      <div className="radio-list">
        <div className="radio-head">你喜欢什么样的基友</div>       
        <Radio data={this.state.radiodataone} RadioChoose={(e)=>{ return this.RadioChoose(e,this.state.radiodataone)}} ></Radio>
        <div className="radio-foot">你选择了{this.state.radiodataone.choose}</div>
      </div>
      </div>
    </div>)
   }

};