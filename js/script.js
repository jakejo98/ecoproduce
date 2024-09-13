import { loadFile } from "/ecoproduce/js/common/include.js";
import { swiper } from "/ecoproduce/js/common/swiper.js";
import { headerCommon, headerDesktop, headerRespond } from "/ecoproduce/js/common/header.js";
import { listCommon, listDesktop, listRespond  } from "/ecoproduce/js/common/list.js";
import { appRespond } from "/ecoproduce/js/common/toolbar.js";
import { initMainPage } from "/ecoproduce/js/pages/main.js";
import { productPage } from "/ecoproduce/js/pages/product.js";
import { initStoryPage } from "/ecoproduce/js/pages/story.js";

let windowWidth = 0;

// 윈도우 너비 업데이트 함수
function updateWidth(){
  return $(window).width();
}
// 윈도우 리사이즈 너비 값 재설정
$(window).resize(function(){
  windowWidth = updateWidth();
  checkWidth();
});
// 윈도우 너비에 조건부로 작동하는 함수
function checkWidth() {
  windowWidth = updateWidth();
  if(windowWidth > 1023) {
    headerDesktop();
    listDesktop();
  } else {
    headerRespond();
    appRespond();
    listRespond();
  }
}
// 공통 함수
$(document).ready(function(){
  loadFile(function(){
    checkWidth();
    swiper();
    headerCommon();
    listCommon();
    initMainPage();
    productPage();
    initStoryPage();
  });
});