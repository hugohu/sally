<style>
body{background: #000;}
.banner { background: #000 url(assets/css/img/sally.png) center no-repeat; height: 250px; width: 100%;margin-top: -18px; }
.pao { width: 485px; height: 250px; position: absolute; left: 50%; margin-left: -260px; margin-top: 0px; overflow: hidden; }
.paoit i { background: url(assets/css/img/pao.png) no-repeat scroll -9999px -9999px transparent; }
.paoit { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.paoit i { position: absolute; z-index: 3; top: 100%; width: 53px; height: 56px; overflow: hidden; text-indent: -2000px; background-position: 0 0; -webkit-animation: paoi 7s 2s infinite; -moz-animation: paoi 7s 2s infinite; -ms-animation: paoi 7s 2s infinite; animation: paoi 7s 2s infinite; }
.paoit i:nth-child(1) { left: 25px; -webkit-animation-delay: 3s; -moz-animation-delay: 3s; -ms-animation-delay: 3s; animation-delay: 3s; }
.paoit i:nth-child(2) { left: 85px; -webkit-animation-duration: 6s; -moz-animation-duration: 6s; -ms-animation-duration: 6s; animation-duration: 6s; -webkit-animation-delay: 6s; -moz-animation-delay: 6s; -ms-animation-delay: 6s; animation-delay: 6s; background-position: 0 -64px; }
.paoit i:nth-child(3) { left: 148px; -webkit-animation-duration: 5s; -moz-animation-duration: 5s; -ms-animation-duration: 5s; animation-duration: 5s; -webkit-animation-delay: 7s; -moz-animation-delay: 7s; -ms-animation-delay: 7s; animation-delay: 7s; }
.paoit i:nth-child(4) { left: 190px; -webkit-animation-delay: 4s; -moz-animation-delay: 4s; -ms-animation-delay: 4s; animation-delay: 4s; background-position: 0 -140px; }
.paoit i:nth-child(5) { left: 285px; -webkit-animation-duration: 5s; -moz-animation-duration: 5s; -ms-animation-duration: 5s; animation-duration: 5s; -webkit-animation-delay: 8s; -moz-animation-delay: 8s; -ms-animation-delay: 8s; animation-delay: 8s; }
.paoit i:nth-child(6) { left: 350px; background-position: 0 -64px; }
.paoit i:nth-child(7) { left: 400px; -webkit-animation-delay: 5s; -moz-animation-delay: 5s; -ms-animation-delay: 5s; animation-delay: 5s; }
@-webkit-keyframes paoi {  0% {top:186px;}100% {top:-56px;}}
@-moz-keyframes paoi {  0% {top:186px;}100% {top:-56px;}}
@-ms-keyframes paoi {  0% {top:186px;}100% {top:-56px;}}
@keyframes paoi {  0% {top:186px;}100% {top:-56px;}}
</style>
<div class="banner">
	<div class="pao">
		<span class="paoit"> <i></i> <i></i>
			<i></i>
			<i></i>
			<i></i>
			<i></i>
			<i></i>
		</span>
	</div>
</div>