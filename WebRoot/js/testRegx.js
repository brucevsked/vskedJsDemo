



function testTrims(){
	outPutV(trims(g('userName').value));
}

function testEmail(){
	outPutV( isEmail(trims(g('userName').value)) );
}

function testMobile(){
	outPutV( isMobile(trims(g('userName').value)) );
}

function testScard(){
	outPutV( isScard(trims(g('userName').value)) );
}