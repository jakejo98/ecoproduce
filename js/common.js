export function commonFunc(){
  countdownTimer();
  changeEventProductTab();
  changeProductTab();
  productSortDropdown();
  stickTab();
}

// 카운트다운 타이머 이벤트(공통)
function countdownTimer(){
  const target = new Date("Aug 31, 2024 00:00:00").getTime();

  const countDownCon = setInterval(function(){

    const titTime = $(".section_title_countdown");
    const comCountTime = $(".common_flag_v1 .flag_text.countdown_time");

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
  const tabBtn = $(".section_product_list .common_tab_list .common_tab_btn");
  const tabList = $(
    ".section_product_list .product_grid .product_tab_list_box"
  );
  const currentText = $(
    ".section_product_list .section_breadcrumbes .section_breadcrumbes_item.current_list"
  );

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

// Sticky 탭 메뉴
function stickTab(){
  const tab = $('.section_product_list .common_tab.type_line_v1')
  const act = 'sticky'

  // 탭과 화면 최상단의 거리
  const stickyTop = $(tab).offset().top;
  
  $(window).scroll(function(){
    // 스크롤 시 거리를 가져오기
    const scrollTop = $(window).scrollTop();

    if(scrollTop >= stickyTop) {
      $(tab).addClass(act);
    } else {
      $(tab).removeClass(act);
    }
    
  })
}

// 상품 페이지 정렬 순 드롭다운 메뉴
function productSortDropdown(){
  const dropdownBtn = $('.section_product_list .dropdown_expanded_btn');
  const dropdownList = $('.section_product_list .common_dropdown_list');

  $(dropdownBtn).click(function(){
    if($(dropdownBtn).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $(dropdownList).attr('aria-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', 'false');
      $(dropdownList).attr('aria-hidden', 'true');
    }
  })
}