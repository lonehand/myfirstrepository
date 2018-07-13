/**
 * Created by linbingfeng on 2017/6/6.
 */
var operate = {
    login_url: 'http://mms.yangkeduo.com/Pdd.html#/Login',
    login_url2: 'http://mms.pinduoduo.com/Pdd.html#/login',
    logout_url: 'http://mms.yangkeduo.com/login/outSession',

    init: function () {

    },

    is_login_page: function(url) {
        //console.log(url.indexOf(this.login_url) != -1);
        return url.indexOf(this.login_url2) != -1 ;
    },


    login: function (usr, psw) {
        setTimeout(
            function () {
                $('#usernameId').val(usr);
                $('#passwordId').val(psw);
                $("#loginBtnId").attr("data-click","true");
                $("#loginBtnId").attr("class","pdd-btn l-c-c-c-btn");
                // $('#validateCode').focus();
                // document.getElementById("usernameId").value=usr;
                // document.getElementById("passwordId").value=psw;
            },
            800
        )


    },

    logout: function () {
        var url = window.location.href;
        if (url.indexOf(this.login_url2) != -1){
            window.location.reload();
        }else{
            window.location.href = this.login_url2;
        }


    },

};
// var operate = {
//
//
//     init: function () {
//     },
//
//     is_login_page: function(url) {
//         //console.log(url.indexOf(this.login_url) != -1);
//         return url.indexOf(this.login_url) != -1;
//     },
//
//     login: function (usr, psw,gid) {
//         alert('rrr');
//         console.log($('#usernameId'));
//         $('#usernameId').value=usr;
//         $('#passwordId').value=psw;
//         // console.log(document.getElementById('usernameId'));
//         // document.getElementById('usernameId').value=usr;
//         // document.getElementById('passwordId').value=psw;
//     },
//
//     logout: function () {
//         // window.location.href = this.login_url;
//         // var url = window.location.href;
//         // if (this.is_login_page(url)) {
//             window.location.reload();
//         // }
//         // else {
//         //     window.location.href = this.logout_url;
//         // }
//     }
// };