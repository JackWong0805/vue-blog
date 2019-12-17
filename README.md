# vue-blog

博客网站看着这里：[laowangomg.com](http://laowangomg.com)
后台页面如下：
![后台首页](https://img-blog.csdnimg.cn/20191216193633753.png)

![博客管理](https://img-blog.csdnimg.cn/2019121619370121.png)

![删除博客](https://img-blog.csdnimg.cn/20191216193741101.png)

![编辑博客](https://img-blog.csdnimg.cn/20191216194000240.png)

![写博客](https://img-blog.csdnimg.cn/20191216193807762.png)

使用vue开发的博客
前端使用到的技术栈:
 - vue
 - vue-router
 - vuex
 - bootstrap-vue
 
 前端用到的插件有:
 - sweetalert2 (弹出框，注意有2，不是sweetalert，两个用法有较大差别)
 - mavon-editor (markdown语法编辑器)
 - vue-axios (ajax)
 - vue-backtotop (回到顶部按钮)
 - sha1
 - @voerro/vue-tagsinput (标签输入)

后端用到的技术栈:

 - node.js
 - express
 - mongodb
 - mongoose
 - multer
 - jsonwebtoken
 
后端用到的插件有:

 - config-lite (方便配置)
 - body-parser
 - express-winston (记录请求日志)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


```
## run server
``` bash

cd server

# install dependencies
npm install

# start server， listen at 3000 port
supervisor --harmony app.js

```