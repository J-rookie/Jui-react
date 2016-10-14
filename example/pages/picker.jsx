"use strict";
import React from 'react'; 
import {Header, Picker} from '../../src/build';
import classNames from 'classnames';
import PickerData from '../../pagejson/picker';

export default class SearchForm extends React.Component{

	   constructor(props) {
	    super(props);
  	}

  	render() {
    return (<div className="page-picker">
      <Header arrow="true" center="picker"></Header>
      <div className="content"> 
      <Picker data={PickerData}></Picker>
      </div>
    </div>)
   }

};