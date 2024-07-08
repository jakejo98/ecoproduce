import { swiper } from "./swiper.js";
import { loadScreen, responsiveScreen } from "./screen.js";
import { toolbar } from "./toolbar.js";
// import { headerCon } from "./header.js";
import { appRespond } from "./app.js";

$(document).ready(function(){
  const initialWidth = loadScreen();
  swiper();
  console.log(initialWidth);
  if(initialWidth > 1023){
  } else {
    toolbar();
    appRespond();
  }
  
  responsiveScreen(function(resizeWidth){
    console.log(resizeWidth);
    if(resizeWidth > 1023){
      headerCon();
    } else {
      toolbar();
      appRespond();
    }
  })
})