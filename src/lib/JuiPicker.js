
export default class JuiPicker {

	constructor(obj,index){
		this.Object = obj;
        this.index = index;
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
    static _PickerStart(e){

        let self = this.data;

        self.startY = e.touches[0].pageY;
        self.startT = new Date().getTime();
        self.startPoint = self.endPoint;

        this.style['transition-duration'] = '0ms';

        JuiPicker.bind(this,"touchmove",JuiPicker._PickerMove);
        JuiPicker.bind(this,"touchend",JuiPicker._PickerEnd);

    }

    //触摸滑动
    static _PickerMove(e){

        let self = this.data;

        self.moveY = e.touches[0].pageY;
        self.distance = self.moveY - self.startY;
        self.endPoint = self.startPoint + self.distance;

        self.translate = '(0,'+self.endPoint+'px,0)';

        this.style['transform'] = 'translate3d'+self.translate;
        
    }

    //触摸结束
    static _PickerEnd(e){

        let self = this.data;
        self.endT = new Date().getTime();
        let speed = self.endT - self.startT;
   		let h = self.h-120;

   		this.style['transition-duration'] = '200ms';

        if(self.endPoint>80){
                self.endPoint = 80;
        }else if(self.endPoint <= -h){
                self.endPoint = -h;
        }else{
            if(speed < 300){
            	self.distance < 0 ? self.endPoint = self.endPoint-self.endPoint%40-40 : self.endPoint = self.endPoint-self.endPoint%40+40;
            }else{
            	Math.abs(self.endPoint%40) <= 20 ? self.endPoint = self.endPoint-self.endPoint%40:self.endPoint = self.endPoint-self.endPoint%40+40;
            }
        }

        self.translate = '(0,'+self.endPoint+'px,0)';
        self.index = Math.abs((self.endPoint-80)/40);
        this.style['transform'] = 'translate3d'+self.translate;

        JuiPicker.unbind(this,"touchend",JuiPicker._PickerEnd);
        JuiPicker.unbind(this,"touchmove",JuiPicker._PickerMove); 
        
        this.value = this.childNodes[self.index].innerText;
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
    	let self = this.data;
    	self.index < self.initial.l-1 ? self.index++ : self.index=0;
    	self.endPoint = self.index * -self.initial.w;
    	self.translate = '('+self.endPoint+'px,0,0)';
    	this.style['transform'] = 'translate3d'+self.translate;
    	self.pagination?JuiPicker.SwipePagination(self.pagination,self.index):'';
    }

    //初始化
    init(){

    	let that = this.Object;
    	let oChild = that.childNodes;

       	that.data = {
            startY:0,
            moveY:0,
            startT:0,
            endT:0,
            top:0,
            startPoint:0,
            distance:0,
            endPoint:0,
            index:this.index||0,
            translate:"(0,0,0)",
            h:that.offsetHeight
         }

		that.style['transform'] = 'translate3d'+that.data.translate;
		that.style['transition-duration'] = '200ms';

		JuiPicker.unbind(that,"touchstart",JuiPicker._PickerStart);
		JuiPicker.bind(that,"touchstart",JuiPicker._PickerStart);

    }
}