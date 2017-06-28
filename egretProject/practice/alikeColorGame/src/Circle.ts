/**
 *
 * @fanShao 
 *
 */
class Circle extends egret.Sprite{
	public constructor(cx:number,cy:number,cr:number) {
    	super();
        this.init(cx,cy,cr);
	}
	
	private shape:egret.Shape;
	private shapex: number;
	private shapey: number;
	private shaper: number;
	private color: number;
	public static Event_Click:string = "event_click";
	private colorList:number[] =[13408665, 16777113, 6710937, 16750848];
//	, 16776960, 39372, 13421721, 13382553, 10079232,16737894,16776960,3381708,13395456,4006699,13421619,
//	16750899,1677792,1677062,39270,13395507,16764057,13395456,13369446,39321,16763988
	
	private randomColor():number{
	    return this.colorList[Math.round(Math.random() * this.colorList.length)]
	}
	private init(cx:number,cy:number,cr:number):void{
	    this.color = this.randomColor();
	    this.shape = new egret.Shape();
	    this.shape.graphics.beginFill(this.color);
	    this.shape.graphics.drawCircle(0,0,cr);
	    this.shape.graphics.endFill();
	    //设定矢量圆的位置为父类中心点
	    this.shape.x = -cr;
	    this.shape.y = -cr;
	    
	    this.shapex = cx;
	    this.shapey = cy;
	    this.shaper = cr;
	    
	    this.touchEnabled = !0;
	    //监听用户的移动与触摸事件
	    this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this,!1);
	    this.addChild(this.shape);
	    this.x = cx;
	    this.y = cy;
	    	    
	}
	
	private onTouch(e:egret.TouchEvent){	    
    	var par = this.parent;
    	par.dispatchEventWith(Circle.Event_Click,false,this.color);
    	
    	this.touchEnabled = !1;
    	var tween:egret.Tween = egret.Tween.get(this);
    	tween.to({alpha:0.1},500,egret.Ease.sineOut);
    	tween.call(function(){
        	this.visible = !1;
        	par.removeChild(this);
        	this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        },this);
        
        var circleList : Circle[] = [];
        var tweenList : egret.Tween[] = [];
        var radius : number = this.shaper / 2;
        
        var tempx : number;
        var tempy : number;
        var tempr : number;
        
        var g: number = 0;
        for(var i:number = 0;i < 2;i++)
           for(var t: number = 0;t < 2;t++){
              tempx = this.shapex - this.shaper + radius*2 * t;
              tempy = this.shapey - this.shaper + radius*2 * i;
              circleList[g] = new Circle(tempx,tempy,radius);
              circleList[g].alpha = 0.1;
              circleList[g].scaleX = 0.8;
              circleList[g].scaleY = 0.8;
              par.addChild(circleList[g]);
              tweenList[g] = egret.Tween.get(circleList[g]);
              tweenList[g].to({ alpha:1,scaleX:1,scaleY:1},1000,egret.Ease.sineIn);
                
              g++;
          }       
	};
	    
	
}
