"use strict";
import React from 'react'; 
import {Grids} from '../../src/build';
import classNames from 'classnames';
import homedata from '../../pagejson/home'

//console.log(JSON.stringify(homedata));
let GridsData=[];
for(let v of homedata) {
  let data = {
    icon: <img src={v.image}/>,
    label: v.title,
    href: v.links
  }
  GridsData.push(data);
}
export default class Home extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      components:GridsData
	    };
  	}
  	render() {
    return (<div className="page-home">
    	<Grids data={this.state.components} />
    </div>)
   }

};