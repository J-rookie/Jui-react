import React from 'react';
import classNames from 'classnames';
import HeadLeft from './header_left';
import HeadCenter from './header_center';
import HeadRight from './header_right';

export default class Header extends React.Component {

    static defaultProps = {
        data:[]
    }

    headerBg(c){

        return {
            backgroundColor : c
        }

    }

    render() {
    	const {children, data, arrow, center, left, right, color, className} = this.props;

        const cls = classNames({
            'Jui-header': true,
        }, className);

        return (
            <header className={cls} style={this.headerBg(color)}>
                <HeadLeft arrow={arrow||data.arrow}>{left||data.left}</HeadLeft>
                <HeadCenter>{center||data.center}</HeadCenter>
                <HeadRight>{right||data.right}</HeadRight>
                {children}
            </header>
        );
    }
};

