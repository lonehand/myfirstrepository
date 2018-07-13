var operate = {
    login_url: 'http://3f.meituan.com/#/login',
    // logout_url: 'http://3f.meituan.com/#/login',
    logout_url: 'http://eb.meituan.com/eb/logout',

    init: function () {

    },

    is_login_page: function (url) {
        return (url.indexOf('epassport') != -1 || url.indexOf('login') != -1) && url.indexOf('meituan') != -1;
    },

    login: function (usr, psw) {
        var url = window.location.href;
        // $("[ng-click$='$ctrl.logout()']").click();
        // if(url.indexOf("eb.meituan.com/account/login") != -1){
        //     $("#login").val(usr);
        //     $("#password").val(psw);
        // }else
        if ($('#login').length > 0) {
            // alert(url)
            // this.write_file(url);
            // var last_url = this.read_file();
            // alert(last_url)
            this.login_monitor(usr, psw);
        }
        else {
            $('#account-login-name').val(usr);
            $('#account-login-password').val(psw);
            $('#captcha-id').focus();
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
                window.location.href = "http://eb.meituan.com/account/logout";
            }else if(url.indexOf("e.dianping.com")){
                document.getElementsByClassName('status')[0].click();
            }
            // else if (url.indexOf('ep.') >= 0) {
            //     document.getElementsByClassName('dropdown-list')[0].getElementsByTagName('a')[3].click();
            // }
            else {
                document.getElementsByClassName('dropdown-menu')[0].getElementsByTagName('a')[1].click();
            }
        }

    },
    login_monitor: function (usr, psw) {
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
                    async: false,
                    error: function (request) {
                        alert("Connection error");
                    },
                    success: function (data) {
                        // $("#commonLayout_appcreshi").parent().html(data);
                        window.location.href = "http://eb.meituan.com/eb/workbench";
                    }
                });
            }, 500
        )
    }
};
