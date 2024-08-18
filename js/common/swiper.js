$(document).ready(function(){
  mainBannerSwiperCon();
  eventBannerSwiperCon();
});

function mainBannerSwiperCon() {
  const cont = $('.section_main_banner'); 
  const btnEffect = 'active';
  const prevBtn = $('.swiper-button-prev');
  const nextBtn = $('.swiper-button-next');
  
  var mainBannerSwiper = initMainBannerSwiper();

  // 스와이퍼 초기화 함수
  function initMainBannerSwiper() {
    return new Swiper('.main_banner', {
      slidesPerView: 'auto',
      loopAdditionalSlides: 1,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      a11y: { 
        enabled: true,
        prevSlideMessage: '이전 배너로 이동',
        nextSlideMessage: '다음 배너로 이동',   
        slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
      },
      breakpoints: {
        1262: {
          spaceBetween: 30,
        },
      }
    });
  }

  // 윈도우 리사이즈 이벤트 핸들링
  $(window).on('resize', function() {
    mainBannerSwiper.destroy(true, true);  // 기존 스와이퍼를 완전히 제거
    mainBannerSwiper = initMainBannerSwiper();  // 스와이퍼를 다시 초기화
  });

  $(cont).mouseenter(function(){
    mainBannerSwiper.autoplay.stop();
    $(prevBtn).addClass(btnEffect);
    $(nextBtn).addClass(btnEffect);
  });

  $(cont).mouseleave(function(){
    mainBannerSwiper.autoplay.start();
    $(prevBtn).removeClass(btnEffect);
    $(nextBtn).removeClass(btnEffect);
  });
}

function eventBannerSwiperCon() {
  const cont = $('.section_event_banner');
  
  var eventBannerSwiper = new Swiper('.event_banner', {
    slidesPerView : 1, 
    loopAdditionalSlides: 1, 
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    a11y: { 
      enabled: true,
      prevSlideMessage: '이전 이벤트 배너로 이동',
      nextSlideMessage: '다음 이벤트 배너로 이동',   
      slideLabelMessage: '총 {{slidesLength}}장의 이벤트 배너 중 {{index}}번 이벤트 배너 입니다.',
    },
  });

  $(cont).mouseenter(function(){
    eventBannerSwiper.autoplay.stop();
  });

  $(cont).mouseleave(function(){
    eventBannerSwiper.autoplay.start();
  });
}
