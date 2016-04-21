
var leftZtreeSetting = { data: { simpleData: { enable: true	}		},callback:{ onClick:procPage}	};

var leftZtreeNodes =[{ id:1 , pId: 0 , name: ' 潜行平台A01' },{ id:10000 , pId: 1 , name: ' 进销存子系统' },{ id:10001 , pId: 10000 , name: ' 订单模块' },{ id:10002 , pId: 10000 , name: ' 采购模块' },{ id:10003 , pId: 10000 , name: ' 库存模块' },{ id:10004 , pId: 10000 , name: ' 出库模块' },{ id:10005 , pId: 10000 , name: ' 报表' },{ id:20000 , pId: 1 , name: ' 开卡网站' },{ id:20001 , pId: 20000 , name: ' 身份识别' },{ id:20002 , pId: 20000 , name: ' 联系方式' },{ id:20003 , pId: 20000 , name: ' 开卡数据管理' },{ id:30000 , pId: 1 , name: ' 商城' },{ id:40000 , pId: 1 , name: ' 风控数据' },{ id:50000 , pId: 1 , name: ' 客户管理' },{ id:50001 , pId: 50000 , name: ' 客户信息' },{ id:50002 , pId: 50000 , name: ' 客户维护记录' },{ id:60000 , pId: 1 , name: ' 无线数据' }];

function procPage(e, treeId, treeNode){
	console.log('|'+treeNode.id+'|'+treeNode.pId+'|'+treeNode.name);
}

$(document).ready(function(){
	$.fn.zTree.init($('#leftZtree'), leftZtreeSetting, leftZtreeNodes);
});