import React from 'react';
import classNames from 'classnames';

export default class Grids extends React.Component {
    render() {
    	const {children, className} = this.props;
        const cls = classNames({
            'Jui-grids': true
        }, className);

        return (
            <nav className={cls}>{children}</nav>
        );
    }
};