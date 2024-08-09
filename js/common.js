export function commonFunc(){
  countdownTimer();
  changeEventProductTab();
  changeProductTab();
  productSortDropdown();
  activeStickTab();
  changeStoryTab();
  changeGnbAria();
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
  const stickyTab = $('.section_product_page .common_tab.type_line_v1');
  const isStickyTab = $('.section_product_page .common_tab.type_line_v1').length;
  const tabList = $(".section_product_page .product_grid .product_tab_box");
  const currentText = $(".section_product_page .section_breadcrumbes .section_breadcrumbes_item.current_list");
  let stickyTop = 0;

  $(window).scroll(function() {
    // 현재 스크롤 위치의 탑값을 구함
    let scrollTop = $(window).scrollTop();
    console.log('현재 스크롤 탑값:', scrollTop);
});
  function updateStickyTop() {
    if (isStickyTab) {
      // .product_filter 부분까지 보여주기 위해 -1 적용
      stickyTop = $(stickyTab).offset().top - 1;
      console.log(stickyTop)
    } else {
      stickyTop = null;
    }
  }
  // 초기 top 값
  updateStickyTop();
  // 너비 변경 시 top 값
  $(window).resize(function(){
    updateStickyTop();
  })

  $(tabBtn).click(function() {
    const tabId = $(this).parent().index();
    // 탭 버튼
    $(this).parent().children(tabBtn).attr("aria-selected", "true");
    $(this).parent().siblings().children(tabBtn).attr("aria-selected", "false");

    // 탭 버튼 상품 리스트
    $(tabList).eq(tabId).attr("aria-hidden", "false");
    $(tabList).eq(tabId).siblings().attr("aria-hidden", "true");

    // 탭 현재 페이지 텍스트 변경
    switch(tabId) {
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

    // 상단 거리 만큼 이동
    $(window).scrollTop(stickyTop)
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

// 헤더 Gnb aria-current="page" 설정
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


