$(function() {
  var edit = {
    add: function(e, type, upe) {
      var editor = CodeMirror.fromTextArea(e, {
        mode: type,
        lineNumbers: true,
        tabMode: 'indent'
      });
      editor.on("change", function() {
        clearTimeout(this.delay);
        this.delay = setTimeout(updatehtml, 300);
      });

      function updatehtml() {
        upe.innerHTML = editor.getValue();
      }
      setTimeout(updatehtml, 300);
      return editor;
    },
    code: function(url) {
      return $.ajax({
        url: url,
        async: false
      }).responseText;

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
    addCss: function(mod, name) {

      //可能有点问题
      var cssfile = this.codedata.cssfile;
        if(this.codedata[mod][name]==undefined){
          return false;
        }
      var  a = this.codedata[mod][name].style.split(";"),
        b = [];
      $.each(a, function(i, n) {
        b[i] = cssfile + n + ".css"
      })
      var link = $("link");
      var exp = $(".explain");
      $.each(b, function(index, value) {
        $("<a>").attr("href", value).html(value).appendTo(exp);
        $("<link>").attr({
          rel: "stylesheet",
          type: "text/css",
          href: value
        }).appendTo("head");
      });
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
        var cssfile = this.codedata.cssfile + name + ".css"
        this.addCss(mod, name)
      } else {
        return false;
      }
      return {
        html: this.code(htmlfile),
        css: this.code(cssfile)
      }
    }
  }
  // 初始化设置
  var code = document.getElementById('code'),
    previewFrame = document.getElementById('demo'),
    css = document.getElementById('css'),
    editcss = document.getElementById('editcss');
  var html = edit.add(code, 'text/html', previewFrame);
  var css = edit.add(css, 'text/css', editcss);

  //动态获取内容
  var setpage = edit.setpage();
  var cssCode = setpage.css;
  var htmlCode = setpage.html;
  htmlCode && html.setValue(htmlCode)
  cssCode && css.setValue(cssCode)
});


$(".explain").on("mousedown", function(e) {
  var _h = $(".CodeMirror").height(),
    timeOut, n = 0,
    dis = e.pageY;

  function move(e) {
    clearTimeout("timeOut");
    var dix = dis - e.pageY;
    var timeOut = setTimeout(function() {
      $(".CodeMirror").css("height", _h + dix)
    }, 1)
  }

  function over(e) {
    $(document).off("mousemove", move);
    e.preventDefault();
    e.stopPropagation();
  }
  $(document).on("mousemove", move);
  $(document).on("mouseup", over);
  e.preventDefault();
  e.stopPropagation();
})