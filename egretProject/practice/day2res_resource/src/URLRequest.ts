/**
 *
 * @author 
 *
 */

class URLRequest extends egret.DisplayObjectContainer {
    
     public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
     }
     
     private onAddToStage(evt:egret.Event){
        
         var urlreq: egret.URLRequest = new egret.URLRequest('http://httpbin.org/user-agent');
        
         var urlloader:egret.URLLoader = new egret.URLLoader();
         urlloader.addEventListener(egret.Event.COMPLETE,function(evt:egret.Event){
             console.log(evt.target.data);
        },this);
         urlloader.load(urlreq);
         
         
     }
}