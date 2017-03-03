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
      <div className="page-home-header">
        <div className="page-home-title">
          react移动端常用组件&nbsp;V1.0.0
          <span className="notes">(请在mobile查看,部分功能不支持PC)</span>
        </div>
      </div>
    	<Grids data={this.state.components} cols="3" ></Grids>
    </div>)
   }

};