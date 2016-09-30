import React from 'react';
import classNames from 'classnames';

export default class GridLabel extends React.Component{

	render(){

		const {children, data, className} = this.props;

	    const cls = classNames({
	            'Jui-grid-title': true
	        }, className);

		return (<div className={cls}>{data}</div>)
	}
}