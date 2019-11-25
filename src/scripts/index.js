import vueExams from "./parts/vue-script/vueExams";

$(() => {
  Vue.options.delimiters = ['${', '}'];
  vueExams();

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
});


