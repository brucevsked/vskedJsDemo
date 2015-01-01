



function testTrims(){
	outPutV(trims(g('userName').value));
}

function testEmail(){
	outPutV( isEmail(trims(g('userName').value)) );
}