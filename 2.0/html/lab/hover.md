<script id="modhtml" type="text/Template">
<div class="img-hover">
	<a href="">
		<img src="http://ww4.sinaimg.cn/mw690/51a2bfdagw1egwnh83glcj208m0c30sv.jpg" alt="" />
	</a>
	<div class="hide">
		<p class="txt">Dooney & Bourke Dillen II Small Zipper Pocket Sac, Navy</p>
		<a href="" class="btn">SHOP NOW</a>
		<p class="rating-box">
			<span class="rating"> <i style="width:80%"></i>
			</span>
			<span class="quantity">21</span>
		</p>
	</div>
</div>
</script>
<script id="modcss" type="text/Template">
.img-hover{position:relative}
.img-hover a,.img-hover{display: block;width: 250px;height:320px;overflow: hidden;}
.img-hover:hover img{
-webkit-transform: scale(1.2);
-moz-transform: scale(1.2);
-ms-transform: scale(1.2);
-o-transform: scale(1.2);
transform: scale(1.2);
}
.img-hover .hide p,.img-hover img,.img-hover .hide{
    -webkit-transition:all 0.35s ease-in-out;
-moz-transition:all 0.35s ease-in-out;
-ms-transition:all 0.35s ease-in-out;
-o-transition:all 0.35s ease-in-out;
transition: all 0.35s ease-in-out;
}
.img-hover .hide p,.img-hover .btn{
    -webkit-transform: translateY(-150%);
  -moz-transform: translateY(-150%);
  -ms-transform: translateY(-150%);
  -o-transform: translateY(-150%);
  transform: translateY(-150%);}
    .img-hover .btn{
    	display: inline-block;
    	width: 100px;height: 25px;background-color: #f60;
        -webkit-transition:all 0.35s linear;
-moz-transition:all 0.35s linear;
-ms-transition:all 0.35s linear;
-o-transition:all 0.35s linear;
transition: all 0.35s linear;
    -webkit-transform: translateY(150%);
  -moz-transform: translateY(150%);
  -ms-transform: translateY(150%);
  -o-transform: translateY(150%);
  transform: translateY(150%);}
.img-hover:hover .hide  p,.img-hover:hover .btn{
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}
.img-hover .hide{visibility: hidden;opacity: 0;background-color:rgba(0,0,0,0.25);position: absolute;left: 0;top: 0;width:100%;padding:0 10px;height: 320px;padding-top: 130px;}
.img-hover:hover .hide{visibility: visible;opacity: 1}
</script>
<div class="example" data-load="#modhtml"></div>
##鼠标划过效果



[查看实例](edit.html?mod=lab&id=hover)