

function isEmail(str){
	return emailReg.test(str);
}

function isMobile(str){
	return mobilePhoneReg.test(str);
}

function isScard(str){
	return sCard.test(str);
}

function isNumber(str){
	return myNumber.test(str);
}
