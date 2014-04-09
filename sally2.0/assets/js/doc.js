// Read the json file building blocks

/*
  @解析url 并且生成网页
   */
var build = {
  code: function(url) {
    return $.ajax({
      url: url,
      async: false
    }).responseText;

  },
  addCss: function(mod, id) {
    //可能有点问题
    var cssfile = this.data.cssfile;
    if (this.data[mod][id] == undefined) {
      return false;
    };
    var a = this.data[mod][id].style.split(";"),
      b = [];
    $.each(a, function(i, n) {
      b[i] = cssfile + n + ".css"
    })
    $("link[class='link']").remove();
    $.each(b, function(index, value) {
      $("<link>").attr({
        rel: "stylesheet",
        href: value,
        class: "link"
      }).appendTo("head");
    });
  },
  params: function(s) {
    // ?mod=modoles&id=m-box
    var ret = {},
      url = (s || location.search);
    if (!url) {
      ret["p"] = "index";
      return ret;
    }
    var seg = url.replace(/^\?/, '').split('&'),
      len = seg.length,
      i = 0,
      s;

    for (; i < len; i++) {
      if (!seg[i]) {
        continue;
      }
      s = seg[i].split('=');
      ret[s[0]] = s[1];
    }
    return ret;
  },
  html: function(mark, data, page) {
    var setHtml = {
      nav: function(data) {
        var data = data.nav,
          nav = $(".nav"),
          html = "";
        $.each(data, function(i, n) {
          var id = n.id;
          var title = n.title;
          html += "<a href=\"?p=" + id + "\"data-page=" + id + ">" + title + "</a>";
        });
        nav.html(html);
        $("a", nav).on("click", function(e) {
          var $this = $(this),
            page = $this.attr("data-page");
          build.setpage(page, 0);
          $this.addClass("active").siblings().removeClass("active");
          return false;
        })
      },
      sidebar: function() {
        var sid = $(".m-sidebar"),
          html = '';
        var anchor = $("#main").find("h2");
        if (anchor.length == 0) {
          $("body").addClass("f-page");
          return false;
        } else {
          $("body").removeClass("f-page");
        }
        anchor.each(function(i, n) {
          var $this = $(this);
          var title = $this.text()
          var anchor = "anc" + i;
          $this.attr("id", anchor);
          html += "<li><a href=#" + anchor + ">" + title + "</a></li>";
        });
        html = '<ul>' + html + '</ul>';
        sid.html(html);
      },
      main: function(data) {
        if (!data) {
          data = "##载入失败..."
        }
        var main = $("#main");
        var html = build.mdToHtml(data);
        main.html(html);
        // Highlight syntax
        $("code").each(function(i) {
          hljs.highlightBlock(this);
        });
        //add blue
        build.setlist();
        //add sib
        this.sidebar();
      }
    }
    setHtml.page = page;
    //set page 
    !! setHtml[mark] && setHtml[mark](data);
  },
  mdToHtml: function(md) {
    // require showdown.js 
    var converter = new Showdown.converter();
    return converter.makeHtml(md);
  },
  setpage: function(p, mod) {
    var o = this.params();
    var p = p || o.p;
    var mod = mod == 0 ? undefined : o.mod;
    if (mod != undefined) {
      var id = o.id;
      var file = this.data.codefile + mod + "/" + id + ".md";
      this.addCss(mod, id)
    } else {
      var file = this.data.htmlfile + p + ".md";

    }
    var smain = this.code(file);
    //生成主体内容
    this.html("main", smain);
    this.html("sidebar", this.data[p]);

  },
  setlist: function() {
    var rancolor = function() {
      var scolor = "rgba(" + (Math.random() * 255 >>> 0) + "," + (Math.random() * 255 >>> 0) + "," + (Math.random() * 255 >>> 0) + "," + "0.65)";
      return scolor;
    }
    $("[data-list]").each(function(index, elem) {
      var $this = $(this),
        html = "",
        _id = $this.attr("data-list"),
        data = build.data[_id];
      if (data != undefined) {
        for (p in data) {
          html += '<a href="' + "?mod=" + _id + "&id=" + p + '" class="module" style="border-left-color: ' + rancolor() + ';"><span class="module-name" title="' + data[p]["title"] + '">' + data[p]["title"] + '</span><span class="module-version">' + data[p]["version"] + '</span><p class="module-description" title="' + data[p]["description"] + '">' + data[p]["description"] + '</p></a>';
        }
      }
      $(this).html(html);
    });

  },
  init: function(url) {
    var data = this.code(url);
    this.data = $.parseJSON(data);
    //生成导航
    this.html("nav", this.data);
    this.setpage();
  }
};
//start
var url = "mod/nav.json";
build.init(url);