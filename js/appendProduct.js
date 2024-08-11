export function product(){
  productScroll();
}
  
function productScroll(){
  const productTabBox = $('.section_product_page .product_grid .product_tab_box');
  const isProductTabBox = $('.section_product_page .product_grid .product_tab_box').length;
  const stickyTabHeight = $('.section_product_page .common_tab.type_line_v1').outerHeight();
  const fixPage = $('body');
  const isFixed = 'is-fixed'
  const dim = $('#dimmed');
  let windowValue = 0;
  let windowTop = 0;
  let windowHeight = 0;
  let productTabBoxValue = 0;
  let productTabBoxTop = 0;
  let productTabBoxHeight = 0;

  // 요소 top 값 구하는 함수
  function updateProductTop(){
    if(isProductTabBox){
      // Sticky 높이 값 만큼 값 재설정
      productTabBoxTop = $(productTabBox).offset().top - stickyTabHeight;
    } else {
      productTabBoxTop = null;
    }
  }

  // 요소 초기 top 값
  updateProductTop();

  $(window).scroll(function(){
  // 윈도우 스크롤 값 구하는 함수
  function updateWindowTop(){
    windowTop = $(window).scrollTop();
  }
  // 윈도우 높이 값 구하는 함수
  function updateWindowHeight(){
    windowHeight = $(window).height();
  }
  // 요소 높이 값 구하는 함수
  function updateProductHeight(){
    if(isProductTabBox){
      productTabBoxHeight = $(productTabBox).outerHeight();
    } else {
      productTabBoxHeight = null;
    }
  }

  // 윈도우 초기 top 값
  updateWindowTop();
  // 윈도우 초기 높이 값
  updateWindowHeight();
  // 요소 초기 높이 값
  updateProductHeight();

  windowValue = windowTop + windowHeight;
  productTabBoxValue = productTabBoxTop + productTabBoxHeight;
  if(windowValue >= productTabBoxValue) {
    $(fixPage).addClass('is-fixed');
    $(dim).attr('aria-hidden', 'false');

    setTimeout(function(){
      $(fixPage).removeClass('is-fixed');
      $(dim).attr('aria-hidden', 'true');
    }, 1500)
    appendProduct();
  }
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