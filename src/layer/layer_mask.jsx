import React from 'react';
import classNames from 'classnames';

export default class LayerMask extends React.Component{

	render(){

		const {children, className, ...others} = this.props;

        const cls = classNames({
            'jui-layer-mask' : true,
        }, className);

		return(<div className={cls}>
		{children}
		</div>)
	}
}