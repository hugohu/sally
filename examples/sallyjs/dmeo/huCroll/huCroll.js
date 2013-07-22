/*
 * huCroll 0.2
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2013-07-14
 * 代码完全重构
 * 焦点图片切换
 */



(function($) {
	$.fn.carousel = function(options) {
		var defaults = {
			//插件默认参数
		};
		var options = $.extend(defaults, options);
		return this.each(function() {
			//cede...
			var $this = $(this);
			//var THIS_HEIGHT=$this.css("height");
			var THIS_WIDTH = parseInt($this.css("width"));
			var oul = $this.find("ul");
			var oli = $("li", oul);
			var mlen = oli.size();
			var tmp = "";
			//设置初始化状态
			oli.css({
				width: THIS_WIDTH,
				cssFloat: "left",
				position: "relative"
			});
			oul.css({
				width: mlen * THIS_WIDTH,
				position: "absolute",
				left: 0,
				top: 0
			});
			if ( $this.children().length==1) {
				oli.each(function(index, elem) {
					var link = $(this).find("a").attr("href");
					var title = $(this).find("img").attr("alt");
					tmp += index == 0 ? '<a href="' + link + '" class="active" title=' + title + '>' + title + '</a>' : '<a href="' + link + '"  title=' + title + '>' + title + '</a>';
				});
				$this.append('<div class="u-dot">' + tmp + '</div>');
			}

			//设置自动轮播
			$this.ind = 0;
			$this.stime = setInterval(autoplay, 3000);
			var odot = $this.children("div");
			var oa = odot.find("a");
			//定义鼠标经过事件
			oa.hover(function() {
				clearInterval($this.stime);
				$this.ind = oa.index(this);
				move($this.ind);
			}, function() {
				$this.stime = setInterval(autoplay, 3000);
			});

			function autoplay() {
				$this.ind = $this.ind >= mlen - 1 ? 0 : ++$this.ind;
				move($this.ind);
			}

			function move(index) {
				oul.animate({
					left: -index * THIS_WIDTH
				}, {
					queue: false,
					duration: 250
				});
				oa.eq(index).addClass("active").siblings().removeClass("active").end();
			}
		});
	};
})(jQuery);　 /*  DARA API  */
$(function() {
	var $otab = $('[data-event="carousel"]');
	$otab.each(function(index, elem) {
		$(this).carousel();
	});
});