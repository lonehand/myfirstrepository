/**
 * Created by Linbingfeng on 2017/4/10.
 */
var operate = {
    login_url: 'https://shanghu.qdingnet.com',
    logout_url: 'https://shanghu.qdingnet.com',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
        this.login_monitor(usr,psw);
    },

    logout: function () {
        // window.location.href = this.logout_url;
        var url = window.location.href;
        if(url.indexOf("login") > 0){
            window.location.href = this.logout_url;
        }else{
            document.getElementsByClassName('logout')[0].click();

        }
    },
    login_monitor: function (usr, psw) {
        ajaxCallUrl = "https://qd.qdingnet.com/managerbg/home/loginByMobile?callback=angular.callbacks._0&mobile="+usr+"&orgTypeFlag=sh&password="+psw+"&remember=false"
        setTimeout(
            function () {
                $("input[name$='name']").val(usr);
                $("input[name$='pwd']").val(psw);
                $.ajax({
                    cache: true,
                    type: "GET",
                    url: ajaxCallUrl,
                    data: $('[name$="form"]').serialize(),// 你的formid
                    async: false,
                    error: function (request) {
                        alert("Connection error");
                    },
                    success: function (data) {
                        // $("#commonLayout_appcreshi").parent().html(data);
                        window.location.href = "https://shanghu.qdingnet.com/#/home";
                    }
                });
            }, 500
        )
    }
};