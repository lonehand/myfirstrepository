var operate = {
    login_url: 'http://ebooking.haoqiao.cn/login',
	logout_url:'http://ebooking.haoqiao.cn/login',
    init: function () {
    },

    is_login_page: function(url) {
        return url.indexOf(this.login_url) != -1;
    },

    login: function (usr, psw, gid) {
        //$('[name=username]').val(usr);
        //$('[name=paw]').val(psw);
		//$('[name=code]').val(gid);
        //$('#js-sub-login')[0].click()
		//var p = window.atob(psw);
		$('#J_name').val(usr);
		$('#J_paw').val(psw);
		$('#J_code').val(gid);
		// $('#J_paw').focus();
        $('#J_paw').css({"style":"rgb(51, 51, 51)","display":"inline-block"});
        $('#J_paw_txt').css("display","none");
        // document.styleSheets[0].cssRules[0].style.display = "inline";
		// "style=color: rgb(51, 51, 51); display: inline-block;"
		//$('#J_login').click();
    },

    logout: function () {
        window.location.href = this.logout_url;
		$('#J_paw').focus();
    }
};