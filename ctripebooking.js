/**
 * Created by Linbingfeng on 2017/5/5.
 */
var operate = {
    login_url: 'http://ebooking.ctrip.com/ebkassembly/login.aspx',
    logout_url: 'http://ebooking.ctrip.com/ebkassembly/login.aspx',

    init: function () {
    },

    is_login_page: function(url) {
        return url.toLowerCase().indexOf('login') != -1;
    },

    login: function (usr, psw, gid) {
        $('#userName').val(usr);
        $('#userPwd').val(psw)
    },

    logout: function () {
        window.location.href = this.logout_url;
        // var url = window.location.href;
        // if(this.is_login_page(url)) {
        //     window.location.href = this.login_url;
        // }
        // else{
        //     $('#logout').click();
        //     // window.location.href = this.logout_url;
        // }
    }
};
