export function loadScreen(){
  return $(window).width();
}

export function responsiveScreen(callback){
  $(window).resize(function(){
    const resizeWidth = $(window).width();
    callback(resizeWidth);
  })
}