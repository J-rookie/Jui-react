import React from 'react';
import classNames from 'classnames';

export default class GridIcon extends React.Component{

	render(){

		const {children, className} = this.props;

	    const cls = classNames({
	            'Jui-grid-img': true
	        }, className);

		return (<div className={cls}>{children}</div>)
	}
}