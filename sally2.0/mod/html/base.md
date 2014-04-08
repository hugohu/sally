###概述

重置样式，清除浏览器默认样式，并配置适合设计的基础样式（强调文本是否大多是粗体、主文字色，主链接色，主字体等）。

```css
/* 内外边距通常让各个浏览器样式的表现位置不同 */
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { margin:0; padding:0; }
/* 重设 HTML5 标签, IE 需要在 js 中 createElement(TAG) */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display:block; }
/* 要注意表单元素并不继承父级 font 的问题 */
body, button, input, select, textarea { font:12px/1.5 tahoma, SimSun, \5b8b\4f53; }
input, select, textarea { font-size:100%; }
/* 去掉各Table  cell 的边距并让其边重合 */
table { border-collapse:collapse; border-spacing:0; }
/* IE bug fixed: th 不继承 text-align*/
th { text-align:inherit; }
/* 去除默认边框 */
fieldset, img { border:0; vertical-align:middle; }
iframe { display:block; }
/* 去掉列表前的标识, li 会继承 */
ol, ul { list-style:none; }
/* 来自yahoo, 让标题都自定义, 适应多个系统应用 */
h1, h2, h3, h4, h5, h6 { font-size:100%; font-weight:500; }
/* ie6 7 8(q) bug 显示为行内表现 */
q:before, q:after { content:''; }
/* 让链接在 hover 状态下显示下划线 */
a:hover { text-decoration:underline; }
/* 默认不显示下划线，保持页面简洁 */
ins, a { text-decoration:none; }
/* 清理浮动 */
.clearfix { *zoom: 1;}
.clearfix:before,
.clearfix:after {display: table;line-height: 0;content: "";}
.clearfix:after {clear: both;}
```
详情参见<a href="assets/reset.css">reset.css</a>文件

###grid 布局系统:990像素定宽25栅格布局。

分栏系统简介：把990的页面分为25栏。进行快速页面布局。

###使用说明

**.g-row**

表示一行，用于包裹*.g-{{number}}*。一行内的栅格数不要超过 25。

*.g-{{number}}*

表示区域跨越了多少列。数字从 1 到 25，例如g-18。

最右侧的请添加.g-r

```html
<div class="g-row">
    <div class="g-5">g-5</div>
    <div class="g-15">g-15</div>
    <div class="g-5">g-5 g-r</div>
</div>
```
ps：可以观察出，所有一栏的数字相加为25.

具体分栏细节:
```css
.g-1 {width:30px;}
.g-2 {width:70px;}
.g-3 {width:110px;}
.g-4 {width:150px;} /* 右侧推广位的宽度 */
.g-5 {width:190px;} /* 左侧边栏的宽度 */
.g-6 {width:230px;}
.g-7 {width:270px;}
.g-8 {width:310px;}
.g-9 {width:350px;}
.g-10 {width:390px;}
.g-11 {width:430px;}
.g-12 {width:470px;}
.g-13 {width:510px;}
.g-14 {width:550px;}
.g-15 {width:590px;} /* 中央区域宽度 */
.g-16 {width:630px;}
.g-17 {width:670px;}
.g-18 {width:710px;}
.g-19 {width:750px;}
.g-20 {width:790px;}
.g-21 {width:830px;} /* 交易明细表区域的宽度 */
.g-22 {width:870px;}
.g-23 {width:910px;}
.g-24 {width:950px;}
.g-25 {width:990px;} /* 最大页面宽度 */
```

###<a href="examples/g-row.html" >查看具体演示 </a>

