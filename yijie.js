var operate = {
    login_url: 'http://gdws.nsenz.com/admin/login',
    init: function () {
    },

    is_login_page: function(url) {
        return url.endsWith('admin') || url.endsWith('login');
    },

    login: function (usr, psw) {
        $('#j_username').val(usr);
        $('#j_password').val(psw);
        $('#j_checkcode').focus();
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            window.location.href = this.login_url;
        }
        else {
            window.location.reload();
        }
    }
};