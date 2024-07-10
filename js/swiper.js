export function swiper() {
  const cont = $('.section_main_banner'); // 마우스 이벤트를 받을 요소 선택
  const btnEffect = 'active'
  const prevBtn = $('.swiper-button-prev')
  const nextBtn = $('.swiper-button-next')
  // 스와이퍼 기본속성
  var swiper = new Swiper('.main_banner', {
    slidesPerView : 'auto', 
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
      prevSlideMessage: '이전 배너를 이동',
      nextSlideMessage: '다음 배너를 이동',   
      slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
    },
    breakpoints: {
      1262: {
        spaceBetween: 30,
      },
    }
  });

  $(window).on('resize', function() {
    swiper.params.spaceBetween = $(window).width() >= 1262 ? 30 : 0;
    swiper.update(); // Swiper 업데이트
  });

  $(cont).mouseenter(function(){
    swiper.autoplay.stop();
    $(prevBtn).addClass(btnEffect);
    $(nextBtn).addClass(btnEffect);
  })

  $(cont).mouseleave(function(){
    swiper.autoplay.start();
    $(prevBtn).removeClass(btnEffect);
    $(nextBtn).removeClass(btnEffect);
  })
}

