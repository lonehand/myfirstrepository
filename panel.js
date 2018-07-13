var ycf = {};
ycf.panel = {
    style: '<style>' +
        '#booking_panel {z-index: 99999; position:fixed; right: 20px; bottom: 25px; max-height:560px; overflow-y: auto; background-color: rgba(0, 0, 0, 0.7); width: 250px; padding: 5px; }' +
        '#booking_panel_head {height: 20px; border-bottom: 1px; color: #fff; padding: 3px; }' +
        '#booking_panel_head div {color: #fff;}' +
        '#booking_panel_body {background-color: #fff; color: #000; padding: 3px;}' +
        '#close_button {float: right; cursor: pointer; }' +
        '#booking_panel_tabs_container {border-bottom: 1px groove #ddd; padding: 3px;}' +
        '#booking_panel_memo {padding: 3px; border-bottom: 1px groove #ddd;}' +
        '.booking_panel_tabs_sep { float: left; border-left: 1px; margin: 2px;}' +
        '.booking_item {padding: 5px;}' +
        '.account_item {cursor: pointer; padding: 5px;}' +
        '.selected_tab {background-color: yellow; }' +
        '.selected_item {color: red;}' +
        '</style>',
    tpl: '<div id="booking_panel" style="display: none;">' +
        '<div id="booking_panel_head">' +
        '<div style="float: left;">登录账户列表</div>' +
        '<div id="close_button">—</div>' +
        '<div style="clear: both;"></div>' +
        '</div>' +
        '<div id="booking_panel_body" style="">' +
        '<div id="booking_panel_tabs_container">' +
        '<div style="clear: both;"></div>' +
        '</div>' +
        '<div id="booking_panel_memo">{0}</div>' +
        '<div id="booking_panel_content">{1}</div>' +
        '</div>' +
        //'<br style="clear:both;" />' +
        '</div>',
    account_tpl: '<div class="account_item" style="background-color: {4};">' +
		//'{3}&nbsp;&nbsp;{0},{1}' + 0为用户名 ，1为密码
        '{3}&nbsp;&nbsp;{0}' +
        '<div style="float: right">' +
        '<input type="button" value="登录" groupid="{2}" username="{0}" password="{1}" class="change_account"/>' +
        '</div>' +
        '<div style="clear: both;"></div>' +
        '</div>',

    price: 0.0,
    accounts: [],
    memo: '',

    init: function () {
        // if($('#booking_panel',  parent.document).size() > 0)
        //     return
        var url = window.location.href
        if(url.indexOf('meituan') != -1){
            console.log('meituan');
        }else if (window.self !== window.top) {
            return;
            // window.self = window.top;
        }
        if($('#booking_panel').length > 0){
            return;
        }
        this.accounts = arguments[0] || [];
        $(this.style).appendTo('head');
        this.show();

        var $body = $('body');

        $body.delegate('#close_button', 'click', function () {
            ycf.panel.hide();
        });

        $body.delegate('.change_account', 'click', function () {
            var $account = $(this);
            chrome.extension.sendMessage(
                {type: 'set_next_account', username: $account.attr('username'), password: $account.attr('password'), groupid: $account.attr('groupid')},
                function (data) {
                    operate.logout();
                }
            );
        });
    },

    show: function () {
        var panel_str = this.tpl.format(this.memo, this.gen_accounts_str());
        $(panel_str).appendTo('body');
        $('#booking_panel').show();
    },

    hide: function () {
        // $('#booking_panel').remove();
        $('#booking_panel_body').toggle();
    },

    gen_accounts_str: function () {
        var accounts_str = '';
        for (var i = 0; i < this.accounts.length; i++) {
            var username = this.accounts[i].username || '';
            var password = this.accounts[i].password || '';
            var distr = this.accounts[i].distr || '';
            var gid = this.accounts[i].gid || '';
            if (i % 2 == 0) {
                accounts_str += this.account_tpl.format(username, password, gid, distr, '#fff');
            }
            else {
                accounts_str += this.account_tpl.format(username, password, gid, distr, '#ddd');
            }
        }
        return accounts_str;
    }
};

