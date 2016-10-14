import React from 'react';
import classNames from 'classnames';
import CellIcon from './cell_icon';
import CellTitle from './cell_title';
import CellVice from './cell_vice';
import CellArrow from './cell_arrow_right';

export default class Cell extends React.Component{

	constructor(props){
		super(props)
	}

	render(){

		const {children, data, className, title, vice, arrow, href, icon, tap, ...others} = this.props;

		let CellData = data||{};
		
		title?CellData.title = title:'';
		vice?CellData.vice = vice:'';
		arrow?CellData.arrow = arrow:'';
		href?CellData.href = href:'';
		icon?CellData.icon = icon:'';
		tap?CellData.tap = tap:'';

		const cls = classNames({
            'Jui-cell': true,
        }, className);

		return(<a className={cls} href={CellData.href} onClick={CellData.tap?CellData.tap.bind(this):''}>
			{CellData.icon ? <CellIcon>{CellData.icon}</CellIcon>:''}
			{CellData.title ? <CellTitle>{CellData.title}</CellTitle>:''}
			{CellData.vice ? <CellVice>{CellData.vice}</CellVice>:''}
			{CellData.arrow ? <CellArrow/>:''}
			{children}
		</a>)
	}
}
