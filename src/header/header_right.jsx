import React from 'react';
import classNames from 'classnames';

export default class HeadRight extends React.Component{

	render(){

		const {children, className,} = this.props;
	
	    const cls = classNames({
	        'Jui-header-right': true,
	    }, className);

		return (<div className={cls}>{children}</div>)
	};
	
}