const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  
  },
  effect: 'slide',

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  }
});
