

###概述

<div data-list="m"></div>

```js
var db=1;
for(var i=0;i<10;i++){
    
}
```
[ROP__ARM](edit.html?mod=m&id=box)


<!-- 模块内容 html结构跟样式 begin -->
<script id="modhtml" type="text/Template">
<div class="m-box">
    <div class="m-box-head">
            <h3 class="u-tt">区块标题</h3>
            <span class="u-txt">其他文字</span>
            <a href="#" class="more">更多</a>
    </div>
     <div class="m-cent">m-cent 有默认内边距</div>
</div>

</script>
<script id="modcss" type="text/Template">
.m-box { border: 1px solid #ddd; zoom: 1; font-size: 12px; margin: 0; padding: 0; }
.m-box:after { clear: both; content: " "; display: block; font-size: 0; height: 0; visibility: hidden }
.m-box-follow { border-top: 0 }
.m-box-head{border-bottom: 1px solid #ddd; position: relative ; height: 14px; line-height: 16px; overflow: hidden; padding: 10px;background:#f8f8f8  }
.m-box-head .u-tt { color: #4d4d4d; font-size: 14px; font-weight: 700; float: left; display: inline; margin: 0; padding: 0 }
.m-box-head .more { float: right }
.m-box-head .u-txt { margin-left: 10px; color: gray; float: left }
.m-cent { background: #fff;  padding: 10px }


</script>
<!-- 模块内容 end -->
