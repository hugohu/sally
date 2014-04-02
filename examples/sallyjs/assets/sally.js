/* =========================================================
 * tab 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-07-11
 * 滑动门可以实现div切换
 * ========================================================= */
(function($) {
  $.fn.tab = function(options) {
    var defaults = { //第一事件类型
      events: "mouseover"
    };
    var options = $.extend(defaults, options);
    this.each(function() {
      //code...
      var e = $(this),
        oli = e.children("dt").children("ul").children("li");
      var odd = e.children("dd");
      oli.bind(options.events, function(e) {
        var index = oli.index(this),
          $this = $(this);
        $this.addClass("active").siblings().removeClass("active").end();
        odd.eq(index).addClass("active").siblings("dd").removeClass("active").end();
        e.preventDefault();
        e.stopPropagation();
      });
    });
  };
})(jQuery);

　 /*  DARA API  */
jQuery(function($) {
  var $otab = $('[data-event="tab"]');
  $otab.each(function(index, elem) {
    var $this = $(this);
    var $type = ($this.attr("data-type")) || "mouseover";
    $(this).tab({
      events: $type
    });
  });
});

/* =========================================================
 * carousel 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-07-11
 * 焦点图片切换
 * ========================================================= */
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
      "float": "left",
        position: "relative"
      });
      oul.css({
        width: mlen * THIS_WIDTH,
        position: "absolute",
        left: 0,
        top: 0
      });
      if ($this.children().length == 1) {
        oli.each(function(index, elem) {
          var link = $(this).find("a").attr("href");
          var title = $(this).find("img").attr("alt");
          tmp += index == 0 ? '<li class="active" ><a href="' + link + '" title=' + title + '>' + title + '</li></a>' : '<li><a href="' + link + '"  title=' + title + '>' + title + '</li></a>';
        });
        $this.append('<div class="u-dot"><ul>' + tmp + '</ul></div><a href="javascript:" class="next"></a><a href="javascript:" class="prev"></a>');
      }
      //设置自动轮播
      $this.ind = 0;
      $this.stime = setInterval(autoplay, 3000);
      var odot = $this.children("div");
      var oa = odot.find("li");
      //定义鼠标经过事件
      $this.hover(function() {
        clearInterval($this.stime);
      }, function() {
        $this.stime = setInterval(autoplay, 3000);
      });

      //定义鼠标经过事件
      oa.mouseenter(function() {
        $this.ind = oa.index(this);
        move($this.ind);
      });
      //定义 上一页 下一页
      var onext=$this.find(".next");
      var oprev=$this.find(".prev");
      onext.bind("click",function(e){
          autoplay();
        e.preventDefault();
        e.stopPropagation();
      });
      oprev.bind("click",function(e){
          $this.ind = $this.ind <= 0 ? mlen-1 :--$this.ind;
        move($this.ind);
        e.preventDefault();
        e.stopPropagation();
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
})(jQuery);　
/*  DARA API  */
jQuery(function($) {
 $('[data-event="carousel"]').carousel();
});


/* =========================================================
 * scroll 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-07-11
 * 图片文字滚动
 * ========================================================= */
