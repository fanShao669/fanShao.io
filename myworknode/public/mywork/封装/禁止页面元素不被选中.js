/**
 * Created by zxf111 on 2016/8/23.
 */
//��ֹҳ��Ԫ�ز���ѡ��//***************************************************
if(document.all){
    document.onselectstart= function(){return false;}; //for ie
}else{
    document.onmousedown= function(){return false;};
    document.onmouseup= function(){return true;};
}
document.onselectstart = new Function('event.returnValue=false;');

//*************************************************************************