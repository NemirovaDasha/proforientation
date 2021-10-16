export default () => {
  new Vue({
    el: '#vue-exam',
    data: {
      exams: window.examItems,
      items: window.examItems,
      count: 3,
      filters: {},
      showFilters: false
    },
    computed: {
      compShowItems() {
        return this.items.slice(0, this.count);
      }
    },
    methods: {
      setCount() {
        $('.preloader').addClass('show');
        setTimeout(() => {
          this.count += 3;
          $('.preloader').removeClass('show');
        }, 800);
      },
      filterExams() {
        let result = this.exams;
        if (this.showFilters) {
          this.count = 3;
          for (let key in this.filters) {
            result = result.filter(exam => {
              return exam.tags.find(tag => tag.id === key);
            });
          }
          $('html,body').stop().animate({scrollTop: $('#exams').offset().top}, 700);
        }
        this.items = result
      },
      sortExam(tagId, title) {
        this.showFilters = true;
        this.filters[tagId] = title;
        this.filterExams();
      },
      resetFilter() {
        this.count = 3;
        this.showFilters = false;
        this.filters = {}
        this.items = window.examItems;
        $('html,body').stop().animate({scrollTop: $('#exams').offset().top}, 700);
      },
      removeFilter(key){
        delete this.filters[key];
        if (Object.keys(this.filters).length) {
          this.filterExams();
        }else{
          this.resetFilter();
        }
      }
    }
  });

}