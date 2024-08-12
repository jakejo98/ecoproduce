export function reset(callback){
  const currentWidth = loadScreen();
  responsiveScreen(callback);
  emptyLinkLock();
  callback(currentWidth);
}

// 현재 윈도우 크기
function loadScreen(){
  return $(window).width();
}

// 반응형 윈도우 크기
function responsiveScreen(callback){
  $(window).resize(function(){
    const resizeWidth = $(window).width();
    callback(resizeWidth);
  })
}

// a링크 동작 제어
function emptyLinkLock(){
  $('a[href="#"]').click(function(event){
    event.preventDefault();
  });
}

