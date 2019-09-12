# vuePress system #
# 个人博客 #
基于Vue.js 2.x系列 vuePress js canvas css3属性等。

## 准备工作 ##

## 功能 ##
- [x] 时钟
- [x] 星球运转
- [x] 大海css
- [x] 机器人
- [x] 悟空

## 目录结构介绍 ##


    ├─docs                               // 主文件
	│   |-- .vuepress                    // 项目代码文件夹
	│		|-- commponents              // 项目组建
    │           |-- earth.vue            // 第一篇博客地球
    │           |-- Robot.vue            // 第二篇博客机器人
    │           |-- SecondClock.vue      // 博客首页时钟动画
    │           |-- SecondMonkey.vue     // 第二篇博客孙悟空
    │           |-- SportBall.vue        // 第二篇博客运动球
    │           |-- Water.vue            // 第二篇博客海浪线
	|       |-- dist                     // 打包后项目文件
	|           |-- ...          	     // 此处省略诸多文件
	|           |-- ...          	     // 此处省略诸多文件
	|		|-- public                   // 项目公共文件夹
	│           |-- css                  // 项目样式文件夹
	│           |-- img                  // 项目图片文件夹
	│           |-- js                   // 项目脚本文件夹
	│           |-- headers.png          // 主页面引用图片
	│       |-- vue                      // 公共组件
	│           |-- README.md            // 说明
	│   |-- config.js                    // 主页面-导航配置
	│   |-- enhanceApp.js                // 项目引用
	│   |-- override.styl                // 选择主题
    │   |-- blog                         // 页签
    │       |-- FirstBlog.md             // 第一篇博客文件
    │       |-- index.md                 // 空余文件
    │       |-- SecondBlog.md            // 第二篇博客文件
	|   |-- README.md                    // 说明
	|-- node_modules                     // 项目依赖
	|-- .gitignore                       // 忽略的文件
	|-- .gitlab-ci.y                     // 未知文件
	|-- .deploy.sh                       // 上传部署配置文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- package-lock.json                // 项目配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone git@github.com:duyi0518/blog.git     // 把项目下载到本地
	cd blog                                        // 进入项目目录
	npm install                                    // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启前端服务器，浏览器访问 http://localhost:8080，在根目录下执行下面命令
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## 部署上线 ##

    // 运行npm run deploy 即可自动构建部署到github上
    npm run deploy
