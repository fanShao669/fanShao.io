//
//    var shp:egret.Shape = new egret.Shape();
//    shp.graphics.beginFill(0xff3366);
//    shp.graphics.drawRect(0 , 0 , 100 , 200);
//    shp.graphics.endFill();
//    
//    shp.x = 80;
//    shp.y = 110;
//    this.addChild(shp);
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//demo1  方形绕圆圈
//class Main extends egret.Sprite {
//    public constructor() {
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    private shp: egret.Shape;
//    private onAddToStage(evt: egret.Event) {
//        this.drawCircle();
//
//        this.shp = new egret.Shape();
//        this.shp.graphics.beginFill(0x0000ff);
//        this.shp.graphics.drawRect(0,0,100,100);
//        this.shp.graphics.endFill();
//        this.addChild(this.shp);
//
//        this.stage.frameRate = 60;
//        this.addEventListener(egret.Event.ENTER_FRAME,this.move,this);
//
//    }
//
//    private ang: number = 0;
//    private r: number = 30;
//    private move(evt: egret.Event) {
//        this.shp.x = 50 + Math.cos(this.ang * Math.PI / 180) * this.r;
//        this.shp.y = 50 + Math.sin(this.ang * Math.PI / 180) * this.r;
//        this.ang++;
//    }
//    private drawCircle() {
//        var cir: egret.Shape = new egret.Shape();
//        cir.graphics.beginFill(0xffffff);
//        cir.graphics.drawCircle(0,0,30);
//        cir.graphics.endFill();
//        cir.x = 50;
//        cir.y = 50;
//        this.addChild(cir);
//    }
//}
//demo2  绘制矩形
//class Main extends egret.Sprite{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onStage,this)
//    }
//    
//    
//    private onStage(evt:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.graphics.lineStyle(10,0xff0000);   //图形边框
//        shp.graphics.beginFill(0x00ff00);
//        shp.graphics.drawRect(0 , 0 , 100 ,100);
//        shp.graphics.endFill();
//        this.addChild(shp);
//        shp.graphics.clear();    //清除绘图
//        
//        var spr:egret.Sprite = new egret.Sprite();
//        spr.x = 100;
//        spr.y = 100;
//        this.addChild(spr);
//        spr.addChild (shp);
//    }
//}
//demo3   绘制圆形
//class Main extends  egret.Sprite{
//    public constructor(){
//        super(); 
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToState,this);
//    }
//    private onAddToState(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.x = 100;
//        shp.y = 100
//        shp.graphics.lineStyle(10, 0xff0000);
//        shp.graphics.beginFill(0x00ff00,1);
//        shp.graphics.drawCircle(0,0,50);
//        shp.graphics.endFill();
//        this.addChild(shp);
//    }
//}
//demo4   绘制直线    （折线）
//class Main extends egret.DisplayObjectContainer{
//    
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.graphics.lineStyle(20,0x00ff00);
//        shp.graphics.moveTo(10,10);
//        shp.graphics.lineTo(100,20);
//        shp.graphics.lineTo(167,76);
//        shp.graphics.lineTo(221,70);
//        shp.graphics.lineTo(290,89);
//        shp.graphics.lineTo(320,112);
//        shp.graphics.lineTo(360,250);
//        shp.graphics.lineTo(443,174);
//        shp.graphics.endFill();
//        this.addChild( shp );
//    }
//} 
//demo5  绘制曲线  (二次贝塞尔曲线)
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.graphics.lineStyle(2,0x00ff00);
//        shp.graphics.moveTo(50,50);
//        shp.graphics.curveTo(100,100,200,50);
//        shp.graphics.endFill();
//        this.addChild(shp);
//    }
//    
//}
//demo6 绘制圆弧 
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.graphics.beginFill(0x1122cc);
//        shp.graphics.drawArc(200,200,100,0,Math.PI,true);
//        shp.graphics.endFill();
//        this.addChild(shp);
//    }
//    
//}
//demo7 多个形状的绘制
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var shp:egret.Shape = new egret.Shape();
//        shp.x = 200;
//        shp.y = 200;
//        
//        shp.graphics.beginFill(0x1122cc);
//        shp.graphics.drawRect(0,0,50,50);
//        shp.graphics.endFill();
//        
//        shp.graphics.beginFill(0xff0000);
//        shp.graphics.drawRect(50,50,50,50);
//        shp.graphics.endFill();
//        
//        shp.graphics.beginFill(0x00ff00);
//        shp.graphics.drawRect(50,0,50,50);
//        shp.graphics.endFill();
//        
//        shp.graphics.beginFill(0x0000ff);
//        shp.graphics.drawRect(0,50,50,50);
//        shp.graphics.endFill();
//        this.addChild(shp);
//    }
//    
//}
//demo8 自定义容器
//法一
//class Main extends egret.Sprite{
//    public constructor(){
//        super();
//        this.drawGrid()
//    }
//    
//    private drawGrid(){
//        
//        this.graphics.beginFill(0x000000);
//        this.graphics.drawRect(0,0,50,50);
//        this.graphics.endFill();
//        
//        this.graphics.beginFill(0xff0000);
//        this.graphics.drawRect(50,50,50,50);
//        this.graphics.endFill();
//        
//        this.graphics.beginFill(0x00ff00);
//        this.graphics.drawRect(50,0,50,50);
//        this.graphics.endFill();
//        
//        this.graphics.beginFill(0x0000ff);
//        this.graphics.drawRect(0,50,50,50);
//        this.graphics.endFill();
//        
//    }
//    
//}
//法二   (失败  实例化)
//
//class GridSprite extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        
//        var _myGrid:GridSprite = new GridSprite();
//        this.addChild(_myGrid);
//    
//        
//        
//    }
//
//    
//}
//demo9 添加对象到显示对象
//
//var spr:egret.Sprite = new egret.Sprite();
//spr.graphics.beginFill(0x00ff00);
//spr.graphics.drawRect(0,0,100,100);
//spr.graphics.endFill();
//this.addChild(spr);
//
// 删除对象到显示对象
//
//this.removeChild(spr);
//demo10 相对于坐标系
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var sprcon1 : egret.Sprite = new egret.Sprite();
//        sprcon1.graphics.beginFill(0x00ff00);
//        sprcon1.graphics.drawRect(0,0,100,100);
//        sprcon1.graphics.endFill();
//        this.addChild(sprcon1);
//        sprcon1.x = 120;
//        
//        var sprcon2 : egret.Sprite = new egret.Sprite();
//        sprcon2.graphics.beginFill(0x00ff00);
//        sprcon2.graphics.drawRect(0,0,100,100);
//        sprcon2.graphics.endFill();
//        this.addChild(sprcon2);
//        sprcon2.y = 130;
//        
//        var spr : egret.Sprite = new egret.Sprite();
//        spr.graphics.beginFill(0xff0000);
//        spr.graphics.drawRect(0,0,50,50);
//        spr.graphics.endFill();
//        this.addChild(spr);
//        spr.x = 10;
//        spr.y = 10;
//        
//        sprcon2.addChild(spr);
//    }
//    
//}
//demo11 删除操作的注意点
//class Main extends egret.DisplayObjectContainer{
//    public constructor(){
//        super();
//        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//    }
//    
//    private onAddToStage(event:egret.Event){
//        var sprcon1 : egret.Sprite = new egret.Sprite();
//        sprcon1.graphics.beginFill(0x00ff00);
//        sprcon1.graphics.drawRect(0,0,100,100);
//        sprcon1.graphics.endFill();
//        this.addChild(sprcon1);
//        sprcon1.x = 120;
//        
//        var sprcon2 : egret.Sprite = new egret.Sprite();
//        sprcon2.graphics.beginFill(0x00ff00);
//        sprcon2.graphics.drawRect(0,0,100,100);
//        sprcon2.graphics.endFill();
//        this.addChild(sprcon2);
//        sprcon2.y = 130;
//        
//        var spr : egret.Sprite = new egret.Sprite();
//        spr.graphics.beginFill(0xff0000);
//        spr.graphics.drawRect(0,0,50,50);
//        spr.graphics.endFill();
//        this.addChild(spr);
//        spr.x = 10;
//        spr.y = 10;
//          
//        if(spr.parent){
//            spr.parent.removeChild(spr);
//        }
//        sprcon2.addChild(spr);
//        
//    }
//    
//}
//demo12  遮罩与碰撞检测
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onStage, _this);
        return _this;
    }
    Main.prototype.onStage = function (evt) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onStage, this);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configcom, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    Main.prototype.configcom = function (evt) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configcom, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    };
    Main.prototype.onResourceLoadComplete = function (evt) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        this.init();
    };
    Main.prototype.init = function () {
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('resource/assets/bg.jpg');
        bmp.width = 400;
        bmp.height = 300;
        this.addChild(bmp);
    };
    return Main;
}(egret.Sprite));
__reflect(Main.prototype, "Main");
