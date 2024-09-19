export function productPage(){
  stickyTab();
  stickyTabScroll();
  productSortDropdown();
}

// 상품 페이지 탭 변경 이벤트(공통)
function stickyTab(){
  const stickyTab = $('.section_product .type_line_v1');
  const bread = $('.section_product .section_breadcrumbes_list')
  const list = $('.section_product .type_line_v1 .common_tab_list');
  const item = $('.section_product .type_line_v1 .common_tab_item');
  const tabBtn = $('.section_product .type_line_v1 .common_tab_btn');
  const filter = $('.section_product .product_filter');
  const productBox = $('.section_product .product_tab_box');
  const dimmed = $('#dimmed');
  const fixPage = $('body');
  const isFixed = 'is-fixed'
  const isSticky = 'sticky';
  let stickyWidth = 0;
  let stickyTabTop = 0;
  let windowScroll = 0;

  // window Top
  function updateWindowTop(){
    windowScroll = $(window).scrollTop();
  }

  // sticky Top
  /* 
  offset().top 메서드를 활용하여 동적으로 값을 구하려 했으나 모바일 기기에서 정상적으로 동작하지 않아
  뷰포트에 맞춰 상수 값으로 계산
  */
  function updateStickyTop() {
    stickyWidth = $(window).width();
    if (stickyWidth > 1023) {
      stickyTabTop = 311;
    } else if (stickyWidth < 1024 && stickyWidth >= 768) {
      stickyTabTop = 191;
    } else {
      stickyTabTop = 187;
    }
  }
  
  // 페이지 로드 시 업데이트
  updateStickyTop();
  
  // 창 크기 조절 시 업데이트
  $(window).resize(function() {
    updateStickyTop();
  });

  $(tabBtn).click(function(){
    $(dimmed).attr('aria-hidden', 'false');
    $(fixPage).addClass(isFixed);
  
    setTimeout(function(){
      $(dimmed).attr('aria-hidden', 'true');
      $(fixPage).removeClass(isFixed);
      $(window).scrollTop(stickyTabTop);
    }, 1000);
  
    const tabId = $(this).parent().index();
    $(bread).eq(tabId).attr('aria-selected', 'true');
    $(bread).eq(tabId).siblings().attr('aria-selected', 'false');
    $(item).eq(tabId).children(tabBtn).attr('aria-selected', 'true');
    $(item).eq(tabId).siblings().children(tabBtn).attr('aria-selected', 'false');
    $(productBox).eq(tabId).attr('aria-hidden', 'false');
    $(productBox).eq(tabId).siblings().attr('aria-hidden', 'true');
  })

  $(window).scroll(function(){
    updateWindowTop();
    // 일정 스크롤 도달 시 sticky 활성화
    if(windowScroll >= stickyTabTop) {
      $(stickyTab).addClass(isSticky);
      $(filter).addClass(isSticky)
    } else {
      $(stickyTab).removeClass(isSticky);
      $(filter).removeClass(isSticky)
    }
  })
}

// 탭 버튼 클릭시 버튼 기준으로 스크롤 좌측 고정
function stickyTabScroll(){
  const tabList = $('.section_product .type_line_v1 .common_tab_list');
  const tabItem = $('.section_product .type_line_v1 .common_tab_item');
  const tabBtn = $('.section_product .type_line_v1 .common_tab_btn');
  const width = []

  function btnWidth(){
    $(tabItem).each(function(number){
      width[number] = $(this).find(tabBtn).innerWidth();
    })
  }

  btnWidth();
  
  $(tabBtn).click(function(){
    const tabIndex = $(this).parent().index();
    
    switch(tabIndex){
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
  })
}

// 상품 페이지 정렬 순 드롭다운 메뉴
function productSortDropdown(){ 
  const dropdownBtn = $('.section_product .dropdown_expanded_btn');
  const dropdownList = $('.section_product .common_dropdown_list');
  const dropdownBtnText = $('.section_product .dropdown_expanded_btn .dropdown_current');
  const dropdownExpandedBtn = $('.section_product .common_dropdown_btn');

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
