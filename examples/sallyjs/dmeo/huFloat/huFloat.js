/*
 * huFloat 0.1
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2013-01-22
 * DIV切换
 */
(function($) {
	$.fn.huFloat = function(options) {
		var defaults = {
			//插件默认参数	
		}
		var options = $.extend(defaults, options);
		this.each(function() {
			var $this = $(this);
			var HEIGTH_THIS = $this.height();
			var WIDTH_THIS = $this.width();
			$this.wrap('<div style="width:' + WIDTH_THIS + 'px; height:' + HEIGTH_THIS + 'px;position:relative">' + '</div>');
			$this.after('<span class="colosed"><span>');
			var TOP = $this.offset().top;
			var time;
			$(window).scroll(function() {
				clearTimeout(time);
				time=setTimeout(function(){
			var scrollTop = $(window).scrollTop();
				if (scrollTop >= TOP) {
					$this.addClass("hu-float");
				} else {
					$this.removeClass("hu-float");
				}			
			},0);
			})
		});
	};
})(jQuery);