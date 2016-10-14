import React from 'react';
import classNames from 'classnames';
import ActionsheetValue from './actionsheet_value';
import ActionsheetOption from './actionsheet_options';

export default class Actionsheet extends React.Component{
	constructor(props) {
	  super(props);
	  const {data} = this.props;
		  this.state = {
		  	choice : false,
		  	label : data.choice.label,
		  	value :data.choice.value,
		  }
  	}	

  	handleClick(){
  		this.setState({choice : true});
  	}

  	handleChoice(e){
  		this.setState({
  			choice : false,
  			label : e.target.innerText,
  			value : e.target.getAttribute('value')
  		});		
  	}

  	handleCloce(){
  		this.setState({choice : false});
  	}

  	componentDidUpdate(){
  		typeof this.props.handleUseValue == 'function' ? this.props.handleUseValue(this.state) : '' ;
  	}

	render(){

		const {children, className, data, close, ...others} = this.props;

		const cls = classNames({
            'Jui-actionsheet': className?false:true,
        }, className);

		return (<div className={cls}>
			<ActionsheetValue onClick={this.handleClick.bind(this)} value={this.state.label}></ActionsheetValue>
			{this.state.choice ? <ActionsheetOption data={data.options} choice={this.handleChoice.bind(this)} close={this.handleCloce.bind(this)} closeSwitch={close}></ActionsheetOption>:''}
		</div>)
	}
}