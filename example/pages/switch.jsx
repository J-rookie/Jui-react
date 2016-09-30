"use strict";
import React from 'react'; 
import {Header, Switch} from '../../src/build';
import classNames from 'classnames';

export default class Home extends React.Component{

	   constructor(props) {
	    super(props);
  	}

    handleChange(){
      console.log(this)
    }

  	render() {
    return (<div className="page-switch">
      <Header arrow="true" center="switch"></Header>

      <div className="cell-padding">
      <Switch checked="false">
        <label>true</label>
      </Switch>
      </div>

      <div className="cell-padding">
      <Switch>
        <label>false</label>
      </Switch>
      </div>
    </div>)
   }

};