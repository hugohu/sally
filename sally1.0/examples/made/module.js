!(function(){
	var module=[{
		"name": "表单构造器",
		"link": "form.html",
		"version": "1.0",
		"description": "用于快速的构建表单"
	},{
		"name": "渐变生成器",
		"link": "gradual.html",
		"version": "1.0",
		"description": "用于生成渐变颜色"
	}
	,{
		"name": "箭头生成器",
		"link": "arr.html",
		"version": "1.0",
		"description": "用于个个方向的箭头"
	}
	,{
		"name": "透明背景生成器",
		"link": "op.html",
		"version": "1.0",
		"description": "用于透明度背景"
	}
	,{
		"name": "动画制作器",
		"link": "cssanimate/index.html",
		"version": "1.0",
		"description": "用于制作css关键帧动画"
	}
	// ,{
	// 	"name": "页面构建器",
	// 	"link": "sallymade.html",
	// 	"version": "1.0",
	// 	"description": "用于快速的构建页面"
	// },{
	// 	"name": "图片列表构造器",
	// 	"link": "m-ilist.html",
	// 	"version": "1.0",
	// 	"description": "方便快捷的构建图片列表"
	// }
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
	shtml+= '<div class="module" style="border-left-color: '+rancolor()+';"><a href="'+'examples/made/'+module[i].link+'" target="_blank" class="module-name" title="'+module[i].name+'">'+module[i].name+'</a><span class="module-version">'+module[i].version+'</span><p class="module-description" title="'+module[i].description+'">'+module[i].description+'</p></div>';
}
var emodule=document.getElementById("made");
emodule.innerHTML+=shtml;
})(window)