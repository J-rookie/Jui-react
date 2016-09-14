import React from 'react';
import classNames from 'classnames';

export default class Grid extends React.Component {
    render() {
    	const {children, className} = this.props;
        const cls = classNames({
            'Jui-grid': true
        }, className);

        return (
            <a className={cls}>{children}</a>
        );
    }
};