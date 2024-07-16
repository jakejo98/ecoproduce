import { swiper } from "./swiper.js";
import { loadScreen, responsiveScreen, emptyLinkCon } from "./reset.js";
import { header } from "./header.js";
import { appRespond } from "./app.js";
import { toolbar } from "./toolbar.js";
import { btn } from "./button.js";
import { countdown } from "./countdown.js"
import { list } from "./list.js"


$(document).ready(function(){
  const initialWidth = loadScreen();
  console.log(initialWidth);
  swiper();
  emptyLinkCon();
  countdown();
  list();

  if(initialWidth > 1023){
    header();
    btn();
  } else {
    toolbar();
    appRespond();
  }
  responsiveScreen(function(resizeWidth){
    console.log(resizeWidth);
    if(resizeWidth > 1023){
      header();
      btn();
    } else {
      toolbar();
      appRespond();
    }
  })
})