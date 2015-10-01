//userid,userDisName,userLoginName,userPass
var userListData=[
[0,'超级管理员','admin','admin'],
[1,'用户1','user1','user1'],
[2,'用户2','user2','user2']
];

var userList=new Array();

var user=function (){
	if(arguments.length==4) return {usId:arguments[0],usDisName:arguments[1],usLoginName:arguments[2],usPass:arguments[3]}
}

function initUserList(){
	for(var i=0;i<userListData.length;i++){
		var tmpEntity=userListData[i];
		userList.push(new user(tmpEntity[0],tmpEntity[1],tmpEntity[2],tmpEntity[3]));
	}
}
initUserList();
function geUser(tp,vl){
	for(var i=0;i<userList.length;i++){
		var tmpStr='';
		var tmpEntity=userList[i];
		if(tp==0) tmpStr=tmpEntity.usId;
		if(tp==1) tmpStr=tmpEntity.usDisName;
		if(tp==2) tmpStr=tmpEntity.usLoginName;
		if(tp==3) tmpStr=tmpEntity.usPass;
		if(vl==tmpStr) return tmpEntity;
	}
	return '';
}

function getUserById(d){
	return geUser(0,d);
}

function getUserByDisName(d){
	return geUser(1,d);
}

function getUserByLoginName(d){
	return geUser(2,d);
}

function getUserByPass(d){
	return geUser(3,d);
}