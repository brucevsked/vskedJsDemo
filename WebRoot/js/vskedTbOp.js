
var vskTableInfo={'tbId':'tb0','colCount':20,'rowCount':20};
var tsTbData={"tbHead":[[{"text":"用电服务","colSpan":8,"align":"center"}],
 		[{"text":"单位","rowSpan":2,"align":"center"},{"text":"停电重要用户名称","rowSpan":2,"align":"center"},{"text":"停电简明情况","rowSpan":2,"align":"center"},{"text":"累计停电","colSpan":2,"align":"center"},{"text":"停电重要用户","colSpan":3,"align":"center"}],
 		[{"text":"用户","align":"center"},{"text":"占用比例","align":"center"},{"text":"一级","align":"center"},{"text":"二级","align":"center"},{"text":"一、二级占重要用户比例","align":"center"}]],
 		"tbBody":[["1","2","3","4","5","6","7","8"],["1a","2b","3c","4d","5e","6f","7g","8h"],
 		["11","----------","3","4","5","6","7","8"],["1a","2ba","3c1","4d","5e","6f","7g","8h"],
 		["12","2b","3","4","5","6","7","8"],["1a","2bb","3c2","4d","5e","6f","7g","8h"],
 		["13","2c","3","4","5","6","7","8"],["1a","2bc","3c3","4d","5e","6f","7g","8h"],
 		["14","2d","3","4","5","6","7","8"],["1a","2bd","3c4","4d","5e","6f","7g","8h"]
 		],"tbFoot":[],"tbPage":[]};
 		
function getTableInfo(tbId){
	console.log('cols:'+g(tbId).rows[0].cells.length)
	console.log('rows:'+g(tbId).rows.length)
	return {'tbId':tbId+'','colCount':g(tbId).rows[0].cells.length,'rowCount':g(tbId).rows.length };
}

function setTableContent(inTbInfo,inTableJson){
		for(var rowIndex=0;rowIndex<inTbInfo.rowCount;rowIndex++){
  	for(var colIndex=0;colIndex<inTbInfo.colCount;colIndex++){
  		g(inTableInfo.tbId).rows[rowIndex].cells[colIndex].innerHTML=inTableJson.tbBody[rowIndex][colIndex];
  	}  	
  }
}

function createJsonTable(obj,dt){
	var tb=document.createElement('table');
	tbData=dt;
	for(i=0;i<tbData.tbHead.length;i++){
		var tbRow=document.createElement('tr');
		for(c=0;c<(tbData.tbHead[i].length);c++){
			var tbColumn=document.createElement('td');
			if(tbData.tbHead[i][c].text !=undefined) tbColumn.innerHTML=tbData.tbHead[i][c].text;
			if(tbData.tbHead[i][c].colSpan !=undefined) tbColumn.colSpan=tbData.tbHead[i][c].colSpan;
			if(tbData.tbHead[i][c].rowSpan !=undefined) tbColumn.rowSpan=tbData.tbHead[i][c].rowSpan;
			if(tbData.tbHead[i][c].align !=undefined) tbColumn.align=tbData.tbHead[i][c].align;
			if(tbData.tbHead[i][c].id !=undefined) tbColumn.id=tbData.tbHead[i][c].id;
			if(tbData.tbHead[i][c].name !=undefined) tbColumn.name=tbData.tbHead[i][c].name;
			tbRow.appendChild(tbColumn);
			tb.appendChild(tbRow);
	  }
	}
	
	for(i=0;i<tbData.tbBody.length;i++){
		var tbRow=document.createElement('tr');
		for(c=0;c<(tbData.tbBody[i].length);c++){
			var tbColumn=document.createElement('td');
			tbColumn.innerHTML=tbData.tbBody[i][c];
			tbRow.appendChild(tbColumn);
			tb.appendChild(tbRow);
		}
	}
	document.getElementById(obj).appendChild(tb);
}

//createJsonTable('tbA01',tsTbData);
