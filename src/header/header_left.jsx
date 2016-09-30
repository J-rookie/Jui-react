import React from 'react';
import classNames from 'classnames';
import HeadArrow from './header_arrow';

export default class HeadLeft extends React.Component{

	render(){

		const {children, arrow, className,} = this.props;

	    const cls = classNames({
	        'Jui-header-left': true,
	    }, className);
	    
		return (<div className={cls}>
			{arrow == 'true' ? <HeadArrow /> : ''}
			{children}
			</div>)
	};
	
}