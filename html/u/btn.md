<script id="modhtml" type="text/Template">
<!--可以改成input 或者a标签-->
<button class="btn">按钮</button>
<button class="btn btn-hot">按钮</button>
<button class="btn btn-key">按钮</button>
<button class="btn glow">按钮</button>
</script>
<script id="modcss" type="text/Template">
/* btn */
input:focus,button:focus{outline: none}
input.btn,button.btn{height:40px;cursor:pointer;}
.btn {background-color:#eee;display: inline-block;vertical-align: middle;*vertical-align: auto;zoom: 1;*overflow:visible;*display: inline;padding:0 12px;height:28px;line-height:28px;font-size: 12px;text-decoration: none;text-align: center; border:0;box-shadow:inset 0 -2px 0px rgba(0,0,0,0.2);border-radius: 3px;font-weight: bold;}
.btn[disabled],.btn[disabled]:hover,.btn[disabled]:active{background-color: #ccc;cursor:default;}

.btn:hover {background-color:#ddd;}
.btn:active {background-color: #aaa;box-shadow:inset 1px 2px 0px rgba(0,0,0,0.2);}
.btn-key{background-color: #f2395b;color: #fff;}
.btn-key:hover{background-color: #e23756;color: #fff;}
.btn-key:active{background-color: #af2b43;}
.btn-hot{background-color: #5dc2e6;color: #fff;}
.btn-hot:hover{background-color: #33b8d0;color: #fff;}
.btn-hot:active{background-color: #227d8d;}

/* test glow */
.glow{-webkit-animation-duration:3s;-moz-animation-duration:3s;-ms-animation-duration:3s;-o-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;-khtml-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:glowing;-khtml-animation-name:glowing;-moz-animation-name:glowing;-ms-animation-name:glowing;-o-animation-name:glowing;animation-name:glowing;}
.glow:active{-webkit-animation-name:none;-moz-animation-name:none;-ms-animation-name:none;-o-animation-name:none;animation-name:none;-webkit-box-shadow:inset 0 1px 3px rgba(0,0,0,0.3),0px 1px 0 white;-moz-box-shadow:inset 0 1px 3px rgba(0,0,0,0.3),0px 1px 0 white;box-shadow:inset 0 1px 3px rgba(0,0,0,0.3),0px 1px 0 white;}
@-webkit-keyframes glowing{
 from{-webkit-box-shadow:0 0 0 rgba(242,57,91,0.3),0px 1px 2px rgba(0,0,0,0.2);}
 50%{-webkit-box-shadow:0 0 16px rgba(242,57,91,0.8),0px 1px 2px rgba(0,0,0,0.2);}
 to{-webkit-box-shadow:0 0 0 rgba(242,57,91,0.3),0px 1px 2px rgba(0,0,0,0.2);}}
@-moz-keyframes glowing{
 from{-moz-box-shadow:0 0 0 rgba(242,57,91,0.3),0px 1px 2px rgba(0,0,0,0.2);}
50%{-moz-box-shadow:0 0 16px rgba(242,57,91,0.8),0px 1px 2px rgba(0,0,0,0.2);}
to{-moz-box-shadow:0 0 0 rgba(242,57,91,0.3),0px 1px 2px rgba(0,0,0,0.2);}}
@keyframes glowing{
 from{box-shadow:0 0 0 rgba(242,57,91,0.3),0px 1px 2px rgba(0,0,0,0.2);}
50%{box-shadow:0 0 16px rgba(242,57,91,0.8),0px 1px 2px rgba(0,0,0,0.2);}
to{box-shadow:0 0 0 rgba(242,57,91,0.3),0px 1px 2px rgba(0,0,0,0.2);}}

</script>


<div class="example" data-load="#modhtml"></div>


[查看实例](edit.html?mod=u&id=btn)
