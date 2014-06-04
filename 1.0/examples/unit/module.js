!(function(){
	var module=[{
		"name": "按钮",
		"link": "u-btn.html",
		"version": "1.0",
		"description": "常用按钮"
	},{
		"name": "图片居中",
		"link": "u-img.html",
		"version": "1.0",
		"description": "图片居中的方法"
	},{
		"name": "进度条",
		"link": "u-progress.html",
		"version": "1.0",
		"description": "进度条的方法"
	},{
		"name": "标记徽章",
		"link": "u-badge.html",
		"version": "1.0",
		"description": "用于显示信息条数等"
	}
	,{
		"name": "下拉式菜单",
		"link": "u-menu.html",
		"version": "1.0",
		"description": "跟下拉菜单配合使用"
	},{
		"name": "关闭图标",
		"link": "u-close.html",
		"version": "1.0",
		"description": "配合sally关闭块使用"
	},{
		"name": "轮播图下标",
		"link": "u-dot.html",
		"version": "1.0",
		"description": "跟焦点轮播模块组合"
	},{
		"name": "输入框",
		"link": "u-ipt.html",
		"version": "1.0",
		"description": "基础文本框样式"
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
	shtml+= '<div class="module" style="border-left-color: '+rancolor()+';"><a href="examples/unit/'+module[i].link+'" target="_blank" class="module-name" title="'+module[i].name+'">'+module[i].name+'</a><span class="module-version">'+module[i].version+'</span><p class="module-description" title="'+module[i].description+'">'+module[i].description+'</p></div>';
}
var emodule=document.getElementById("unit");
emodule.innerHTML+=shtml;
})(window)