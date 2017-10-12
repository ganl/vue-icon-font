---
title: Vue + ElementUI 项目中使用第三方图标库：阿里iconfont,封装字体图标组件
date: 2017-10-12 23:46:34
tags:
---

比较流行的字体图标库有Font Awesome：The iconic font and CSS toolkit，还有Bootstrap默认带的Glyphicons字体图标（不过数量有限）；Iconfont，阿里退出的矢量图标管理平台，可以自己上传图标到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于调整与调用。

产品的管理控制台上很多图标Font Awesome中都没有，多为UI设计的图标，选择了iconfont, 使用图标的地方较多，封装了一个简单的icon组件：
**[vue-icon-font](https://github.com/ganl/vue-icon-font)**: 	a [iconfont](http://iconfont.cn/) plugin for Vuejs 

[![Build Status](https://travis-ci.org/ganl/vue-icon-font.svg?branch=master)](https://travis-ci.org/ganl/vue-icon-font)
![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg "Vue 2 Compatible")

## Screenshots

![screenshot](https://github.com/ganl/mdAssets/raw/master/img/vue-icon-font/WX20171013-003608@2x.png)
![screenshot](https://github.com/ganl/mdAssets/raw/master/img/vue-icon-font/WX20171013-003725@2x.png)

![screenshot](https://github.com/ganl/mdAssets/raw/master/img/vue-icon-font_20170913-223111%402x.png)


## 阿里iconfont.cn

注册后，创建项目，上传图标，http://iconfont.cn/manage/index；或者在图标库中找到自己需要的图标添加到项目中来，http://iconfont.cn/collections/index；
饿了么element官方给的引入第三方图标库指导步骤需要：

1. 修改第三方图标库的前缀（见下方说明）
2. 添加以下 CSS：

```
[class^="el-icon-my"], [class*=" el-icon-my"] {
  font-family:"your-font-family" !important;
  
  /* 以下内容参照第三方图标库本身的规则 */
  font-size: inherit;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
之后就可以像使用 Element 内置图标一样使用第三方图标。比如在 el-input 中：

`<el-input icon="my-xxx" />`

http://element.eleme.io/#/zh-CN/component/icon#di-san-fang-tu-biao-ku

**使用vue-icon-font组件，不需要修改图标库的前缀，直接引入css和js相关资源文件即可**

**使用方式：**`<icon name="account" type="class"></icon>`, name为平台上对应icon的Font Class / Symbol，type指定使用的font-class还是Symbol。

## 安装vue-icon-font

### NPM (推荐方式)

``` bash
npm install vue-icon-font
```

### 手动引入

``` html
# Download `dist/vue-iconfont.js` from github and include it in your HTML file
<script src="../dist/vue-iconfont.js"></script>
```

## Iconfont资源文件

登录到iconfont.cn, 下载字体图标，并解压 `upzip download.zip`. 
![screenshot](https://github.com/ganl/mdAssets/raw/master/img/vue-icon-font/WX20171012-235647.png)
组件支持font-class和symbol两种引用方式，推荐使用symbol，只需要引入iconfont.js即可。

### font-class 引用
> 复制 `iconfont.css` 和 字体文件 (*.ttf,*.eot,*.svg,*.woff) 到工程中, 需要显式指定`type=class`

``` html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```

or

``` js
# Import css
import './iconfont.css';
```

使用图标：`<icon name="account" type="class"></icon>`

### symbol引用,svg (默认的,推荐的)
> 复制 `iconfont.js` 到工程中

``` html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```

or

``` js
import './iconfont.js';
```

使用图标：`<icon name="password"></icon>`


## Usage via import (vue-cli)
``` js
import Vue from 'vue'
import VueIconFont from 'vue-icon-font'
Vue.use(VueIconFont)

/* font-class */
import '@/assets/iconfont/iconfont.css'

/* symbol,svg */
import '@/assets/iconfont/iconfont.js'

```

``` html
<!-- font-class -->
<icon name="account" type="class"></icon>

<!-- symbol,svg -->
<icon name="password"></icon>
```

简单demo [here](https://ganl.github.io/vue-icon-font/demo/)
