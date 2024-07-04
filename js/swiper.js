export function swiper() {
  var swiper = new Swiper('.main_banner', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1261: {
        spaceBetween: 30,
      },
    }
  });
}
