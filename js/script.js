import { loadFile } from "/ecoproduce/js/common/include.js";
import { reset } from "/ecoproduce/js/common/reset.js";
import { headerCommon, headerDesktop, headerRespond } from "/ecoproduce/js/common/header.js";
import { listDesktop, listCommon } from "/ecoproduce/js/common/list.js";
import { toolbarRespond } from "/ecoproduce/js/common/toolbar.js";
import { initMainPage } from "/ecoproduce/js/pages/main.js";
import { initProductPage } from "/ecoproduce/js/pages/product.js";
import { initStoryPage } from "/ecoproduce/js/pages/story.js";

// 화면 크기에 따른 레이아웃 업데이트 함수
function checkLayout(width) {
  if (width > 1023) {
    headerDesktop();
    listDesktop();
  } else {
    headerRespond();
    toolbarRespond();
  }
}

// 문서가 준비된 후 실행
$(document).ready(function() {
  // 파일을 로드한 후 초기화 작업을 수행
  loadFile(function() {
    // 공통 기능 초기화
    headerCommon();
    listCommon();
    initMainPage();
    initProductPage();
    initStoryPage();
    
    // 초기화 및 화면 크기 처리
    reset(checkLayout);
  });
});
