//demo1 矩形遮罩
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.graphics.beginFill(0xffff00);
//        shp.graphics.drawRect(0,0,100,100);
//        shp.graphics.endFill();
//        this.addChild(shp);
//        
//        
//        var shp2:egret.Shape = new egret.Shape();
//        shp2.graphics.beginFill(0x00ff00);
//        shp2.graphics.drawCircle(0,0,20);
//        shp2.graphics.endFill();
//        this.addChild(shp2);
//        
//        shp2.x = 20;
//        shp2.y = 20
//    }
//}
//demo2 画一个红色的正方形
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        var square: egret.Shape = new egret.Shape();
//        square.graphics.beginFill(0xff0000);
//        square.graphics.drawRect(0,0,100,100);
//        square.graphics.endFill();
//        this.addChild(square);
//        //画一个蓝色的圆形
//        var shp: egret.Shape = new egret.Shape();
//        shp.graphics.beginFill(0xffff00);
//        shp.graphics.drawCircle(25,25,25);
//        shp.graphics.endFill();
//        this.addChild(shp);
//        square.mask = shp;
//    }
//}
//demo3   非精准碰撞检测
//class Main extends egret.DisplayObjectContainer
//{
//   public constructor()
//   {
//       super();
//       this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//   }
//   private onAddToStage(event:egret.Event)
//   {
//       this.drawText();
//       var shp:egret.Shape = new egret.Shape();
//       shp.graphics.beginFill( 0xff0000 );
//       shp.graphics.drawRect( 0,0,100,100);
//       shp.graphics.endFill();
//       shp.width = 100;
//       shp.height = 100;
//       shp.x = 20;
//       shp.y = 20;
//       this.addChild( shp );
//       var isHit:boolean = shp.hitTestPoint( 10, 10 );
//       this.infoText.text = "碰撞结果" + isHit;
//   }
//   private infoText:egret.TextField;
//   private drawText()
//   {
//       this.infoText = new egret.TextField();
//       this.infoText.y = 200;
//       this.infoText.text = "碰撞结果";
//       this.addChild( this.infoText );
//   }
//}
//demo4  精确碰撞
//class Main extends egret.DisplayObjectContainer {
//    public constructor() {
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//   private onAddToStage(event:egret.Event)
//   {
////       圆形
//       var shp: egret.Shape = new egret.Shape();
//       shp.graphics.beginFill(0xff0000);
//       shp.graphics.drawCircle(0,0,20);
//       shp.graphics.endFill();
//       shp.width = 100;
//       shp.height = 100;
//       this.addChild(shp);
//       var isHit: boolean = shp.hitTestPoint(25,25,true);
////       this.infoText.text = "碰撞结果" + isHit;
//       
//   }
//   private infoText: egret.TextField;
//   private drawText()
//   {
//       this.infoText = new egret.TextField();
//       this.infoText.y = 200;
//       this.infoText.text = "碰撞结果";
//       this.addChild( this.infoText );
//   }
//}
//demo5  创建文本
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        
//        //        文本布局
//
//        var shape: egret.Shape = new egret.Shape();
//        shape.graphics.beginFill(0xffffff);
//        shape.graphics.drawRect(0,0,400,400);
//        shape.graphics.endFill();
//        this.addChild(shape);
//        
//        var label: egret.TextField = new egret.TextField();
//        label.text = "这是一个文本"；
//        label.size =  70;
//        label.textColor = 0xff0000;
//        label.fontFamily = "KaiTi"；
//        label.x = 20;
//        label.y = 20；
//  
//        
//        shape.addChild(label);
//        
//
//        
//    }
//}
//demo6 文本样式
//class Main extends egret.DisplayObjectContainer {
//    public constructor() {
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//
//    private onAddToStage(event: egret.Event) {
//
//        //        文本布局
//
//        var shape: egret.Shape = new egret.Shape();
//        shape.graphics.beginFill(0xffffff);
//        shape.graphics.drawRect(0,0,400,400);
//        shape.graphics.endFill();
//        this.addChild(shape);
//
//        var label: egret.TextField = new egret.TextField();
//        label.text = "这是一个文本"；
//        label.size =  24;
//        label.textColor = 0xff0000;
//        label.fontFamily = "KaiTi"；
//        label.x = 20;
//        label.y = 20；
//  
//        this.addChild(label);
//    }
//}
//demo7   多种样式文本混合
//class Main extends egret.DisplayObjectContainer {
//    public constructor() {
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    private onAddToStage(event: egret.Event) {
//        var tx: egret.TextField = new egret.TextField;
//        tx.width = 400;
//        tx.x = 10;
//        tx.y = 10;
//        tx.textColor = 0;
//        tx.size = 20;
//        tx.fontFamily = "微软雅黑";
//        tx.textAlign = egret.HorizontalAlign.CENTER;
//        tx.textFlow = <Array<egret.ITextElement>>[
//            { text: "妈妈再也不用担心我在",style: { "size": 12 } }
//            ,{ text: "Egret",style: { "textColor": 0x336699,"size": 60,"strokeColor": 0x6699cc,"stroke": 2 } }
//            ,{ text: "里说一句话不能包含各种",style: { "fontFamily": "楷体" } }
//            ,{ text: "五",style: { "textColor": 0xff0000 } }
//            ,{ text: "彩",style: { "textColor": 0x00ff00 } }
//            ,{ text: "缤",style: { "textColor": 0xf000f0 } }
//            ,{ text: "纷",style: { "textColor": 0x00ffff } }
//            ,{ text: "、\n" }
//            ,{ text: "大",style: { "size": 36 } }
//            ,{ text: "小",style: { "size": 6 } }
//            ,{ text: "不",style: { "size": 16 } }
//            ,{ text: "一",style: { "size": 24 } }
//            ,{ text: "、" }
//            ,{ text: "格",style: { "italic": true,"textColor": 0x00ff00 } }
//            ,{ text: "式",style: { "size": 16,"textColor": 0xf000f0 } }
//            ,{ text: "各",style: { "italic": true,"textColor": 0xf06f00 } }
//            ,{ text: "样",style: { "fontFamily": "楷体" } }
//            ,{ text: "" }
//            ,{ text: "的文字了！" }
//        ];
//        this.addChild(tx);
//    }
//}
//demo8 文本超链接事件
//Touch事件
//class Main extends egret.DisplayObjectContainer {
//    constructor() {
//        super();
//        var tx: egret.TextField = new egret.TextField;
//        tx.textFlow = new Array<egret.ITextElement>(
//            { text: "这段文字有链接",style: { "href": "event:text event triggered" } }
//            ,{ text: "\n这段文字没链接",style: {} }
//        );
//        tx.touchEnabled = true;
//        tx.addEventListener(egret.TextEvent.LINK,function(evt: egret.TextEvent) {
//            console.log(evt.text);
//            alert(evt.text);
//        },this);
//        tx.x = 10;
//        tx.y = 90;
//        this.addChild(tx);
//    }
//}
//打开URL
//class Main extends egret.DisplayObjectContainer {
//    constructor() {
//        super();
//        var tx: egret.TextField = new egret.TextField;
//        tx.textFlow = new Array<egret.ITextElement>(
//            { text: "这段文字有链接",style: { "href": "http://www.egret.com/" } }
//            ,{ text: "\n这段文字没链接",style: {} }
//        );
//        tx.touchEnabled = true;
//        this.addChild(tx);
//    }
//}
//demo9  输入文本
//class Main extends egret.DisplayObjectContainer {
//    public constructor() {
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    private onAddToStage(event: egret.Event) {
//        var spr: egret.Sprite = new egret.Sprite();
//        spr.graphics.lineStyle(2,0xffff00);
//        spr.graphics.beginFill(0x00ff00,1);     
//        spr.graphics.drawRect(80,580,300,50);  
//        spr.graphics.endFill();
//        spr.x = 100;
//        spr.y = 100;    
//        this.addChild(spr);
//        
//        var txInput:egret.TextField = new egret.TextField;
//        
//        txInput.type = egret.TextFieldType.INPUT;
//        txInput.width = 282;
//        txInput.height = 43;
//        txInput.text = 'dadfsssssssss';
//        txInput.x = 85;
//        txInput.y = 592;
//        txInput.textColor = 0xffffff;
//        /// 注意_container是事先建立好的一个显示容器，即 egret.Sprite，并且已经添加到显示列表中
//        spr.addChild(txInput);
//    }
//}
//获得焦点
//class Main extends egret.DisplayObjectContainer {
//    public constructor() {
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    private onAddToStage(event: egret.Event) {
//        var textIput: egret.TextField = new egret.TextField();
//        textIput.type = egret.TextFieldType.INPUT;
//        textIput.y = 55;
//        this.addChild(textIput);
//        var button: egret.Shape = new egret.Shape();
//        button.graphics.beginFill(0x00cc00);
//        button.graphics.drawRect(0,0,100,40);
//        button.graphics.endFill();
//        button.y = 50;
//        this.addChild(button);
//        button.touchEnabled = true;
//        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e) => {
//            textIput.setFocus();
//        },this);
//    }
//}
//设置输入样式
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        var text = new egret.TextField();
        text.type = egret.TextFieldType.INPUT;
        //设置输入文本的样式为文本
        text.inputType = egret.TextFieldInputType.TEXT;
        text.text = "输入文本:";
        text.width = 300;
        this.addChild(text);
        var pass = new egret.TextField();
        pass.type = egret.TextFieldType.INPUT;
        //设置输入文本显示为密码
        pass.inputType = egret.TextFieldInputType.PASSWORD;
        //设置密码显示
        pass.displayAsPassword = true;
        pass.text = "输入密码:";
        pass.y = 100;
        pass.width = 300;
        this.addChild(pass);
        var tel = new egret.TextField();
        tel.type = egret.TextFieldType.INPUT;
        //设置输入电话号样式
        tel.inputType = egret.TextFieldInputType.TEL;
        tel.text = "输入电话号:";
        tel.y = 200;
        tel.width = 300;
        this.addChild(tel);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
