// ==UserScript==
// @name         自动登录笔趣阁
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动登录笔趣阁
// @author       You
// @match        https://www.biquge.co/
// @license      GPL License
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var user = "maxiaofei";
  var pwd = "fei19981115";

  if (!document.querySelector("#username")) {
    //没有找到表示登录了,不再执行后续代码
    return;
  }
  //未登录,执行登录代码

  document.querySelector("#username").value = user;
  document.querySelector("#password").value = pwd;
  document.querySelector(".frii input").click();
})();
