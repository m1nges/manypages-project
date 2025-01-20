const swiper = new Swiper('.sample-slider', {
  speed: 900,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 100,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

swiper.autoplay.stop();

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  swiper.autoplay.start();
})
