
$(document).ready(function(){
  appendCustomer();
  appendProducer();
  changeStoryTab();
  // storyAddview();
})

let customerDisplayValue = '';
let customerCount = 0;

// 탭 변경 감지시 count 초기화
function changeStoryTab() {
  const tabBtn = $('.section_story .type_capsule_v2 .common_tab_btn');
  const headingitem = $('.section_story .type_title_v1 .common_tab_item');
  const heading = $('section_story .type_title_v1 .common_tab_item .section_heading');
  const contents = $('.section_story .story_tab_box');
  
  $(tabBtn).click(function() {
    // 인덱스 값
    const tabId = $(this).parent().index();

    // 버튼 변화
    $(this).attr('aria-selected', 'true');
    $(this).parent().siblings().children(tabBtn).attr('aria-selected', 'false');

    // 헤딩 변화
    $(headingitem).eq(tabId).children(heading).attr('aria-selected', 'true');
    $(headingitem).eq(tabId).siblings().children(heading).attr('aria-selected', 'false');

    // 컨텐츠 박스 변화
    $(contents).eq(tabId).attr('aria-hidden', 'false');
    $(contents).eq(tabId).siblings().attr('aria-hidden', 'true');
  });
}

// // 더 보기 버튼
// function storyAddview(){
//   const addviewBtn = $('.section_story .customer_box .type_addview_v2');
//   const disBtn = 'disabled'
  
//   $(addviewBtn).click(function(){
//     customerCount++;
//     if(customerCount == 2) {
//       $(addviewBtn).addClass(disBtn);
//     }
//   })
// }


// 소비자 리뷰 내용 추가 함수
function appendCustomer() {
  const customerData = [
    {
      imgSrc: "/ecoproduce/img/product/review_01.jpg",
      name: "산지직송 제철 달콤한 옥수수 특품",
      weight: "[1kg / 5개]",
      reviewCount: 666,
      grade: 5.0,
      reviewText: "중간 유통 과정을 거치지 않아서인지, 같은 품질의 농산물을 마트에서 사는 것보다 저렴하게 살 수 있었습니다. 물론 일부 품목에 글자가 길어지는 경우 3줄로 정리합니다.",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/review_02.jpg",
      name: "산지직송 농장직거래 대추 방울토마토",
      weight: "[1kg]",
      reviewCount: 500,
      grade: 5.0,
      reviewText: "방울토마토의 신선도는 정말 놀라웠습니다. 껍질이 얇고 매끈하며, 크기도 고르게 잘 자라 있었습니다. 생으로 먹어보니, 방울토마토가 글자가 길어지는 경우 3줄로 정리합니다.",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/review_03.jpg",
      name: "국내산 아삭아삭 햇양파",
      weight: "[2kg]",
      reviewCount: 310,
      grade: 5.0,
      reviewText: "양파를 꺼내서 바로 요리해 보았습니다. 생으로 샐러드에 넣어도 좋고, 볶아서 다양한 요리에 활용할 수 있었습니다. 햇양파 글자가 길어지는 경우 3줄로 정리합니다.",
      reviewer: "조재****",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/review_04.jpg",
      name: "명품 달콤한 꿀고구마",
      weight: "[5kg]",
      reviewCount: 807,
      grade: 5.0,
      reviewText: "고구마의 신선도는 정말 놀라웠습니다. 껍질이 얇고 매끈했으며, 크기도 고르게 잘 자라 있었습니다. 첫 번째로 찜을 해봤는데 글자가 길어지는 경우 3줄로 정리합니다.",
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

// 생산자 스토리 내용 추가 함수
function appendProducer() {
  const producerData = [
    {
      imgSrc: "/ecoproduce/img/product/producer_01.jpg",
      name: "제철 손질 홍합",
      weight: "[10kg]",
      reviewText: "홍합은 고단백 저지방 식품으로, 다양한 영양소가 풍부하게 포함되어 있습니다. 특히 철분, 비타민 B12, 아연, 셀레늄 등의 많은 글자가 길어지는 경우 3줄로 정리합니다.",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/producer_02.jpg",
      name: "녹차먹인 국내산 한돈 삼겹살",
      weight: "[600g]",
      reviewText: "삼겹살은 고단백 식품으로, 비타민 B군과 철분, 아연 등의 미네랄이 풍부하게 포함되어 있습니다. 그러나 지방 함량이 높기 때문에 글자가 길어지는 경우 3줄로 정리합니다.",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/producer_03.jpg",
      name: "제철 국산 흰다리 새우",
      weight: "[1kg]",
      reviewText: "흰다리새우는 저지방 식품으로, 약 1g 이하의 지방을 포함합니다. 대부분의 지방은 오메가-3 지방산을 포함하고 있습니다. 글자가 길어지는 경우 3줄로 정리합니다.",
      reviewer: "(주)에프수산",
      reviewDate: "2024.05.23"
    },
    {
      imgSrc: "/ecoproduce/img/product/producer_04.jpg",
      name: "신선 껍질 없는 닭가슴살",
      weight: "[1kg]",
      reviewText: "닭가슴살은 고단백, 저지방 식품으로 알려져있습니다. 100g 당 약 23g의 단백질이 포함되어 있으며, 지방 함량은 2g 미만으로 구성되어 있습니다. 글자가 길어지는 경우 3줄로 정리합니다.",
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



