// var host = 'http://tp5.com/api.php/chitu/';//测试
var host = 'http://tp5.peipeiyu.com/api.php/chitu/';//正式

// var web_host = 'http://ct.win.com/';
var web_host = 'http://chitu.topyun.com/';

var router = {
	"index":"index",//首页等级列表
	"noWinList":"noWinList",//未中奖人员列表
	"WinNList":"WinNList",//抽中N等奖人员列表
	"WinAllList":"WinAllList",//全部中奖人员列表
};

var web_index = web_host; //首页
var web_win = web_host+'win/index.html'; //抽奖页
var web_win_list = web_host+'win/total.html'; //中奖人员列表
