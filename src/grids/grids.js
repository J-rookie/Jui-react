import React from 'react';
import classNames from 'classnames';
import Grid from './grid';

export default class Grids extends React.Component {

    render() {
    	console.log(this.props)
    	const {children, className,} = this.props;
        const cls = classNames({
            'Jui-grids': true
        }, className);
        return (
            <nav className={cls}>{children}</nav>
        );
    }
};