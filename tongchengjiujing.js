var operate = {
    login_url: 'http://ebk.17u.cn/zizhuyou/Account/LogOn',
    logout_url: 'http://ebk.17u.cn/zizhuyou/Account/LogOut',

    init: function () {
    },

    is_login_page: function(url) {
        url = url.toLowerCase();
        return url.indexOf('logon') != -1 || url.indexOf('login') != -1;
    },

    login: function (usr, psw, gid) {
        if ($('input[name=UserName]').size() > 0) {
            $('input[name=UserName]').val(usr);
            $('input[name=UserPassWord]').val(psw);
            $('#validCode').focus();
        }
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};