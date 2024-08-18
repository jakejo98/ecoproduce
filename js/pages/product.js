export function initProductPage(){
  appendProduct();
  stickyTab();
  productSortDropdown();
}

// 상품 페이지 탭 변경 이벤트(공통)
function stickyTab(){
  const stickyTab = $('.section_product .type_line_v1');
  const bread = $('.section_product .section_breadcrumbes_list')
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

function productVerticalScroll(){
  function updateWidowHeight(){

  }
  function updateWindowScroll(){

  }
  function updateProductHeight(){

  }
  function updateProductTop(){
    
  }
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

// 내용 추가해주는 함수
function appendProduct() {
  const productData = {
    entire: [
      {
        imgSrc: "/ecoproduce/img/product/tab_vegetables.jpg",
        imgAlt: "다용도 모듬 쌈채소 10~15종 내외 [600g], 10% 할인된 가격 8,550원, 원래 가격 9,500원, 농산물",
        name: "다용도 모듬 쌈채소 10~15종 내외 글자가 길어지는 경우에는 1줄로 정리합니다.",
        weight: "[600g]",
        discountRate: "10%",
        discountPrice: "8,550원",
        price: "9,500원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      },
      {
        imgSrc: "/ecoproduce/img/product/tab_fruits.jpg",
        imgAlt: "산지직송 달콤한 국산 바나나 [1.5kg], 5% 할인된 가격 17,100원, 원래 가격 18,000원, 농산물",
        name: "산지직송 달콤한 국산 바나나",
        weight: "[1.5kg]",
        discountRate: "5%",
        discountPrice: "17,100원",
        price: "18,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      },
      {
        imgSrc: "/ecoproduce/img/product/tab_mushroom.jpg",
        imgAlt: "향이 살아있는 생표고버섯 [500g], 15% 할인된 가격 6,800원, 원래 가격 8,000원, 농산물",
        name: "향이 살아있는 생표고버섯",
        weight: "[500g]",
        discountRate: "15%",
        discountPrice: "6,800원",
        price: "8,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      },
      {
        imgSrc: "/ecoproduce/img/product/tab_grains.jpg",
        imgAlt: "세척 말린 햇 건대추 [1kg], 13% 할인된 가격 17,400원, 원래 가격 20,000원, 농산물",
        name: "세척 말린 햇 건대추",
        weight: "[1kg]",
        discountRate: "13%",
        discountPrice: "17,400원",
        price: "20,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      }
    ],
    vegetable: [
      {
        imgSrc: "/ecoproduce/img/product/tab_vegetables.jpg",
        imgAlt: "다용도 모듬 쌈채소 10~15종 내외 [600g], 10% 할인된 가격 8,550원, 원래 가격 9,500원, 농산물",
        name: "다용도 모듬 쌈채소 10~15종 내외 글자가 길어지는 경우에는 1줄로 정리합니다.",
        weight: "[600g]",
        discountRate: "10%",
        discountPrice: "8,550원",
        price: "9,500원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      }
    ],
    fruit: [
      {
        imgSrc: "/ecoproduce/img/product/tab_fruits.jpg",
        imgAlt: "산지직송 달콤한 국산 바나나 [1.5kg], 5% 할인된 가격 17,100원, 원래 가격 18,000원, 농산물",
        name: "산지직송 달콤한 국산 바나나",
        weight: "[1.5kg]",
        discountRate: "5%",
        discountPrice: "17,100원",
        price: "18,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      }
    ],
    mushroom: [
      {
        imgSrc: "/ecoproduce/img/product/tab_mushroom.jpg",
        imgAlt: "향이 살아있는 생표고버섯 [500g], 15% 할인된 가격 6,800원, 원래 가격 8,000원, 농산물",
        name: "향이 살아있는 생표고버섯",
        weight: "[500g]",
        discountRate: "15%",
        discountPrice: "6,800원",
        price: "8,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      }
    ],
    grain: [
      {
        imgSrc: "/ecoproduce/img/product/tab_grains.jpg",
        imgAlt: "세척 말린 햇 건대추 [1kg], 13% 할인된 가격 17,400원, 원래 가격 20,000원, 농산물",
        name: "세척 말린 햇 건대추",
        weight: "[1kg]",
        discountRate: "13%",
        discountPrice: "17,400원",
        price: "20,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      }
    ],
    organic: [
      {
        imgSrc: "/ecoproduce/img/product/tab_organic.jpg",
        imgAlt: "유기농 무농약 케일 녹즙용 주스용 [1kg], 10% 할인된 가격 4,500원, 원래 가격 5,000원, 농산물",
        name: "유기농 무농약 케일 녹즙용 주스용",
        weight: "[1kg]",
        discountRate: "10%",
        discountPrice: "4,500원",
        price: "5,000원",
        flagCont: "agricultural",
        flagIcon: "icon_leaf",
        flagText: "농산물"
      }
    ]
  };

  const productSections = [
    { category: 'entire', containerSelector: '.product_tab_box.entire_box .product_grid_list', repeatCount: 5 },
    { category: 'vegetable', containerSelector: '.product_tab_box.vegetables_box .product_grid_list', repeatCount: 20 },
    { category: 'fruit', containerSelector: '.product_tab_box.fruits_box .product_grid_list', repeatCount: 20 },
    { category: 'mushroom', containerSelector: '.product_tab_box.mushroom_box .product_grid_list', repeatCount: 20 },
    { category: 'grain', containerSelector: '.product_tab_box.grains_box .product_grid_list', repeatCount: 20 },
    { category: 'organic', containerSelector: '.product_tab_box.organic_box .product_grid_list', repeatCount: 20 }
  ];

  productSections.forEach(section => {
    const { category, containerSelector, repeatCount } = section;
    const products = productData[category];
    const repeatedProducts = [];
    
    for (let i = 0; i < repeatCount; i++) {
      repeatedProducts.push(...products);
    }
    
    let productContent = "";
    repeatedProducts.forEach(product => {
      productContent += `
        <li class="product_grid_item expanded_item">
          <a href="#" class="product_grid_link">
            <div class="product_grid_box">
              <div class="product_img_box">
                <img src="${product.imgSrc}" alt="${product.imgAlt}">
                <button class="common_btn type_shopping_v1" aria-label="장바구니 담기">
                  <span class="common_icon icon icon_shopping_primary">
                    <span class="blind">장바구니 담기</span>
                  </span>
                </button>
              </div>
              <div class="product_info">
                <div class="product_name">
                  <strong class="name">${product.name}</strong>
                  <span class="weight">${product.weight}</span>
                </div>
                <div class="product_price">
                  <span class="discount_rate">${product.discountRate}</span>
                  <span class="discount_price">${product.discountPrice}</span>
                  <del class="price">${product.price}</del>
                </div>
                <div class="product_flag">
                  <div class="common_flag type_product">
                    <div class="flag ${product.flagCont}">
                      <span class="common_icon ty_sm ${product.flagIcon}">
                        <span class="blind">${product.flagText}</span>
                      </span>
                      <span class="flag_text">${product.flagText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      `;
    });
    $(containerSelector).append(productContent);
  });
}

