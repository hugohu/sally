/*
 * huCroll 1.0
 * Copyright (c) 2013 Huugle  http://huugle.org/
 * Date: 2014-03-13
 * 代码完全重构
 * 焦点图片切换
 * 参数说明
 * auto 配置是否滚动 默认值 true 可用值false
 * outTime 配置轮播切换时间 默认 4000ms 可以更改为任意数字
 * ebox 配置进行轮播的主体 默认为第一个子元素.可以自己任意更改为
 * class
 *
 * 配置方法 设置元素的 data-set={"key":"value"} json格式即可.
 *
 *
 */
(function($) {
	$.fn.carousel = function(options) {
		return this.each(function() {
			//code
			var $this = $(this),
				_WIDTH = $this.width(),
				edata = $this.attr("data-set"),
				oSetOptions = {};
			edata && (oSetOptions = $.parseJSON(edata));
			// set options
			var auto = oSetOptions.auto == "false" ? false : true,
				outTime = parseInt(oSetOptions.outTime) || 4000,
				ebox = oSetOptions.ebox ? $this.find(oSetOptions.ebox) : $this.children().first(),
				edot = oSetOptions.edot,
				emod = ebox.children(),
				nlen = emod.size();

			if (nlen <= 1) {
				return;
			}
			// set html		
			if (edot) {
				html = html = '<i class="prev"></i><i class="next"></i>';
			} else {
				var html = '<i class="prev"></i><i class="next"></i><span class="dot"><i class="active"></i>';
				for (var i = 1; i < nlen; i++) {
					html += "<i></i>";
				}
				html += "</span>"
			}

			$this.append(html);
			var eprev = $this.find(".prev"),
				enext = $this.find(".next"),
				edot = $this.find(edot || ".dot").children();

			var carousel = {
				index: 0,
				play: function(arr, ind) {
					var index = this.setIndex(arr, ind);
					var dis = -_WIDTH * index;
					var isIE9_ = document.all && !window.atob;
					if (isIE9_) {
						ebox.animate({
							"margin-left": dis
						}, 350)
					} else {
						var translate = 'translate(' + dis + 'px,0px)  translateZ(0px)';
						ebox.css({
							'transform': translate,
							'-webkit-transform': translate,
							'-moz-transform': translate,
							'-ms-transform': translate,
							'-o-transform': translate
						})
					};
					this.setActive(index);
				},
				setIndex: function(arr, ind) {
					var index = carousel.index;
					switch (arr) {
						case "+":
							if (index == nlen - 1) {
								return this.index = 0;
							} else {
								return carousel.index += 1;
							}
							break;
						case "-":
							if (index == 0) {
								return this.index = nlen - 1;
							} else {
								return carousel.index -= 1;
							}
							break;
						case "click":
							return carousel.index = ind;
					}
				},
				setActive: function(index) {
					edot.eq(index).addClass("active").siblings().removeClass("active");
				},
				autoPalay: function() {
					this.loop = setInterval(function() {
						carousel.play("+");
					}, outTime)
				},
				stop: function() {
					clearInterval(carousel.loop);
				},
				init: function() {
					if (auto) {
						this.autoPalay();
						//hover
						$this.hover(function() {
							carousel.stop();
						}, function() {
							carousel.loop = setInterval(function() {
								carousel.play("+");
							}, outTime);
						});
					}
					// next
					enext.on("click", function() {
						carousel.play("+");
					});
					//next
					eprev.on("click", function() {
						carousel.play("-");
					});
					//edot
					edot.on("click", function() {
						var $this = $(this);
						var index = edot.index(this);
						carousel.play("click", index);
					})
				}
			}

			carousel.init();
			// end
		});
	};
})(jQuery);
/*  DARA API  */
jQuery(function($) {
	$('[data-event="carousel"]').carousel();
});