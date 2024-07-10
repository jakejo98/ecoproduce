import { swiper } from "./swiper.js";
import { loadScreen, responsiveScreen, emptyLinkCon } from "./reset.js";
import { toolbar } from "./toolbar.js";
import { header } from "./header.js";
import { appRespond } from "./app.js";

$(document).ready(function(){
  const initialWidth = loadScreen();
  swiper();
  emptyLinkCon();

  if(initialWidth > 1023){
    header();
  } else {
    toolbar();
    appRespond();
  }
  responsiveScreen(function(resizeWidth){
    if(resizeWidth > 1023){
      header();
    } else {
      toolbar();
      appRespond();
    }
  })
})