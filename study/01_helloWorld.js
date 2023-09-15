// ==UserScript==
// @name         01_hello world
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  弹出一个hello world框！
// @author       You
// @match        https://bbs.tampermonkey.net.cn/
// @license      GPL License
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    alert('hello world!')
})();