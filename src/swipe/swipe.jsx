import React from 'react';
import classNames from 'classnames';
import SwipeWrapper from './swipe_wrapper';

export default class Switch extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  		SwipeW : 0,
	  }
  	}

  	componentDidMount(){
  		this.setState({SwipeW:this.refs.swipeContainer.offsetWidth})
  	}

	render(){

		const {children, data, className, ...others} = this.props;
	
		const cls = classNames({
            'Jui-swipe-container': true,
        }, className);

		return (<div className={cls} ref="swipeContainer">
			<SwipeWrapper data={data} SwipeW={this.state.SwipeW} ></SwipeWrapper>
		</div>)
	}
}