# vue-icon-font

> IconFont plugin for Vuejs

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

> Download the icons from iconfont.cn, and `upzip download.zip`. 

### font-class mode
> copy iconfont.css into your project

``` html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```
or
``` js
# Import css
import './iconfont.css';
```

### symbol (default,svg)
> copy iconfont.js into your project

``` html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```
or
``` js
import './iconfont.js';
```

## Usage

``` html
<!-- font-class -->
<icon name="account" type="class"></icon>

<!-- symbol,svg -->
<icon name="password"></icon>
```

Simple demo [here](https://github.com/ganl/vue-icon-font/tree/master/demo)