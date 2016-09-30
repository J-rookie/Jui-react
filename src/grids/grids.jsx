import React from 'react';
import classNames from 'classnames';
import Grid from './grid';

export default class Grids extends React.Component {

    static defaultProps = {
        data:[]
    }

    renderData(data,cols) {
        return data.map((item,i) => {
            return <Grid
                    key={i}
                    icon={item.icon}
                    label={item.label}
                    cols={cols}
                    {...item}
                    />;
        });
    };

    render() {
    	const {children, data, cols, border, className,} = this.props;
        const cls = classNames({
            'Jui-grids': true,
            'Jui-grids-nb':border||false,
        }, className);
        return (
            <nav className={cls}>
            {data.length>0 ? this.renderData(data,cols) : children}
            </nav>
        );
    }
};

