import React from 'react';

export default class ActionsheetOptions extends React.Component{
	constructor(props) {
	  super(props);
  	}	

  	optionsChdild(data,choice){
  		return data.map(function(v,i){
  			return <a key={i} onClick={
  				(e) =>{
  					choice(e)
  					v.callback?v.callback():'';
  				}
  			} value={v.value}>{v.label}</a>
  		})
  	}

	render(){

		const {data, close, choice, closeSwitch, ...others} = this.props;
		return (<div className="Jui-select-options">
			<div className="options-content">
				<nav className="options-list">
					{this.optionsChdild(data,choice)}
				</nav>
				{closeSwitch===false? '' : <div className="close" onClick={close}>取消</div> }
			</div>
	</div>)
	}
}