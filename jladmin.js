/**
 * Created by linbingfeng on 2017/7/11.
 */
var operate = {
    login_url: 'http://ebooking.jladmin.cn/login/login.html',
    logout_url: 'http://ebooking.jl-tour.com/authority/authorityAction!supplierOut.action',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
            $('#accountCode').val(gid);
            $('#usernameid').val(usr);
            $('#passwordid').val(psw);
            $('#checkcodeid').focus();
    },

    logout: function () {
        window.location.href = this.login_url;
    }
};