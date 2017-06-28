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
 * @author
 *
 */
var Websocket = (function (_super) {
    __extends(Websocket, _super);
    function Websocket() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createGameScene, _this);
        return _this;
    }
    Websocket.prototype.createGameScene = function () {
        this.Websocket = new egret.WebSocket;
        this.Websocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.Websocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.Websocket.connect('echo.websocket.org', 80);
    };
    Websocket.prototype.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("The connection is successful,send data:" + cmd);
        this.Websocket.writeUTF(cmd);
    };
    Websocket.prototype.onReceiveMessage = function (e) {
        var msg = this.Websocket.readUTF();
        console.log("Receive data" + msg);
    };
    return Websocket;
}(egret.DisplayObjectContainer));
__reflect(Websocket.prototype, "Websocket");
