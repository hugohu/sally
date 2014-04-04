!(function(){
	var module=[{
		"name": "通用盒子",
		"link": "m-box.html",
		"version": "1.0",
		"description": "通用的盒子模型,快速构建模块"
	},{
		"name": "表单模块",
		"link": "m-form.html",
		"version": "1.0",
		"description": "定义了基础的表单模型"
	},{
		"name": "图片文字列表",
		"link": "m-ilist.html",
		"version": "1.0",
		"description": "定义了几种不同的图片列表实现"
	}, {
		"name": "文字列表",
		"link": "m-list.html",
		"version": "1.0",
		"description": "定义了几种类型的文字列表"
	}, {
		"name": "表格模块",
		"link": "m-table.html",
		"version": "1.0",
		"description": "定义了基础表格"
	},{
		"name": "通知警告框",
		"link": "m-alert.html",
		"version": "1.0",
		"description": "顶部通知栏"
	},{
		"name": "操作性弹出浮层",
		"link": "m-layer.html",
		"version": "1.0",
		"description": "配合弹窗使用"
	},{
		"name": "分页",
		"link": "m-page.html",
		"version": "1.0",
		"description": "各种分页"
	}, {
		"name": "面包屑",
		"link": "m-location.html",
		"version": "1.0",
		"description": "定义了标签切换组件"
	},{
		"name": "气泡提醒",
		"link": "m-poptip.html",
		"version": "1.0",
		"description": "气泡提醒"
	},{
		"name": "含标题tab头",
		"link": "m-tab.html",
		"version": "1.0",
		"description": "各种形式都有"
	},{
		"name": "加载中",
		"link": "m-loading.html",
		"version": "1.0",
		"description": "各种形式都有"
	},{
		"name": "导航模块",
		"link": "m-nav.html",
		"version": "1.0",
		"description": "定义了导航模块"
	},{
		"name": "顶部导航模块",
		"link": "m-topnav.html",
		"version": "1.0",
		"description": "定义了导航模块"
	}
];

//写入内容
var shtml="";
//随机颜色带透明度
var rancolor=function(){
var scolor="rgba("+(Math.random()*255>>>0)+","+(Math.random()*255>>>0)+","+(Math.random()*255>>>0)+","+"0.65)";
return scolor;
};
//拼接结构
for(var i=0,len=module.length;i<len;i+=1){
	shtml+= '<div class="module" style="border-left-color: '+rancolor()+';"><a href="'+"examples/module/"+module[i].link+'" target="_blank" class="module-name" title="'+module[i].name+'">'+module[i].name+'</a><span class="module-version">'+module[i].version+'</span><p class="module-description" title="'+module[i].description+'">'+module[i].description+'</p></div>';
}
var emodule=document.getElementById("module");
emodule.innerHTML+=shtml;
})(window)