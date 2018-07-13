var operate = {
    login_url: 'http://www.vipdlt.com/ebkassembly/login.aspx',
    logout_url: 'http://www.vipdlt.com/ebkassembly/login.aspx',

    init: function () {
    },

    is_login_page: function(url) {
        return url.toLowerCase().indexOf('login') != -1;
    },

    login: function (usr, psw, gid) {
        if ($('#userName').size() > 0){
            $('#userName').val(usr);
            $('#userPwd').val(psw);
            $('#accSubmit').click();
            $('#verifycode').focus();
        }
        else if ($('#txtUserName').size() > 0) {
            $('#txtUserName').val(usr);
            $('#txtPassword').val(psw);
            $('#txtVerifycodeNew').focus();
        }
        else {
            $('#txtHotelcompany').val(gid);
            $('#txtLogin').val(usr);
            $('#txtPwd').val(psw);
            $('#txtVerifycode').focus();
        }
    },

    logout: function () {
        // window.location.href = this.logout_url;
        var url = window.location.href;
        if(this.is_login_page(url)) {
            window.location.href = this.login_url;
        }
        else{
            $('#logout').click();
            // window.location.href = this.logout_url;
        }
    }
};