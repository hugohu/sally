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
  addCss: function(mod, name) {
    //可能有点问题
    var cssfile = this.codedata.cssfile,
      a = this.codedata[mod][name].style.split(";"),
      b = [];
    $.each(a, function(i, n) {
      b[i] = cssfile + n + ".css"
    })
    var link = $("link");
    $.each(b, function(index, value) {
      $("<link>").attr({
        rel: "stylesheet",
        type: "text/css",
        href: value
      }).appendTo("head");
    });
  },
  params: function(s) {
    // ?mod=modoles&name=m-box
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
          var name = n.id;
          var title = n.title;
          html += "<a href=\"?p=" + name + "\"data-page=" + name + ">" + title + "</a>";
        });
        nav.html(html);
        $("a", nav).on("click", function(e) {
          var $this = $(this),
            page = $this.attr("data-page")
            build.setpage(page, 0);
          return false;
        })
      },
      sidebar: function(data) {
        var sid = $(".m-sidebar"),
          html = '';
        if (data != undefined) {
          $("body").removeClass("f-page");
        } else {
          $("body").addClass("f-page");
          return false;
        }
        $.each(data, function(i, n) {
          var name = n.id;
          var title = n.title;
          html += "<li><a href=#" + name + ">" + title + "</a></li>";
        });
        html = '<ul>' + html + '</ul>';
        sid.html(html);
      },
      main: function(data) {
        var main = $("#main");
        var html = build.mdToHtml(data);
        main.html(html);
        // Highlight syntax
        $("code").each(function(i) {
          hljs.highlightBlock(this);
        });
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
    var code = "mod/code.json";
    var o = this.params();
    var p = p || o.p;
    var mod = mod == 0 ? undefined : o.mod;
    if (mod != undefined) {
      var name = o.name;
      if (this.codedata == undefined) {
        var data = this.code(code);
        this.codedata = $.parseJSON(data);
      };
      var htmlfile = this.codedata.htmlfile + mod + "/" + name + ".md";
      this.addCss(mod, name)
    } else {
      var htmlfile = this.data.htmlfile + p + ".md";

    }
    var smain = this.code(htmlfile);
    this.html("sidebar", this.data[p]);
    //生成主体内容
    this.html("main", smain);
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