var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @fanShao
 *
 */
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(cx, cy, cr) {
        var _this = _super.call(this) || this;
        _this.colorList = [13408665, 16777113, 6710937, 16750848];
        _this.init(cx, cy, cr);
        return _this;
    }
    //	, 16776960, 39372, 13421721, 13382553, 10079232,16737894,16776960,3381708,13395456,4006699,13421619,
    //	16750899,1677792,1677062,39270,13395507,16764057,13395456,13369446,39321,16763988
    Circle.prototype.randomColor = function () {
        return this.colorList[Math.round(Math.random() * this.colorList.length)];
    };
    Circle.prototype.init = function (cx, cy, cr) {
        this.color = this.randomColor();
        this.shape = new egret.Shape();
        this.shape.graphics.beginFill(this.color);
        this.shape.graphics.drawCircle(0, 0, cr);
        this.shape.graphics.endFill();
        //设定矢量圆的位置为父类中心点
        this.shape.x = -cr;
        this.shape.y = -cr;
        this.shapex = cx;
        this.shapey = cy;
        this.shaper = cr;
        this.touchEnabled = !0;
        //监听用户的移动与触摸事件
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this, !1);
        this.addChild(this.shape);
        this.x = cx;
        this.y = cy;
    };
    Circle.prototype.onTouch = function (e) {
        var par = this.parent;
        par.dispatchEventWith(Circle.Event_Click, false, this.color);
        this.touchEnabled = !1;
        var tween = egret.Tween.get(this);
        tween.to({ alpha: 0.1 }, 500, egret.Ease.sineOut);
        tween.call(function () {
            this.visible = !1;
            par.removeChild(this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        }, this);
        var circleList = [];
        var tweenList = [];
        var radius = this.shaper / 2;
        var tempx;
        var tempy;
        var tempr;
        var g = 0;
        for (var i = 0; i < 2; i++)
            for (var t = 0; t < 2; t++) {
                tempx = this.shapex - this.shaper + radius * 2 * t;
                tempy = this.shapey - this.shaper + radius * 2 * i;
                circleList[g] = new Circle(tempx, tempy, radius);
                circleList[g].alpha = 0.1;
                circleList[g].scaleX = 0.8;
                circleList[g].scaleY = 0.8;
                par.addChild(circleList[g]);
                tweenList[g] = egret.Tween.get(circleList[g]);
                tweenList[g].to({ alpha: 1, scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
                g++;
            }
    };
    ;
    return Circle;
}(egret.Sprite));
Circle.Event_Click = "event_click";
__reflect(Circle.prototype, "Circle");
