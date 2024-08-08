$(document).ready(function(){
  storyHorizontalScroll();
  storyAddview();
})

// 스토리 페이지 가로 스크롤 도달 시 추가 글 활성화
function storyHorizontalScroll() {
  const producerCont = $('.section_story .story_tab_box.producer_box .product_grid_list');
  const fixPage = $('body');
  const fix = 'is-fixed';
  let producerCount = 0;

  // 스크롤 왼쪽 값 구하는 함수
  function updateProducerScrollLeft() {
    return $(producerCont).scrollLeft();
  }

  // 스크롤 할 수 있는 값 구하는 함수
  function updateProducerScrollWidth() {
    return $(producerCont).get(0).scrollWidth;
  }

  // 컨텐츠 너비 구하는 함수
  function updateProducerWidth() {
    return $(producerCont).outerWidth();
  }

  $(producerCont).scroll(function() {
    let producerScrollLeft = updateProducerScrollLeft();
    let producerScrollWidth = updateProducerScrollWidth();
    let producerWidth = updateProducerWidth();

    if(producerScrollLeft + producerWidth >= producerScrollWidth) {
      if(producerCount < 2) {
        producerCount++;
      // 스크롤 일시적으로 정지
      $(fixPage).addClass(fix);
      // 지정 시간 이후 리스트 추가로 보여줌
      setTimeout(function(){
        appendProducer();
        $(fixPage).removeClass(fix);
      }, 100);
      // 리스트 추가 후 변수 값 업데이트
      producerScrollLeft = updateProducerScrollLeft();
      producerScrollWidth = updateProducerScrollWidth();
      producerWidth = updateProducerWidth();
      } else {
        producerCount = 0;
      }
    }
  });
}

// 스토리 더 보기
function storyAddview(){
  const addviewBtn = $('.section_story .producer_box .type_addview_v2');
  const disBtn = 'disabled'
  let addCount = 0;

  $(addviewBtn).click(function(){
    addCount++
    appendProducer();
    if(addCount == 2) {
      $(addviewBtn).addClass(disBtn);
    }
  })
}

// 내용 추가 해주는 함수
function appendProducer() {
  const producerData = [
    {
      imgSrc: "/ecoproduce/img/product/producer_01.jpg",
      name: "제철 손질 홍합",
      weight: "[10kg]",
      reviewText: "홍합은 고단백 저지방 식품으로, 다양한 영양소가 풍부하게 포함되어 있습니다. 특히 철분, 비타민 B12, 아연, 셀레늄 등의 많은",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/producer_02.jpg",
      name: "녹차먹인 국내산 한돈 삼겹살",
      weight: "[600g]",
      reviewText: "삼겹살은 고단백 식품으로, 비타민 B군과 철분, 아연 등의 미네랄이 풍부하게 포함되어 있습니다. 그러나 지방 함량이 높기 때문에",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/producer_03.jpg",
      name: "제철 국산 흰다리 새우",
      weight: "[1kg]",
      reviewText: "흰다리새우는 저지방 식품으로, 약 1g 이하의 지방을 포함합니다. 대부분의 지방은 오메가-3 지방산을 포함하고 있습니다.",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/producer_04.jpg",
      name: "신선 껍질 없는 닭가슴살",
      weight: "[1kg]",
      reviewText: "닭가슴살은 고단백, 저지방 식품으로 알려져있습니다. 100g 당 약 23g의 단백질이 포함되어 있으며, 지방 함량은 2g 미만으로 구성되어 있습니다.",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    }
  ];

  const producerCont = $('.section_story .story_tab_box.producer_box .product_grid_list');
  const repeatCount = 2;
  let producerContent = "";

  for (let i = 0; i < repeatCount; i++) {
    producerData.forEach(data => {
      const producerTemplate = `
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
                                    <span class="number">${data.grade}</span>
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
      producerContent += producerTemplate;
    });
  }
  $(producerCont).append(producerContent);
}



