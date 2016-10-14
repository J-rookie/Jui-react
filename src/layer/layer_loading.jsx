import React from 'react';
import classNames from 'classnames';
import LoadingIconOne from './loading_icon_one';
import LoadingIconTwo from './loading_icon_two';
import LoadingIconThr from './loading_icon_three';

export default class LayerMask extends React.Component{

	render(){

		const {children, className, icon, ...others} = this.props;

        const cls = classNames({
            'jui-layer-loading' : true,
        }, className);

		return(<div className={cls}>
			{icon=='1'?<LoadingIconOne/>:null}
			{icon=='2'?<LoadingIconTwo/>:null}
			{icon=='3'?<LoadingIconThr/>:null}
		</div>)
	}
}