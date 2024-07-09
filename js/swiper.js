export function swiper(){
  swiperProperty();
  swiperCon();
}
// 스와이퍼 기본 속성
function swiperProperty() {
  var swiper = new Swiper('.main_banner', {
    slidesPerView : 1, 
    loopAdditionalSlides: 1, 
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    a11y: { 
      enabled: true,
      prevSlideMessage: '이전 배너를 이동',
      nextSlideMessage: '다음 배너를 이동',   
      slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
    },
    breakpoints: {
      1024: {
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  });
}
