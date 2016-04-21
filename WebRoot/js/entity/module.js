
var moduleListData=[
[1  ,'moduleT'                ,'模块','mc',0],
[2  ,'userT'                  ,'用户','uc'  ,0],
[3  ,'roleT'                  ,'角色','rc'  ,0],
[4  ,'userRoleT'              ,'用户角色','urc'  ,0],
[5  ,'permissionT'            ,'用户','pc'  ,0],
[6  ,'rolePermissionT'        ,'角色权限','rpc'  ,0],
[7  ,'moduleTtoaddupdate'     ,'模块添加修改页面','mc/toaddupdate'  ,1],
[8  ,'moduleTaddupdate'       ,'模块添加修改处理','mc/addupdate'  ,1],
[9  ,'moduleTdelete'          ,'模块删除处理','mc/delete'  ,1],
[10 ,'moduleTlist'            ,'模块列表处理','mc/list'  ,1],
[11 ,'productT'               ,'用户','userC'  ,0],
[12 ,'productTadd'            ,'用户','userC'  ,0],
[14 ,'productTupdate'         ,'用户','userC'  ,0],
[15 ,'productTdelete'         ,'用户','userC'  ,0],
[16 ,'productTlist'           ,'用户','userC'  ,0],
[17 ,'','','',0]
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