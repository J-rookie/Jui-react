"use strict";
import React from 'react'; 
import {Header, Toast} from '../../src/build';
import classNames from 'classnames';

export default class SearchForm extends React.Component{

	   constructor(props) {
	    super(props);
      this.state = {
        toast:false,
        data:{
          image:'./example/temp/true.png',
          text:'我是消息'
        }
      }
  	}

    handleClick(i){
      if(this.state.toast){
         return false;
      }
      
      switch(i){
        case 0:
        this.state.data = {
          image:'none',
          text:'作者太帅'
        }
        this.state.position = undefined;
        this.state.toast = true;
        break;
        case 1:
        this.state.data = {
          image:'./example/temp/true.png',
          text:'我是消息'
        }
        this.state.position = undefined;
        this.state.toast = true;
        break;
        case 2:
        this.state.data = {
          image:'./example/temp/loading.gif',
          text:''
        }
        this.state.position = undefined;
        this.state.toast = true;
        break;
        case 3:
        this.state.data = {
          image:'none',
          text:'信息文本'
        }
        this.state.position = 'top';
        this.state.toast = true;
        break;
        case 4:
        this.state.data = {
          image:'none',
          text:'信息文本'
        }
        this.state.position = 'center';
        this.state.toast = true;
        break;
        case 5:
        this.state.data = {
          image:'none',
          text:'信息文本'
        }
        this.state.position = 'bottom';
        this.state.toast = true;
        break;
        default:
        break;
      }
      this.setState(this.state)
      setTimeout(()=>{
        this.setState({toast:false})
      },2000)
    }

  	render() {
    return (<div>
      <Header arrow="true" center="toast"></Header>
      <div className="page-toast">
        <nav className="list">
          <a onClick={this.handleClick.bind(this,0)}>文字提示</a>
          <a onClick={this.handleClick.bind(this,1)}>图文提示</a>
          <a onClick={this.handleClick.bind(this,2)}>图片提示</a>
        </nav>
        <nav className="list">
          <a onClick={this.handleClick.bind(this,3)}>top</a>
          <a onClick={this.handleClick.bind(this,4)}>center</a>
          <a onClick={this.handleClick.bind(this,5)}>bottom</a>
        </nav>
     </div>
     {this.state.toast?<Toast data={this.state.data} position={this.state.position}></Toast>:null}
    </div>)
   }

};