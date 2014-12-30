
var menuState=0; //0 is hidden left menu 1 is show left menu

var menuList = ['气象监测','气象预警','电网气象','视频监控','辅助决策','信息报送','应急处置','应急管理','资源管理','基地管理','系统管理'];
var iconList = [getBasePath()+'img/header/icon_qxjc.png',
		    			getBasePath()+'img/header/icon_qxyj.png',
		    			getBasePath()+'img/header/icon_dwqx.png',
		    			getBasePath()+'img/header/icon_spjk.png',
		    			getBasePath()+'img/header/icon_jcfz.png',
		    			getBasePath()+'img/header/icon_xxbs.png',
		    			getBasePath()+'img/header/icon_yjcz.png',
		    			getBasePath()+'img/header/icon_yjgl.png',
		    			getBasePath()+'img/header/icon_zygl.png',
		    			getBasePath()+'img/header/icon_jdgl.png',
		    			getBasePath()+'img/header/icon_xtgl.png'];
var pageList = ['jspPages/lunengsoft/zhjc_right.jsp?param=qxjc',
		   			'jspPages/lunengsoft/zhjc_right.jsp?param=qxyj',
		   			'jspPages/lunengsoft/zhjc_right.jsp?param=qxjc',
		   			'jspPages/lunengsoft/spjk_right.jsp',
		   			'jspPages/company2/trend_plotting.jsp',
		   			'jspPages/langning/submission.jsp',
		   			'jspPages/langning/yingji.jsp?param=yjcz',
		   			'jspPages/langning/yingji.jsp?param=yjgl',
		   			'jspPages/langning/yingji.jsp?param=zygl',
		   			'jspPages/langning/yingji.jsp?param=jdgl',
//		   			'jspPages/lunengsoft/zhjc_right.jsp?param=qxjc',
//		   			 
//		   			'jspPages/lunengsoft/zhjc_right.jsp?param=qxjc',
		   			'jspPages/lunengsoft/zhjc_right.jsp'];
		   			
function initMenu(){
	var s='';
	
	for(var i=0;i<menuList.length;i++){
		linkStr=getBasePath()+pageList[i];
	  linkStr='#'; //javascript:void(0);'; //TODO will delete just for test
		s+='<td class="menu"><a href="'+linkStr+'" hidefocus="true"><img src="' + iconList[i] +'"/><br>' + menuList[i] + '</a></td>';
	}
	g('menuTr').innerHTML=s;
}

function hideLeftMenu(){
	g('leftIframe').className=menuState==0?'left_Box_New':'left_Box';
	g('rightIframe').className=menuState==0?'right_Box_New':'right_Box';
	g('hiddenIcon').className=menuState==0?'left_arrows02':'left_arrows01';
	g('hiddenIconImg').src='img/'+(menuState==0?'R':'L')+'.jpg';
	g('rightIframe').style.width=menuState==0?(windowWidth_0+189):(windowWidth_0-189);
	menuState=(menuState==0?1:0);
}

