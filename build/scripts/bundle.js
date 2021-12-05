"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"===(void 0===value?"undefined":_typeof(value))&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);function slowScroll(block){$(block).on("click",function(e){var block=$(e.target).attr("href");$("html,body").stop().animate({scrollTop:$(block).offset().top},700),e.preventDefault()})}function hideNav(){$(window).width()<"768"?$(".navigation").hide():$(".navigation").show(),$(".general").children(".navigation").show()}$(function(){Vue.options.delimiters=["${","}"],new Vue({el:"#vue-exam",data:{exams:window.examItems,items:window.examItems,count:3,filters:{},showFilters:!1},computed:{compShowItems:function(){return this.items.slice(0,this.count)}},methods:{setCount:function(){var _this=this;$(".preloader").addClass("show"),setTimeout(function(){_this.count+=3,$(".preloader").removeClass("show")},800)},filterExams:function(){var result=this.exams;if(this.showFilters){this.count=3;var _loop=function(key){result=result.filter(function(exam){return exam.tags.find(function(tag){return tag.id===key})})};for(var key in this.filters)_loop(key);$("html,body").stop().animate({scrollTop:$("#exams").offset().top},700)}this.items=result},sortExam:function(tagId,title){this.showFilters=!0,this.filters[tagId]=title,this.filterExams()},resetFilter:function(){this.count=3,this.showFilters=!1,this.filters={},this.items=window.examItems,$("html,body").stop().animate({scrollTop:$("#exams").offset().top},700)},removeFilter:function(key){delete this.filters[key],Object.keys(this.filters).length?this.filterExams():this.resetFilter()}}}),AOS.init({once:!0}),$(".js-forward").click(function(){var goTo=$(".services").offset().top;$("html").animate({scrollTop:goTo},500)});new Rellax(".rellax",{speed:-6,center:!0,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1});slowScroll($(".footer__link")),slowScroll($(".navigation__link")),hideNav(),window.onresize=function(){hideNav()};var images=$("img");new LazyLoad(images,{root:null,rootMargin:"500px",threshold:0})})}]);