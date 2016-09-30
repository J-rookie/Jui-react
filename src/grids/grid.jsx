import React from 'react';
import classNames from 'classnames';
import GridIcon from './grid_icon';
import GridLabel from './grid_label';

export default class Grid extends React.Component {

	GridWidth(data){
		
		let cols;

		data ? cols=data: cols =1 ; 

		return {
			"width" : 100/cols+"%"
		}
	}

    render() {
    	const {children, icon, label, href, cols, className} = this.props;
        const cls = classNames({
            'Jui-grid': true
        }, className);

        return (
            <a className={cls} href={href}  style={this.GridWidth(cols)}>
            {icon ? <GridIcon>{icon}</GridIcon> : false}
            {children}
			{label ? <GridLabel data={label}></GridLabel> : label}
            </a>
        );
    }
};