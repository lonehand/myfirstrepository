var operate = {
    login_url: 'https://www.tuniu.cn/nbooking/login.html',

    init: function () {
    },

    is_login_page: function(url) {
        //console.log(url.indexOf(this.login_url) != -1);
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw) {
        $('[name=username]').val(usr);
        $('[name=password]').val(psw);
        $('[name=identify]').focus();
        //console.log('login');
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            //console.log($("#logout_a")[0])
            $("#logout_a")[0].click();
        }
        else {
            window.location.reload();
        }
    }
};