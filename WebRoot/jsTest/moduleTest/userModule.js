'use strict'

$(function(){
	$('#suName').focus();
	$('#loginBt').on('click',userModule.login);
	$('#testBt').on('click',function(){userModule.testa('hellotest',998)});
//	console.log(userModule.userLoginUrl);
	//console.log(userModule.userExitUrl);
});

var userModule=new Object({
	userLoginUrl:'http://www.baidu.com',
	userExitUrl:'http://www.163.com',
	login:function(){
		var suName=$('#suName').val();
		$('#backResult').html(suName+'|this is login');
		console.log('hello');
	  console.log(userModule.userLoginUrl);
	  console.log(userModule.userExitUrl);
	},
  testa:function(a,b){
		$('#suName').val('');
		$('#backResult').html(a+b+'this is hello');
		$('#suName').focus();
	}
	});