/**
 * Created by Linbingfeng on 2017/4/24.
 */
var operate = {
    login_url: 'http://www.10000s.com/mall/LoginManager-toReLogin.action?fromPage=aHR0cDovL3d3dy4xMDAwMHMuY29tLy9tYWxsL01haW4tdG9Mb2FkLmFjdGlvbj8mX3NfZF9mX21jPTE',
    logout_url: 'http://www.10000s.com//mall/mall/LoginManager-toLoginOut.action',
    init: function () {
    },

    is_login_page: function(url) {
        return url.toLowerCase().indexOf('login') != -1;
    },
    login: function (usr, psw) {
        $('#userName').val(usr);
        $('#password').val(psw);
        $('#authCode').focus();
    },
    logout: function () {
        var url = window.location.href;
        if (this.is_login_page(url)){
            window.location.reload();
        }else{
            window.location.href = this.logout_url;
        }
        // document.getElementsByClassName("top-info-wd110 introNode")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0].click();
       // window.location.href = this.logout_url;
        // if (this.is_login_page(window.location.href)){
        //     this.inject_script('silbar.logout()');
        //     window.location.href = this.logout_url;
			// }
			// else{
        //     window.location.reload();
        // }
    }
}