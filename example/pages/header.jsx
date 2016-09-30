"use strict";
import React from 'react'; 
import {Header} from '../../src/build';
import classNames from 'classnames';

let back1 = function(){
      alert("点我干嘛，我也不会返回给你看的")
    }

let Headerdata = {
  center:'完整版自定义背景颜色',
  left:<div onClick={back1}><span>左侧</span></div>,
  right:<div onClick={back1}><span>右侧</span></div>
}

export default class HeadTop extends React.Component{

	 constructor(props) {
	    super(props);
  	}

    back(){
      alert("点我干嘛，我是不会返回给你看的")
    }

  	render() {
    return (<div className="page-header">   

    <Header center="自定义颜色及自带返回" arrow="true" color="#f18a2f"></Header>
    <div className="page-header-interval"></div>

    <Header center="这是一个很长很长的标题这是一个很长很长的标题"></Header>
    <div className="page-header-interval"></div>
    

    <Header data={Headerdata} color="#f6194d"></Header>
    <div className="page-header-interval"></div>   
    
    <Header center="自带返回及自定义左侧" left={<div onClick={this.back}><span>返回</span></div>}></Header>
    <div className="page-header-interval"></div>

    <Header center="自定义左侧" color="#51c448" left={<div className='btn-box' onClick={this.back}><div className='left-btn'></div><span>(⊙o⊙)</span></div>}></Header>
    <div className="page-header-interval"></div>

    <Header center="只有右侧" right={<div onClick={this.back}><span>返回</span></div>}></Header>
    </div>)
   }

};