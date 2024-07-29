// 현재 윈도우 크기
export function loadScreen(){
  return $(window).width();
}

// 반응형 윈도우 크기
export function responsiveScreen(callback){
  $(window).resize(function(){
    const resizeWidth = $(window).width();
    callback(resizeWidth);
  })
}

// a링크 동작 제어
export function emptyLinkCon(){
  $('a[href="#"]').click(function(event){
    event.preventDefault();
  });
}

