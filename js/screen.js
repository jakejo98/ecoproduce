// Current Windows Size
export function loadScreen(){
  return $(window).width();
}

// Realtime Windows Size
export function responsiveScreen(callback){
  $(window).resize(function(){
    const resizeWidth = $(window).width();
    callback(resizeWidth);
  })
}