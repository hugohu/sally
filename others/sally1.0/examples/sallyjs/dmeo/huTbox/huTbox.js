/*
 * huTbox 0.1
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2013-01-21
 * 弹出层
 */
(function($){
	$.fn.huTbox = function(options){
		var defaults = {
			bo:'#hu-tbox',
			closed:'.closed',
			int:function(){return true}
		}
		var options = $.extend(defaults, options);
		this.each(function(){

	//初始化，btn为触发按钮，若无元素折主动自动触发，e为弹出的层，closed关闭弹窗的按钮，int为回调函数
var btn=$(this),box=$(options.bo),closed_box=$(closed.closed);

if($(".fullbox").length==0){
	$("body").append('<div class="fullbox"></div>');
	}
var fullbox=$(".fullbox");
  	box.addClass("popbox");
//点击弹窗弹出	
btn.click(function(){
	if(options.int!=null && options.int()){
   		op();
	}
	});
	//关闭弹窗
	function closed_tbox(){
	fullbox.fadeOut(200);
	box.animate({opacity:0,margin:0},300).hide(300);
	}
	//点击关闭
closed_box.click(function(){
	closed_tbox()
});
//点击背景关闭
fullbox.click(function(){
	closed_tbox()
});
	//esc按钮关闭
$(window).keydown(function(event){
  if(event.keyCode==27) {
  	closed_tbox();
  };
});
	
	//弹出相关动画
function op(){
	fullbox.fadeIn(250);
	box.animate({"margin-left":-box.width()/2,"margin-top":-box.height()/2,opacity:1},300).show(300);
		}
//结束

		});
	};
})(jQuery);