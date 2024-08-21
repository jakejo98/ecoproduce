export function swiper(){
  mainBannerSwiperCon();
  eventBannerSwiperCon();
}

// 메인페이지 비주얼 배너 스와이퍼 설정
function mainBannerSwiperCon() {
  const cont = $('.section_main_banner');
  
  if (cont.length > 0) { // cont가 존재할 때만 실행
    const btnEffect = 'active';
    const prevBtn = $('.swiper-button-prev');
    const nextBtn = $('.swiper-button-next');
    
    let mainBannerSwiper = initMainBannerSwiper();

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
}

// 메인페이지 이벤트 배너 스와이퍼 설정
function eventBannerSwiperCon() {
  const cont = $('.section_event_banner');
  
  if (cont.length > 0) { // cont가 존재할 때만 실행
    let eventBannerSwiper = new Swiper('.event_banner', {
      slidesPerView: 1, 
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
}
