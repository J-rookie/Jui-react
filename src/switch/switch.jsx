import React from 'react';
import classNames from 'classnames';

export default class Switch extends React.Component{

	constructor(props) {
	  super(props);
  	}

	render(){

		const {children, className, checked, change, ...others} = this.props;
	
		const cls = classNames({
            'Jui-switch': true,
        }, className);

		return (<div className={cls}>
		<input type="checkbox" className="Jui-switch-core" defaultChecked={checked} {...others} />
		{children}
	</div>)
	}
}