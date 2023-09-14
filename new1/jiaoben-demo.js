// ==UserScript==
// @name         xiaofei
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  这是一个脚本demo
// @author       xiaofei
// @license      GPL License
// @match        *://*.bbs.tampermonkey.net.cn//*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

    let CityChangeOnce = false;
    document.querySelector("#residedistrictbox").addEventListener("DOMNodeInserted", (e) => {
      console.log("DOMNodeInserted 变动: ", e);
      switch(document.querySelector('#resideprovince').value){
        case '广东省':document.querySelector('#residecity').value = '广州市';break;
        case '山东省':document.querySelector('#residecity').value = '济南市';break;
        case '河南省':document.querySelector('#residecity').value = '开封市';break;
        default:CityChangeOnce=false;
      }
    
      if(CityChangeOnce===false&&document.querySelector('#residecity').value){
        
        document.querySelector('#residecity').onchange();
        CityChangeOnce = true;
      }
    });

})();
