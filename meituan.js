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


function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ,'+','=','/'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
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
        // if ($('#login').length > 0  || url1.indexOf("epassport.meituan.com/bizverify/captcha") != -1) {
        //     $('#login').val(usr);
        //     $('#password').val(psw);
        // }
        if ($('#login').length > 0  || url1.indexOf("epassport.meituan.com/bizverify/captcha") != -1) {
            // ajaxCallUrl = "https://epassport.meituan.com/account/loginv2?service=lvyou&continue=https://lvyou.meituan.com/rimet/out/auth/redirect?feclient=lvyou_web&redirect=http://3f.meituan.com/redirect.html?goto=http://3f.meituan.com?goto=&part_type=0&bg_source=5";
            ajaxCallUrl = "https://epassport.meituan.com/api/account/login?service=lvyou&bg_source=5&loginContinue=https:%2F%2Flvyou.meituan.com%2Frimet%2Fout%2Fauth%2Fredirect%3Ffeclient%3Dlvyou_web%26redirect%3Dhttps%253A%252F%252F3f.meituan.com%252Fredirect.html&loginType=account"
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
                                "login": usr,
                                "part_key": "",
                                "password": psw,
                                "error": "",
                                "success": "",
                                "isFetching": false,
                                "loginType": "account",
                                "verifyRequestCode": "",
                                "verifyResponseCode": "",
                                "captchaCode": "",
                                "verifyType": null,
                                "rohrToken":randomWord(true,668,740)
                            }),
                            async: false,
                            error: function (request) {
                                window.location.href = "https://epassport.meituan.com/api/account/login?service=lvyou&bg_source=5&loginContinue=https:%2F%2Flvyou.meituan.com%2Frimet%2Fout%2Fauth%2Fredirect%3Ffeclient%3Dlvyou_web%26redirect%3Dhttps%253A%252F%252F3f.meituan.com%252Fredirect.html&loginType=account";
                            },
                            success: function (data) {
                                // $("#commonLayout_appcreshi").parent().html(data);
                                var cur_url = window.location.href;
                                if (cur_url.indexOf("eb.meituan.com/account/login") != -1){
                                    window.location.href = "https://3f.meituan.com/#/ticket/";
                                }else{
                                    if (usr == "gzkulv" || usr =="yaochufa001"){
                                        window.location.href = "https://3f.meituan.com/#/ticket/";
                                    }else if(usr == 'dggzkl'){
                                        window.location.href = "https://eb.meituan.com/eb/workbench";
                                    }else if(usr == 'gzkulvycf'){
                                        window.location.href = "https://awp.meituan.com/hfe/hotel-fe-ship-mis/main/index.html#/order";
                                    }else if(usr == 'zhangyuemeidp'){
                                        window.parent.location.href = "https://eo.dianping.com/epassport/home#/home?_k=cpyh7t"
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
                document.getElementsByClassName('userinfo--loginout')[0].click();
            }else if(url.indexOf('awp') != -1 || url.indexOf('shipagent') != -1){
                u = 'http://shipagent.meituan.com/bms/logout';
                $.get(u,function (result) {
                    window.location.href = 'http://shipagent.meituan.com/bms/loginInit';
                });
            }else if(url.indexOf('eo.dianping.com') != -1){
                   window.location.href = "https://eo.dianping.com/overseas/poseidon/mt/logout?target_url=https%3A%2F%2Feo.dianping.com%2Fepassport%2Fhome%23%2Fhome%3F_k%3Dcpyh7t";
            } else{
                document.getElementsByClassName('tbo-dropdown-menu')[0].getElementsByTagName('a')[3].click();
            }
        }

    }
};
