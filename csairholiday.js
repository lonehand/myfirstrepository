/**
 * Created by Linbingfeng on 2017/9/11.
 */
var operate = {
    login_url: 'http://manager.csairholiday.com/',
    logout_url: '',
    init: function () {
    },

    is_login_page: function(url) {
        return url.toLowerCase().indexOf(this.login_url) != -1;
    },
    login: function (usr, psw) {
        $('#username').val(usr);
        $('#password').val(psw);
        $('#inputCode').focus();
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
