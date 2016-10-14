import React from 'react';
import classNames from 'classnames';
import LayerMask from './layer_mask';
import LayerContent from './layer_content';

export default class Layer extends React.Component{

	render(){

		const {children, className, data, type, handleClick, icon, cancel, sucess, ...others} = this.props;

        const cls = classNames({
            'jui-layer' : true,
        }, className);

		return(<div className={cls}>
			<LayerMask></LayerMask>
			<LayerContent type={type} handleClick={handleClick} icon={icon} cancel={cancel} sucess={sucess}>{children}</LayerContent>
		</div>)
	}
}