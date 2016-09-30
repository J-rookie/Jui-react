"use strict";
import React from 'react'; 
import {Grids,Header} from '../../src/build';
import classNames from 'classnames';
import gridsdata from '../../pagejson/grids'

let GridsDataOne=[];
for(let v of gridsdata[0]) {
  let data = {
    label: v.title,
    href: v.links
  }
  GridsDataOne.push(data);
}

let GridsDataTwo=[];
for(let v of gridsdata[1]) {
  let data = {
  	icon:<img src={v.image}/>,
    label: v.title,
    href: v.links
  }
  GridsDataTwo.push(data);
}
export default class Home extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      componentsOne:GridsDataOne,
	      componentsTwo:GridsDataTwo
	    };
  	}

  	render() {
    return (
    <div className="page-grids">

    <Header arrow="true" center="grids"></Header>

    <div className="page-grids-box">
    <div className="page-grids-title">等分网格有边框</div>
        <Grids data={this.state.componentsOne} cols="3"></Grids>
    </div>

    <div className="page-grids-box">
    <div className="page-grids-title">等分网格无边框</div>
        <Grids data={this.state.componentsOne} cols="3"  border="false"></Grids>
    </div>

    <div className="page-grids-box">
    <div className="page-grids-title">等分网格有图标有边框</div>
         <Grids data={this.state.componentsTwo} cols="3"></Grids>
    </div>

    <div className="page-grids-box">
    <div className="page-grids-title">等分网格有图标无边框</div>
         <Grids data={this.state.componentsTwo} cols="3"  border="false"></Grids>
    </div>
    	
      </div>
    )
   }

};