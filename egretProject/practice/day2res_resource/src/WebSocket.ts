/**
 *
 * @author 
 *
 */
class Websocket extends egret.DisplayObjectContainer{
	public constructor() {
    	super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createGameScene,this);
	}
	
	
	private Websocket:egret.WebSocket;
	private createGameScene():void{
	    this.Websocket = new egret.WebSocket;
	    this.Websocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
	    this.Websocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
	    this.Websocket.connect('echo.websocket.org',80)
	}
	
	private onSocketOpen():void{
	    var cmd = "Hello Egret WebSocket";
	    console.log("The connection is successful,send data:" + cmd);
    
	    this.Websocket.writeUTF(cmd);
	}
	
	private onReceiveMessage(e:egret.Event):void{
	    var msg = this.Websocket.readUTF();
	    console.log("Receive data" + msg);
	}
	
}
