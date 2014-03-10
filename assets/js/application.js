$(function() {
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
 snav+='<a href="'+way+anav[i].link+'">'+anav[i].name+'</a>';
}
snav='<div class="m-nav"><div class="row"><div class="nav">'+snav+'</div></div></div>';
$("body").prepend(snav);
$("body").append('<div class="m-foot" id="foot">And so, Sally can wait...</div>');

setTimeout(function(){
var nav_active = location.pathname;
//active
var $nav = $(".nav a");
for (var i = 0, len = $nav.length; i < len; i += 1) {
  var href = $nav.eq(i).attr("href");
  if (nav_active.indexOf(href) != -1) {
    $nav.eq(i).addClass("active");
  }
}
},200);


});

