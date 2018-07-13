var operate = {
    login_url: 'http://gzyy.zcfgoagain.com',

    init: function () {
    },

    is_login_page: function(url) {
        return url.endsWith('com') || url.endsWith('com/') || url.indexOf('.com/login') != -1;
    },

    login: function (usr, psw) {
        $('#userNameFld').sendkeys(usr);
        $('#passwordFld').sendkeys(psw);
        $('.form input[type=checkbox]').click()
        // $('.form button').click();
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            $(".exit").click();
        }
        else {
            window.location.reload();
        }
    }
};