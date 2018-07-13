/**
 * Created by Linbingfeng on 2017/4/10.
 */
var operate = {
    login_url: 'http://merchant.superhouse.com.cn/standard/order/list_A.htm',

    init: function () {
    },

    is_login_page: function(url) {
        //console.log(url.indexOf(this.login_url) != -1);
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw) {
        $('#inputUsername').val(usr);
        $('#inputPassword').val(psw);
        $('#randomCode').focus();
        //console.log('login');
    },

    logout: function () {
        window.location.href = this.login_url;
        // var url = window.location.href;
        // if (!this.is_login_page(url)) {
        //     //console.log($("#logout_a")[0])
        //     $("#logout_a")[0].click();
        // }
        // else {
        //     window.location.reload();
        // }
    }
};