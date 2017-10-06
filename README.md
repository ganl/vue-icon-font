# vue-icon-font

[![Build Status](https://travis-ci.org/ganl/vue-icon-font.svg?branch=master)](https://travis-ci.org/ganl/vue-icon-font)
![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg "Vue 2 Compatible")

> A [iconfont](http://iconfont.cn/) plugin for Vuejs 

## Screenshots

![screenshot](https://github.com/ganl/mdAssets/raw/master/img/vue-icon-font_20170913-223111%402x.png)

## Installation

### NPM (Recommended)

``` bash
# install dependencies
npm install vue-icon-font
```

### manual

``` html
# Download `dist/vue-iconfont.js` and include it in your HTML file
<script src="../dist/vue-iconfont.js"></script>
```

## Iconfont

It’s a Vector Icon Management & Communication Platform made by Alimama MUX, designers could upload vector icons here, and users could download it by several kinds of format.Also, the icons could be translated into Fonts for front-end engineers’ usage.

> Download the icons from iconfont.cn, and `upzip download.zip`. 

### font-class 
> copy `iconfont.css` and font files (*.ttf,*.eot,*.svg,*.woff) into your project

``` html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```
or
``` js
# Import css
import './iconfont.css';
```

### symbol,svg (Default,Recommended)
> copy `iconfont.js` into your project

``` html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```
or
``` js
import './iconfont.js';
```

## Usage via import
``` js
import Vue from 'vue'
import VueIconFont from 'vue-icon-font'

/* font-class */
import '@/assets/iconfont/iconfont.css'

/* symbol,svg */
import '@/assets/iconfont/iconfont.js'
Vue.use(VueIconFont)
```

``` html
<!-- font-class -->
<icon name="account" type="class"></icon>

<!-- symbol,svg -->
<icon name="password"></icon>
```

Simple demo [here](https://ganl.github.io/vue-icon-font/demo/)
