"use strict";
import React from 'react'; 
import {Header, Cell} from '../../src/build';
import classNames from 'classnames';

export default class SellView extends React.Component{

	   constructor(props) {
	    super(props);
  	}

    handleClick(e){
      e.preventDefault()
      alert('作者帅的不要不要的')
    }

  	render() {
      let data = {
        title:'标题文字',
        icon:<span className='cell-icon'></span>,
        vice:'前头自定义图片'
      }
    return (<div>
      <Header arrow="true" center="cell"></Header>
      <div className='page-cell'>
      <Cell title='跳去百度吧' href='http://www.baidu.com' tap={this.handleClick}></Cell>
      <Cell title='标题文字' vice='副标题'></Cell>
      <Cell title='标题文字' vice='有链接图标' arrow></Cell>
      <Cell title='标题文字' vice={<span style={{color: '#419EFE'}} >这里是自定义元素</span>} arrow></Cell>
      <Cell data={data}></Cell>
      <Cell title='自定义事件' tap={this.handleClick}></Cell>
      </div>
      <div className='page-cell'>
        <Cell title='单独一块'></Cell>
      </div>
    </div>)
   }

};