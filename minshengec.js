/**
 * Create by Linbingfeng 20180105
 * @type {{login_url: string, init: operate.init, is_login_page: operate.is_login_page, login: operate.login, logout: operate.logout}}
 */
var operate = {
    login_url: 'http://shop.minshengec.com/login.htm',
    init: function () {
    },

    is_login_page: function(url) {
        // return url.toLowerCase().indexOf('login') != -1;
        return url.indexOf(this.login_url) != -1;
    },
    login: function (usr, psw) {
        $('#userName').val(usr);
        $('#password').val(psw);
        $('#checkCode').focus();
    },
    logout: function () {
        var url = window.location.href;
        if (this.is_login_page(url)){
            window.location.reload();
        }else{
            window.location.href = this.login_url;
        }

    }
}