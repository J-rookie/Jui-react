import React from 'react';
import classNames from 'classnames';
import SwipeSlide from './swipe_slide';
import JuiSwipe from '../lib/JuiSwipe';

export default class Switch extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  }
  	}

  	 SwipeWrapperData(data){
    	return data.map((item,i) => {
    		return <SwipeSlide href={item.href} key={i}>{item.slide}</SwipeSlide>
    	});
    }

    SwipePaginationChild(data){
    	return data.map((item,i) => {
    		return <a key={i}></a>
    	});
    }

  	componentDidMount(){
  		const {loop, pagination, ...others} = this.props;
  		let JuiEvent = new JuiSwipe({
            Object : this.refs.swipeWrapper,
            animation : loop!=undefined ? loop:false,
            pagination : pagination!=undefined&&pagination===true ? this.refs.swipePagination : undefined,
        });
        JuiEvent.init()
  	}

  	componentDidUpdate(){
  		const {loop, pagination, ...others} = this.props;
  		let JuiEvent = new JuiSwipe({
            Object : this.refs.swipeWrapper,
            animation : loop!=undefined ? loop:false,
            pagination : pagination!=undefined&&pagination===true ? this.refs.swipePagination : undefined,
        });
        JuiEvent.init()
  	}

	render(){

		const {children, data, pagination,  className, ...others} = this.props;
	
		const cls = classNames({
            'Jui-swipe-container': true,
        }, className);

		return (<div className={cls} ref="swipeContainer">
			<div className="Jui-swipe-wrapper" ref="swipeWrapper">{data.length>0?this.SwipeWrapperData(data):''}</div>
			{pagination?<div className="Jui-swipe-pagination" ref="swipePagination">{data.length>0?this.SwipePaginationChild(data):''}</div>:''}
		</div>)
	}
}