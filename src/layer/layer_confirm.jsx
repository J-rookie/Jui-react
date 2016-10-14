import React from 'react';
import classNames from 'classnames';

export default class LayerMask extends React.Component{

	render(){

		const {children, className, cancel, sucess, ...others} = this.props;

        const cls = classNames({
            'jui-layer-confirm' : true,
        }, className);

		return(<div className={cls}>
					<div className="confirm-content">{children}</div>
					<nav className="confirm-nav">
						<a onClick={cancel}>取消</a>
						<a onClick={sucess}>确定</a>
					</nav>
		</div>)
	}
}