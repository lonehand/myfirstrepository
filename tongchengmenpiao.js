var operate = {
    login_url: 'http://ebk.17u.cn/jingqu/',
    logout_url: 'http://ebk.17u.cn/jingqu/Account/LoginOut',

    init: function () {
    },

    is_login_page: function(url) {
        url = url.toLowerCase();
        return url.indexOf('logon') != -1 || url.indexOf('login') != -1;
    },

    login: function (usr, psw, gid) {
        if ($('#uName').size() > 0) {
            $('#uName').val(usr);
            $('#uPwd').val(psw);
            $('#uCheckCode').focus();
        }
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};