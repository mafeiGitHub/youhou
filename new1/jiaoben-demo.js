// ==UserScript==
// @name         xiaofei
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  这是一个脚本demo
// @author       xiaofei
// @license      GPL License
// @match             *://*.bilibili.com/*
// @match             *://*.google.com/*
// @match             *://*.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // console.log('nihao!!');
    // console.log('我的第一个脚本！');
    // console.log('我的脚本第三版！');
    // console.log('我的脚本第四版！');
    // console.log('我的脚本第5版！');
    // console.log('我的脚本第6版！');
    alert('111')
    let ele = document.getElementsByClassName('lg');
    console.log(ele);
    ele.img.src="https://www.tmchina.net/static/image/common/logo.png"
    
})();