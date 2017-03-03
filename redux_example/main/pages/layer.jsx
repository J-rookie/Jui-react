"use strict";
import React from 'react'; 
import {Header, Layer} from '../../src/build';
import classNames from 'classnames';

export default class SearchForm extends React.Component{

	   constructor(props) {
	    super(props);
      this.state = {
        msg : false,
        alert : false,
        loading : false,
        confirm : false,
        message : <span>我的天哪，好帅的作者!</span>,
        confirmText : <span>这是一个美丽的弹窗<br/>你觉得呢？</span>
      }
  	}

    handleMsg(){
      this.setState({msg:true});
      setTimeout(()=>{
        this.setState({msg:false});
      },1000)
    }
    handleAlert(){
      this.setState({alert:!this.state.alert});
    }
    handleLoad(){
      this.setState({loading:true});
       setTimeout(()=>{
        this.setState({loading:false});
      },3000)
    }
    handleConfirm(){
      this.setState({confirm:!this.state.confirm});
    }

  	render() {
    return (<div>
      <Header arrow="true" center="layer"></Header>
      <div className="page-layer">
        <nav className="list">
          <a onClick={this.handleMsg.bind(this)}>message</a>
          <a onClick={this.handleAlert.bind(this)}>alert</a>
          <a onClick={this.handleLoad.bind(this)}>loading</a>
          <a onClick={this.handleConfirm.bind(this)}>confirm</a>
        </nav>
      </div>
      {this.state.msg ? <Layer type='msg'>{this.state.message}</Layer> : null}
      {this.state.alert ?<Layer type='alert' handleClick={this.handleAlert.bind(this)}>{this.state.message}</Layer> : null}
      {this.state.loading ?<Layer type='loading' icon='3'/> : null}
      {this.state.confirm ?<Layer type='confirm' cancel={this.handleConfirm.bind(this)} sucess={this.handleConfirm.bind(this)}>{this.state.confirmText}</Layer> : null}
    </div>)
   }

};