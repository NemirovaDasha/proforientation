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
});

function slowScroll(block) {
  $(block).on('click', function(e){
    const block = $(e.target).attr('href');
    $('html,body').stop().animate({ scrollTop: $(block).offset().top }, 700);
    e.preventDefault();
  });
}


