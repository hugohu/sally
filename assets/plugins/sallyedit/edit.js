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
  addRelate: function(mod, id) {
    if (this.data[mod][id].relate == undefined) {
      return false;
    };
    var a = this.data[mod][id].relate; //获取资源
    $("[data-type='addRelate']").remove();
    $.each(a, function(index, value) {
      if (value.indexOf(".css") != -1) {
        $("<link>").attr({
          rel: "stylesheet",
          href: value,
          "data-type": "addRelate"
        }).appendTo("head");
      } else {
        $.getScript(value);
      }
      var alink="<a href="+value+">"+value+"</a>";
      $(".explain").append(alink)
    });
  },
  setpage: function(p, mod) {
      var code = "config.json";
      var o = this.params();
      var p = p || o.p;
      var mod = mod == 0 ? undefined : o.mod;
      if (mod != undefined) {
        var id = o.id;
        if (this.data == undefined) {
          var data = this.code(code);
          this.data = $.parseJSON(data);
        };
        var htmlfile = this.data[mod][id]["file"] || (this.data.modfile + mod + "/"+ id + ".md");
        this.addRelate(mod, id);
        var html=this.code(htmlfile);
        $("#description").html(html);
      } else {
        return false;
      }
    var hash=window.location.hash;
    if(hash){
      var url=hash.replace("#","");
      var omod=this.params(url);
      var cssId=omod.css;
      var htmlId=omod.html;
      var modcss=$(cssId).html();
      var modHtml=$(htmlId).html();
    }else{
     var modHtml=$("#modhtml").html();
    var modcss=$("#modcss").html(); 
  }
      return {
        html:modHtml,
        css:modcss 
      }
    }
  }
  // 初始化设置
  var code = document.getElementById('code'),
    previewFrame = document.getElementById('demo'),
    mcss = document.getElementById('mcss'),
    editcss = document.getElementById('editcss');
  var html = edit.add(code, 'text/html', previewFrame);
  var css = edit.add(mcss, 'text/css', editcss);

  //动态获取内容
  var setpage = edit.setpage();
  var cssCode = setpage.css;
  var htmlCode = setpage.html;
  htmlCode && html.setValue(htmlCode)
  cssCode && css.setValue(cssCode)
});

//菜单栏构成
$(".explain").on("mousedown", function(e) {
  var _h = $(".CodeMirror").height(),
    timeOut, n = 0,
    dis = e.pageY;

  function move(e) {
    clearTimeout("timeOut");
    var dix = dis - e.pageY;
    var timeOut = setTimeout(function() {
      $(".CodeMirror").css("height", _h + dix);
    }, 1);
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