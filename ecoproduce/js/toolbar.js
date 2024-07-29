// 툴바 이벤트
export function toolbar(){
  const toolbarItem = $('.toolbar .toolbar_item');
  const toolbarBtn = $('.toolbar .toolbar_btn');
  
  $(toolbarBtn).click(function(){
    const btnId = $(this).parent().index();
    // aria-current 제어
    $(toolbarBtn).attr('aria-current', 'false')
    $(this).attr('aria-current', 'page')
    // aria-expanded 제어
    if(btnId != 2){
      $(this).attr('aria-expanded', 'true');
      $(this).parent().siblings().children(toolbarBtn).attr('aria-expanded', 'false');
      $(toolbarItem).eq(2).children(toolbarBtn).removeAttr('aria-expanded');
    } else {
      $(this).removeAttr('aria-expanded');
    }
  })
}


