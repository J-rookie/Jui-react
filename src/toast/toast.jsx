import React from 'react';
import classNames from 'classnames';

export default class Toast extends React.Component{

	render(){

		const {children, className, position, data, ...others} = this.props;

        const cls = classNames({
            'jui-toast' : true,
            'top' : position=='top'?true:false,
            'center' : position=='center' || position == undefined ?true:false,
            'bottom' : position=='bottom'?true:false,
        }, className);

		return(<div className={cls}>
			<div className="jui-toast-info">
				{!data.image||data.image=='none'?'':<img className="jui-toast-img" src={data.image} /> }
				<span className="jui-toast-text">{data.text}</span>
			</div>
		</div>)
	}
}