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
    getText: function(url) {
      return $.ajax({
        url: url,
        async: false
      }).responseText;
    },
    addCss: function(url) {
      $("<link>")
        .attr({
          rel: "stylesheet",
          type: "text/css",
          href: url
        })
        .appendTo("head");
    },
    getfile: function() {
      var params = (function() {
        var ret = {},
          seg = location.search.replace(/^\?/, '').split('&'),
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
      })()
      var cssfile = "mod/libs/",
        htmlfile = "mod/html/code/";

     return{
      css: cssfile+params.name+".css",
      html:htmlfile+params.name+".html",
      style:params.style
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
  css.setValue(name)
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