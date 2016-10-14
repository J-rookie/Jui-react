import React from 'react';
import classNames from 'classnames';

export default class LayerMask extends React.Component{

	render(){

		const {children, className, ...others} = this.props;

        const cls = classNames({
            'icon-1' : true,
        }, className);

		return(<div className={cls}>
				  <div></div>
			      <div></div>
			      <div></div>
			      <div></div>
			      <div></div>
			      <div></div>
			      <div></div>
			      <div></div>
		</div>)
	}
}