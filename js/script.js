import { loadFile } from "./include.js";
import { loadScreen, responsiveScreen, emptyLinkLock } from "./reset.js";
import { commonFunc } from "./common.js";
import { desktopFunc } from "./desktop.js";
import { responsiveFunc } from "./responsive.js";
import { product } from "./appendProduct.js";
import { review } from "./appendReview.js";
import { story } from "./appendStory.js";

$(document).ready(function() {
  // 파일을 로드한 후 초기화 작업을 수행
  loadFile(function() {
    // 로드가 완료된 후에 실행할 코드

    // Desktop, 반응형 공용
    const initialWidth = loadScreen();
    emptyLinkLock();
    commonFunc();
    product();
    review();
    story();
    
    // Desktop
    if (initialWidth > 1023) {
      desktopFunc();
      // 반응형
    } else {
      responsiveFunc();
    }

    responsiveScreen(function(resizeWidth) {
      // Desktop
      if (resizeWidth > 1023) {
        desktopFunc();
        // 반응형
      } else {
        responsiveFunc();
      }
    });
  });
});
