$(document).ready(function(){
  mainBannerSwiperCon();
  eventBannerSwiperCon();
})

function mainBannerSwiperCon() {
  const cont = $('.section_main_banner'); 
  const btnEffect = 'active'
  const prevBtn = $('.swiper-button-prev')
  const nextBtn = $('.swiper-button-next')
  // 스와이퍼 기본속성
  var mainBannerSwiper = new Swiper('.main_banner', {
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
  $(window).on('resize', function() {
    mainBannerSwiper.params.spaceBetween = $(window).width() >= 1262 ? 30 : 0;
    mainBannerSwiper.update(); // Swiper 업데이트
  });

  $(cont).mouseenter(function(){
    mainBannerSwiper.autoplay.stop();
    $(prevBtn).addClass(btnEffect);
    $(nextBtn).addClass(btnEffect);
  })

  $(cont).mouseleave(function(){
    mainBannerSwiper.autoplay.start();
    $(prevBtn).removeClass(btnEffect);
    $(nextBtn).removeClass(btnEffect);
  })
}

function eventBannerSwiperCon() {
  const cont = $('.section_event_banner');
  // 스와이퍼 기본속성
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
  })

  $(cont).mouseleave(function(){
    eventBannerSwiper.autoplay.start();
  })
}