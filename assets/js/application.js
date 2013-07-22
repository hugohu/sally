$(function() {
  var $window = $(window);
  // side bar
  setTimeout(function() {
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function() {
          return $window.width() <= 980 ? 290 : 210
        },
        bottom: 270
      }
    })
  }, 100);
  //滚动监听
  $('body').scrollspy();
  // make code pretty
  window.prettyPrint && prettyPrint();
//include
  var anav = [{
      "name": "首页",
      "link": "index.html"
    },{
      "name": "基础框架",
      "link": "base.html"
    },{
      "name": "通用样式库",
      "link": "widget.html"
    },{
      "name": "JavaScript插件",
      "link": "js.html"
    },{
      "name": "规范",
      "link": "rule.html"
    },{
      "name": "代码片段",
      "link": "snippet.html"
    }],snav=way='';
  var nav_active = location.pathname;
  if(nav_active.indexOf("examples")!=-1){
   way="../../";
  }
for(var i = 0, len = anav.length; i < len; i += 1){
 snav+='<li><a href="'+way+anav[i].link+'">'+anav[i].name+'</a></li>';
}
snav='<div class="navbar navbar-inverse navbar-fixed-top" id="nav"><div class="navbar-inner"><div class="container"><div class="nav-collapse collapse"><ul class="nav">'+snav+'</li></ul></div></div></div></div>';
$("body").prepend(snav);
$("body").append('<footer class="footer" id="foot"><div class="bs-docs-social"><div class="container"><ul class="bs-docs-social-buttons"><li>And so, Sally can wait...</li></ul></div></div></footer>');

setTimeout(function(){
var nav_active = location.pathname;
//active
var $nav = $(".nav a");
for (var i = 0, len = $nav.length; i < len; i += 1) {
  var href = $nav.eq(i).attr("href");
  if (nav_active.indexOf(href) != -1) {
    $nav.eq(i).parent().addClass("active");
  }
}
},200);


});

