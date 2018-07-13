/**
 * Created by Linbingfeng on 2017/4/10.
 */
var operate = {
    login_url: 'passport.mafengwo.cn',
    logout_url: 'https://www.mafengwo.cn/s/loginout.html',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
        $('[name=passport]').val(usr);
        $('[name=password]').val(psw);
        //$('#js-sub-login')[0].click()
    },

    logout: function () {
        window.location.href = "https://passport.mafengwo.cn/?return_url=https%3A%2F%2Fseller.mafengwo.cn%2F";
    }
};