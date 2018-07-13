var operate = {
    login_url_1: 'http://ebooking.lvmama.com/vst_ebooking/login.do',
    login_url_2:'http://ebooking.lvmama.com/vst_ebooking/index.do',
    login_url_3: 'http://ebooking.lvmama.com/vst_ebooking/loginOut.do',
    logout_url: 'http://ebooking.lvmama.com/vst_ebooking/loginOut.do',

    init: function () {
    },

    is_login_page: function(url) {
        //console.log(url.indexOf(this.login_url) != -1);
        return url.indexOf(this.login_url_1) != -1 || url.indexOf(this.login_url_2) != -1 || url.indexOf(this.login_url_3) != -1;
    },

    login: function (usr, psw) {
        $('#userName').val(usr);
        $('#password').val(psw);
        $('#validateCode').focus();
    },

    logout: function () {
        var url = window.location.href;
        if (!this.is_login_page(url)) {
            window.location.href = this.logout_url;
        }
        else {
            if(url.indexOf(this.login_url_1) != -1){
                window.location.reload();
            }else {
                window.location.href = this.logout_url;
            }

        }
    }
};