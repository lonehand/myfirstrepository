/**
 * Created by Linbingfeng on 2017/4/10.
 */
var operate = {
    login_url: 'https://user.qunar.com/passport/login.jsp',
    logout_url:'http://user.qunar.com/logout.jsp?ret=https://tb2cadmin.qunar.com/',
    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {

        $(".qrlayer").css("display","none")
        $('input[name="username"]').val(usr);
        $('input[name="password"]').val(psw);
        document.getElementsByClassName("psw")[0].click();
        $("input[name='vcode']").focus();

    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};
