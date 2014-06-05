##文件夹命名
###文档目录解析,顶级目录如图:

<img src="assets/img/rule-work.png" alt="" />

1. _html_ 文件夹放置项目有关html静态文件
2. *mode_modules* 是nodejs 模块自动生成无需提交到svn
3. *others* 是跟项目有关的一些资料,文件或者文档.方便查看.
4. *psd* 里为 CSS Sprites源文件 还有页面设计稿源文件,设计师相关.
5. *Gruntfile.js*  为grunt 打包配置文件
6. package.json 项目相关文件
7. *README.md* 为本项目相关说明

计划:后期计划引入 bower 管理插件

###html 静态文件夹命名解释:

<img src="assets/img/rule-work-html.png" alt="" />

推荐图片放置路径css/img
但是因为有些历史的原因,可以自由放置.

大页面请规范命名,小的模块用m-开头.

缺失内容:如果能模块化的调用 包含css,js,html文件就好了.fis倒是可以实现.但是生产环境太庞大了.

##开发说明

####icon的引用
我们使用阿里的iconfont库, [http://iconfont.cn](iconfont.cn). <br />
前期直接用阿里的cdn 方便添加管理小图标,后期download下来放置到项目文件夹.

####css引用
整张一个通用的css文件为 *_init_.css*. <br />
包含了一些全站通用的样式模块内容.

<img src="assets/img/rule-work-css.png" alt="" />
主要是一些通用的色彩,跟版本信息.仅供参考可自行编辑.

css文件头部标注了相关信息

####js文件调用
我们使用requirejs来模块化的开发js.整体调用jquery和 sally相关模块 最为基础类库. data-api的方式来调用.
子页面内部require([{modNmae}]);需要的js文件来写特例.
全站通用的部分写在main.js里 通过require调用.

####文件合并打包
我们用grunt作为整合工具来进行.css压缩,js压缩,requirejs模块合并,图片压缩等一系列的工作.

####测试
工具正在开发,主要测试接口部分.回调函数等等.
暂时用 getf5 来双屏及时响应.

####开发工具
我们用Sublime Text来进行程序编辑.仅作推荐. 有自己的相关快捷展现模块.


###以上内容不做强制要求,仅作为推荐.

