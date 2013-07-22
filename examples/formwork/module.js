!(function(){
	var module=[{
		"name": "评论",
		"link": "m-nav.html",
		"version": "1.0",
		"description": "定义了导航模块"
	},{
		"name": "顶部导航",
		"link": "m-topnav.html",
		"version": "1.0",
		"description": "定义了顶部导航"
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
	shtml+= '<div class="module" style="border-left-color: '+rancolor()+';"><a href="'+"examples/formwork/"+module[i].link+'" target="_blank" class="module-name" title="'+module[i].name+'">'+module[i].name+'</a><span class="module-version">'+module[i].version+'</span><p class="module-description" title="'+module[i].description+'">'+module[i].description+'</p></div>';
}
var emodule=document.getElementById("formwork");
emodule.innerHTML+=shtml;
})(window)