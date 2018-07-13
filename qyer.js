/**
 * Created by Linbingfeng on 2017/4/10.
 */

function getCode(){
    vcode = prompt("请输入验证码:","");
    if (vcode != null){
        return vcode
    }else{
        alert("你按了[取消]按钮");
    }
}
var operate = {
    index_url : 'http://shop.qyer.com',
    login_url: 'http://shop.qyer.com/#/login',
    logout_url: 'http://shop.qyer.com/ajaxapi/auth/logout',
    login_status:false,

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf("shop.qyer.com") != -1;
    },

    login: function (usr, psw, gid) {
        setTimeout(
            function () {
                var cur_url = window.location.href;
                if(cur_url.indexOf("http://shop.qyer.com/#/login")!=-1){
                    ajaxCallUrl = 'http://shop.qyer.com/login.php?action=loginajax';
                    $.post(ajaxCallUrl,
                        {
                            account:usr,
                            password:psw,
                            code:getCode(),
                            remember:'true',
                        },
                        function(data,status){
                            var data_json = eval('('+data+')');
                            if(data_json.result=='ok'){
                                window.location.href='http://shop.qyer.com/';
                            }else{
                                alert('验证码错误或用户名密码错误！');
                                window.location.href='http://shop.qyer.com/';
                            }
                        });
                    // $('#login-form').submit();
                }
                }, 1300)

    },

    logout: function () {
            setTimeout(
                function () {
                    ajaxCallUrl = 'http://shop.qyer.com/ajaxapi/auth/logout';
                    $.post(ajaxCallUrl,
                        {},
                        function(data,status){
                            window.location.href='http://shop.qyer.com/';
                        });
                    // $('#login-form').submit();
                }, 500)

    }
};