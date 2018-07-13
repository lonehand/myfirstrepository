var operate = {
    login_url: 'ebooking.elong.com/ebkauth/login',
    logout_url: 'https://ebooking.elong.com/ebkcommon/userLogInOut/logout',
    init: function () {
    },

    is_login_page: function(url) {
        return url.toLowerCase().indexOf('login') != -1;
    },
    login: function (usr, psw) {
        $('#hotel_user').val(usr);
        $('#password').val(psw);
        $('#valicode').focus();
    },
    logout: function () {
        var url = window.location.href;
        if (this.is_login_page(url)){
            window.location.reload();
        }else{
            $.ajax({
                type: "POST",
                contentType : "application/json; charset=utf-8",
                url: this.logout_url,
                dataType : "json",
                data: JSON.stringify({}),// 你的formid
                async: true,
                error: function (request) {
                    alert("切换失败！");
                },
                success: function (data) {
                    window.location.href = "https://ebooking.elong.com";
                }
            });
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
    },
    inject_script: function (script) {
        $(document).ready(function(){
            scriptNode = document.createElement('script');
            scriptNode.textContent  = script;
            document.body.appendChild(scriptNode);
        });
    }
}