"use strict";
import React from 'react'; 
import {Header, Search} from '../../src/build';
import classNames from 'classnames';

export default class SearchForm extends React.Component{

	   constructor(props) {
	    super(props);
  	}

    searchresult(v){
      alert('你输入了'+v)
    }

  	render() {
    return (<div className="page-search">
      <Header arrow="true" center="search"></Header>
      <div className="search">
      <div className="page-interval"></div>
      <Search result={this.searchresult}></Search>
      <div className="page-interval"></div>
      <Search className="pinksearch"></Search>
      </div>
    </div>)
   }

};