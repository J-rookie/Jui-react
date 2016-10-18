
export default class JuiPicker {

	constructor(obj,index,callback){
		this.Object = obj;
        this.index = index >= 0 ? index : 0;
        this.callback = callback;
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
                if(self.distance < -5){
                   self.endPoint = self.endPoint-self.endPoint%40-40 
               }else if(self.distance > 5){
                self.endPoint = self.endPoint-self.endPoint%40+40;
               }
            }else{
                if(Math.abs(self.endPoint%40) <= 20){
                     self.endPoint = self.endPoint-self.endPoint%40
                 }else{
                    if(self.endPoint-self.endPoint%40 >=0){
                       self.endPoint = self.endPoint-self.endPoint%40; 
                    }else{
                        self.endPoint = self.endPoint-self.endPoint%40-40; 
                    }  
                 }
            }
        }

        self.translate = '(0,'+self.endPoint+'px,0)';
        self.index = Math.abs((self.endPoint-80)/40);
        this.style['transform'] = 'translate3d'+self.translate;

        JuiPicker.unbind(this,"touchend",JuiPicker._PickerEnd);
        JuiPicker.unbind(this,"touchmove",JuiPicker._PickerMove); 
        
        this.callback?this.callback(self.index,this.childNodes[self.index].innerText):null;
    }

    //初始化
    init(){

    	let that = this.Object;
    	
        that.callback = this.callback;

       	that.data = {
            startY:0,
            moveY:0,
            startT:0,
            endT:0,
            top:0,
            startPoint:0,
            distance:0,
            endPoint:this.index*-40+80,
            index:this.index,
            translate:"(0,"+(this.index*-40+80)+"px,0)",
            h:that.offsetHeight
         }

        this.callback?this.callback(this.index,that.childNodes[this.index].innerText):null;

		that.style['transform'] = 'translate3d'+that.data.translate;

		JuiPicker.unbind(that,"touchstart",JuiPicker._PickerStart);
		JuiPicker.bind(that,"touchstart",JuiPicker._PickerStart);

    }
}