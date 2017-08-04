var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnimatinoPanel = (function (_super) {
    __extends(AnimatinoPanel, _super);
    function AnimatinoPanel() {
        var _this = _super.call(this) || this;
        //设置当前面板的皮肤
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, _this.onConfigComplete, _this);
        return _this;
    }
    AnimatinoPanel.prototype.init = function () {
        // EXML.load("resource/animation/card.exml",this.onLoaded,this);
        EXML.load("resource/skins/eui.card", this.onLoaded, this);
    };
    AnimatinoPanel.prototype.onLoaded = function (clazz, url) {
        var button = new eui.Button();
        button.skinName = clazz;
        // button.width = 100;
        // button.height = 200;
        // button.x = 200;
        // button.y = 200;
        this.addChild(button);
    };
    AnimatinoPanel.prototype.onTweenItemComplete = function (event) {
        var item = event.data;
        console.log(item.target);
        console.log('TweenItem play completed.');
    };
    AnimatinoPanel.prototype.onConfigComplete = function (event) {
        this.tweenGroup.play();
    };
    AnimatinoPanel.prototype.onTweenGroupComplete = function () {
        console.log('TweenGroup play completed.');
    };
    AnimatinoPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        // this.tweenGroup.addEventListener('itemComplete', this.onTweenItemComplete, this);
    };
    return AnimatinoPanel;
}(eui.Component));
__reflect(AnimatinoPanel.prototype, "AnimatinoPanel");
