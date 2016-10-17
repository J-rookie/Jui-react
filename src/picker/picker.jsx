import React from 'react';
import classNames from 'classnames';
import PickerChoose from './picker_choose'

export default class Picker extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  	pickerChoose : false,
	  	values : '',
	  }
  	}	


  	handleClick(){
  		this.setState({pickerChoose : !this.state.pickerChoose})
  	}

  	resultValue(){
  		return this.props.result ? this.props.result : this.PickerValue();
  	}

  	handleChoose(v){
  		
  		this.setState({
  			pickerChoose : !this.state.pickerChoose,
  			values : v
  		})

  	}

  	componentWillMount(){
  		let data = this.props.data,
  			value;
  		if(Array.isArray(data)){
  			for(let i=0;i < data.length ; i++){
  				value+=data[i].choice
  			}
  		}else{
  			value = data.choice
  		}
  		this.setState({values : value});
  	}

	render(){

		const {children, className, data, result, ...others} = this.props;
	
		const cls = classNames({
            'Jui-picker': true,
        }, className);
		
		return (<div className={cls}>
			<div className="Jui-picker-value" onClick={this.handleClick.bind(this)}>{this.state.values}</div>
			{this.state.pickerChoose ? <PickerChoose data={data} cancel={this.handleClick.bind(this)} choose={this.handleChoose.bind(this)}></PickerChoose> : null}
	</div>)
	}
}