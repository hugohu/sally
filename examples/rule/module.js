!(function(){
	var module=[{
		"name": "html规范",
		"link": "html.html",
		"version": "1.0",
		"description": "一系列建议和方法，帮助你搭建简洁严谨的结构"
	},{
		"name": "css规范",
		"link": "css.html",
		"version": "1.0",
		"description": "一系列规则和方法，帮助你架构并管理好样式,快速构建模块"
	},{
		"name": "javascript",
		"link": "js.html",
		"version": "1.0",
		"description": "js规范更好的编写js脚本"
	},{
		"name": "工程师规范",
		"link": "man.html",
		"version": "1.0",
		"description": "前端页面开发工程师的工作流程和团队协作规范"
	}, {
		"name": "工具",
		"link": "tools.html",
		"version": "1.0",
		"description": "一些方便开发的工具推荐"
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
	shtml+= '<div class="module" style="border-left-color: '+rancolor()+';"><a href="'+"examples/rule/"+module[i].link+'" target="_blank" class="module-name" title="'+module[i].name+'">'+module[i].name+'</a><span class="module-version">'+module[i].version+'</span><p class="module-description" title="'+module[i].description+'">'+module[i].description+'</p></div>';
}
var emodule=document.getElementById("rule");
emodule.innerHTML+=shtml;
})(window)