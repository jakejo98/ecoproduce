export function initMainPage(){
  countdownTimer();
  changeEventProductTab();
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



