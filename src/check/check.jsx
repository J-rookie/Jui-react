import React from 'react';
import classNames from 'classnames';
import Cell from '../cell/cell';
import CheckIcon from './check_icon';

export default class Check extends React.Component{
	constructor(props) {
	  super(props);
  	}	

  	RadioChild(data,RadioChoose){
  		return data['options'].map((v,i)=>{
  			v.value?'':v.value=v.label;
  			return <Cell key={i}>
			<label className='Jui-cell-title' >
			<CheckIcon value={v.value} name={v.name} disabled={v.disabled||false} RadioChoose={RadioChoose} checked={data.choose.indexOf(v.value)>=0?true:false} />
			<span>{v.label}</span>
			</label>
			</Cell>
  		})
  	}

	render(){

		const {children, className, data, RadioChoose, ...others} = this.props;
	
		const cls = classNames({
            'Jui-checklist': true,
        }, className);

		return (<div className={cls}>
			{this.RadioChild(data,RadioChoose)}
	</div>)
	}
}