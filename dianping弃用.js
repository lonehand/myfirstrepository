var operate = {
    login_url: 'http://e.dianping.com/slogin',
    logout_url: 'http://e.dianping.com/slogout',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf('e.dianping.com/slogin') != -1;
    },

    login: function (usr, psw) {
        //setTimeout('window.location.href="http://e.dianping.com/hotel/zeus/loadSpuctl"', 800);
        //$('.btn-submit').click();
        var txt1 = "$('#username').val('" + usr + "');$('#password').val('" + psw + "');";
        setTimeout(txt1, 800);
        //setTimeout('window.location.href="http://e.dianping.com/hotel/zeus/loadSpuctl"', 2000);
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            window.location.href = this.logout_url;
        }
        else{
            window.location.reload();
        }
    }
};