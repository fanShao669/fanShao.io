/**
 * Created by zxf111 on 2016/8/22.
 */
//��ȡ���м���ʽ
function getStyle(obj,name)
{

    //iE
    if(obj.currentStyle)
    {
        return  parseInt(obj.currentStyle[name]);
    }
    else
    {
        //FF
        return parseInt(getComputedStyle(obj,null)[name]);

    }
}