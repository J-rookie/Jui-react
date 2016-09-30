"use strict";
import React from 'react'; 
import {Header, Swipe} from '../../src/build';
import classNames from 'classnames';
import SwipeJson from '../../pagejson/swipe';

let SwipeData = [];
for(let item of SwipeJson){
  let data = {
    slide:<img src={item.image} />,
    href:item.link,
  }
  SwipeData.push(data);
}

export default class Home extends React.Component{

	   constructor(props) {
	    super(props);
  	}

  	render() {
    return (<div className="page-swipe">
         <Header arrow="true" center="swipe"></Header>
         <Swipe data={SwipeData}></Swipe>
         <nav className="list">
            <a>默认值</a>
            <a>自动播放</a>
            <a>分页符</a>
            <a>自动播放显示分页符</a>
        </nav>
    </div>)
   }

};