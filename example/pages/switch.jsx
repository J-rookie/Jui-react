"use strict";
import React from 'react'; 
import {Header, Switch, Cell} from '../../src/build';
import classNames from 'classnames';

export default class Home extends React.Component{

	   constructor(props) {
	    super(props);
      this.state={
        v1:true,
        v2:false,
        v3:true,
        v4:false,
      }
  	}

    handleChange(data){
      this.state[data]=!this.state[data]
      this.setState(this.state)
    }

  	render() {
    return (<div className="page-switch">
      <Header arrow="true" center="switch"></Header>

      <div className="cell-padding">
      <Switch checked={this.state.v1} onChange={this.handleChange.bind(this,'v1')}>
        <span style={{margin:'0 10px'}}>{this.state.v1.toString()}</span>
      </Switch>
      </div>

      <div className="cell-padding">
      <Switch checked={this.state.v2} onChange={this.handleChange.bind(this,'v2')}>
        <span style={{margin:'0 10px'}}>{this.state.v2.toString()}</span>
      </Switch>
      </div>

      <Cell title={<span>选项 {this.state.v3.toString()}</span>} vice={<Switch  checked={this.state.v3} onChange={this.handleChange.bind(this,'v3')} ></Switch>} ></Cell>
      <Cell title={<span>选项 {this.state.v4.toString()}</span>} vice={<Switch  checked={this.state.v4} onChange={this.handleChange.bind(this,'v4')} ></Switch>} ></Cell>
    </div>)
   }

};