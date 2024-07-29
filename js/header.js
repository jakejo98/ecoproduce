export function header(){
  categoryBtnCon();
  categoryLinkCon();
}
// 전체메뉴 버튼 제어
function categoryBtnCon(){
  const headerCategory = $('.header_category');
  const categoryCont = $('.header_category .header_category_container');
  const categoryBtn = $('.header_category .category_btn');
  
  $(categoryBtn).mouseenter(function(){
    $(this).attr('aria-expanded', 'true');
    $(categoryCont).attr('aria-hidden', 'false');
  })

  $(headerCategory).mouseleave(function(){
    $(categoryBtn).attr('aria-expanded', 'false');
    $(categoryCont).attr('aria-hidden', 'true');
  })

  $(categoryCont).mouseleave(function(){
    $(categoryBtn).attr('aria-expanded', 'false');
    $(this).attr('aria-hidden', 'true');
  })
}

// 전체 메뉴 링크 제어
function categoryLinkCon(){
  const firstLink = $('.header_category_container .header_category_box.dep1 .header_category_link');
  const firstText = $('.header_category_container .header_category_box.dep1 .header_category_link .header_category_text');
  const secondList = $('.header_category_container .header_category_box.dep2 .header_category_list');
  const secondListLen = $('.header_category_container .header_category_box.dep2 .header_category_list').length;
  const categoryBtn = $('.header_category .category_btn')
  const iconDis = 'category_icon_disabled'
  const iconAct = 'category_icon_active'

  $(firstLink).mouseenter(function(){
    const linkId = $(this).parent().index();
    $(this).attr('aria-expanded', 'true');
    $(this).parent().siblings().find(firstLink).attr('aria-expanded', 'false');
    $(this).find(firstText).removeClass(iconDis).addClass(iconAct);
    $(this).parent().siblings().find(firstText).removeClass(iconAct).addClass(iconDis);
    $(this).find(firstText)
    if(linkId >= secondListLen) {
      $(secondList).attr('aria-hidden', 'true');
    } else{
      $(secondList).eq(linkId).attr('aria-hidden', 'false');
      $(secondList).eq(linkId).siblings().attr('aria-hidden', 'true');
    }
  })

  $(categoryBtn).mouseenter(function(){
    $(firstLink).attr('aria-expanded', 'false');
    $(secondList).attr('aria-hidden', 'true');
    $(firstText).removeClass(iconAct).addClass(iconDis);
  })
}