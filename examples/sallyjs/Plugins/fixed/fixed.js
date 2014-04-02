/*
 * huFloat 0.1
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2013-01-22
 * DIV切换
 */
(function($) {
	$.fn.fixed = function(options) {
		this.each(function() {
			var $this = $(this);
			var _target = $this.attr("data-target") || "active";
			var HEIGTH_THIS = $this.height();
			var WIDTH_THIS = $this.width();
			$this.wrap('<div style="width:' + WIDTH_THIS + 'px; height:' + HEIGTH_THIS + 'px;position:relative">' + '</div>');
			var TOP = $this.offset().top;
			var _timer;
			$(document).scroll(function() {
				clearTimeout(_timer);
				_timer = setTimeout(function() {
					var scrollTop = $(window).scrollTop();
					if (scrollTop >= TOP) {
						$this.addClass(_target);
					} else {
						$this.removeClass(_target);
					}
				}, 0);
			})
		});
	};
})(jQuery);
jQuery(function() {
	$("[data-event='fixed']").fixed();
})