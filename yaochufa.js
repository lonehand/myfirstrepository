$(function() {
    var data = {};
    data.type = 'set_info';

    var current_url = window.location.href || '';
    if (current_url.indexOf('Orders/Show.aspx') != -1) {
        var order_id = window.location.search.split('=')[1] || '';
        $.ajax({
            type: 'post',
            url: 'http://mag.yaochufa.com/service/OrderInfoTuanHandler.ashx',
            data: {
                action: 'TuanHao',
                orderid: order_id
            },
            success: function(result, code) {
                if (result.TuanBackendLink.indexOf('elong.com') != -1 || result.TuanBackendLink.indexOf('qunar.com') != -1) {
                    data.tg_id = $('#hdOrderFromType').val();
                    data.url = result.TuanBackendLink || '';
                    data.username = result.TuanLoginName || '';
                    data.password = result.TuanPassword || '';
                    data.infos = [];
                    data.infos.push({'客户姓名': $('#UcOrderBaseInfo_txtOrderUserName').val() || ''});
                    data.infos.push({'客户电话': $('#UcOrderBaseInfo_txtOrderPhone').val() || ''});
                    data.price = result.TuanReceivableAmount || 0;
                    data.orderMemo = $('#UcOrderBaseInfo_labUserRemark').text() || '';
                    data.memo = result.TuanName + ' 卖价：<span style="color:red; font-weight: 800">' + data.price + '</span><br />' + data.orderMemo;
                    chrome.extension.sendMessage(data);
                }
            },
            dataType: 'json'
        });
    }
});