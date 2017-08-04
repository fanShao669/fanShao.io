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
var Ticker = (function (_super) {
    __extends(Ticker, _super);
    function Ticker() {
        var _this = _super.call(this) || this;
        _this.speed = 0.05;
        _this.time = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        return _this;
    }
    Ticker.prototype.onLoad = function (event) {
        var star = new egret.Bitmap(RES.getRes("star"));
        this.addChild(star);
        this.star = star;
        this.time = egret.getTimer();
        egret.startTick(this.moveStar, this);
    };
    Ticker.prototype.moveStar = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        console.log("moveStar", (1000 / pass).toFixed(5));
        this.time = now;
        return false;
    };
    return Ticker;
}(egret.DisplayObjectContainer));
__reflect(Ticker.prototype, "Ticker");
