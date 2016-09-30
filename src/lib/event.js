
class JuiEvent {

	constructor(obj){
		this.Object = obj;
	}

	//绑定事件
	_bind(obj, type, fn) {
    	 obj.addEventListener(type, fn, false);
    }

	//取消绑定事件
    _unbind(obj, type, fn) {
         obj.removeEventListener(type, fn, false);
    };

    //数据转换为字符串
    Json(value){
    	return console.log(JSON.stringify(value))
    }

    Swiper(){
    	this.Object

    	this.Object(oEvent,'touchmove',SwipeMove,this)
        this.Object(oEvent,'touchend',SwipeEnd,this)
    }
}
//轮播
/*
    SwipeStart(e){
        let self = this.state.eventKey;
        let oEvent = this.refs.swipeWrapper;
        self.startX = e.touches[0].pageX;
        self.startT = new Date().getTime();
        self.startPoint = self.endPoint;
        _event._bind(oEvent,'touchmove',this.SwipeMove,this)
        _event._bind(oEvent,'touchend',this.SwipeEnd,this)
    }

    SwipeMove(e){     
        let self = this.state.eventKey;
        self.moveX = e.touches[0].pageX;
        self.distance = self.moveX - self.startX;
        self.endPoint = self.startPoint + self.distance;
        this.setState({
            translate:self.endPoint+"px,0,0"
        })
    }

    SwipeEnd(e){

        let self = this.state.eventKey;
        let oEvent = this.refs.swipeWrapper;
        let i=this.props.data.length;
        let w = this.props.SwipeW;
        let sw = (i-1)*w;
        self.endT = new Date().getTime();
        let speed = self.endT - self.startT;

       if(self.endPoint>=0){
                self.endPoint = 0;
            }else if(self.endPoint < -sw){
                self.endPoint = -sw;
            }else{
                if(speed < 300){
                self.distance < 0 ? self.endPoint = self.endPoint-self.endPoint%w-w : self.endPoint = self.endPoint-self.endPoint%w+w;

                }else{
                Math.abs(self.endPoint%w) <= w/2 ? self.endPoint = self.endPoint-self.endPoint%w:self.endPoint = self.endPoint-self.endPoint%w-w;
                }

        }

        this.setState({
            translate:self.endPoint+"px,0,0"
        })
        _event._unbind(oEvent,'touchmove',this.SwipeMove);
        _event._unbind(oEvent,'touchend',this.SwipeEnd);
    }*/


export default JuiEvent;
export { JuiEvent };