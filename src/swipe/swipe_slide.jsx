import React from 'react';
import classNames from 'classnames';

export default class Switch extends React.Component{

	constructor(props) {
	  super(props);
  	}

	render(){

		const {children, className, href, ...others} = this.props;
	
		const cls = classNames({
            'Jui-swipe-slide': true,
        }, className);

		return (<a className={cls} href={href}>
			{children}
		</a>)
	}
}