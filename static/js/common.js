// var host = 'http://tp5.com/api.php/chitu/';//测试
var host = 'http://tp5.peipeiyu.com/api.php/chitu/';//正式

// var web_host = 'http://ct.win.com/';
var web_host = 'http://chitu.topyun.top/';

var router = {
	"index":"index",//首页等级列表
	"noWinList":"noWinList",//未中奖人员列表
	"WinNList":"WinNList",//抽中N等奖人员列表
	"WinAllList":"WinAllList",//全部中奖人员列表
	"saveWinNList":"saveWinNList",//保存中奖人员
	"ReWinNList":"ReWinNList",//重新抽奖
	"level_detail":"level_detail",//奖项详情
	"is_login":"is_login"//登录
};

var web_index = web_host; //首页
var web_win = web_host+'win/index.html'; //抽奖页
var web_win_list = web_host+'win/total.html'; //中奖人员列表

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;
}

function is_login() {
	var chitu_token = localStorage.getItem("chitu_token");
	if (!chitu_token) {
		//prompt层
		layer.prompt({
		  formType: 1,
		  value: '',
		  title: '输入抽奖口令，并确认',
		  btn:['确认'],
		  closeBtn: 0
		  // area: ['800px', '350px'] //自定义文本域宽高
		}, function(value, index, elem){
		   console.log(value);
		   var url = host+router.is_login;
		   $.post(url,{value:value},function(result){
		   		var code = result.code;
		   		var data = result.data;
		   		if (code == 200) {
		   			console.log(chitu_token);
		   			localStorage.setItem("chitu_token",chitu_token);
		   			layer.close(index);
		   			layer.msg(data,{icon:1});
		   		} else {
		   			layer.msg(data,{icon:2});
		   		}
		   },'json');
		});
		
	}
}
