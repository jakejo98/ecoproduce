import { loadFile } from "./include.js";
import { swiper } from "./swiper.js";
import { loadScreen, responsiveScreen, emptyLinkCon } from "./reset.js";
import { header } from "./header.js";
import { appRespond } from "./app.js";
import { toolbar } from "./toolbar.js";
import { btn } from "./button.js";
import { countdown } from "./countdown.js";
import { list } from "./list.js";
import { tabCon } from "./tab.js";

$(function() {
  // 파일을 로드한 후 초기화 작업을 수행
  loadFile(function() {
    // 로드가 완료된 후에 실행할 코드
    const initialWidth = loadScreen();
    swiper();
    emptyLinkCon();
    countdown();
    list();
    tabCon();

    if (initialWidth > 1023) {
      header();
      btn();
    } else {
      toolbar();
      appRespond();
    }

    responsiveScreen(function(resizeWidth) {
      if (resizeWidth > 1023) {
        header();
        btn();
      } else {
        toolbar();
        appRespond();
      }
    });
  });
});
