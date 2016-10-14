"use strict";
import React from 'react'; 
import {Header, Actionsheet} from '../../src/build';
import classNames from 'classnames';
import actionsheetdata from '../../pagejson/actionsheet'

export default class SearchForm extends React.Component{

	   constructor(props) {
	    super(props);
      this.state = {
        v1:'',
        v2:'',
        v3:'',
        v4:'',
      }
  	}

    handleUseValue(e,value){
      this.state[e] = value.value;
      console.log("现在state为"+JSON.stringify(this.state))
    }

  	render() {
    return (<div className="page-actionsheet">
      <Header arrow="true" center="actionsheet"></Header>
      <div className="content">
        <Actionsheet data={actionsheetdata[0]} handleUseValue={this.handleUseValue.bind(this,['v1'])} ></Actionsheet>
        <div className="page-interval"></div>
        <Actionsheet className='select' data={actionsheetdata[1]} close={false} handleUseValue={this.handleUseValue.bind(this,['v2'])}></Actionsheet>
        <div className="page-interval"></div>
        <Actionsheet data={actionsheetdata[2]} handleUseValue={this.handleUseValue.bind(this,['v3'])}></Actionsheet>
        <div className="page-interval"></div>
        <Actionsheet className='select' data={actionsheetdata[3]} close={false} handleUseValue={this.handleUseValue.bind(this,['v4'])}></Actionsheet>
      </div>   
    </div>)
   }

};