(function(){
    var delayhtml,delaycss;
      // html
      var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'text/html',
        lineNumbers : true,
        tabMode: 'indent'
      });
      editor.on("change", function() {
        clearTimeout(delayhtml);
        delay = setTimeout(updatehtml, 300);
      });
      //css
      var editorcss = CodeMirror.fromTextArea(document.getElementById('css'), {
        mode: 'text/css',
        lineNumbers : true,
        tabMode: 'indent'
      });
      editorcss.on("change", function() {
        clearTimeout(delaycss);
        delaycss = setTimeout(updatecss, 300);
      });
      function updatehtml() {
        var previewFrame = document.getElementById('demo');
        previewFrame.innerHTML=editor.getValue();
      }
      function updatecss() {
        var editcss = document.getElementById('editcss');
        editcss.innerHTML=editorcss.getValue();
      }
      setTimeout(updatehtml, 300); 
      setTimeout(updatecss, 300);
      //设置样式
})()