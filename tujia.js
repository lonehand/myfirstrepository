var operate = {
    login_url: 'http://www.tujia.com/Account/Login/',
    logout_url: 'https://passport.tujia.com/PortalSite/Logout',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf('tujia') != -1 && url.indexOf('ogin') != -1;
    },

    login: function (usr, psw) {
        $('#username').val(usr);
        $('#pwd').val(psw);
        //$('.login-btn').click();
    },

    logout: function () {
        var url = window.location.href;
        if(this.is_login_page(url)) {
            window.location.reload();
        }
        else{
            if($('.iLogout').size() > 0){
                $('.iLogout')[0].click();
                window.location.href = this.login_url;
            }
            else if($('.logout-btn').size() > 0){
                $('.logout-btn')[0].click();
                window.location.href = this.login_url;
            }
            else {
                window.location.href = 'https://passport.tujia.com/Landlord/Logout';
            }
        }
    }
};

$(function () {
    var url = window.location.href;
    if (url == 'http://www.tujia.com/'){
        window.location.href = 'http://vip.tujia.com/UserInfo/OrderList';
    }
});