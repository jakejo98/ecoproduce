export function initMainPage(){
  changeEventProductTab();
}

// 메인페이지 행사상품 탭 변경 이벤트(공통)
function changeEventProductTab (){
  const eventBtn = $('.section_event_product .common_tab_btn');
  const eventList = $('.section_event_product .product_grid_list');

  $(eventBtn).click(function(){
    let eventId = $(this).parent().index();

    $(this).attr('aria-selected', 'true');
    $(this).parent().siblings().children(eventBtn).attr('aria-selected', 'false');

    $(eventList).eq(eventId).attr('aria-hidden', 'false');
    $(eventList).eq(eventId).siblings().attr('aria-hidden', 'true');
  })
}