$(function () {
    var url = window.location.href;
    if (operate.is_login_page(url)) {
        chrome.extension.sendMessage(
            {type: 'get_current_account'},
            function (data) {
                var usr = data.username || '';
                var psw = data.password || '';
                var gid = data.groupid || '';
                if (usr != '' && psw != '') {
                    operate.login(usr, psw, gid);
                }
            }
        );
    }
    url = url.toLowerCase();
    var id = 0;
    url = window.location.href;
    var url_parent = ''

    var url_parent = window.parent.location.href;


    url = url.toLowerCase();
    if(url.indexOf('awp.meituan.com') != -1 || (url.indexOf('shipagent') != -1 && url.indexOf('meituan') != -1)){
        id = 10
    }
    else if(url_parent.indexOf('eo.dianping.com') != -1 || url.indexOf('epassport.meituan.com') != -1 || url.indexOf('eo.dianping.com') != -1){
        id = 42;
    }
    else if (url.indexOf('3f.meituan.com') != -1 || url.indexOf('epassport.meituan.com/account/unitivelogin') != -1 || url.indexOf("epassport.meituan.com/bizverify/captcha") != -1){
        id = 4301;
    } else if(url.indexOf('epassport.meituan.com') != -1 || url.indexOf('ep.meituan.com') != -1 || url.indexOf('e.dianping.com') != -1 || url_parent.indexOf('eo.dianping.com') != -1){
        id = 42;
    }
    else if (url.indexOf('elong.com') != -1) {
        id = 148;
    }
    else if (url.indexOf('vbooking.ctrip.com') != -1) {
        id = 1471;
    }
    else if ( url.indexOf('vipdlt.com') != -1) {
        id = 147;
    }
    else if (url.indexOf('ebk.17u.cn/zizhuyou') != -1) {
        id = 1501;
    }
    else if (url.indexOf('ebk.17u.cn/jingqu') != -1) {
        id = 1502;
    }
    else if (url.indexOf('ebk.17u.cn/ivacation') != -1) {
        id = 1503;
    }
    else if (url.indexOf('ebk.17u.cn/ghotel') != -1) {
        id = 1504;
    }
    else if (url.indexOf('aaag.b2b.qunar.com') != -1) {
        id = 1491;
    }
    else if (url.indexOf('aafy.b2b.qunar.com') != -1) {
        id = 1492;
    }
    else if (url.indexOf('hota.qunar.com') != -1 || url.indexOf('shanghu.qunar.com') != -1) {
        id = 1493;
    }
    else if (url.indexOf('aaju.b2b.qunar.com') != -1) {
        id = 1494;
    }
    else if (url.indexOf('jl-tour.com') != -1){
        id = 156;
    }
    else if (url.indexOf('lvmama.com') != -1){
        id = 158;
    }
    else if (url.indexOf('tuniu.cn') != -1){
        id = 146;
    }
    else if (url.indexOf('tujia.com') != -1){
        id = 169;
    }
    else if (url.indexOf('eb.meituan.com') != -1){
        id = 43;
    }
    else if(url.indexOf('fangcang.com') != -1){
        id = 180;
    }
    else if(url.indexOf('gzyy.zcfgoagain') != -1){
        id = 1495;
    }
    else if(url.indexOf('cblyw.zcfgoagain') != -1){
        id = 1496;
    }
    else if(url.indexOf('holi.zcfgoagain') != -1){
        id = 1497;
    }
    else if(url.indexOf('ycfbj.zcfgoagain') != -1){
        id = 1498;
    }
    else if(url.indexOf('cdycf.zcfgoagain') != -1){
        id = 1499;
    }
    else if(url.indexOf('lgly.zcfgoagain') != -1){
        id = 1490;
    }
    else if(url.indexOf('gdws.nsenz') != -1){
        id = 233;
    }
    else if(url.indexOf('eb.miot.cn') != -1){
        id = 240;
    }else if(url.indexOf('ebooking.haoqiao.cn') != -1){
        id = 750;
    }else if(url.indexOf('user.qunar.com') != -1 || url.indexOf("tb2cadmin.qunar.com") != -1){
        id = 1;
    }else if(url.indexOf('passport.mafengwo.cn') != -1 || url.indexOf('seller.mafengwo.cn') != -1 ){
        id = 2;
    }else if(url.indexOf('shop.qyer.com') != -1){
        id = 3;
    }else if(url.indexOf('shanghu.qdingnet.com') != -1 || url.indexOf('qd.qdingnet.com') != -1){
        id = 4;
    }else if(url.indexOf('merchant.superhouse.com.cn') != -1 ){
        id = 5;
    }else if(url.indexOf('10000s.com') != -1){
        id = 254
    }else if(url.indexOf('ebooking.ctrip.com') != -1){
        id = 6
    }else if(url.indexOf('mms.yangkeduo.com') != -1 || url.indexOf('mms.pinduoduo.com') != -1){
        id = 7
    }else if(url.indexOf('watchstore.scc-store.com') != -1){
        id = 8
    }else if(url.indexOf('ebooking.jladmin.cn') != -1){
        id = 9
    }else if(url.indexOf('manager.csairholiday.com') != -1){
        id = 11
    }else if(url.indexOf('shop.minshengec.com') != -1){
        id = 12
    }else if(url.indexOf('zcfgoagain.com') != -1){
        id = 13
    }

    chrome.extension.sendMessage(
        {type: 'get_accounts', tg_id: id},
        function (data) {
            var accounts = data || [];
            ycf.panel.init(accounts);
        }
    );
});
