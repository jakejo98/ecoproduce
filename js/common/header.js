export function headerCommon(){
  changeGnbAria();
}

export function headerDesktop(){
  headerGnbCategory();
  imgBoxBtnHover();
}

export function headerRespond(){
  searchApp();
  searchAppWordDel();
}

// 헤더 Gnb aria-current="page" 설정 (공통)
function changeGnbAria() {
  const logoBtn = $('.common_header .logo a');
  const headerGnbItem = $('.common_header .header_gnb_item');
  const headerGnbBtn = $('.common_header .header_gnb_link');
  let currentUrl = window.location.pathname;
  let fileName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  
  $(logoBtn).add(headerGnbBtn).removeAttr('aria-current'); 

  switch(fileName) {
    case 'index.html':
      $(logoBtn).attr('aria-current', 'page');
      break;
    case 'agricultural_product.html':
      $(headerGnbItem).eq(0).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'livestock_product.html':
      $(headerGnbItem).eq(1).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'seafood_product.html':
      $(headerGnbItem).eq(2).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'ugly_product.html':
      $(headerGnbItem).eq(3).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'timeattack_product.html':
      $(headerGnbItem).eq(4).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'event_product.html':
      $(headerGnbItem).eq(5).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'new_product.html':
      $(headerGnbItem).eq(6).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'best_product.html':
      $(headerGnbItem).eq(7).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'event.html':
      $(headerGnbItem).eq(8).children(headerGnbItem).attr('aria-current', 'page');
      break;
    case 'story.html':
      $(headerGnbItem).eq(8).children(headerGnbItem).attr('aria-current', 'page');
      break;
  }
}

// 헤더 gnb 커테고리 (PC)
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

// 이미지 박스 버튼 (PC)
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



// 헤더 검색창 (Respond)
function searchApp(){
  const searchBtn = $('.common_header .header_search_btn');
  const searchApp = $('#app .header_search_app'); 
  const searchClsBtn = $('#app .header_cls_btn');
  const fixPage = 'body';

  // 헤더 검색창 활성화
  $(searchBtn).click(function(){
    $(fixPage).addClass('is-fixed');
    $(searchApp).attr('aria-hidden', 'false');
    $(searchBtn).attr('aria-expanded', 'true');
    $(searchClsBtn).attr('aria-expanded', 'true')
  })

  // 헤더 검색창 비활성화
  $(searchClsBtn).click(function(){
    $(fixPage).removeClass('is-fixed');
    $(searchApp).attr('aria-hidden', 'true');
    $(searchBtn).attr('aria-expanded', 'false');
    $(searchClsBtn).attr('aria-expanded', 'false')
  })
}

// 검색창 최근검색어 삭제 (Respond)
function searchAppWordDel(){
  const recentNotBox = $('#app .header_search_app .recent_not_search')
  const recentBox = $('#app .header_search_app .recent_search');
  const delItem =  $('#app .header_search_app .common_tab.type_capsule_v1 .common_tab_item');
  const delItemLen =  $('#app .header_search_app .common_tab.type_capsule_v1 .common_tab_item').length;
  const delBtn =  $('#app .header_search_app .common_tab.type_capsule_v1 .common_tab_btn');
  const entireDelBtn =  $('#app .header_search_app .entire_del_btn');
  let delCount = 0;

  // "x"버튼 클릭 시 해당 요소 삭제
  $(delBtn).click(function(){
    $(this).closest(delItem).remove();
    delCount++;
    // 모든 최근 검색어 삭제 시 "최근 검색어가 없습니다" 활성화
    if(delItemLen == delCount) {
      $(recentBox).attr('aria-hidden', 'true');
      $(recentNotBox).attr('aria-hidden', 'false');
    }
  })

  // 전체삭제 버튼 클릭 시 최근 검색어 전체 삭제
  $(entireDelBtn).click(function(){
    $(delItem).remove();
    $(recentBox).attr('aria-hidden', 'true');
    $(recentNotBox).attr('aria-hidden', 'false');
  })
}