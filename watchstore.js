/**
 * Created by linbingfeng on 2017/7/4.
 */
var operate = {
    login_url: 'http://watchstore.scc-store.com:8801/c-store/programs/express_forExt.jsp',
    logout_url: 'http://watchstore.scc-store.com:8801/c-store/programs/express_forExt.jsp',
    init: function () {
    },

    is_login_page: function(url) {
        return url.toLowerCase().indexOf('watchstore.scc-store.com') != -1;
    },
    login: function (usr, psw) {
        $('#mftNo').val(usr);
        $('#mftPwd').val(psw);
        // setTimeout(
        //     function () {
        //         $('#mftNo').val(usr);
        //         $('#mftPwd').val(psw);
        //     },
        //     500
        // )
    },
    logout: function () {
        window.location.reload();
        // var url = window.location.href;
        // if (this.is_login_page(url)){
        //     window.location.reload();
        // }else{
        //     window.location.href = this.logout_url;
        // }
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