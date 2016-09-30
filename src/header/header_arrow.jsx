import React from 'react';
import classNames from 'classnames';

export default class HeadLeft extends React.Component{

	Goback(){
		window.history.go(-1);
	};

	render(){

		const {children, data, className,} = this.props;
	
	    const cls = classNames({
	        'Jui-arrow-left': true,
	    }, className);

		return (<div className={cls} onClick={this.Goback}></div>)
	};
	
}