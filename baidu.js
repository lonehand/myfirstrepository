var operate = {
    login_url: 'http://eb.miot.cn/',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf('login') != -1;
    },

    login: function (usr, psw) {
        $('#username').val(usr);
        $('#password').val(psw);
        // $('#loginbtn').click()
        // $('.form button').click();
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            window.location.href = '/star/user/logout'
        }
        else {
            window.location.reload();
        }
    }
};