document.onkeydown = function(evt){
	var evt = window.event?window.event:evt;	
	if (evt.keyCode==13) {
		location.href='login.html';
	}
}

