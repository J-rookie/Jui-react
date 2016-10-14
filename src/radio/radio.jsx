import React from 'react';
import classNames from 'classnames';
import Cell from '../cell/cell';
import RadioIcon from './radio_icon';

export default class Radio extends React.Component{

	constructor(props) {
	  super(props);
  	}	

  	RadioChild(data,RadioChoose){
  		return data['options'].map((v,i)=>{
  			v.value?'':v.value=v.label;
  			return <Cell key={i}>
			<label className='Jui-cell-title' >
			<RadioIcon value={v.value} name={v.name} disabled={v.disabled||false} RadioChoose={RadioChoose} checked={data.choose==v.value?true:false} />
			<span>{v.label}</span>
			</label>
			</Cell>
  		})
  	}

	render(){

		const {children, className, data, RadioChoose, ...others} = this.props;
	
		const cls = classNames({
            'Jui-radiolist': true,
        }, className);

		return (<div className={cls}>
			{this.RadioChild(data,RadioChoose)}
	</div>)
	}
}