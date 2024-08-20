export function headerCommon(){
  changeGnbAria();
  
}

export function headerDesktop(){
  headerGnbCategory();
}

export function headerRespond(){
  searchApp();
  searchAppWordDel();
}

// 헤더 Gnb aria-current="page" 설정 (공통)
function changeGnbAria() {
  const logoBtn = $('.common_header .logo a');
  const headerNavItem = $('.common_header .header_nav_item');
  const headerNavLink = $('.common_header .header_nav_item .header_nav_link');
  let currentUrl = window.location.pathname;
  let fileName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  
  switch(fileName) {
    // 메인페이지
    case 'index.html':
      $(logoBtn).attr('aria-current', 'page');
      break;
    // Desktop Gnb 
    case 'agricultural_product.html':
      $(headerNavItem).eq(0).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'livestock_product.html':
      $(headerNavItem).eq(1).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'seafood_product.html':
      $(headerNavItem).eq(2).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'ugly_product.html':
      $(headerNavItem).eq(3).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'timeattack_product.html':
      $(headerNavItem).eq(4).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'event_product.html':
      $(headerNavItem).eq(5).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'new_product.html':
      $(headerNavItem).eq(6).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'best_product.html':
      $(headerNavItem).eq(7).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'event.html':
      $(headerNavItem).eq(8).children(headerNavLink).attr('aria-current', 'page');
      break;
    case 'story.html':
      $(headerNavItem).eq(8).children(headerNavLink).attr('aria-current', 'page');
      break;
  }
}

// 헤더 gnb 커테고리 (PC)
function headerGnbCategory(){
  const headerCategory = $('.header_category');
  const categoryCont = $('.header_category .header_category_container');
  const categoryBtn = $('.header_category .category_btn');
  const firstLink = $('.header_category_container .header_category_box.dep1 .header_category_link');
  const firstIcon = $('.header_category_container .header_category_box.dep1 .header_category_link .common_icon');
  const secondLink = $('.header_category_container .header_category_box.dep2 .header_category_list .header_category_link');
  const secondList = $('.header_category_container .header_category_box.dep2 .header_category_list');
  const secondListLen = $('.header_category_container .header_category_box.dep2 .header_category_list').length;
  const hashLink = $('.header_category_container .header_category_box.dep2 .header_category_list:nth-of-type(1) .header_category_item .header_category_link')
  const iconDis = 'icon_header_category_disabled';
  const iconAct = 'icon_header_category_active';

  $(categoryBtn).mouseenter(function(){
    // 카테고리 버튼 마우스 오버 시 카테고리 리스트 활성화
    $(this).attr('aria-expanded', 'true');
    $(categoryCont).attr('aria-hidden', 'false');
    // 카테고리 버튼 마우스 오버 시 카테고리 리스트 초기화
    $(firstLink).attr('aria-expanded', 'false');
    $(secondList).attr('aria-hidden', 'true');
    $(firstIcon).removeClass(iconAct).addClass(iconDis);
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
    $(this).children(firstIcon).removeClass(iconDis).addClass(iconAct);
    $(this).parent().siblings().find(firstIcon).removeClass(iconAct).addClass(iconDis);
    if(linkId >= secondListLen) {
      $(secondList).attr('aria-hidden', 'true');
    } else{
      $(secondList).eq(linkId).attr('aria-hidden', 'false');
      $(secondList).eq(linkId).siblings().attr('aria-hidden', 'true');
    }
  })

  // dep2 마우스 오버시 dep1 아이콘 초기화
  $(secondLink).mouseenter(function(){
    $(firstLink).find(firstIcon).removeClass(iconAct).addClass(iconDis);
  })

  // 해시 값으로 해당 페이지로 이동
  $(hashLink).click(function(){
    let hashValue = $(this).data('hash');
    sessionStorage.setItem('hashValue', hashValue);
  });

  let hashValue = sessionStorage.getItem('hashValue');

  if (hashValue) {
    let heading = $('.agricultural_product_page .section_breadcrumbes .section_breadcrumbes_list');
    let productBox = $('.agricultural_product_page .product_tab_box');
    let tabItem = $('.agricultural_product_page .type_line_v1 .common_tab_item');
    let tabBtn = $('.agricultural_product_page .type_line_v1 .common_tab_item .common_tab_btn');
    let indexMap = {
      'entire': 0,
      'vegetables': 1,
      'fruits': 2,
      'mushroom': 3,
      'grains': 4,
      'organic': 5
    };

    let index = indexMap[hashValue];
    if (index !== undefined) {
      // 헤딩 변화
      $(heading).eq(index).attr('aria-selected', 'true');
      $(heading).eq(index).siblings().attr('aria-selected', 'false');
      // 상품 변화
      $(productBox).eq(index).attr('aria-hidden', 'false');
      $(productBox).eq(index).siblings().attr('aria-hidden', 'true');
      // 탭 변화
      $(tabItem).eq(index).children(tabBtn).attr('aria-selected', 'true');
      $(tabItem).eq(index).siblings().children(tabBtn).attr('aria-selected', 'false');
    }
    sessionStorage.removeItem('hashValue');
  }
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