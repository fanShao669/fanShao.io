class AnimatinoPanel extends eui.Component{
    constructor(){
        super();
        //设置当前面板的皮肤
    RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
    }
    private init():void{
    // EXML.load("resource/animation/card.exml",this.onLoaded,this);
    EXML.load("resource/skins/eui.card",this.onLoaded,this);
    }
    private onLoaded(clazz:any,url:string):void{
        var button = new eui.Button();  
        button.skinName = clazz;
        // button.width = 100;
        // button.height = 200;
        // button.x = 200;
        // button.y = 200;
        this.addChild(button);
    }
    private onTweenItemComplete(event: egret.Event): void {
        const item = event.data as egret.tween.TweenItem;
        console.log(item.target);
        console.log('TweenItem play completed.');
    }
    public tweenGroup:egret.tween.TweenGroup;
    private onConfigComplete(event:egret.Event){
        this.tweenGroup.play();
    }
       private onTweenGroupComplete(): void {
        console.log('TweenGroup play completed.');
    }
    protected createChildren(): void {
        super.createChildren();
        // this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        // this.tweenGroup.addEventListener('itemComplete', this.onTweenItemComplete, this);
    }
}