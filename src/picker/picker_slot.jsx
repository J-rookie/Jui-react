import React from 'react';
import classNames from 'classnames';
import JuiPicker from '../lib/JuiPicker'

export default class PickerSelect extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  	selected : this.props.data.options.indexOf(this.props.data.choice),
	  	value : this.props.data.choice,
	  }
  	}	

  	options(data){
  		return data.options.map((v,i)=>{
  			return <a className={this.state.selected==i?'selected':null} key={i}>{v}</a>
  		})
  	}

  	setData(i,v){
  		this.setState({
  			selected:i,
  			value:v,
  		})
  		this.props.getValues(v);
  	}

  	componentDidMount(){
  		let JuiEvent = new JuiPicker(this.refs.PickerSolt,this.state.selected,this.setData.bind(this));
          JuiEvent.init();
  	}

	render(){

		const {children, className, data, ...others} = this.props;
	
		const cls = classNames({
            'Jui-picker-slot': true,
        }, className);

		return (<div className={cls}>
			<nav className="Jui-picker-options" ref="PickerSolt">
				{this.options(data)}
			</nav>
	</div>)
	}
}