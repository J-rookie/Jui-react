import React from 'react';
import classNames from 'classnames';

export default class Cell extends React.Component{

	constructor(props){
		super(props)
	}

	render(){

		const {children, value, className, ...others} = this.props;
	
		const cls = classNames({
            'Jui-cell-icon': true,
        }, className);

		return(<div className={cls}>
			{children?children:value}
		</div>)
	}
}
