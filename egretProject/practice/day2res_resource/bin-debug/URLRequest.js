/**
 *
 * @author
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var URLRequest = (function (_super) {
    __extends(URLRequest, _super);
    function URLRequest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    URLRequest.prototype.onAddToStage = function (evt) {
        var urlreq = new egret.URLRequest('http://httpbin.org/user-agent');
        var urlloader = new egret.URLLoader();
        urlloader.addEventListener(egret.Event.COMPLETE, function (evt) {
            console.log(evt.target.data);
        }, this);
        urlloader.load(urlreq);
    };
    return URLRequest;
}(egret.DisplayObjectContainer));
__reflect(URLRequest.prototype, "URLRequest");
