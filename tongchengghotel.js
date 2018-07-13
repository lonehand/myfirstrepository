var operate = {
    login_url: 'http://ebk.17u.cn/ghotel/Account/Login',
    logout_url: 'http://ebk.17u.cn/ghotel/Account/LogOut',

    init: function () {
    },

    is_login_page: function(url) {
        url = url.toLowerCase();
        return url.indexOf('login') != -1 || url.indexOf('logon') != -1;
    },

    login: function (usr, psw, gid) {
        if ($('#LoginName').size() > 0) {
            $('#LoginName').val(usr);
            $('#Password').val(psw);
            $('#tc_vcode_input').focus();
        }
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};