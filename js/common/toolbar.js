export function appRespond(){
  categoryHandler();
  toolbarState();
  initCategoryPage();
}

// 툴바 카테고리 화면 제어
function categoryHandler(){
  const categoryClsBtn = $('.section_category .close_btn');
  const resetPage = '/ecoproduce/index.html';
  const firstDepLink = $('.category_page .section_category .category_content_list.dep1 > .category_content_item > .category_content_link');
  const firstDepIcon = $('.category_page .section_category .category_content_list.dep1 > .category_content_item > .category_content_link > .common_icon');
  const secondDep = $('.category_page .section_category .category_content_list.dep2');
  const dis = 'icon_respond_category_disabled';
  const act = 'icon_respond_category_active';

  // 이벤트 초기화 - 리사이즈시 버튼이 클릭이 안되는 이슈 처리 위해
  $(categoryClsBtn).off('click');
  $(firstDepLink).off('click');

  // 카테고리 창 'x' 버튼 클릭시 메인페이지로 이동
  $(categoryClsBtn).click(function(){
    window.location.href = resetPage;
  })
  // 인덱스 값
  $(firstDepLink).click(function(event){
    const linkId = $(this).parent().index();    

    // dep1 리스트 링크 막기(버튼 처럼 사용)
    if(linkId <= 2) { 
      event.preventDefault();
      // dep1 클릭 시 해당 요소에 자식 요소인 dep2 활성화/비활성화
      if($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $(this).parent().siblings().find(firstDepLink).attr('aria-expanded', 'false');
        $(this).parent().siblings().slice(3, 10).each(function(){
          $(this).find(firstDepLink).removeAttr('aria-expanded');
        });
        $(this).parent().find(secondDep).attr('aria-hidden', 'false');
        $(this).parent().siblings().find(secondDep).attr('aria-hidden', 'true');
        $(this).children(firstDepIcon).removeClass(dis).addClass(act);
        $(this).parent().siblings().find(firstDepIcon).removeClass(act).addClass(dis);
      } else {
        $(this).attr('aria-expanded', 'false')
        $(this).parent().siblings().slice(3, 10).each(function(){
          $(this).find(firstDepLink).removeAttr('aria-expanded');
        });
        $(this).parent().find(secondDep).attr('aria-hidden', 'true');
        $(this).children(firstDepIcon).removeClass(act).addClass(dis);
      }
    }
  })
  // 해시 값으로 해당 페이지로 이동
  const hashLink = $('.section_category .toolbar_agricultural .category_content_link');
  const tabList = $('.section_product .type_line_v1 .common_tab_list');
  const tabItem = $('.section_product .type_line_v1 .common_tab_item');
  const tabBtn = $('.section_product .type_line_v1 .common_tab_btn');
  const width = [];

  function btnWidth(){
    $(tabItem).each(function(number){
      width[number] = $(this).find(tabBtn).innerWidth();
    })
  }

  btnWidth();

  $(hashLink).click(function(){
    let hashValue = $(this).data('hash');
    sessionStorage.setItem('hashValue', hashValue);
  })

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
    switch(index){
      case 0:
        $(tabList).scrollLeft(0);
        break;
      case 1:
        $(tabList).scrollLeft(width[0]);
        break;
      case 2:
        $(tabList).scrollLeft(width[0] + width[1]);
        break;
      case 3:
        $(tabList).scrollLeft(width[0] + width[1] + width[2]);
        break;
      case 4:
        $(tabList).scrollLeft(width[0] + width[1] + width[2] + width[3]);
        break;
      case 5:
        $(tabList).scrollLeft(width[0] + width[1] + width[2] + width[3] + width[4]);
        break;
    }
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

// 반응형 aria-current 설정
function toolbarState() {
  const toolbarItem = $('.toolbar .toolbar_item');
  const toolbarLink = $('.toolbar .toolbar_link');
  const toolbarIcon = $('.toolbar .common_icon');
  const isActive = 'active';
  let currentUrl = window.location.pathname;
  let fileName = currentUrl.substring(currentUrl.lastIndexOf('/'));

  switch(fileName){
    case '/category.html':
      $(toolbarItem).eq(0).find(toolbarLink).addClass(isActive);
      $(toolbarItem).eq(0).find(toolbarIcon).removeClass('icon_toolbar_category_disabled').addClass('icon_toolbar_category_active');
      break;
    case '/call.html':
      $(toolbarItem).eq(1).find(toolbarLink).addClass(isActive);
      $(toolbarItem).eq(1).find(toolbarIcon).removeClass('icon_toolbar_call_disabled').addClass('icon_toolbar_call_active');
      break;
    case '/':
      $(toolbarItem).eq(2).find(toolbarLink).addClass(isActive);
      $(toolbarItem).eq(2).find(toolbarIcon).removeClass('icon_toolbar_home_disabled').addClass('icon_toolbar_home_active');
      break;
    case '/index.html':
      $(toolbarItem).eq(2).find(toolbarLink).addClass(isActive);
      $(toolbarItem).eq(2).find(toolbarIcon).removeClass('icon_toolbar_home_disabled').addClass('icon_toolbar_home_active');
      break;
    case '/order.html':
      $(toolbarItem).eq(3).find(toolbarLink).addClass(isActive);
      $(toolbarItem).eq(3).find(toolbarIcon).removeClass('icon_toolbar_order_disabled').addClass('icon_toolbar_order_active');
    break;
    case '/mypage.html':
      $(toolbarItem).eq(4).find(toolbarLink).addClass(isActive);
      $(toolbarItem).eq(4).find(toolbarIcon).removeClass('icon_toolbar_mypage_disabled').addClass('icon_toolbar_mypage_active');
    break;
  }
}

// 데스크탑 페이지로 변경 시 메인페이지로 이동
function initCategoryPage(){
  function isRespond(){
    const currentUrl = window.location.pathname;
    const fileName = currentUrl.substring(currentUrl.lastIndexOf('/'));
    const resetPage = '/ecoproduce/index.html'
    let width = $(window).width();
    if(fileName === '/category.html' && width > 1023) {
      window.location.href = resetPage
    }
  }
  // 초기 실행될 함수
  isRespond();
  // 윈도우 리사이즈 시 실행될 함수
  $(window).resize(function(){
    isRespond();
  })
}