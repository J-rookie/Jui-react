import React from 'react';
import classNames from 'classnames';

export default class Search extends React.Component{

	constructor(props) {
	  super(props);
  	}

	render(){

		const {children, className, ...others} = this.props;
	
		const cls = classNames({
            'Jui-search': true,
        }, className);

		return (<div className={cls}>
			<div className="Jui-search-input"><a className="Jui-search-submit"></a></div>
	</div>)
	}
}