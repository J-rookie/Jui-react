import React from 'react';
import classNames from 'classnames';

export default class Search extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  	activation:false,
	  	value:'',
	  }
  	}

  	handleFocus(){
 		this.setState({
 			activation : !this.state.activation
 		})
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(result){
  		if(this.state.activation){
  			this.setState({
	 			activation : false
	 		})
	  		result ? result(this.state.value) : '' ;
  		}else{
  			this.setState({
	 			activation : !this.state.activation
	 		})
  		}
  	}

	render(){

		const {children, className, result, ...others} = this.props;
	
		const cls = classNames({
            'Jui-search-parts': true,
            'activation':this.state.activation
        }, className);

		return (<div className={cls}>
			<div className='Jui-search'>
				<input className='Jui-search-input' value={this.state.value} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} type='text' />
				<button className='Jui-search-submit' onClick={()=>{this.handleSubmit(result)}}></button>
				<div className="Jui-search-close" onClick={this.handleFocus.bind(this)} >取消</div>
			</div>
	</div>)
	}
}