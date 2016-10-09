
class JuiSwipe {

	constructor(obj){
		this.data = {
			Object : undefined,
			animation : false,
			direction : 'w',
			pagination :undefined
		}
		if(!obj.Object){
			this.data.Object = obj
		}else{
			for(let item in obj){
				this.data[item] = obj[item]
			}
		}
	}

	//绑定事件
	static bind(obj, type, fn) {
    	 obj.addEventListener(type, fn, false);
    }

	//取消绑定事件
    static unbind(obj, type, fn) {
         obj.removeEventListener(type, fn, false);
    };

    //数据转换为字符串
    static Json(value){
    	return console.log(JSON.stringify(value))
    }

    //触摸按下
    static _SwipeStart(e){

        let self = this.SwiperKey;

        self.startX = e.touches[0].pageX;
        self.startT = new Date().getTime();
        self.startPoint = self.endPoint;

        this.style['transition-duration'] = '0ms';

        JuiSwipe.bind(this,"touchmove",JuiSwipe._SwipeMove);
        JuiSwipe.bind(this,"touchend",JuiSwipe._SwipeEnd);

        clearInterval(this.timer)
    }

    //触摸滑动
    static _SwipeMove(e){

        let self = this.SwiperKey,
        translate;

        self.moveX = e.touches[0].pageX;
        self.distance = self.moveX - self.startX;
        self.endPoint = self.startPoint + self.distance;

        self.translate = '('+self.endPoint+'px,0,0)'

        this.style['transform'] = 'translate3d'+self.translate;
        
    }

    //触摸结束
    static _SwipeEnd(e){

        let self = this.SwiperKey;
        self.endT = new Date().getTime();
        let speed = self.endT - self.startT;
   		let w = self.initial.w,
   			l = self.initial.l,
   			mw = (l-1)*w;

   		this.style['transition-duration'] = '200ms';

        if(self.endPoint>0){
                self.endPoint = 0;
        }else if(self.endPoint <= -mw){
                self.endPoint = -mw;
        }else{
            if(speed < 300){
            	self.distance < 0 ? self.endPoint = self.endPoint-self.endPoint%w-w : self.endPoint = self.endPoint-self.endPoint%w;
            }else{
            	Math.abs(self.endPoint%w) <= w/2 ? self.endPoint = self.endPoint-self.endPoint%w:self.endPoint = self.endPoint-self.endPoint%w-w;
            }

        }

        self.translate = '('+self.endPoint+'px,0,0)';
        self.index = Math.abs(self.endPoint/w);
        this.style['transform'] = 'translate3d'+self.translate;

        JuiSwipe.unbind(this,"touchend",JuiSwipe._SwipeEnd);
        JuiSwipe.unbind(this,"touchmove",JuiSwipe._SwipeMove);

        self.pagination?JuiSwipe.SwipePagination(self.pagination,self.index):'';
        if(self.animation){
			this.timer = setInterval(JuiSwipe._animation.bind(this),2000)
		}
       
    }
    //分页符
    static SwipePagination(obj,i){
    	let oChild = obj.childNodes;
    	for(let i=0;i<oChild.length;i++){
    		let reg = new RegExp('active');
    		oChild[i].className = oChild[i].className.replace(reg, ' ');
    	}
    	oChild[i].className += "active";
    }

    //动画
    static _animation(){
    	let self = this.SwiperKey;
    	self.index < self.initial.l-1 ? self.index++ : self.index=0;
    	self.endPoint = self.index * -self.initial.w;
    	self.translate = '('+self.endPoint+'px,0,0)';
    	this.style['transform'] = 'translate3d'+self.translate;
    	self.pagination?JuiSwipe.SwipePagination(self.pagination,self.index):'';
    }

    //初始化
    init(){

    	let that = this.data;
    	let oChild = that.Object.childNodes;
    	that.Object.removeAttribute('style');

       	that.Object.SwiperKey = {
            startX:0,
            moveX:0,
            startT:0,
            endT:0,
            left:0,
            startPoint:0,
            distance:0,
            endPoint:0,
            index:0,
            animation:that.animation,
            pagination:that.pagination,
            translate:"(0,0,0)",
            initial :{
            	w : that.Object.offsetWidth,
            	l : oChild.length
            }
         }

        clearInterval(that.Object.timer)
        that.Object.timer=null;

		that.Object.style['width'] = that.Object.SwiperKey.initial.w*that.Object.SwiperKey.initial.l+"px";
		that.Object.style['transform'] = 'translate3d'+that.Object.SwiperKey.translate;
		that.Object.style['transition-duration'] = '200ms';

		that.pagination?JuiSwipe.SwipePagination(that.pagination,that.Object.SwiperKey.index):'';

		JuiSwipe.unbind(that.Object,"touchstart",JuiSwipe._SwipeStart);
		JuiSwipe.bind(that.Object,"touchstart",JuiSwipe._SwipeStart);

		if(that.animation){
			that.Object.timer = setInterval(JuiSwipe._animation.bind(that.Object),2000)
		}

    }
}

export default JuiSwipe;
export { JuiSwipe };