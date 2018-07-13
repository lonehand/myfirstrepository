function removeCookie(cookie) {
    var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain +
        cookie.path;
    chrome.cookies.remove({"url": 'http://3f.meituan.com', "name": cookie.name});
}

function getCode(){
    vcode = prompt("亲，请输入验证码:","");
    if (vcode != null){
        return vcode
    }else{
        alert("亲，你按了[取消]按钮");
    }
}

function get_captcha_v_token(c_url) {
    var token = '';
    if(c_url.indexOf("captcha_v_token")!=-1){
        var index = c_url.indexOf("captcha_v_token");
        var captcha_v_token = c_url.substring(index);
        var captcha_v_token_arr = captcha_v_token.split("&");
        captcha_v_token_arr = captcha_v_token_arr[0].split("=")
        var token =  captcha_v_token_arr[1];
    }
    return token;
}
var operate = {
    login_url: 'http://3f.meituan.com/#/login',
    // logout_url: 'http://3f.meituan.com/#/login',
    logout_url: 'http://eb.meituan.com/account/logout',

    init: function () {

    },

    is_login_page: function (url) {
        return (url.indexOf('epassport') != -1 || url.indexOf('login') != -1) && url.indexOf('meituan') != -1;
    },

    login: function (usr, psw) {
        var url1 = window.location.href;
        // $("[ng-click$='$ctrl.logout()']").click();
        // if(url.indexOf("eb.") != -1){
        //     window.location.href = this.login_url;
        // }
        if(usr=='zhangyuemeidp'){
            $('#account-login-name').val(usr);
            $('#account-login-password').val(psw);
            $('#captcha-id').focus();
        }
        else if ($('#login').length > 0  || url1.indexOf("epassport.meituan.com/bizverify/captcha") != -1) {
            ajaxCallUrl = "https://epassport.meituan.com/account/loginv2?service=lvyou&continue=https://lvyou.meituan.com/rimet/out/auth/redirect?feclient=lvyou_web&redirect=http://3f.meituan.com/redirect.html?goto=http://3f.meituan.com?goto=&part_type=0&bg_source=5";
            ajaxCallUrl = "https://epassport.meituan.com/api/account/login?service=lvyou&bg_source=5&loginContinue=http:%2F%2Flvyou.meituan.com%2Frimet%2Fout%2Fauth%2Fredirect%3Ffeclient%3Dlvyou_web%26redirect%3Dhttp%253A%252F%252F3f.meituan.com%252Fredirect.html%253Fgoto%253Dhttp%25253A%25252F%25252F3f.meituan.com%253Fgoto%253D"
            setTimeout(
                function () {
                    var c_url = window.location.href;
                    var captcha_v_token = get_captcha_v_token(c_url);
                    if(c_url.indexOf("epassport.meituan.com/bizverify/captcha") != -1){
                        $.post(ajaxCallUrl,
                            {
                                login:usr,
                                password:psw,
                                part_key:'',
                                captcha_code:getCode(),
                                captcha_v_token:captcha_v_token,
                                sms_verify:0,
                                sms_code:''
                            },
                            function(data,status){
                                //var data_json = eval('('+data+')');
                                var cur_url = window.location.href;
                                if (data.error){
                                    alert("亲，登陆频繁，出现验证码。");
                                    var timestamp=new Date().getTime();
                                    window.parent.location.href ="https://epassport.meituan.com/bizverify/captcha?verify_event=1&captcha_v_token="+data.error.captcha_v_token+"&"+timestamp;
                                    //window.parent.location.href = "https://epassport.meituan.com/account/unitivelogin?bg_source=5&service=lvyou&continue=http%3A%2F%2Flvyou.meituan.com%2Frimet%2Fout%2Fauth%2Fredirect%3Ffeclient%3Dlvyou_web%26redirect%3Dhttp%253A%252F%252F3f.meituan.com%252Fredirect.html%253Fgoto%253Dhttp%25253A%25252F%25252F3f.meituan.com%253Fgoto%253D";
                                } else{
                                    if (cur_url.indexOf("eb.meituan.com/account/login") != -1){
                                        window.location.href = "http://3f.meituan.com/#/ticket/";
                                    }else{
                                        if (usr == "gzkulv" || usr =="yaochufa001"){
                                           // window.location.reload();
                                            // chrome.tabs.create({ url: 'http://3f.meituan.com/' });
                                            // window.open("http://3f.meituan.com/");
                                            window.location.href  = "http://3f.meituan.com/";
                                        }else if(usr == 'dggzkl'){
                                            window.location.href = "http://eb.meituan.com/eb/workbench";
                                        }
                                    }
                                }
                            })
                    }else {
                        $('#login').val(usr);
                        $('#password').val(psw);
                        $.post(ajaxCallUrl,
                            {
                                login:usr,
                                password:psw,
                                part_key:'',
                                captcha_code:'',
                                captcha_v_token:'',
                                sms_verify:0,
                                sms_code:''
                            },
                            function(data,status){
                                //var data_json = eval('('+data+')');
                                var cur_url = window.location.href;
                                if (data.error){
                                    alert("亲，登陆频繁，出现验证码。");
                                    var timestamp=new Date().getTime();
                                    window.parent.location.href ="https://epassport.meituan.com/bizverify/captcha?verify_event=1&captcha_v_token="+data.error.captcha_v_token+"&"+timestamp;
                                    //window.parent.location.href = "https://epassport.meituan.com/account/unitivelogin?bg_source=5&service=lvyou&continue=http%3A%2F%2Flvyou.meituan.com%2Frimet%2Fout%2Fauth%2Fredirect%3Ffeclient%3Dlvyou_web%26redirect%3Dhttp%253A%252F%252F3f.meituan.com%252Fredirect.html%253Fgoto%253Dhttp%25253A%25252F%25252F3f.meituan.com%253Fgoto%253D";
                                }else{
                                    if (cur_url.indexOf("eb.meituan.com/account/login") != -1){
                                        window.location.href = "http://3f.meituan.com/#/ticket/";
                                    }else{
                                        if (usr == "gzkulv" || usr =="yaochufa001"){
                                            window.location.href = "http://3f.meituan.com/";
                                            // window.open("http://3f.meituan.com/");
                                        }else if(usr == 'dggzkl'){
                                            window.location.href = "http://eb.meituan.com/eb/workbench";
                                        }
                                    }
                                }
                            })
                    }
                }, 500)
            // this.login_monitor(usr,psw,url1)
        }
    },

    logout: function () {
        var url = window.location.href;
        if (this.is_login_page(url)) {
           window.location.reload();
        } else {
            // $("[ng-click$='$ctrl.logout()']").click();
            // window.location.href = "http://3f.meituan.com/#/ticket/"
            $(".dropdown-menu li:eq(1)").click();
            if (url.indexOf('eb.') >= 0) {
                window.location.href = this.logout_url;
            }
            else if (url.indexOf('ep.') >= 0) {
                document.getElementsByClassName('dropdown-list')[0].getElementsByTagName('a')[3].click();
            }else if(url.indexOf("e.dianping.com") != -1){
                document.getElementsByClassName('status')[0].click();
            }else{
                document.getElementsByClassName('dropdown-menu')[0].getElementsByTagName('a')[1].click();
            }
        }

    },
    login_monitor: function (usr, psw,t_url) {
        ajaxCallUrl = "https://epassport.meituan.com/account/loginv2?service=lvyou&continue=https://lvyou.meituan.com/rimet/out/auth/redirect?feclient=lvyou_web&redirect=http://3f.meituan.com/redirect.html?goto=http://3f.meituan.com?goto=&part_type=0&bg_source=5";
        setTimeout(
            function () {
                $('#login').val(usr);
                $('#password').val(psw);
                $.ajax({
                    cache: true,
                    type: "POST",
                    url: ajaxCallUrl,
                    data: $('#login-form').serialize(),// 你的formid
                    // data: $('#login-form').submit(),
                    async: true,
                    error: function (request) {
                        window.location.href = "https://epassport.meituan.com/account/unitivelogin?bg_source=5&service=lvyou&continue=http%3A%2F%2Flvyou.meituan.com%2Frimet%2Fout%2Fauth%2Fredirect%3Ffeclient%3Dlvyou_web%26redirect%3Dhttp%253A%252F%252F3f.meituan.com%252Fredirect.html%253Fgoto%253Dhttp%25253A%25252F%25252F3f.meituan.com%253Fgoto%253D";
                    },
                    success: function (data) {
                        // $("#commonLayout_appcreshi").parent().html(data);
                        var cur_url = window.location.href;
                        if (cur_url.indexOf("eb.meituan.com/account/login") != -1){
                            window.location.href = "http://3f.meituan.com/#/ticket/";
                        }else{
                            if (usr == "gzkulv" || usr =="yaochufa001"){
                                // window.location.href = "http://eb.meituan.com/eb/workbench";
                                window.location.href = "http://3f.meituan.com/#/ticket/";
                            }else if(usr == 'dggzkl'){
                                window.location.href = "http://eb.meituan.com/eb/workbench";
                            }
                        }
                    }
                });
            }, 500
        )
    }
};
