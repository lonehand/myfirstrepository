var operate = {
    login_url: 'http://www.zcfgoagain.com/',
    logout_url: 'http://myxsf.zcfgoagain.com/login?lang=zh-CN',
    init: function () {
    },

    is_login_page: function(url) {
        return url == "http://www.zcfgoagain.com/";
    },
    /*login: function (usr, psw) {
        $('#userNameFld').click();
        $('#userNameFld').val(usr);
        $('#passwordFld').click();
        $('#passwordFld').val(psw);
    },*/
    login: function (usr, psw) {
        var url1 = window.location.href;
        // if ($('#login').length > 0  || url1.indexOf("epassport.meituan.com/bizverify/captcha") != -1) {
        //     $('#login').val(usr);
        //     $('#password').val(psw);
        // }
        if ($('#login').length > 0  || url1.indexOf("www.zcfgoagain.com") != -1) {
            // ajaxCallUrl = "https://epassport.meituan.com/account/loginv2?service=lvyou&continue=https://lvyou.meituan.com/rimet/out/auth/redirect?feclient=lvyou_web&redirect=http://mpc.meituan.com/redirect.html?goto=http://mpc.meituan.com?goto=&part_type=0&bg_source=5";
            ajaxCallUrl = "http://myxsf.zcfgoagain.com/rbac/api/usr/login"
                setTimeout(
                    function () {
                        var c_url = window.location.href;
                        $.ajax({
                            cache: true,
                            type: "POST",
                            contentType : "application/json; charset=utf-8",
                            url: ajaxCallUrl,
                            dataType : "json",
                            data: JSON.stringify({
                                userName: "hta9008fu98", 
                                password: "54b63f7cac972397c4a8e4c73850e44a", 
                                auto: 0, 
                                redirectUrl: ""
                            }),
                            async: false,
                            error: function (request) {
                                window.location.href = "http://myxsf.zcfgoagain.com/rbac/api/usr/login";
                            },
                            success: function (data) {
                                // $("#commonLayout_appcreshi").parent().html(data);
                                var cur_url = window.location.href;
                                if (cur_url.indexOf("www.zcfgoagain.com/login") != -1){
                                    window.location.href = "http://myxsf.zcfgoagain.com/web/order/mylist";
                                }else{
                                    if (usr == "hta9008fu98"){
                                        window.location.href = "http://myxsf.zcfgoagain.com/web/order/mylist";
                                    }else {
                                        alert('登陆出错！')
                                    }
                                }
                            }
                        });
                        }, 500)
            }
    },
    logout: function () {
        window.location.href = "http://www.zcfgoagain.com/";
    },
    inject_script: function (script) {
        $(document).ready(function(){
            scriptNode = document.createElement('script');
            scriptNode.textContent  = script;
            document.body.appendChild(scriptNode);
        });
    }
}