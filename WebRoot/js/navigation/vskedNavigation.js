
// vskedNavEvnType 1 is onClick 2 is onMouseOver
var vskedElCount=1;

var vskedMenuList=[
{'id':1, 'pid':0, 'name':'ak1','icon':'a1.png','url':'url1','click':'go'},
{'id':2, 'pid':0, 'name':'ak2','icon':'a2.png','url':'url1','click':'go'},
{'id':3, 'pid':0, 'name':'ak3','icon':'a3.png','url':'url1','click':'go'},
{'id':4, 'pid':0, 'name':'ak4','icon':'a4.png','url':'url1','click':'go'},
{'id':11,'pid':1, 'name':'ak5','icon':'a5.png','url':'url1','click':'go'},
{'id':12,'pid':1, 'name':'ak6','icon':'a6.png','url':'url1','click':'go'}
];

function initVskedNav(obj,vskedNavEvnType){
	if(vskedNavEvnType==1){ obj.onclick=function(){		ts(vskedNavEvnType,obj);	}; 
	}else{ obj.onmouseover=function(){		ts(vskedNavEvnType,obj); } };
}

function ts(vskedNavEvnType,obj){
	for(i=0;i<vskedMenuList.length;i++){
		console.log(vskedMenuList[i].id+''+vskedMenuList[i].name);
    var m1b=document.createElement('div');
	  m1b.style.width='100px';
	  m1b.style.background='#ccc';
	  m1b.style.border='1px solid #000';
	  m1b.innerHTML=vskedMenuList[i].name+''+vskedElCount;
	  vskedElCount++;
	  if(vskedNavEvnType==1){ m1b.onclick=function(){		ts(1,obj);	}; 
	  }else{ m1b.onmouseover=function(){		ts(2,obj); } };
    obj.parentElement.appendChild(m1b); 
	}
	/*
	var m1b=document.createElement('div');
	m1b.style.width='100px';
	m1b.style.background='#ccc';
	m1b.style.border='1px solid #000';
	m1b.innerHTML='ss1'+vskedElCount;
	vskedElCount++;
	if(vskedNavEvnType==1){ m1b.onclick=function(){		ts(1,obj);	}; 
	}else{ m1b.onmouseover=function(){		ts(2,obj); } };
  obj.parentElement.appendChild(m1b);  
  */
}
