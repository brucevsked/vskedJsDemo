var windowWidth_0=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var windowHeight_0=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var basePath='';
function setBasePath(s){	basePath=s; }
function getBasePath(){	return basePath; }

function g(s){	return document.getElementById(s); }

function trims(s){
	return s.replace(trimReg,'');
}

function isNotNull(obj){
	return obj!=null;
}

function isNotEmpty(obj){
	return obj!='';
}

function isNotNullAndIsNotEmpty(obj){
	return (isNotNull(obj) && isNotEmpty(obj))
}

function cleanValue (obj) {	obj.value=''; }

function getFocus(obj){ obj.focus(); }

function outPutV(){
	//console.log('a003|'+arguments.length);

	if(arguments.length==1){ console.log('|'+arguments[0]+'|'); }
	
	this.outPutJson=function(tmpObject){
		for(var tmpKey in tmpObject) 
		if(this.isJson(tmpObject[tmpKey])){
		 this.outPutJson(tmpObject[tmpKey]);
		}else{
			console.log('a001_a|'+tmpKey+'|'+tmpObject[tmpKey]+'|'+typeof(tmpObject[tmpKey]));
		}
	};
	this.isJson = function(obj){ 
		return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length; 
	};
	
	if(arguments.length>=2){				
		if(arguments[0]==0){
			var tmpObject=arguments[1];
			this.outPutJson(tmpObject);
		}		
	}//end if arguments length
	
}//end outPutV


