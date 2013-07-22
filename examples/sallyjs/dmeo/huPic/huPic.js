/*
 * huPic 0.1
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2013-01-22
 * 图库浏览
 */
	//图片浏览插件
(function($){
	$.fn.huPic = function(options){
		var defaults = {
		//插件默认参数	
		}
		var options = $.extend(defaults, options);
		this.each(function(){
	
		//初始化设置
		var $this=$(this);
			$this.addClass("plist")
			$this.wrap('<div id="photoList"></div>');
			$this.before('<span class="arl"></span>');
			$this.after('<span class="arr"></span>');
	  	  	$this.parent().before('<div id="photoInfo"><a href="javascript:" class="opl" title="上一张"></a><img src="" alt=""><a href="javascript:"  class="opr" title="下一张"></a><div id="text"></div></div>')
	  	var photoInfo=$('#photoInfo');
	    var li=$this.find("li"); 
	   //初始化ul的长度方便后面移动
	   $this.find("ul").css({"width":($this.find("li").length)*106})
	   //点击向左
	   $(".arl,.opl").live("click",function(){ move(-1,"-=")});
  //点击向右
	   $(".arr,.opr").live("click",function(){ move(1,"+=")});
//切换图片
li.live("click",function(){
	//获取小图src地址并且替换大图
	  var img=$("#photoInfo").find("img");
	  var this_alt=$(this).find("img").attr("alt");
	  var this_src=$(this).find("img").attr("src");
	  var text=$("#text");
	  $(this).addClass("at").siblings().removeClass("at").end();
	   img.attr("src",this_src);
	   if(this_alt!==''){
	   	text.html(this_alt).show();
	   }else{
	   		text.hide();
	   }
	   
	   
	});
//左右箭头
function move(ar,mr){//ar参数设置上一张或者下一张，mr参数设置向左或者向右移动
	//设置向左向右参数
	 var at=$this.find(".at");
	  var index=li.index(at);
	  var mumb=index+ar;
	  if(mumb<0||mumb>li.length){//设置第一个和最后一个停止执行的条件
		 return false;	  
		  };
		$this.animate({scrollLeft:mr+106},150)
	  li.eq(mumb).trigger("click");//执行点击事件。
	};
//初始化
setTimeout(function(){
	li.eq(0).trigger("click");
	},300);
		});
	};
})(jQuery);