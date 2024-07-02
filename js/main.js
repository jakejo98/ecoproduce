import { setupDesktop, setupRespond } from "./header.js";
import { loadScreen, responsiveScreen } from "./screen.js";
import { toolbar } from "./toolbar.js";

$(document).ready(function(){
  const initialWidth = loadScreen();
  console.log(initialWidth);
  if(initialWidth > 1023){
    setupDesktop();
  } else {
    setupRespond();
    toolbar();
  }
  
  responsiveScreen(function(resizeWidth){
    console.log(resizeWidth);
    if(resizeWidth > 1023){
      setupDesktop();
    } else {
      setupRespond();
      toolbar();
    }
  })
})