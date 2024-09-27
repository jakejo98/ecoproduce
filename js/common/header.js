export function headerCommon(){
  changeShoppingBtn();
}

export function headerDesktop(){
  headerGnbCategory();
}

export function headerRespond(){
  searchApp();
  searchAppWordDel();
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

//헤더 검색창 (Respond)
function searchApp(){
  const commonHeaderSearch = $('.common_header .header_search');
  const searchApp = $('#app .header_search_app'); 
  const searchAppInput = $('#app .header_search_app .header_search_input'); 
  const searchAppBtn = $('#app .header_search_app .header_search_btn'); 
  const searchClsBtn = $('#app .header_cls_btn');
  const searchResultPage = '/ecoproduce/html/prepare/search_result.html'
  const fixPage = 'body';

  // 반응형 헤더 검색창 활성화
  const searchOpen = function(event){
    event.preventDefault();
    $(fixPage).addClass('is-fixed');
    $(searchApp).attr('aria-hidden', 'false');
    $(searchAppInput).focus();
    $(searchClsBtn).attr('aria-expanded', 'true');
  }
  // 반응형 헤더 검색창 비활성화
  const searchClose = function(){
    $(fixPage).removeClass('is-fixed');
    $(searchApp).attr('aria-hidden', 'true');
    $(searchAppInput).blur();
    $(searchClsBtn).attr('aria-expanded', 'false');
  }
  // 반응형 헤더 검색창(돋보기) 버튼 클릭 시 검색 결과 페이지로 이동
  const serachAppResultPage = function(){
    window.location.href = searchResultPage;
  }
  // 반응형
  function activeSearchHandler(){
    $(commonHeaderSearch).on('click', searchOpen);
    $(searchClsBtn).on('click', searchClose);
    $(searchAppBtn).on('click', serachAppResultPage)
  }
  // 데스크탑
  function disabledSearchHandler(){
    $(commonHeaderSearch).off('click', searchOpen);
    $(searchClsBtn).off('click', searchClose);
    $(searchAppBtn).off('click', serachAppResultPage)
  }
  // 윈도우 너비 기준으로 사용할 함수 정의
  function updateWindowSearch(){
    let width = $(window).width();
    if(width > 1023){
      disabledSearchHandler();
    } else {
      activeSearchHandler();
    }
  }
  // 초기 실행
  updateWindowSearch();
  // 윈도우 리사이즈 시 확인
  $(window).resize(function(){
    updateWindowSearch();
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

// 윈도우 리사이즈시 주문조회 아이콘 클래스 변경
function changeShoppingBtn() {
  const shopBtn = $('.header_shopping .header_shopping_link .common_icon');
  const isDesktop = 'icon_shopping_white';
  const isRespond = 'icon_shopping_black';

  function updateClass() {
    let windowWidth = $(window).width();
    if (windowWidth > 1023) {
      shopBtn.addClass(isDesktop).removeClass(isRespond);
    } else {
      shopBtn.addClass(isRespond).removeClass(isDesktop);
    }
  }
  // 초기 너비 값 구하기
  updateClass();
  // 리사이즈 되는 너비 값 기준으로 class 변경
  $(window).resize(function() {
    updateClass();
  });
}

