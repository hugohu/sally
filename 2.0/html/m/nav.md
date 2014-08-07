<script id="modhtml" type="text/Template">
<div class="row">
    <button class="r-s-show toggle-nav">click</button>
    <div class="nav r-s-hide">
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">列表页</a></li>
            <li><a href="#">详情页</a></li>
            <li><a href="#">404页面</a></li>
        </ul> 
    </div>
</div>
</script>
<script id="modcss" type="text/Template">

</script>


<div class="example" data-load="#modhtml"></div>


[查看实例](edit.html?mod=m&id=nav)
<style>
.r-s-show{visibility: hidden;opacity: 0}
.r-s-hide{visibility: visible;opacity: 1;
-webkit-transition: 0.35s;
-moz-transition: 0.35s;
-ms-transition: 0.35s;
-o-transition: 0.35s;
transition: 0.35s;
}
@media only screen and (max-width:768px) {
.r-s-show{visibility: visible;opacity: 1}
.r-s-hide,.f-show{visibility: hidden;opacity: 0}
.nav{float: none;display: block;}
.nav li{display: block;}
}
.toggle-nav{float: left;}
.nav li{display: inline-block;margin-left: 10px;float: left;}
</style>