(function($) {
  $.fn.jCarouselLite = function(o) {
    o = $.extend({
      btnPrev: null,
      btnNext: null,
      btnGo: null,
      mouseWheel: false,
      auto: null,
      speed: 200,
      easing: null,
      vertical: false,
      circular: true,
      visible: 3,
      start: 0,
      scroll: 1,
      beforeStart: null,
      afterEnd: null
    }, o || {});
    return this.each(function() {
      var b = false,
        animCss = o.vertical ? "top" : "left",
        sizeCss = o.vertical ? "height" : "width";
      var c = $(this),
        ul = $("ul", c),
        tLi = $("li", ul),
        tl = tLi.size(),
        v = o.visible;
      if (o.circular) {
        ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
        o.start += v
      }
      var f = $("li", ul),
        itemLength = f.size(),
        curr = o.start;
      c.css("visibility", "visible");
      f.css({
        overflow: "hidden",
        "float": o.vertical ? "none" : "left"
      });
      ul.css({
        margin: "0",
        padding: "0",
        position: "relative",
        "list-style-type": "none",
        "z-index": "1"
      });
      c.css({
        overflow: "hidden",
        position: "relative",
        "z-index": "2",
        left: "0px"
      });
      var g = o.vertical ? height(f) : width(f);
      var h = g * itemLength;
      var j = g * v;
      f.css({
        width: f.width(),
        height: f.height()
      });
      ul.css(sizeCss, h + "px").css(animCss, -(curr * g));
      c.css(sizeCss, j + "px");
      if (o.btnPrev) $(o.btnPrev).click(function() {
        return go(curr - o.scroll)
      });
      if (o.btnNext) $(o.btnNext).click(function() {
        return go(curr + o.scroll)
      });
      if (o.btnGo) $.each(o.btnGo, function(i, a) {
        $(a).click(function() {
          return go(o.circular ? o.visible + i : i)
        })
      });
      if (o.mouseWheel && c.mousewheel) c.mousewheel(function(e, d) {
        return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll)
      });
      if (o.auto) setInterval(function() {
        go(curr + o.scroll)
      }, o.auto + o.speed);

      function vis() {
        return f.slice(curr).slice(0, v)
      };

      function go(a) {
        if (!b) {
          if (o.beforeStart) o.beforeStart.call(this, vis());
          if (o.circular) {
            if (a <= o.start - v - 1) {
              ul.css(animCss, -((itemLength - (v * 2)) * g) + "px");
              curr = a == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll
            } else if (a >= itemLength - v + 1) {
              ul.css(animCss, -((v) * g) + "px");
              curr = a == itemLength - v + 1 ? v + 1 : v + o.scroll
            } else curr = a
          } else {
            if (a < 0 || a > itemLength - v) return;
            else curr = a
          }
          b = true;
          ul.animate(animCss == "left" ? {
            left: -(curr * g)
          } : {
            top: -(curr * g)
          }, o.speed, o.easing, function() {
            if (o.afterEnd) o.afterEnd.call(this, vis());
            b = false
          });
          if (!o.circular) {
            $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
            $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled")
          }
        }
        return false
      }
    })
  };

  function css(a, b) {
    return parseInt($.css(a[0], b)) || 0
  };

  function width(a) {
    return a[0].offsetWidth + css(a, 'marginLeft') + css(a, 'marginRight')
  };

  function height(a) {
    return a[0].offsetHeight + css(a, 'marginTop') + css(a, 'marginBottom')
  }
})(jQuery);　 /*  DARA API  */
 /*  DARA API 
    增加 是否滚动的判断属性auto 0 为不滚动;
  */
jQuery(function($) {
  var $oscroll = $('[data-event="scroll"]');
  $oscroll.each(function(index, elem) {
    var $this = $(this);
    var mum = $this.attr("data-mum") >>> 0;
    var auto = $this.attr("data-auto");
    var osl;
        //当auto为空的时候undefined,不为0所以默认4000滚动
    auto==0?(auto=false,osl=mum):(auto=auto>>>0 || 4000);
     if($this.find("li").length == 0){
        return ;
    }else if($this.find("img").length != 0) {
      var next = $this.find(".next"),
        prev = $this.find(".prev");
      var oscroll = $this.children("div");
      oscroll.jCarouselLite({
        btnNext: next,
        btnPrev: prev,
        visible: mum,
        scroll: osl || 1,
        speed: 350,
        auto: auto,
        mouseOver: true

      });
    } else{
      $this.jCarouselLite({
        vertical: true,
        visible: mum,
        scroll: 1,
        speed: 350,
        auto: auto,
        mouseOver: true
      });
    };
  });
});
/* =========================================================
 * lazyload 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-07-11
 *
 * ========================================================= */
