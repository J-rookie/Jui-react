import React from 'react';
import classNames from 'classnames';
import SwipeSlide from './swipe_slide';
import _event from '../lib/event';

export default class Switch extends React.Component{

	constructor(props) {
	  super(props);
      this.state={
         translate:"0,0,0",
         eventKey:{
            startX:0,
            moveX:0,
            startT:0,
            endT:0,
            left:0,
            startPoint:0,
            distance:0,
            endPoint:0,
         }
      }
  	}

  	static defaultProps = {
        data:[],
    }

    componentDidMount(){
        console.log(this.refs.swipeWrapper)
        var JuiEvent = new _event(this.refs.swipeWrapper);
        JuiEvent.Swiper()
    }

    wrapperStyle(length,w){
        return {
            width:length*w+"px",
            transform:"translate3d("+this.state.translate+")",
        }
    }

    SwipeWrapperData(data){
    	return data.map((item,i) => {
    		return <SwipeSlide href={item.href} key={i}>{item.slide}</SwipeSlide>
    	});
    }

	render(){

		const {children, data, SwipeW, className, ...others} = this.props;
	
		const cls = classNames({
            'Jui-swipe-wrapper': true,
        }, className);

		return (<div className={cls} style={this.wrapperStyle(data.length,SwipeW)} ref="swipeWrapper">
			{data.length>0?this.SwipeWrapperData(data):''}
		</div>)
	}
}