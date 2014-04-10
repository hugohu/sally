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

###Bugs及解决方案列表

 <ol class="gitem">
        <li class="no1"> <a href="javascript:">如何在IE6及更早浏览器中定义小高度的容器？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{overflow:hidden;height:1px;font-size:0;line-height:0;}</pre>
            <p class="gquote-info">IE6及更早浏览器之所以无法直接定义较小高度的容器是因为默认会有行高</p>
          </div>
        </li>
        <li class="no2"> <a href="javascript:">如何解决IE6及更早浏览器浮动时产生双倍边距的BUG？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{display:inline;}</pre>
            <p class="gquote-info"> 当在IE6及更早浏览器中出现浮动后margin值解析为双倍的情况，设置该元素的 <a href="javascript:">display</a> 属性为inline即可。 </p>
          </div>
        </li>
        <li class="no3"> <a href="javascript:">如何在IE6及更早浏览器下模拟min-height效果？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{min-height:100px;_height:100px;}</pre>
            <p class="gquote-info"> 注意此时#test不能再设置 <a href="javascript:">overflow</a> 的值为hidden，否则模拟 <a href="javascript:">min-height</a> 效果将失效 </p>
          </div>
        </li>
        <li class="no4"> <a href="javascript:">如何解决按钮在IE7及更早浏览器下随着value增多两边留白也随着增加的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">input,button{overflow:visible;}</pre>
          </div>
        </li>
        <li class="no5"> <a href="javascript:">如何解决IE7及更早浏览器下当li中出现2个或以上的浮动时，li之间产生的空白间隙的BUG？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">li{vertical-align:top;}</pre>
            <p class="gquote-info"> 除了top值，还可以设置为text-top | middle | bottom | text-bottom，甚至特定的 <a href="javascript:">&lt;length></a> 和 <a href="javascript:">&lt;percentage></a> 值都可以 </p>
          </div>
        </li>
        <li class="no6"> <a href="javascript:">如何解决IE6及更早浏览器下的3像素BUG？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">.a{color:#f00;}
