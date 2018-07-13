if (!chrome.cookies) {
  // chrome.cookies = chrome.experimental.cookies;
}
var data = {};
$(function(){
    var current_account = {username: '', password: '', groupid: ''};

    chrome.extension.onMessage.addListener(function(message, sender, reply){
        if (message && message.type){
            if (message.type =='get_accounts') {
                var accounts = [];
                if (message.tg_id == 146) {
                    accounts = acc.tuniu;
                }
                else if (message.tg_id == 147) {
                    accounts = acc.ctrip;
                }
                else if (message.tg_id == 1471) {
                    accounts = acc.ctripmenpiao;
                }
                else if (message.tg_id == 148) {
                    accounts = acc.elong;
                }
                else if (message.tg_id == 1493) {
                    accounts = acc.qunar_ota;
                }
                else if (message.tg_id == 1494) {
                    accounts = acc.qunar_gd;
                }
                else if (message.tg_id == 1501) {
                    accounts = acc.tongchengjiujing;
                }
                else if (message.tg_id == 1502) {
                    accounts = acc.tongchengmenpiao;
                }
                else if (message.tg_id == 1503) {
                    accounts = acc.tongchengvacation;
                }
                else if (message.tg_id == 1504) {
                    accounts = acc.tongchengghotel;
                }
                else if (message.tg_id == 156) {
                    accounts = acc.jielv;
                }
                else if (message.tg_id == 158) {
                    accounts = acc.lvmama;
                }
                else if (message.tg_id == 169) {
                    accounts = acc.tujia;
                }
                else if (message.tg_id == 43) {
                    accounts = acc.meituan_eb;
                }
                else if (message.tg_id == 4301) {
                    accounts = acc.meituan_e;
                }
                else if (message.tg_id == 180) {
                    accounts = acc.fangcang;
                }
                else if (message.tg_id == 1495) {
                    accounts = acc.zcf_gzyy;
                }
                else if (message.tg_id == 1496) {
                    accounts = acc.zcf_cblyw;
                }
                else if (message.tg_id == 1497) {
                    accounts = acc.zcf_holi;
                }
                else if (message.tg_id == 1498) {
                    accounts = acc.zcf_ycfbj;
                }
                else if (message.tg_id == 1499) {
                    accounts = acc.zcf_cdycf;
                }
                else if (message.tg_id == 1490){
                    accounts = acc.zcf_lgly;
                }
                else if (message.tg_id == 233){
                    accounts = acc.yijie;
                }
                else if (message.tg_id == 240){
                    accounts = acc.baidu;
                }else if (message.tg_id == 750){
                    accounts = acc.haoqiao;
                }else if(message.tg_id == 1){
                    accounts = acc.qunar;
                }else if(message.tg_id == 2){
                    accounts = acc.mafengwo;
                } else if(message.tg_id == 3){
                    accounts = acc.qyer;
                }else if(message.tg_id == 4){
                    accounts = acc.qdingnet;
                }else if(message.tg_id == 5){
                    accounts = acc.superhouse;
                }else if(message.tg_id == 42){
                    accounts = acc.bosaidong;
                }else if(message.tg_id == 254){
                    accounts = acc.wanxiang;
                }else if(message.tg_id == 6){
                    accounts = acc.ctripebooking;
                }else if(message.tg_id == 7){
                    accounts = acc.yangkeduo;
                }else if(message.tg_id == 8){
                    accounts = acc.watchstore;
                }else if(message.tg_id == 9){
                    accounts = acc.jladmin;
                }else if(message.tg_id == 10){
                    accounts = acc.meituan_awp;
                }else if(message.tg_id == 11){
                    accounts = acc.csairholiday;
                }else if(message.tg_id == 12){
                    accounts = acc.minshengec;
                }else if(message.tg_id == 13){
                    accounts = acc.shuaifangbao;
                }
                reply(accounts);
            }
            else if (message.type == 'set_next_account') {
                current_account.username = message.username;
                current_account.password = message.password;
                current_account.groupid = message.groupid;
                reply({});
            }
            else if (message.type == 'get_current_account') {
                reply(current_account);
            }
        }
    });
});

