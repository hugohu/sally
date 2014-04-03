  hljs.configure({
  	classPrefix: ''
  });
  hljs.initHighlightingOnLoad();

   // Read the json file building blocks

  /*
  @解析url 并且生成网页
   */
  var build = {
  	subNav: function() {
  		var nav = $(".nav"),
  			state = nav.attr("data-state");
  		if (state == "ok") return false;
  		$.getJSON("mod/nav.json", function(data) {
  			var html = "";
  			$.each(data.nav, function(i, n) {
  				var name = n.id;
  				var title = n.title;
  				html += "<a href=?p=" + name + ">" + title + "</a>";
  			});
  			nav.html(html);
  			nav.attr("data-state", "ok");
  			$("a", nav).on("click", function(e) {
  				var $this = $(this);
  				build.setPage($this);
  				return false;
  			})
  		})
  	},
  	setPage: function(e) {
  		var page = e.attr("href").slice(3);
  		this.setSid(page);
  		//生成主体内容
  		this.setMain(page);
  		return false;
  	},
  	mdToHtml: function(md) {
  		// require showdown.js 
  		var converter = new Showdown.converter();
  		return converter.makeHtml(md);
  	},
  	setSid: function(s) {
  		$.getJSON("mod/sid.json", function(data) {
  			var sid = $(".m-sidebar");
  			var html = '';

  			if (data[s] === undefined) {
  				$("body").addClass("f-page");
  				return false;
  			} else {
  				$("body").removeClass("f-page");
  			}
  			$.each(data[s], function(i, n) {

  				var name = n.id;
  				var title = n.title;
  				html += "<li><a href=#" + name + ">" + title + "</a></li>";
  			});
  			html = '<ul>' + html + '</ul>';
  			sid.html(html);
  		})
  	},
  	setMain: function(s) {
  		var main = $(".m-main");
  		main.load("mod/html/" + s + ".md", function() {
  			main.html(build.mdToHtml(main.html()))
  		});
  	},
  	init: function() {
  		var page = location.search;
  		page = page != undefined ? page.slice(3) : "index";
  		//生成导航
  		this.subNav();
  		//生成侧边导航
  		this.setSid(page);
  		//生成主体内容
  		this.setMain(page);

  	}
  };
  build.init();