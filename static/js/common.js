/** 系统公共配置，公共方法  **/

//系统配置
var sysconfig = {
	url:'http://47.74.183.195:8088'
    //url:'http://localhost:8088'
}

/**
 * 右下角显示信息，淡蓝色方块
 * @param msg
 */
function showMsg(msg, type, offset) {
    var type = type == null ? "info" : type;
    var offset = offset == null ? {from: 'bottom', amount: 20} : offset;
    $.bootstrapGrowl(msg,
        {
            ele: 'body', // which element to append to
            type: type, // (null, 'info', 'danger', 'success')，三种显示样式，INFO（天蓝色），danger（淡红色），success（淡绿色）
            offset: offset, // 'top', or 'bottom'
            align: 'right', // ('left', 'right', or 'center')
            width: 'auto', // (integer, or 'auto')
            delay: 2000,	//延迟4s，即4s后消失
            allow_dismiss: true,
            stackup_spacing: 10 // spacing between consecutively stacked growls.
        }
    );
}
