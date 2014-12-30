

function checkAll(obj){
  var ckArray =  document.getElementsByName(obj.name);
  for(var i=0;i<ckArray.length;i++)
	  ckArray[i].checked=obj.checked;
}