
var letterLow="abcdefghijklmnopqrstuvwxyz";
var vskTbCount=0;
var baseTableJson={"tbHead":['c1','c2','c3','c4','c5'],"tbBody":[['d1','d2','d3','d','daa'],['d1a','d2b','d3c','ft','sts'],['d11','d22','d33','fta','fff']]};

function getRandomNum(){
	//console.log(arguments.length)
	if(arguments.length==0){ return Math.round(Math.random() * 10000); }
	if(arguments.length==1){ return Math.round(Math.random() * arguments[0]);  }
	if(arguments.length==2){ return (arguments[0]+Math.round(Math.random() * (arguments[1]-arguments[0])));  }
}

function getLowChar(){ return letterLow.charAt(getRandomNum(26)); }

function getStringLow(){
	var s='';
	for(var i=0;i<arguments[0];i++){
		s+=getLowChar();
	}
	return s;
}

function getTableTestData(){
	var columnCount=10;
	var rowCount=10;
	if(arguments.length==1){ columnCount=arguments[0]; }
	if(arguments.length==2){ columnCount=arguments[0]; rowCount=arguments[1]; }
	baseTableJson.tbHead=[]; //clean headdata
	baseTableJson.tbBody=[]; //clean bodydata
	for(var i=0;i<columnCount;i++) baseTableJson.tbHead.push(i+'hh'+getStringLow(4));
	
	for(var rowIndex=0;rowIndex<rowCount;rowIndex++){
		baseTableJson.tbBody[rowIndex]=new Array();
  	for(var colIndex=0;colIndex<columnCount;colIndex++){
  		baseTableJson.tbBody[rowIndex][colIndex]=new Array();
  	  baseTableJson.tbBody[rowIndex][colIndex].push(rowIndex+''+colIndex+getStringLow(4));
  	}  	
  }
	initTableData();
}

function initTableData(){
  var tempTb = document.createElement('table');
  tempTb.id='tb'+vskTbCount;
  vskTbCount++;
  var b = document.createElement('thead');
  var tempHead=document.createElement('tr');
  for(var hIndex=0;hIndex<baseTableJson.tbHead.length;hIndex++){
  	var tmpTh=document.createElement('th');
  	tmpTh.innerHTML=baseTableJson.tbHead[hIndex];
  	tempHead.appendChild(tmpTh);
  }
  tempTb.appendChild(tempHead);
  for(var rowIndex=0;rowIndex<baseTableJson.tbBody.length;rowIndex++){
  	var tmpTr=document.createElement('tr');
  	for(var colIndex=0;colIndex<baseTableJson.tbBody[0].length;colIndex++){
  		var tmpTd=document.createElement('td');
  	  tmpTd.innerHTML=baseTableJson.tbBody[rowIndex][colIndex];
  	  tmpTr.appendChild(tmpTd);
  	  tempTb.appendChild(tmpTr);
  	}
  }
  document.body.appendChild(tempTb);
}