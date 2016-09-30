import React from 'react';
import classNames from 'classnames';

export default class HeadCenter extends React.Component{

	render(){

		const {children, data, className,} = this.props;
	
	    const cls = classNames({
	        'Jui-header-center': true,
	    }, className);

		return (<div className={cls}>{children}</div>)
	}
	
}