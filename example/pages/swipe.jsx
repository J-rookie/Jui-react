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
      this.state={
        navlist:["默认值","自动播放","分页符","自动播放显示分页符"],
        current:0,
        loop:false,
        pagination:false
      }
  	}

    handleClick(index){
      switch(index){
        case 0:
        this.setState({current:index,loop:false,pagination:false});
        break;
        case 1:
        this.setState({current:index,loop:true,pagination:false});
        break;
        case 2:
        this.setState({current:index,loop:false,pagination:true});
        break;
        case 3:
        this.setState({current:index,loop:true,pagination:true});
        break;
        default:
        break;
      }
    }

  	render() {
    return (<div className="page-swipe">
         <Header arrow="true" center="swipe"></Header>
         <Swipe data={SwipeData} loop={this.state.loop} pagination={this.state.pagination}></Swipe>
         <nav className="list">
         {
            this.state.navlist.map((v,i)=>{
              return <a className={i==this.state.current?'active':''} key={i} onClick={ () => { this.handleClick(i) } } >{v}</a>
            })
         }
        </nav>
    </div>)
   }

};