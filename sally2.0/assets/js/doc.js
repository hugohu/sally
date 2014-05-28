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
  addRelate: function(mod, id) {
    if (this.data[mod][id] == undefined) {
      return false;
    };
    var a = this.data[mod][id].style; //获取资源
    $("[data-type='addRelate']").remove();
    $.each(a, function(index, value) {
      if (value.indexOf(".css") != -1) {
        $("<link>").attr({
          rel: "stylesheet",
          href: value,
          "data-type": "addRelate"
        }).appendTo("head");
      } else {
        $("<script>").attr({
          src: value,
          "data-type": "addRelate"
        }).appendTo("body");
      }
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
        var data = data[mark],
          nav = $(".nav"),
          html = "";
        $.each(data, function(i, n) {
          var url = n.url || ("?p=" + n.id);
          var title = n.title;
          html += "<a href="+url+">" + title + "</a>";
        });
        nav.html(html);
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
          var title = $this.text();
          var anchor = "anc" + i;
          $this.attr("id", anchor);
          html += "<li><a href=#" + anchor + ">" + title + "</a></li>";
        });
        html = '<ul>' + html + '</ul>';
        sid.html(html);
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
              if (typeof data[p] == "object") {
                html += '<a href="' + "?mod=" + _id + "&id=" + p + '" class="module" style="border-left-color: ' + rancolor() + ';"><span class="module-name" title="' + data[p]["title"] + '">' + data[p]["title"] + '</span><span class="module-version">' + data[p]["version"] + '</span><p class="module-description" title="' + data[p]["description"] + '">' + data[p]["description"] + '</p></a>';
              }
            }
          }
          $(this).html(html).addClass("show");
        });
      },
      main: function(data) {
        !data && (data = "#error...")
        var main = $("#main");
        var html = build.mdToHtml(data);
        main.html(html);
        // Highlight syntax
        $("code").each(function(i) {
          hljs.highlightBlock(this);
        }).attr("contentEditable", true)
        //add blue
        this.setlist();
        //add sib
        this.sidebar();
      }
    }
    setHtml.page = page;
    //set page 
    !!setHtml[mark] && setHtml[mark](data);
  },
  mdToHtml: function(md) {
    // require showdown.js 
    var converter = new Showdown.converter();
    return converter.makeHtml(md);
  },
  setpage: function(p, mod) {
    //解析当前地址
    var o = this.params();
    var p = p || o.p;
    var mod = mod == 0 ? undefined : o.mod;
    if (mod != undefined) {
      var id = o.id;
      //设置页面文件请求路径,优先选择模块内定义的路径, 没有则用全局的
      var modfile = this.data[mod][id]["file"] || (this.data.modfile + mod + "/")
      var file = modfile + id + ".md";
      this.addRelate(mod, id)
    } else {
      var file = this.data.navfile + p + ".md";
    }
    var smain = this.code(file);
    //生成主体内容
    this.html("main", smain);
    this.html("sidebar", this.data[p]);

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
build.init("config.json");