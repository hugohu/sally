/* =========================================================
 * huTab 0.1
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle  
 *
 * Date: 2013-01-21
 * 滑动门可以实现div切换
 * ========================================================= */
(function ($) {
    $.fn.tab = function (options) {
        var defaults = {//第一事件类型
            events: "mouseover"
        }
        var options = $.extend(defaults, options);
        this.each(function () {
            //code...
            var e = $(this), oli = e.children("dt").children("ul").children("li");
            var odd = e.children("dd");
            oli.bind(options.events, function () {
                var index = oli.index(this), $this = $(this);
                $this.addClass("active").siblings().removeClass("active").end();
                odd.eq(index).addClass("active").siblings("dd").removeClass("active").end();
            })
        });
    };
})(jQuery);

/*  DARA API  */
$(function () {
    var $otab = $('[data-event="tab"]');
    $otab.each(function (index, elem) {
        var $this = $(this);
        var $type = ($this.attr("data-type")) || "mouseover";
        $(this).tab({events: $type});
    });
});
