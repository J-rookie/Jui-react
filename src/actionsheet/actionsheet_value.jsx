import React from 'react';
import classNames from 'classnames';

export default class Actionsheet extends React.Component{
	constructor(props) {
	  super(props);
  	}	

	render(){

		const {children, className,value, onClick, ...others} = this.props;
	
		const cls = classNames({
            'Jui-actionsheet-value': true,
        }, className);
		return (<div className={cls} onClick={onClick}>
			{value}
	</div>)
	}
}