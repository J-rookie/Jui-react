import React from 'react';
import classNames from 'classnames';
import LayerMessage from './layer_message';
import LayerAlart from './layer_alert';
import LayerLoading from './layer_loading';
import LayerConfirm from './layer_confirm';

export default class LayerMask extends React.Component{

	render(){

		const {children, className, type, handleClick, icon, cancel, sucess, ...others} = this.props;

        const cls = classNames({
            'jui-layer-content' : true,
        }, className);

		return(<div className={cls}>
			{type=='loading'?<LayerLoading icon={icon}/>:null}
			{type=='msg'?<div className="jui-layer-middle"><LayerMessage>{children}</LayerMessage></div>:null}
			{type=='alert'?<div className="jui-layer-middle"><LayerAlart handleClick={handleClick}>{children}</LayerAlart></div>:null}
			{type=='confirm'?<div className="jui-layer-middle"><LayerConfirm handleClick={handleClick} cancel={cancel} sucess={sucess}>{children}</LayerConfirm></div>:null}		
		</div>)
	}
}