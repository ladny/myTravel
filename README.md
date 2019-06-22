# mytravel
码云配置
https://gitee.com/   private下创建私有项目
将本地的代码与线上的代码仓库通过GIT进行关联
在本地安装git 
在git设置中找到ssh公钥，
window系统中，在桌面右键点击git bash按照ssh公钥指令操作
配置好后，线上线下则打通。
本地通过ssh复制地址 git clone XXXX   //克隆线上库，复制到本地

新的功能需要新建分支进行开发
分支-》新建分支-》创建分支index-swiper
git pull  //本地拉取线上分支
git checkout index-swiper  //本地切换分支
git status  //查看状态

提交分支：git add .
git commit –m ‘change’
  git push 
  git checkout master //切换到主分支
  git merge origin/index-swiper //合并分支
  git push//提交master分支
  git branch //查看分支
  git merge index-recommend //分支合并分支
git branch -d city-components//删除本地分支
  git push origin --delete [branch-name] //删除远程分支
git checkout -b dev_hx 新建一个分支，并切换到该分支
git push origin dev_hx 提交本地分支到远程分支

  .gitignore文件中是忽略文件上传到git仓库中的
Static中的文件不上传到git中
static/mock

环境配置
npm install –global vue-cli  全局安装vue-cli
vue init webpack my-project 创建一个基于webpack模板的新项目
cd my-project //到当前目录下
npm install //安装依赖，揍你
npm run dev //启动

本地库提交到线上
  git status //查看本地仓库
  git add . //将本地文件添加到本地git的缓冲区
  git commit –m ‘project’ //提交
  git push //本地代码推到线上仓库

配置字体库iconfont
http://www.iconfont.cn 进入图标管理-我的项目
选择icon-图标库-官方图标库-大麦-选择图标添加到购物车-添加到项目中-下载到本地
解压文件：选择4个字体文件(iconfont.eot,svg,ttf,woff)和1个样式文件(iconfont.css)
新建iconfont文件夹将4个字体文件添加进去，样式文件放这个文件夹外，将样式文件的路径修改一下，如(‘./iconfont/iconfont.eot’)
在main.js中引入iconfont.css
在项目中悬浮，复制代码，将代码copy到标签中
在代码中引入<span class=”iconfont”> &#xe632; </span>
rem与px转换
  reset中html{ font-size:50px}
  1rem=html font-size=50px
  所以移动端2倍转换  px/100=rem
  86px 设置为：    0.86rem
  
安装依赖
npm install fastclick –save
npm install stylus –save
npm install stylus-loader --save
npm install axios –save
npm install better-scroll –save
npm install vuex --save
npm install babel-polyfill –save  低版本的浏览器 添加ES6新特性都支持promise
npm install vue-awesome-swiper@2.6.7 –save

vue通过IP地址访问
在package.json中配置 在dev中添加 --host 0.0.0.0
即：http://localhost:8080   

http://10.0.50.46:8080

"scripts": {
  "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
  


一像素边框
border.css 在main.js中引入
在样式中直接引入:border-bottom样式
控制一像素边框的颜色
.border-topbottom
  &:before
    border-color:#ccc
  &:after
    border-after:#ccc


Axios服务请求转发 webpack-dev-server提供的转发
Config->index.js->  
proxyTable: {
'/api':{
  target:'http://localhost:8080',
  pathRewrite:{
    '^/api':'static/mock'
  }
}



小技巧：
.wrapper
  overflow:hidden
  width: 100%
  height:0
  padding-bottom:26.7%
  background:#eaeaea
  //设置宽高比例padding-bottom

三个箭头下的样式：表示在wrapper下的这个样式都显示这个，做个穿透，不受scoped的限制

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#ffffff !important

设置宽高比为：2  注意此处的width：100%
.icons
  overflow:hidden
  height:0
  padding-bottom:50%
  background:green
设置宽高比为：1
.icon
    float:left
    width:25%
    padding-bottom: 25%
    background:red

注意swiper的高度
.icons >>> .swiper-container
  height:0
  padding-bottom:50%

超出文本显示… 
overflow:hidden
white-space:nowrap
text-overflow:ellipsis
修改成：mixins.styl 
ellipsis()
  overflow:hidden
  white-space:nowrap
  text-overflow:ellipsis
直接引入：
ellipsis()
如果不显示…则添加min-width:0
.item-info
  flex:1
  padding:.1rem
  min-width:0


better-scroll
 better-scroll 是作用在外层 wrapper 容器上的，滚动的部分是 content 元素。这里要注意的是，better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。
<div class="list" ref="wrapper">
<div class=content></div>
</div>
import Bscroll from 'better-scroll'
mounted () {
this.scroll=new Bscroll(this.$refs.wrapper)
}


keep-alive
当使用keep-alive优化页面的时候，会出现一个activated钩子，每次进入页面都是执行这个钩子，
activated ()


activated () {
  window.addEventListener('scroll',this.handleScroll)
},

同样的deactivated()这个钩子 在页面即将替换成新的页面的时候执行，可进行解绑
//对事件进行解绑
deactivated () {
  window.removeEventListener('scroll',this.handleScroll)
}


也可以定义吗，某个组件不做缓存
在app.vue中 exclude输入不缓存的组件的名字
<keep-alive exclude="detail">
  <router-view/>
</keep-alive>



从上到下渐变效果
background-image:linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))

递归组件：自身调用自己，
<div class="item" v-for="(item,index) in list" :key="index">
  <div class="item-title border-bottom">
    <span class="item-title-icon"></span>
    {{item.title}}
  </div>
  <div v-if="item.children" class="item-children">
    <detail-list :list="item.children"></detail-list>
  </div>
</div>
name: "detailList",

组件获取路由中参数：this.$route.params.id
{
  path: '/detail/:id',
  name: 'Detail',
  component: Detail
}

axios.get('/api/detail.json',{
  params: {
    id:this.$route.params.id
    }
  }).then(this.handleGetDataSucc)

关于前后端联调：config文件夹中index下 target指定IP地址即可转发
proxyTable: {
'/api':{
  target:'http://localhost:80'

关于打包路径，打包时修改dist下static目录，增加一级文件夹如:localhost/dlt
Config==》 index.js
build: {
  // Template for index.html
  index: path.resolve(__dirname, '../dist/index.html'),

  // Paths
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/dlt',

关于打包js文件 
Manifest 是配置文件
Vendor是各个页面各个组件公用的代码
App 是所有页面的业务逻辑

异步组件实现按需加载
只有在代码量特别大的时候进行拆分

routes: [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('page/home/home')
  },