(function(a) {
  a.fn.lazyload = function(b) {
    var c = {
      attr: "data-url"
    };
    var d = a.extend({}, c, b || {});
    d.cache = [];
    a(this).each(function() {
      var g = this.nodeName.toLowerCase(),
        f = a(this).attr(d.attr);
      if (!f) {
        return
      }
      var h = {
        obj: a(this),
        tag: g,
        url: f
      };
      d.cache.push(h);
    });
    var e = function() {
      var f = a(window).scrollTop(),
        g = f + a(window).height();
      a.each(d.cache, function(k, l) {
        var m = l.obj,
          h = l.tag,
          j = l.url;
        if (m) {
          post = m.offset().top;
          posb = post + m.height();
          if ((post > f && post < g) || (posb > f && posb < g)) {
            if (h === "img") {
              m.attr("src", j)
            } else {
              m.load(j)
            }
            l.obj = null
          }
        }
      });
      return false
    };
    e();
    a(window).bind("scroll", e)
  }
})(jQuery);　 /*  DARA API  */
jQuery(function($) {
  $("img[data-url]").lazyload();
});
/* =========================================================
 * closed 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-07-16
 * 关闭提示框
 * ========================================================= */
(function($) {
  $.fn.sallytoggle = function(options) {
    var defaults = {};
    var options = $.extend(defaults, options);
    this.each(function() {
      //code...
      var $this = $(this);
      var tar = $this.attr("data-target");

      var eventname = $this.attr("data-event");
      //根据不同的事件名称来绑定不同的事件类型
      var modal = {
        close: function() {//关闭事件,关闭指定的父级元素
          $this.bind("click", function(e) {
            $(this).parents("." + tar).fadeOut();
            e.preventDefault();
            e.stopPropagation();
          });
        },
        hover: function() {
        //模拟鼠标划过,添加对应的class
        //$this.ctimes=null;
          $this.bind("mouseenter", function() {
            clearTimeout($this.ctimes);
            $this.addClass(tar);
          }).bind("mouseleave", function() {
            clearTimeout($this.ctimes);
            $this.ctimes=setTimeout(function(){
               $this.removeClass(tar);
             },0);
           
          });
        },
        dropdown: function() {//模拟下拉菜单,点击显示点击隐藏
          var son = $this.children("." + tar);
          $this.bind("click.dropdown", function(e) {
            son.toggle();
            e.preventDefault();
            e.stopPropagation();
          });
          $(document).bind("click.dropdown", function(e) {
            !son.is(":hidden") && son.hide();
          });
        },
        layer: function() {//模拟弹出层,点击弹窗指定id的窗口
            
          $this.bind("click", function(e) {
            $("#"+tar).fadeIn();
            e.preventDefault();
            e.stopPropagation();
          });
        }

      }; 
      //判断是否为空,不为空就执行绑定事件
      !! modal[eventname] && modal[eventname]();

    });
  };
})(jQuery);　 
/*  DARA API  */
jQuery(function($) {
  $('[data-target]').sallytoggle();
});
/* =========================================================
 * placeholder 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-07-20
 * placeholder兼容ie
 * ========================================================= */
(function($) {
  $.fn.placeholder = function(options) {
    var defaults = { //第一事件类型
      events: "mouseover"
    };
    var options = $.extend(defaults, options);
    this.each(function() {
      //code...
          var _this = $(this);
          var text=_this.attr("placeholder");
          _this.val(text).focus(function() {
            if (_this.val() === _this.attr("placeholder")) {
              _this.val("");
            };
          }).blur(function() {
            if (_this.val().length === 0) {
              _this.val(_this.attr("placeholder"));
            };
          });
    });
  };
})(jQuery);

　/*  DARA API  */
jQuery(function($) {
var input=$("input[placeholder]");
if (!("placeholder" in document.createElement("input"))) {
input.placeholder();
  };
});
/* =========================================================
 * gotop 0.2
 * http://huugle.org/
 * =========================================================
 * Copyright (c) 2013 Huugle
 *
 * Date: 2013-08-28
 * 返回顶部
 * ========================================================= */
 (function($) {
  $.fn.gotop = function(options) {
    var defaults = {
      //插件默认参数  
    }
    var options = $.extend(defaults, options);
    this.each(function() {
      var time;
      //返回顶部
      var $float=$(this);
        $float.live("click",function() {
          $("html, body").animate({ scrollTop: 0 }, 120);
          return false;
          });
      $(window).bind("scroll",function() {
        clearTimeout(time);
        time=setTimeout(function(){
        var st = $(document).scrollTop();
        //返回顶部
        (st > 0)? $float.fadeIn(): $float.fadeOut();
        },0);
      });
    });
  };
})(jQuery);
　/*  DARA API  */
jQuery(function($) {
   $('[data-event="gotop"]').gotop();
});