.main{width:950px;background:#eee;}
.content{float:left;width:750px;height:100px;background:#ccc;_margin-right:-3px;}
.aside{height:100px;background:#aaa;}

&lt;div class="main">
  &lt;div class="content">content&lt;/div>
  &lt;div class="aside">aside&lt;/div>
&lt;/div></pre>
            <p class="gquote-info">在IE6及更早浏览器下为.content设置margin-right:-3px；也可以设置.aside为浮动</p>
          </div>
        </li>
        <li class="no7"> <a href="javascript:">如何解决IE6下的文本溢出BUG（江湖匪号：“谍影重重”或“一只猪的故事”）？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>BUG重现：</strong> </p>
            <pre name="code" class="css">.test{zoom:1;overflow:hidden;width:500px;}
.box1{float:left;width:100px;}.box2{float:right;width:400px;}

&lt;div class="test">
  &lt;div class="box1">&lt;/div>
&lt;!-- 注释 -->
&lt;div class="box2">↓这就是多出来的那只猪&lt;/div>
&lt;/div></pre>
            <div class="gquote-info">
              <p> 运行如上代码，你会发现文字发生了溢出，在IE6下会多出一只“猪”。造成此BUG的原因可能是多重混合的，如浮动，注释，宽高定义等等。并且注释条数越多，溢出的文本也会随之增多。 </p>
              <p> 列举几个解决方法： <br>
                删除box1和box2之间所有的注释； <br>
                不设置浮动； <br>
                调整box1或box2的宽度，比如将box的宽度调整为90px</p>
            </div>
          </div>
        </li>
        <li class="no8"> <a href="javascript:">如何解决IE6使用滤镜PNG图片透明后，容器内链接失效的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">div{width:300px;height:100px;
_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='*.png');}
a{_position:relative;}</pre>
            <p class="gquote-info"> 解决方法是为容器内的链接定义相对定位属性 <a href="javascript:">position</a> 的值为relative </p>
          </div>
        </li>
        <li class="no9"> <a href="javascript:">如何解决IE6无法识别伪对象:first-letter/:first-line的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法1：</strong> </p>
            <pre name="code" class="css">p:first-letter {float:left;font-size:40px;font-weight:bold;}
p:first-line {color:#090;}</pre>
            <p class="gquote-info">增加空格：在伪对象选择符:first-letter/:first-line与包含规则的花括号"{"间增加空格。</p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法2：</strong> </p>
            <pre name="code" class="css">p:first-letter{float:left;font-size:40px;font-weight:bold;}
p:first-line{color:#090;}</pre>
            <p class="gquote-info"> 换行：将整个花括号"{"规则区域换行。细节参见 <a href="javascript:">E:first-letter</a> 和 <a href="javascript:">E:first-line</a> 选择符 </p>
          </div>
        </li>
        <li class="no10"> <a href="javascript:">如何解决IE8会忽略伪对象:first-letter/:first-line里的!important规则的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>BUG重现：</strong> </p>
            <pre name="code" class="css">p:first-letter {float:left;font-size:40px;font-weight:bold;color:#f00!important;color:#090;}</pre>
            <p class="gquote-info"> 如上代码，在IE8下color定义都会失效，原因就是因为有color使用了!important规则。鉴于此，请尽量不要在:first-letter/:first-line里使用!important规则。 </p>
          </div>
        </li>
        <li class="no11"> <a href="javascript:">如何解决IE6会忽略同一条样式体内的!important规则的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>BUG重现：</strong> </p>
            <pre name="code" class="css">div{color:#f00!important;color:#000;}</pre>
            <p class="gquote-info"> 如上代码，IE6及以下浏览器div的文本颜色为#000，!important并没有覆盖后面的规则，也就是说!important被忽略了。解决方案是将该样式拆分为2条，细节参见 <a href="javascript:">!important</a> 规则 </p>
          </div>
        </li>
        <li class="no12"> <a href="javascript:">如何解决IE6及更早浏览器下当li内部元素是定义了display:block的内联元素时底部产生空白的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>BUG重现：</strong> </p>
            <pre name="code" class="css">a,span{display:block;background:#ddd;}

&lt;ul>
  &lt;li>&lt;a href="http://css.doyoe.com/">CSS参考手册&lt;/a>&lt;/li>
  &lt;li>&lt;a href="http://blog.doyoe.com/">CSS探索之旅&lt;/a>&lt;/li>
  &lt;li>&lt;a href="http://demo.doyoe.com/">web前端实验室&lt;/a>&lt;/li>
  &lt;li>&lt;span>测试li内部元素为设置了display:block的内联元素时底部产生空白&lt;/span>&lt;/li>
&lt;/ul></pre>
            <p class="gquote-info">如上代码，IE6及更早浏览器每个li内部的内联元素底部都会产生空白。解决方案是给li内部的内联元素再加上zoom:1</p>
          </div>
        </li>
        <li class="no13"> <a href="javascript:">如何解决IE6及更早浏览器下未定义宽度的浮动或绝对定位元素会被内部设置了zoom:1的块元素撑开的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>BUG重现：</strong> </p>
            <pre name="code" class="css">#test{zoom:1;overflow:hidden;border:1px solid #ddd;background:#eee;}
#test h1{float:left;}#test .nav{float:right;background:#aaa;}
#test .nav ul{zoom:1;overflow:hidden;margin:0;padding:0;list-style:none;}
#test .nav li{float:left;margin:0 5px;}

&lt;div class="test">
  &lt;h1>Doyoe&lt;/h1>
  &lt;div class="nav">
     &lt;ul>
        &lt;li>&lt;a href="http://css.doyoe.com/">CSS参考手册&lt;/a>&lt;/li>
        &lt;li>&lt;a href="http://blog.doyoe.com/">CSS探索之旅&lt;/a>&lt;/li>
        &lt;li>&lt;a href="http://demo.doyoe.com/">web前端实验室&lt;/a>&lt;/li>
     &lt;/ul>
  &lt;/div>
&lt;/div></pre>
            <div class="gquote-info">
              <p>如上代码，IE6及更早浏览器div.nav会被设置了zoom:1的ul给撑开。</p>
              <p> 列举几个解决方法： <br>
                设置ul为浮动元素； <br>
                设置ul为inline元素； <br>
                设置ul的width</p>
            </div>
          </div>
        </li>
        <li class="no14"> <a href="javascript:">如何解决IE7及更早浏览器下子元素相对定位时父元素overflow属性的auto|hidden失效的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>BUG重现：</strong> </p>
            <pre name="code" class="css">div{overflow:auto;width:260px;height:80px;border:1px solid #ddd;}
p{position:relative;margin:0;}

&lt;div>
  &lt;p>如果我是相对定位，我的父元素overflow属性设置为auto|hidden将失效。如果你使用的是IE及更早浏览器，你将可以看到这个BUG&lt;/p>
  &lt;p>如果我是相对定位，我的父元素overflow属性设置为auto|hidden将失效。如果你使用的是IE及更早浏览器，你将可以看到这个BUG&lt;/p>
&lt;/div></pre>
            <p class="gquote-info"> 如上代码，在IE7及更早浏览器下你会看到div的滚动条将无法工作。解决方案是给div也设置相对定位position:relative </p>
          </div>
        </li>
        <li class="no15"> <a href="javascript:">如何解决Chrome在应用transition时页面闪动的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">-webkit-transform-style:preserve-3d;
或-webkit-backface-visibility:hidden;</pre>
            <p class="gquote-info">在Chrome下，使用过渡效果transition时有时会出现页面闪动</p>
          </div>
        </li>
      </ol>
      <h3>CSS技巧和经验列表</h3>
      <ol class="gitem">
        <li class="no1"> <a href="javascript:">如何清除图片下方出现几像素的空白间隙？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法1：</strong> </p>
            <pre name="code" class="css">img{display:block;}</pre>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法2：</strong> </p>
            <pre name="code" class="css">img{vertical-align:top;}</pre>
            <p class="gquote-info"> 除了top值，还可以设置为text-top | middle | bottom | text-bottom，甚至特定的 <a href="javascript:">&lt;length></a> 和 <a href="javascript:">&lt;percentage></a> 值都可以 </p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法3：</strong> </p>
            <pre name="code" class="css">#test{font-size:0;line-height:0;}</pre>
            <p class="gquote-info">#test为img的父元素</p>
          </div>
        </li>
        <li class="no2"> <a href="javascript:">如何让文本垂直对齐文本输入框？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">input{vertical-align:middle;}</pre>
          </div>
        </li>
        <li class="no3"> <a href="javascript:">如何让单行文本在容器内垂直居中？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{height:25px;line-height:25px;}</pre>
            <p class="gquote-info">只需设置文本的行高等于容器的高度即可</p>
          </div>
        </li>
        <li class="no4"> <a href="javascript:">如何让超链接访问后和访问前的颜色不同且访问后仍保留hover和active效果？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">a:link{color:#03c;}a:visited{color:#666;}a:hover{color:#f30;}a:active{color:#c30;}</pre>
            <p class="gquote-info">按L-V-H-A的顺序设置超链接样式即可，可速记为LoVe（喜欢）HAte（讨厌）</p>
          </div>
        </li>
        <li class="no5"> <a href="javascript:">为什么Standard mode下IE无法设置滚动条的颜色？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">html{scrollbar-3dlight-color:#999;scrollbar-darkshadow-color:#999;scrollbar-highlight-color:#fff;scrollbar-shadow-color:#eee;scrollbar-arrow-color:#000;scrollbar-face-color:#ddd;scrollbar-track-color:#eee;scrollbar-base-color:#ddd;}</pre>
            <p class="gquote-info">将原来设置在body上的滚动条颜色样式定义到html标签选择符上即可</p>
          </div>
        </li>
        <li class="no6"> <a href="javascript:">如何使文本溢出边界不换行强制在一行内显示？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{width:150px;white-space:nowrap;}</pre>
            <p class="gquote-info"> 设置容器的宽度和 <a href="javascript:">white-space</a> 为nowrap即可，其效果类似&lt;nobr>标签 </p>
          </div>
        </li>
        <li class="no7"> <a href="javascript:">如何使文本溢出边界显示为省略号？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法（此方法Firefox5.0尚不支持）：</strong> </p>
            <pre name="code" class="css">#test{width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}</pre>
            <p class="gquote-info"> 首先需设置将文本强制在一行内显示，然后将溢出的文本通过overflow:hidden截断，并以text-overflow:ellipsis方式将截断的文本显示为省略号。 </p>
          </div>
        </li>
        <li class="no8"> <a href="javascript:">如何使连续的长字符串自动换行？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{width:150px;word-wrap:break-word;}</pre>
            <p class="gquote-info"> <a href="javascript:">word-wrap</a> 的break-word值允许单词内换行 </p>
          </div>
        </li>
        <li class="no9"> <a href="javascript:">如何清除浮动？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法1：</strong> </p>
            <pre name="code" class="css">#test{clear:both;}</pre>
            <p class="gquote-info">#test为浮动元素的下一个兄弟元素</p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法2：</strong> </p>
            <pre name="code" class="css">#test{display:block;zoom:1;overflow:hidden;}</pre>
            <p class="gquote-info">#test为浮动元素的父元素。zoom:1也可以替换为固定的width或height</p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法3：</strong> </p>
            <pre name="code" class="css">#test{zoom:1;}#test:after{display:block;clear:both;visibility:hidden;height:0;content:'';}</pre>
            <p class="gquote-info">#test为浮动元素的父元素</p>
          </div>
        </li>
        <li class="no10"> <a href="javascript:">如何定义鼠标指针的光标形状为手型并兼容所有浏览器？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{cursor:pointer;}</pre>
            <p class="gquote-info"> 若将 <a href="javascript:">cursor</a> 设置为hand，将只有IE和Opera支持，且hand为非标准属性值 </p>
          </div>
        </li>
        <li class="no11"> <a href="javascript:">如何让已知高度的容器在页面中水平垂直居中？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{position:absolute;top:50%;left:50%;width:200px;height:200px;margin:-100px 0 0 -100px;}</pre>
            <p class="gquote-info"> Know More： <a href="http://blog.doyoe.com/article.asp?id=74" target="_blank">已知高度的容器如何在页面中水平垂直居中</a> </p>
          </div>
        </li>
        <li class="no12"> <a href="javascript:">如何让未知尺寸的图片在已知宽高的容器内水平垂直居中？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">#test{display:table-cell;*display:block;*position:relative;width:200px;height:200px;text-align:center;vertical-align:middle;}
#test p{*position:absolute;*top:50%;*left:50%;margin:0;}
#test p img{*position:relative;*top:-50%;*left:-50%;vertical-align:middle;}</pre>
            <p class="gquote-info"> #test是img的祖父节点，p是img的父节点。Know More： <a href="http://blog.doyoe.com/article.asp?id=159" target="_blank">未知尺寸的图片如何水平垂直居中</a> </p>
          </div>
        </li>
        <li class="no13"> <a href="javascript:">如何设置span的宽度和高度（即如何设置内联元素的宽高）？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">span{display:block;width:200px;height:100px;}</pre>
            <p class="gquote-info"> 要使内联元素可以设置宽高，只需将其定义为块级或者内联块级元素即可。所以方法非常多样，既可以设置 <a href="javascript:">display</a> 属性，也可以设置 <a href="javascript:">float</a> 属性，或者 <a href="javascript:">position</a> 属性等等。 </p>
          </div>
        </li>
        <li class="no14"> <a href="javascript:">如何给一个元素定义多个不同的css规则？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">.a{color:#f00;}.b{background:#eee;}
.c{background:#ccc;}

&lt;div class="a b">测试1&lt;/div>
&lt;div class="a c">测试2&lt;/div></pre>
            <p class="gquote-info">多个规则之间使用空格分开，并且只有id能同时使用多个规则，id不可以</p>
          </div>
        </li>
        <li class="no15"> <a href="javascript:">如何让某个元素充满整个页面？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">html,body{height:100%;margin:0;}
#test{height:100%;}</pre>
          </div>
        </li>
        <li class="no16"> <a href="javascript:">如何让某个元素距离窗口上右下左4边各10像素？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">html,body{height:100%;margin:0;}html{_padding:10px;}
#test{position:absolute;top:10px;right:10px;bottom:10px;left:10px;_position:static;_height:100%;}</pre>
          </div>
        </li>
        <li class="no17"> <a href="javascript:">如何去掉超链接的虚线框？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">a{outline:none;}</pre>
            <p class="gquote-info"> IE7及更早浏览器由于不支持 <a href="javascript:">outline</a> 属性，需要通过js的blur()方法来实现，如&lt;a onfocus="this.blur();"... </p>
          </div>
        </li>
        <li class="no18"> <a href="javascript:">如何容器透明，内容不透明？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法1：</strong> </p>
            <pre name="code" class="css">.outer{width:200px;height:200px;background:#000;filter:alpha(opacity=20);opacity:.2;}.inner{width:200px;height:200px;margin-top:-200px;}&lt;div class="outer">&lt;!--我是透明的容器-->&lt;/div>&lt;div class="inner">我是不透明的内容&lt;/div></pre>
            <p class="gquote-info"> 原理是容器层与内容层并级，容器层设置透明度，内容层通过负 <a href="javascript:">margin</a> 或者 <a href="javascript:">position</a> 绝对定位等方式覆盖到容器层上 </p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法2：</strong> </p>
            <pre name="code" class="css">.outer{width:200px;height:200px;background:rgba(0,0,0,.2);background:#000\9;filter:alpha(opacity=20)\9;}
.outer .inner{position:relative\9;}

&lt;div class="outer">
  &lt;div class="inner">我是不透明的内容&lt;/div>
&lt;/div></pre>
            <p class="gquote-info"> 高级浏览器直接使用 <a href="javascript:">rgba</a> 颜色值实现；IE浏览器在定义容器透明的同时，让子节点相对定位，也可达到效果 </p>
          </div>
        </li>
        <li class="no19"> <a href="javascript:">如何让整个页面水平居中？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">body{text-align:center;}
#test2{width:960px;margin:0 auto;text-align:left;}</pre>
            <p class="gquote-info"> 定义body的 <a href="javascript:">text-align</a> 值为center将使得IE5.5也能实现居中 </p>
          </div>
        </li>
        <li class="no20"> <a href="javascript:">为什么容器的背景色没显示出来？为什么容器无法自适应内容高度？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <div class="gquote-cont"> <a href="#no9">清除浮动</a> ，方法请参考本页第9条 </div>
            <p class="gquote-info">通常出现这样的情况都是由于没有清除浮动而引起的，所以Debug时应第一时间想到是否有未清除浮动的地方</p>
          </div>
        </li>
        <li class="no21"> <a href="javascript:">如何做1像素细边框的table？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法1：</strong> </p>
            <pre name="code" class="css">#test{border-collapse:collapse;border:1px solid #ddd;}
#test th,#test td{border:1px solid #ddd;}

&lt;table class="test">
  &lt;tr>
    &lt;th>姓名&lt;/th>
    &lt;td>Joy Du&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;th>年龄&lt;/th>
    &lt;td>26&lt;/td>
  &lt;/tr>
&lt;/table></pre>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法2：</strong> </p>
            <pre name="code" class="css">#test{border-spacing:1px;background:#ddd;}
#test tr{background:#fff;}

&lt;table class="test" cellspacing="1">
  &lt;tr>
    &lt;th>姓名&lt;/th>
    &lt;td>Joy Du&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;th>年龄&lt;/th>
    &lt;td>26&lt;/td>
  &lt;/tr>
&lt;/table></pre>
            <p class="gquote-info"> IE7及更早浏览器不支持 <a href="javascript:">border-spacing</a> 属性，但是可以通过table的标签属性cellspacing来替代。 </p>
          </div>
        </li>
        <li class="no22"> <a href="javascript:">如何使页面文本行距始终保持为n倍字体大小的基调？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">body{line-height:n;}</pre>
            <p class="gquote-info"> 注意，不要给n加单位。Know More： <a href="http://blog.doyoe.com/article.asp?id=195" target="_blank">如何使页面文本行距始终保持为n倍字体大小的基调</a> </p>
          </div>
        </li>
        <li class="no23"> <a href="javascript:">标准模式Standard mode和怪异模式Quirks mode下的盒模型区别？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <div class="gquote-cont">
              <pre name="code" class="css">标准模式下：Element width = width + padding + border怪异模式下：Element width = width</pre>
            </div>
            <p class="gquote-info"> 相关资料请参阅CSS3属性 <a href="javascript:">box-sizing</a> </p>
          </div>
        </li>
        <li class="no24"> <a href="javascript:">以图换字的几种方法及优劣分析</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>思路1：使用text-indent的负值，将内容移出容器</strong> </p>
            <pre name="code" class="css">.test1{width:200px;height:50px;text-indent:-9999px;background:#eee url(*.png) no-repeat;}&lt;div class="test">以图换字之内容负缩进法&lt;/div></pre>
            <p class="gquote-info"> 该方法优点在于结构简洁，不理想的地方：1.由于使用场景不同，负缩进的值可能会不一样，不易抽象成公用样式；2.当该元素为链接时，在非IE下虚线框将变得不完整；3.如果该元素被定义为内联级或者内联块级，不同浏览器下会有较多的差异 </p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>思路2：使用display:none或visibility:hidden将内容隐藏；</strong> </p>
            <pre name="code" class="css">.test{width:200px;height:50px;background:#eee url(*.png) no-repeat;}
.test span{visibility:hidden;/* 或者display:none */}

&lt;div class="test">
  &lt;span>以图换字之内容隐藏法&lt;/span>
&lt;/div></pre>
            <p class="gquote-info">该方法优点在于兼容性强并且容易抽象成公用样式，缺点在于结构较复杂</p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>思路3：使用padding或者line-height将内容挤出容器之外；</strong> </p>
            <pre name="code" class="css">.test{overflow:hidden;width:200px;height:0;padding-top:50px;background:#eee url(*.png) no-repeat;}
.test{overflow:hidden;width:200px;height:50px;line-height:50;background:#eee url(*.jpg) no-repeat;}

&lt;div class="test">以图换字之内容排挤法&lt;/div></pre>
            <p class="gquote-info"> 该方法优点在于结构简洁，缺点在于：1.由于使用场景不同，padding或line-height的值可能会不一样，不易抽象成公用样式；2.要兼容IE5.5及更早浏览器还得hack </p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>思路4：使用超小字体和文本全透明法；</strong> </p>
            <pre name="code" class="css">.test{overflow:hidden;width:200px;height:50px;font-size:0;line-height:0;color:rgba(0,0,0,0);background:#eee url(*.png) no-repeat;}

&lt;div class="test">以图换字之超小字体+文本全透明法&lt;/div></pre>
            <p class="gquote-info">该方法结构简单易用，推荐使用</p>
          </div>
        </li>
        <li class="no25"> <a href="javascript:">为什么2个相邻div的margin只有1个生效？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">.box1{margin:10px 0;}
.box2{margin:20px 0;}

&lt;div class="box1">box1&lt;/div>
&lt;div class="box2">box2&lt;/div></pre>
            <div class="gquote-info">
              <p> 本例中box1的底部margin为10px，box2的顶部margin为20px，但表现在页面上2者之间的间隔为20px，而不是预想中的10+20px=30px，结果是选择2者之间最大的那个margin，我们把这种机制称之为“外边距合并”；外边距合并不仅仅出现在相邻的元素间，父子间同样会出现。 </p>
              <p> 简单列举几点注意事项: <br>
                外边距合并只出现在块级元素上； <br>
                浮动元素不会和相邻的元素产生外边距合并； <br>
                绝对定位元素不会和相邻的元素产生外边距合并； <br>
                内联块级元素间不会产生外边距合并； <br>
                根元素间不会不会产生外边距合并（如html与body间）； <br>
                设置了属性overflow且值不为visible的块级元素不会与它的子元素发生外边距合并；</p>
            </div>
          </div>
        </li>
        <li class="no26"> <a href="javascript:">如何在文本框中禁用中文输入法？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">input,textarea{ime-mode:disabled;}</pre>
            <p class="gquote-info">ime-mode为非标准属性，写该文档时只有IE和Firefox支持</p>
          </div>
        </li>
        <li class="no27"> <a href="javascript:">如何解决列表中list-style-image不能精准定位的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <div class="gquote-cont"> 不使用 <a href="javascript:">list-style-image</a> 来定义列表项目标记符号，而用 <a href="javascript:">background-image</a> 来代替，并通过 <a href="javascript:">background-position</a> 来进行定位 </div>
          </div>
        </li>
        <li class="no28"> <a href="javascript:">如何解决伪对象:before和:after在input标签上的怪异表现的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>现象：</strong> </p>
            <div class="gquote-cont"> 在编写本条目时，除了Opera，在所有浏览器下input标签使用伪对象:before和:after都没有效果，即使Opera的表现也同样令人诧异。大家可以试玩一下。浏览器版本：IE6-IE10, Firefox6.0, Chrome13.0, Safari5.1, Opera11.51 </div>
          </div>
        </li>
        <li class="no29"> <a href="javascript:">如何解决伪对象:before和:after无法在Chrome,Safari,Opera上定义过渡和动画的问题？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>现象：</strong> </p>
            <div class="gquote-cont"> 在编写本条目时，除了Firefox，在所有浏览器下伪对象:before和:after无法定义过渡和动画效果。浏览器版本：IE6-IE10, Firefox6.0, Chrome13.0, Safari5.1, Opera11.51。如果这个过渡或动画效果是必须，可以考虑使用真实对象。 </div>
          </div>
        </li>
      </ol>
      <h3>其它技巧和经验列表</h3>
      <ol class="gitem">
        <li class="no1"> <a href="javascript:">如何让层在falsh上显示？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">&lt;param name="wmode" value="transparent" /></pre>
            <p class="gquote-info">设置flash的wmode值为transparent或opaque</p>
          </div>
        </li>
        <li class="no2"> <a href="javascript:">如何使用标准的方法在页面上插入flash？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <pre name="code" class="css">&lt;object class="flash-show" type="application/x-shockwave-flash" data="*.swf">
  &lt;param name="movie" value="*.swf" />
  &lt;param name="wmode" value="transparent" />
  &lt;img src="*.jpg" alt="用于不支持flash或屏蔽flash时显示" />
&lt;/object></pre>
            <p class="gquote-info">至于flash的宽高可以在css里设置</p>
          </div>
        </li>
        <li class="no3"> <a href="javascript:">如何在点文字时也选中复选框或单选框？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法1：</strong> </p>
            <pre name="code" class="css">&lt;input type="checkbox" class="chk1" name="chk" />
&lt;label for="chk1">选项一&lt;/label>
&lt;input type="checkbox" class="chk2" name="chk" />
&lt;label for="chk2">选项二&lt;/label>
&lt;input type="radio" class="rad1" name="rad" />
&lt;label for="rad1">选项一&lt;/label>
&lt;input type="radio" class="rad2" name="rad" />
&lt;label for="rad2">选项二&lt;/label></pre>
            <p class="gquote-info">该方式所有主流浏览器都支持</p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法2：</strong> </p>
            <pre name="code" class="css">&lt;label>&lt;input type="checkbox" name="chk" />选项一&lt;/label>
&lt;label>&lt;input type="checkbox" name="chk" />选项二&lt;/label>
&lt;label>&lt;input type="radio" name="rad" />选项一&lt;/label>
&lt;label>&lt;input type="radio" name="rad" />选项二&lt;/label></pre>
            <p class="gquote-info">该方式相比方法1更简洁，但IE6及更早浏览器不支持</p>
          </div>
        </li>
        <li class="no4"> <a href="javascript:">IE下如何对Standard Mode与Quirks Mode进行切换？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>IE6的触发（在DTD申明前加上XML申明）：</strong> </p>
            <pre name="code" class="css">&lt;?xml version="1.0" encoding="utf-8"?>
&lt;!DOCTYPE html></pre>
            <p class="gquote-info">IE5.5及更早浏览器版本直接以Quirks Mode解析。</p>
          </div>
          <div class="gquote">
            <p class="gquote-tit"> <strong>所有IE版本的触发（在DTD申明前加上HTML注释）：</strong> </p>
            <pre name="code" class="css">&lt;!-- Let IE into quirks mode -->
&lt;!DOCTYPE html></pre>
            <p class="gquote-info">当没有DTD声明时，所有IE版本也会进入Quirks Mode。</p>
          </div>
        </li>
        <li class="no5"> <a href="javascript:">如何区别display:none与visibility:hidden？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <div class="gquote-cont"> 相同的是display:none与visibility:hidden都可以用来隐藏某个元素；不同的是display:none在隐藏元素的时候，将其占位空间也去掉；而visibility:hidden只是隐藏了内容而已，其占位空间仍然保留。 </div>
          </div>
        </li>
        <li class="no6"> <a href="javascript:">如何设置IE下的iframe背景透明？</a>
          <div class="gquote">
            <p class="gquote-tit"> <strong>方法：</strong> </p>
            <div class="gquote-cont"> 设置iframe元素的标签属性allowtransparency="allowtransparency"然后设置iframe内部页面的body背景色为transparent。不过由此会引发IE下一些其它问题，如：设置透明后的iframe将不能遮住select </div>
          </div>
        </li>
</ol>
<script>
    $(function(){
        var li=$(".gitem a");
        li.click(function(){
            $(this).parent().find(".gquote").slideToggle();
        })
    })
    </script>
##html email

