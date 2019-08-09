# vuePress system #
基于Vue.js 2.x系列 vuePress js canvas css3属性等。

## 准备工作 ##

## 功能 ##
- [x] 时钟
- [x] 星球运转
- [x] 大海css
- [x] 机器人
- [x] 悟空

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
    ├─service                            // 服务端
    │   │-- app.js                       // express 入口文件
    │   |-- api                          // 接口
    │       │-- userApi.js               // 接口映射文件
    │   |-- db                           // 数据库
    │       |-- db.js                    // 连接数据库
    │       |-- sqlMap.js                // 数据库映射文件
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	|		|-- page                   	 // 主要路由页面
	|           |-- Identify.vue         // 图形验证码
	|           |-- Login.vue            // 登录
	|           |-- ModifyPassword.vue   // 修改密码
	|           |-- ModifyUser.vue       // 修改用户
	|           |-- Readme.vue           // 简介
	|           |-- Register.vue         // 注册组件
	|           |-- UserCenter.vue       // 用户中心
    |           |-- Success.vue          // 修改成功
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone git@github.com:duyi0518/blog.git     // 把项目下载到本地
	cd blog    // 进入项目目录
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启前端服务器，浏览器访问 http://localhost:8080，在根目录下执行下面命令
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build
