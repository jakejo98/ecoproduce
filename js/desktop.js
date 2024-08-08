export function desktopFunc(){
  headerGnbCategory();
  imgBoxBtnHover();
}

// 헤더 gnb 커테고리
function headerGnbCategory(){
  const headerCategory = $('.header_category');
  const categoryCont = $('.header_category .header_category_container');
  const categoryBtn = $('.header_category .category_btn');
  const firstLink = $('.header_category_container .header_category_box.dep1 .header_category_link');
  const firstText = $('.header_category_container .header_category_box.dep1 .header_category_link .header_category_text');
  const secondList = $('.header_category_container .header_category_box.dep2 .header_category_list');
  const secondListLen = $('.header_category_container .header_category_box.dep2 .header_category_list').length;
  const iconDis = 'category_icon_disabled'
  const iconAct = 'category_icon_active'

  $(categoryBtn).mouseenter(function(){
    // 카테고리 버튼 마우스 오버 시 카테고리 리스트 활성화
    $(this).attr('aria-expanded', 'true');
    $(categoryCont).attr('aria-hidden', 'false');
    // 카테고리 버튼 마우스 오버 시 카테고리 리스트 초기화
    $(firstLink).attr('aria-expanded', 'false');
    $(secondList).attr('aria-hidden', 'true');
    $(firstText).removeClass(iconAct).addClass(iconDis);
  })

  // 카테고리 영역 마우스 오버 아웃 시 카테고리 리스트 비활성화
  $(headerCategory).mouseleave(function(){
    $(categoryBtn).attr('aria-expanded', 'false');
    $(categoryCont).attr('aria-hidden', 'true');
  })

  // 카테고리 리스트 영역 마우스 오버 아웃 시 카테고리 리스트 비활성화
  $(categoryCont).mouseleave(function(){
    $(categoryBtn).attr('aria-expanded', 'false');
    $(this).attr('aria-hidden', 'true');
  })

  // 카테고리 리스트 dep1 마우스 오버시 dep2 활성화
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
}

// 이미지 박스 버튼 
function imgBoxBtnHover(){
  const btn = $(".shopping_btn");
  const btnAct = "active";
  const btnIcon = $(".shopping_btn .common_icon");
  const iconDis = "icon_shopping_primary";
  const iconAct = "icon_shopping_white";

  $(btn).mouseenter(function () {
    $(this).addClass(btnAct);
    $(this).children(btnIcon).removeClass(iconDis).addClass(iconAct);
  });

  $(btn).mouseleave(function () {
    $(this).removeClass(btnAct);
    $(this).children(btnIcon).removeClass(iconAct).addClass(iconDis);
  });
}
