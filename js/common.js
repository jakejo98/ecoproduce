export function commonFunc(){
  countdownTimer();
  changeEventProductTab();
  changeProductTab();
  productSortDropdown();
  activeStickTab();
  // scrollProductAddList();
  activeStickTab();
  changeStoryTab();
}

// 카운트다운 타이머 이벤트(공통)
function countdownTimer(){
  const target = new Date("Aug 31, 2024 00:00:00").getTime();

  const countDownCon = setInterval(function(){

    const titTime = $(".section_title_countdown");
    const comCountTime = $(".common_flag.type_capsule .flag_text.countdown_time");

    const now = new Date().getTime();
    const leftTime = target - now;

    let days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

    hours += days * 24;

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    let countDownText = hours + ":" + minutes + ":" + seconds;

    $(titTime).text(countDownText);
    $(comCountTime).text(countDownText);

    if(leftTime < 0) {
      clearInterval(countDownCon);
      $(titTime).text("00:00:00");
      $(comCountTime).text("00:00:00");
    }
  }, 1000);
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

// 상품 페이지 탭 변경 이벤트(공통)
function changeProductTab(){
  const tabBtn = $(".section_product_page .common_tab_list .common_tab_btn");
  const tabList = $(".section_product_page .product_grid .product_tab_list_box");
  const currentText = $(".section_product_page .section_breadcrumbes .section_breadcrumbes_item.current_list");

  $(tabBtn).click(function () {
    const tabId = $(this).parent().index();
    // 탭 버튼
    $(this).parent().children(tabBtn).attr("aria-selected", "true");
    $(this).parent().siblings().children(tabBtn).attr("aria-selected", "false");

    // 탭 버튼 상품 리스트
    $(tabList).eq(tabId).attr("aria-hidden", "false");
    $(tabList).eq(tabId).siblings().attr("aria-hidden", "true");

    // 탭 현재 페이지 텍스트 변경
    switch (tabId) {
      case 0:
        $(currentText).text("전체");
        break;
      case 1:
        $(currentText).text("채소");
        break;
      case 2:
        $(currentText).text("과일");
        break;
      case 3:
        $(currentText).text("버섯");
        break;
      case 4:
        $(currentText).text("곡물");
        break;
      case 5:
        $(currentText).text("유기농");
        break;
      default:
    }
  });
}

// 상품 페이지 스크롤 시 추가 상품 보여주는 이벤트
function scrollProductAddList() {
  const productCont = $('.section_product_page .product_tab_list_box');
  const isProductCont = $('.section_product_page .product_tab_list_box').length;
  const productAddList = $('.section_product_page .product_tab_list_box .product_grid_list.expanded_list');
  const stickyHeight = $('.section_product_page .common_tab.type_line_v1').innerHeight();
  const respondToolbarHeight = $('.toolbar').innerHeight();

  const addListActive = $('#dimmed');
  const fixPage = $('body');
  const isActive = 'active';
  const isFixed = 'is-fixed';

  let expandedCount = -1;

  // 상품 리스트 높이 값을 구해주는 함수
  function updateProductContHeight() {
    return $(productCont).innerHeight();
  }

  // 초기 상품 리스트 높이 값 구해주는 함수
  function upadateProductContTop() {
    // 예외 처리
    if (isProductCont) {
      productContTop = $(productCont).offset().top;
    } else {
      productContTop = null;
    }
  }

  // 화면 높이 값 구해주는 함수
  function upadateWindowHeight() {
    return $(window).height();
  }

  // 화면 너비 값 구해주는 함수
  function upadateWindowWidth() {
    return $(window).width();
  }

  // 실시간 화면 너비 값 구해주는 함수
  function updateResizeWidth() {
    windowResizeWidth = $(window).width();
  }

  // 최상단에서 상품 리스트 거리
  let productContTop = 0;
  upadateProductContTop();

  // 초기 상품 리스트 높이 값 구함
  let productContHeight = updateProductContHeight();

  // 화면 높이 값 구함
  let windowHeight = upadateWindowHeight();

  // 화면 너비 값 구함
  let windowWidth = upadateWindowWidth();

  // 실시간 너비 값 구함
  let windowResizeWidth = $(window).width();

  $(window).resize(function () {
    updateResizeWidth();
    windowWidth = upadateWindowWidth(); 
  });

  $(window).scroll(function () {
    // window scroll 값 가져옴
    let windowScrollTop = $(window).scrollTop();

    let isDesktopScreen = windowWidth > 1023 && windowResizeWidth > 1023;
    let scrollCondition = windowScrollTop >= (productContTop + productContHeight) - (windowHeight + stickyHeight - (isDesktopScreen ? 0 : respondToolbarHeight));

    if (expandedCount < 1 && scrollCondition) {
      expandedCount++;

      $(addListActive).addClass(isActive);
      $(fixPage).addClass(isFixed);

      // dimmed 처리 후 2초 후에 추가 상품목록
      setTimeout(function () {
        $(addListActive).removeClass(isActive);
        $(fixPage).removeClass(isFixed);
        $(productAddList).eq(expandedCount).addClass(isActive);
        productContHeight = updateProductContHeight();
      }, 2000);
    }
  });
}

// Sticky 탭 메뉴
function activeStickTab(){
  const stickyTab = $('.section_product_page .common_tab.type_line_v1')
  const isStickyTab = $('.section_product_page .common_tab.type_line_v1').length;
  const act = 'sticky'
  let stickyTop = 0;

  if(isStickyTab) {
    stickyTop = $(stickyTab).offset().top;
  } else {
    stickyTop = null;
  }
  
  $(window).scroll(function(){
    // 스크롤 시 거리를 가져오기
    const scrollTop = $(window).scrollTop();

    if(scrollTop >= stickyTop) {
      $(stickyTab).addClass(act);
    } else {
      $(stickyTab).removeClass(act);
    }
  })
}

// 상품 페이지 정렬 순 드롭다운 메뉴
function productSortDropdown(){
  const dropdownBtn = $('.section_product_page .dropdown_expanded_btn');
  const dropdownList = $('.section_product_page .common_dropdown_list');
  const dropdownBtnText = $('.section_product_page .dropdown_expanded_btn .dropdown_current');
  const dropdownExpandedBtn = $('.section_product_page .common_dropdown_btn');

  // 버튼 클릭 시 상품 정렬 리스트 활성화
  $(dropdownBtn).click(function(){
    if($(dropdownBtn).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $(dropdownList).attr('aria-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', 'false');
      $(dropdownList).attr('aria-hidden', 'true');
    }
  })

  // 상품 정렬 리스트 버튼 클릭 시 해당 텍스트로 변경
  $(dropdownExpandedBtn).click(function(){
    const btnText = $(this).text();

    // 텍스트 변경 이벤트
    $(dropdownBtnText).text(btnText);
    // 드롭다운 리스트 숨김
    $(dropdownBtn).attr('aria-expanded', 'false');
    $(dropdownList).attr('aria-hidden', 'true');
  })
}

// 스토리 페이지 탭 변경 이벤트
function changeStoryTab(){
  const tabBtn = $('.section_story .type_capsule_v2 .common_tab_btn');
  const tabItem = $('.section_story .type_title_v1 .common_tab_item');
  const headingTit = $('.section_story .type_title_v1 .common_tab_item .section_heading');
  const tabBox = $('.section_story .story_tab_box');
  const storyBtn = $('.section_story .story_tab_box .type_addview_v2');
  const storyScroll = $('.section_story .story_tab_box .product_grid_list');
  const disBtn = 'disabled';

  $(tabBtn).click(function(){
    const tabId = $(this).parent().index();
    const expandedItem = $('.section_story .expanded_item');

    // 탭 버튼
    $(this).attr('aria-selected', 'true');
    $(this).parent().siblings().children(tabBtn).attr('aria-selected', 'false');

    // 탭 헤딩
    $(tabItem).eq(tabId).children(headingTit).attr('aria-selected', 'true');
    $(tabItem).eq(tabId).siblings().children(headingTit).attr('aria-selected', 'false');
    
    // 리스트
    $(tabBox).eq(tabId).attr('aria-hidden', 'false');
    $(tabBox).eq(tabId).siblings().attr('aria-hidden', 'true');

    // 탭 변경시 더 보기 버튼 초기화
    $(storyBtn).removeClass(disBtn);

    // 탭 변경시 확장 리스트 초기화
    $(expandedItem).remove();

    // 탭 변경시 가로 스크롤 초기화
    $(storyScroll).scrollLeft(0);
  })
}