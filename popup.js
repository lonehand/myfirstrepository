$(function () {
    $('#ctrip').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://www.vipdlt.com/' }, function (tab) {});
            }
        );

    });
    $('#elong').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://ebooking.elong.com' }, function (tab) {});
            }
        );
    });
    /*$('#qunar').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://aaag.b2b.qunar.com/ota#/ota/order/toOtaOrderList' }, function (tab) {});
            }
        );
    });*/
    $('#jielv').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebooking.jl-tour.com' }, function (tab) {});
            }
        );
    });
    $('#tongchengjiujing').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebk.17u.cn/zizhuyou' }, function (tab) {});
            }
        );
    });
    $('#tongchengmenpiao').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebk.17u.cn/jingqu' }, function (tab) {});
            }
        );
    });
    $('#tongchengvacation').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebk.17u.cn/ivacation' }, function (tab) {});
            }
        );
    });
    $('#tongchengghotel').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebk.17u.cn/ghotel' }, function (tab) {});
            }
        );
    });
    $('#ctripmenpiao').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://vbooking.ctrip.com/Package_Vendor_Vbooking/UserManagement/Login2.aspx' }, function (tab) {});
            }
        );
    });
    $('#lvmama').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebooking.lvmama.com/vst_ebooking/login.do' }, function (tab) {});
            }
        );
    });
    $('#meituan_eb').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://eb.meituan.com' }, function (tab) {});
            }
        );
    });
    $('#meituan_e').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://3f.meituan.com/#/login' }, function (tab) {});
            }
        );
    });
    $('#tuniu').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://www.tuniu.cn/nbooking/login.html' }, function (tab) {});
            }
        );
    });
    $('#qunar_ota').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://shanghu.qunar.com/passport/login?ret=http://hota.qunar.com/confirm/ohtml/allorders' }, function (tab) {});
            }
        );
    });
    // $('#dianping').click(function () {
    //     chrome.extension.sendMessage(
    //         {type: 'set_next_account', username: '', password: '', groupid: ''},
    //         function (data) {
    //             chrome.tabs.create({ url: 'http://ep.meituan.com/hotel/zeus/loadSpuctl' }, function (tab) {});
    //         }
    //     );
    // });
    $('#tujia').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://www.tujia.com/Account/Login/' }, function (tab) {});
            }
        );
    });
    $('#fangcang').click(function () {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://yaochufa.fangcang.com/UIS/index.jsp' }, function (tab) {});
            }
        );
    });
    $('#qunar_zcf_1').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://gzyy.zcfgoagain.com' }, function (tab) {});
            }
        );
    });
    $('#qunar_zcf_2').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://cblyw.zcfgoagain.com' }, function (tab) {});
            }
        );
    });
    $('#qunar_zcf_3').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://holi.zcfgoagain.com' }, function (tab) {});
            }
        );
    });
    $('#qunar_zcf_4').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ycfbj.zcfgoagain.com' }, function (tab) {});
            }
        );
    });
    $('#qunar_zcf_5').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://cdycf.zcfgoagain.com' }, function (tab) {});
            }
        );
    });
    $('#qunar_zcf_6').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://lgly.zcfgoagain.com' }, function (tab) {});
            }
        );
    });
    $('#yijie').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://gdws.nsenz.com/admin' }, function (tab) {});
            }
        );
    });
    $('#baidu').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://eb.miot.cn/star/order' }, function (tab) {});
            }
        );
    });
	$('#haoqiao').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebooking.haoqiao.cn' }, function (tab) {});
            }
        );
    });
    $('#qunar').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://tb2cadmin.qunar.com/home.jsp' }, function (tab) {});
            }
        );
    });
    $('#mafengwo').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://seller.mafengwo.cn' }, function (tab) {});
            }
        );
    });
    $('#qyer').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://shop.qyer.com/#/login?redirect=%2F' }, function (tab) {});
            }
        );
    });
    $('#qdingnet').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://shanghu.qdingnet.com/#/login' }, function (tab) {});
            }
        );
    });
    $('#superhouse').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://merchant.superhouse.com.cn/standard/order/list_A.htm' }, function (tab) {});
            }
        );
    });
    $('#bosaidong').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'https://epassport.meituan.com/account/login?loginsource=54&service=overseas&continue=https%3A%2F%2Fe.dianping.com%2Foverseas%2Fposeidon%2Fmt%2Fsettoken%3Ftarget%3Dhttps%253A%252F%252Fe.dianping.com%252Fapp%252Fposeidon-bc-static%252Fepassport%252Findex.html%2523%252Fhome%253F_k%253Dcpyh7t' }, function (tab) {});
            }
        );
    });
    $('#wanxiang').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://www.10000s.com/mall/LoginManager-toReLogin.action?fromPage=aHR0cDovL3d3dy4xMDAwMHMuY29tLy9tYWxsL01haW4tdG9Mb2FkLmFjdGlvbj8mX3NfZF9mX21jPTE' }, function (tab) {});
            }
        );
    });
    $('#ctripebooking').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebooking.ctrip.com' }, function (tab) {});
            }
        );
    });
    $('#yangkeduo').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://mms.pinduoduo.com/Pdd.html#/Login' }, function (tab) {});
            }
        );
    });
    $('#watchstore').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://watchstore.scc-store.com:8801/c-store/programs/express_forExt.jsp' }, function (tab) {});
            }
        );
    });
    $('#jladmin').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://ebooking.jladmin.cn/attention/welcome.do' }, function (tab) {});
            }
        );
    });
    $('#meituan_awp').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://shipagent.meituan.com/bms/loginInit' }, function (tab) {});
            }
        );
    });
    $('#csairholiday').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://manager.csairholiday.com/' }, function (tab) {});
            }
        );
    });
    $('#minshengec').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://shop.minshengec.com/login' }, function (tab) {});
            }
        );
    });
     $('#zcfgoagain').click(function() {
        chrome.extension.sendMessage(
            {type: 'set_next_account', username: '', password: '', groupid: ''},
            function (data) {
                chrome.tabs.create({ url: 'http://www.zcfgoagain.com/' }, function (tab) {});
            }
        );
    });
});