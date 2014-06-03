<script id="modhtml" type="text/Template">
<!-- 普通input -->
<input type="text" class="ipt" />

<!-- 禁止输入的input -->
<input type="text" class="ipt" disabled  />
</script>
<script id="modcss" type="text/Template">
/* ipt */
.ipt{padding:5px;height:18px;border:2px solid #dee1e3;line-height:17px;font-size:14px;color:#777;background:#fff;border-radius: 3px}
.ipt:hover{border-color: #c0c1c2;}
.ipt:focus{border-color: #5dc2e6;}
.ipt[disabled]{background-color: #ebedee;border-color: #ebedee;}
</script>
<div class="example" data-load="#modhtml"></div>


[查看实例](edit.html?mod=u&id=ipt)
