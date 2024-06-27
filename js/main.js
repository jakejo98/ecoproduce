import { setupDesktop } from "./header.js";
import { loadScreen, responsiveScreen } from "./screen_control.js";

$(document).ready(function(){
  const initialWidth = loadScreen();
  if(initialWidth > 1023){
    setupDesktop();
  }
  responsiveScreen(function(resizeWidth){
    if(resizeWidth > 1023){
      setupDesktop();
    }
  })
})