var operate = {
    login_url: 'vbooking.ctrip.com/Package_Vendor_Vbooking/UserManagement/Login2.aspx',
    logout_url: 'http://vbooking.ctrip.com/Package_Vendor_Vbooking/UserManagement/LogOut.aspx',

    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
        if ($('#txtOperid').size() > 0) {
            $('#txtOperid').val(usr);
            $('#txtPwd').val(psw);
            $('#txtVfc').focus();
        }
    },

    logout: function () {
        window.location.href = this.logout_url;
    }
};