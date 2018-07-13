var operate = {
    login_url: 'https://shanghu.qunar.com/passport/login',
    logout_url: 'http://hota.qunar.com/logout',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
        $('[name=username]').val(usr);
        $('[name=password]').val(psw);
        //$('#js-sub-login')[0].click()
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};