/*
 * goTop 0.1
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2013-01-21
 * 返回顶部按钮
 */
jQuery.goTop=function(){
	$("body").append('<a href="#" id="gotop" title="返回顶部"></a>');
$("#gotop").live("click",function() {
	$("html, body").animate({ scrollTop: 0 }, 120);
	return false;
	});
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	var st = $(document).scrollTop()
	var $float=$("#gotop"),h = $(window).height();
	(st > 0)? $float.animate({}): $float.hide();
	});	
	}
	//初始化配置
$(function(){
$.goTop();
	})