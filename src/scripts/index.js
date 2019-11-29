import vueExams from "./parts/vue-script/vueExams";

$(() => {
  Vue.options.delimiters = ['${', '}'];
  vueExams();

  AOS.init({
    once: true
  });

  //скролл к первому блоку
  $('.js-forward').click(function () {
    const goTo = $('.services').offset().top;
    $('html').animate({
        scrollTop: goTo
      }, 500
    );
  });

  //параллакс
  let instance = new Rellax('.rellax', {
    speed: -6,
    center: true,
    wrapper: null,
    relativeToWrapper: false,
    round: true,
    vertical: true,
    horizontal: false
  });

  //плавный переход по якорям
  slowScroll($('.footer__link'));
  slowScroll($('.navigation__link'));

  hideNav();
  window.onresize = function () {
    hideNav();
  };

  //lazyload для картинок
  let images = $('img');
  new LazyLoad(images, {
    root: null,
    rootMargin: "500px",
    threshold: 0
  });
});

function slowScroll(block) {
  $(block).on('click', function (e) {
    const block = $(e.target).attr('href');
    $('html,body').stop().animate({scrollTop: $(block).offset().top}, 700);
    e.preventDefault();
  });
}

//скрываем навигацию на мобильных устройствах
function hideNav() {
  if ($(window).width() < '768') {
    $('.navigation').hide();
  } else {
    $('.navigation').show();
  }
  $('.general').children('.navigation').show();
}


