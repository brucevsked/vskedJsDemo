

function toClean(){
	cleanValue(g('userName'));
	cleanValue(g('userPass'));
	g('errMsg').innerHTML=('');
	getFocus(g('userName'));
}

function toLogin(){
	if(!isNotNullAndIsNotEmpty(trims(g('userName').value))){
		g('errMsg').innerHTML=('<font color=red>用户名不能为空!</font>');
		getFocus(g('userName'));
		return;
	}
	if(!isNotNullAndIsNotEmpty(trims(g('userPass').value))){
		g('errMsg').innerHTML=('<font color=red>密码不能为空!</font>');
		getFocus(g('userPass'));
		return;
	}
	location.href='index.html';
}

function toReg(){
	g('errMsg').innerHTML=('<font color=red>演示开发中请稍等n秒</font>');
}

document.onkeydown = function(evt){
	var evt = window.event?window.event:evt;	
	if (evt.keyCode==13) {
		srcEle=evt.srcElement;
		if((evt.keyCode||evt.charCode)==13 && srcEle.tagName.toUpperCase()=='BUTTON' && srcEle.type.toUpperCase()=='BUTTON' ){
			if(srcEle.id=='btReset'){
			  toClean();
		  }
		  if(srcEle.id=='btReg'){
		  	toReg();
		  }
		  if(srcEle.id=='btLogin'){
		  	toLogin();
		  }
			return;
		}
    if((evt.keyCode||evt.charCode)==13 && srcEle.tagName.toUpperCase()=='INPUT' && srcEle.type.toUpperCase()=='TEXT'){
    getFocus(g('userPass'));
    return;
    }
		toLogin();
	}
}

