##常用代码片段

过渡渐变

```css
.hide{
visibility: hidden;
opacity: 0;
-webkit-transition: 0.35s;
-moz-transition: 0.35s;
-ms-transition: 0.35s;
-o-transition: 0.35s;
transition: 0.35s;
 }
.active .hide{
visibility: visible;
opacity: 1;
}

/*** 缩放 ***/
 .demo{
-webkit-transform: scale(0.8);
-moz-transform: scale(0.8);
-ms-transform: scale(0.8);
-o-transform: scale(0.8);
transform: scale(0.8);
}
```
ie6完美固定浮动

```css
/*for ie6 兼容的固定浮动*/
 * html body{background-image: url(about:blank);background-attachment: fixed;}
/*for top*/    
* html #fixedbox{position: absolute;top: expression(documentElement.scrollTop + 250 +”px”);}
/*for bottom*/  
_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));
```
css三角形兼容ie6
 <div class="bs-docs-example"> 
        <!--    样式部分：三角形 -->
        <style>
em.arr { height: 0;
width: 0;
border-width: 9px;
border-style: solid dashed dashed dashed;
border-color: red transparent  transparent transparent;
font-size: 0;}
</style>
        <em class="arr"></em> </div>
```css
em.arr {
height: 0;
width: 0;
border-width: 9px;
border-style: solid dashed dashed dashed;
border-color: red transparent  transparent transparent;
font-size: 0;
}
//方向下左上右
```
```html
<em class="arr"></em>
```
ie6限制宽度表达式,不考虑性能可以用,备注:不能写高度的表达式,会导致浏览器卡死

```css
_width: expression(this.width > 250 ? 250+"px" : "auto" );
```
全兼容的透明度方法

```css
opacity: .7;filter: alpha(opacity=70);
```
全兼容半透明方案
```css
.ui-dialog {background-color: rgba(0, 0, 0, 0.5);FILTER: progid:DXImageTransform.Microsoft.Gradient(startColorstr=#88000000, endColorstr=#88000000);}
/*ie9 hack*/
:root .ui-dialog {FILTER: none\9;}
```
顺时针翻转 90 度。
```css
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-o-transform: rotate(90deg);
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
-ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
transform: rotate(90deg);
```
滚动条样式 webkit内核-摘自有道笔记web 适合美化滚动div
```css
 ::-webkit-scrollbar{height:8px;width:8px;background:rgba(222, 222, 222, 0.5);border-radius:5px;}
::-webkit-scrollbar-button{display:none;}
::-webkit-scrollbar-track{background-color:#ffffff;}
::-webkit-scrollbar-track-piece{background:#ffffff;}
::-webkit-scrollbar-thumb{width:8px;min-height:15px;background:rgba(0, 0, 0, 0.3);border-radius:5px;}
::-webkit-scrollbar-thumb:hover{background:rgba(0, 0, 0, 0.6);}
::-webkit-scrollbar-thumb:active{background:rgba(0, 0, 0, 0.8);}
```
##技巧

这里总结了一些日常碰到的问题以及简单的解决方案

产生兼容问题的根本原因: <a href="http://www.w3help.org/zh-cn/causes/">http://www.w3help.org/zh-cn/causes/</a><br />这里详细的记录了一系列的问题以及文档,可以仔细看看.