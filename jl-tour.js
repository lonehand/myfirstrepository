var operate = {
    login_url: 'http://ebooking.jl-tour.com/login/login.jsp',
    logout_url: 'http://ebooking.jl-tour.com/authority/authorityAction!supplierOut.action',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
        if ($('#username').size() > 0) {
            $('#customername').val(gid);
            $('#username').val(usr);
            $('#password').val(psw);
            $('#checkcode').focus();
        }
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};