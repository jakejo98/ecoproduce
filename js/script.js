import { loadFile } from "./include.js";
import { loadScreen, responsiveScreen, emptyLinkCon } from "./reset.js";
import { commonFunc } from "./common.js";
import { desktopFunc } from "./desktop.js";
import { responsiveFunc } from "./responsive.js";

$(function() {
  // 파일을 로드한 후 초기화 작업을 수행
  loadFile(function() {
    // 로드가 완료된 후에 실행할 코드
    const initialWidth = loadScreen();
    emptyLinkCon();
    commonFunc();
    if (initialWidth > 1023) {
      desktopFunc();
    } else {
      responsiveFunc();
    }

    responsiveScreen(function(resizeWidth) {
      if (resizeWidth > 1023) {
        desktopFunc();
      } else {
        responsiveFunc();
      }
    });
  });
});
