var operate = {
    login_url: 'http://yaochufa.fangcang.com/UIS/index.jsp',
    logout_url: 'http://yaochufa.fangcang.com/cas/login',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf('login') != -1;
    },

    login: function (usr, psw) {
        $('#username').val(usr);
        $('#password').val(psw);
        // $('#btn_login').click();
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            document.getElementsByClassName('sign_out')[0].click();
            $('.sign_out').click();
        }
        else{
            window.location.reload();
        }
    }
};