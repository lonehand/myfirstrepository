var operate = {
    login_url: 'http://ebk.17u.cn/ivacation/home/login',
    logout_url: 'http://ebk.17u.cn/ivacation/home/logout',

    init: function () {
    },

    is_login_page: function(url) {
        url = url.toLowerCase();
        return url.indexOf('logon') != -1 || url.indexOf('login') != -1;
    },

    login: function (usr, psw, gid) {
        if ($('#LoginName').size() > 0) {
            $('#LoginName').val(usr);
            $('#password').val(psw);
            $('#checkCode').focus();
        }
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};