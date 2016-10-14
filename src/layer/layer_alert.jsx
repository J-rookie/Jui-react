import React from 'react';
import classNames from 'classnames';

export default class LayerMask extends React.Component{

	render(){

		const {children, className, handleClick, ...others} = this.props;

        const cls = classNames({
            'jui-layer-alert' : true,
        }, className);

		return(<div className={cls}>
			<div className="alert-text">{children}</div>
			<div className="alert-button" onClick={handleClick}>确认</div>
		</div>)
	}
}