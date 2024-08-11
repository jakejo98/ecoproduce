

export function review(){
  reviewHorizontalScroll();
  reviewAddview();
  customerCheckDisplay();
}

let customerDisplayValue = '';
let customerCount = 0;

// 탭 변경 감지시 count 초기화
function customerCheckDisplay() {
  const tabBtn = $('.section_story .type_capsule_v2 .common_tab_btn');
  
  $(tabBtn).click(function() {
    // 버튼 클릭 후 변경된 aria-hidden 값을 확인하기 위한 코드
    setTimeout(function() {
      customerDisplayValue = $('.section_story .customer_box').attr('aria-hidden');
      customerCount = 0;
    }, 100); // 또는 적절한 시간 지연을 설정
  });
}

// 스토리 페이지 가로 스크롤 도달 시 추가 글 활성화
function reviewHorizontalScroll() {
  const customerCont = $('.section_story .story_tab_box.customer_box .product_grid_list');
  const fixPage = $('body');
  const fix = 'is-fixed';

  // 스크롤 왼쪽 값 구하는 함수
  function updateCustomerScrollLeft() {
    return $(customerCont).scrollLeft();
  }

  // 스크롤 할 수 있는 값 구하는 함수
  function updateCustomerScrollWidth() {
    return $(customerCont).get(0).scrollWidth;
  }

  // 컨텐츠 너비 구하는 함수
  function updateCustomerWidth() {
    return $(customerCont).outerWidth();
  }

  $(customerCont).scroll(function() {
    const addviewBtn = $('.section_story .customer_box .type_addview_v2');
    const disBtn = 'disabled'

    let customerScrollLeft = updateCustomerScrollLeft();
    let customerScrollWidth = updateCustomerScrollWidth();
    let customerWidth = updateCustomerWidth();

    if(customerScrollLeft + customerWidth >= customerScrollWidth && customerCount < 2) {
      customerCount++;
      // 스크롤 일시적으로 정지
      $(fixPage).addClass(fix);
      // 지정 시간 이후 리스트 추가로 보여줌
      setTimeout(function(){
        appendCustomer();
        $(fixPage).removeClass(fix);
      }, 100);
      // 리스트 추가 후 변수 값 업데이트
      customerScrollLeft = updateCustomerScrollLeft();
      customerScrollWidth = updateCustomerScrollWidth();
      customerWidth = updateCustomerWidth();
    }

    // 스크롤 최대치 도달 시 리뷰 더 보기 버튼 비활성화
    if(customerCount == 2) {
      $(addviewBtn).addClass(disBtn);
    }
  });
}

// 리뷰 더 보기
function reviewAddview(){
  const addviewBtn = $('.section_story .customer_box .type_addview_v2');
  const disBtn = 'disabled'
  
  $(addviewBtn).click(function(){
    customerCount++;
    appendCustomer();
    if(customerCount == 2) {
      $(addviewBtn).addClass(disBtn);
    }
  })
}

// 내용 추가 해주는 함수
function appendCustomer() {
  const customerData = [
    {
      imgSrc: "/ecoproduce/img/product/review_01.jpg",
      name: "산지직송 제철 달콤한 옥수수 특품",
      weight: "[1kg / 5개]",
      reviewCount: 666,
      grade: 5.0,
      reviewText: "중간 유통 과정을 거치지 않아서인지, 같은 품질의 농산물을 마트에서 사는 것보다 저렴하게 살 수 있었습니다. 물론 일부 품목에",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/review_02.jpg",
      name: "산지직송 농장직거래 대추 방울토마토",
      weight: "[1kg]",
      reviewCount: 500,
      grade: 5.0,
      reviewText: "방울토마토의 신선도는 정말 놀라웠습니다. 껍질이 얇고 매끈하며, 크기도 고르게 잘 자라 있었습니다. 생으로 먹어보니, 방울토마토가",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/review_03.jpg",
      name: "국내산 아삭아삭 햇양파",
      weight: "[2kg]",
      reviewCount: 310,
      grade: 5.0,
      reviewText: "양파를 꺼내서 바로 요리해 보았습니다. 생으로 샐러드에 넣어도 좋고, 볶아서 다양한 요리에 활용할 수 있었습니다. 햇양파",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/review_04.jpg",
      name: "명품 달콤한 꿀고구마",
      weight: "[5kg]",
      reviewCount: 807,
      grade: 5.0,
      reviewText: "고구마의 신선도는 정말 놀라웠습니다. 껍질이 얇고 매끈했으며, 크기도 고르게 잘 자라 있었습니다. 첫 번째로 찜을 해봤는데",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    }
  ];

  const customerCont = $('.section_story .story_tab_box.customer_box .product_grid_list');
  const repeatCount = 2;
  let customerContent = "";

  for (let i = 0; i < repeatCount; i++) {
    customerData.forEach(data => {
      const customerTemplate = `
        <li class="product_grid_item expanded_item">
            <a href="#" class="product_grid_link">
                <div class="product_grid_box">
                    <div class="product_img_box">
                        <img src="${data.imgSrc}" alt="${data.name}, ${data.weight}, 리뷰 ${data.reviewCount}개, 평점 ${data.grade}, ${data.reviewText}, ${data.reviewer}, ${data.reviewDate}">
                    </div>
                    <div class="product_review_box">
                        <div class="product_info">
                            <div class="info">
                                <strong class="name">${data.name}</strong>
                                <span class="weight">${data.weight}</span>
                            </div>
                            <div class="eval">
                                <div class="review_count">
                                    <strong class="text">리뷰</strong>
                                    <span class="number">${data.reviewCount}</span>
                                </div>
                                <div class="grade">
                                    <strong class="text">평점</strong>
                                    <span class="number">${data.grade.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="product_review">
                            <p class="post">
                                ${data.reviewText}
                            </p>
                            <div class="post_info">
                                <span class="name">${data.reviewer}</span>
                                <time datetime="${data.reviewDate}" class="post_time">${data.reviewDate}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
      `;
      customerContent += customerTemplate;
    });
  }
  $(customerCont).append(customerContent);
}



