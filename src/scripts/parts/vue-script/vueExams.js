export default () => {
  new Vue({
    el: '#vue-exam',
    data: {
      items: window.examItems,
      count: 3,
      sort: undefined
    },
    computed: {
      compFilterItems() {
        let result = this.items;
        if (this.sort) {
          this.count = 3;
          result = result.filter(item => {
            let hasTag = false;
            item.tags.forEach(tag => hasTag = tag.id === this.sort ? true : hasTag);
            return hasTag;
          });
        }
        return result;
      },
      compShowItems() {
        return this.compFilterItems.slice(0, this.count);
      }
    },
    methods: {
      setCount() {
        $('.preloader').addClass('show');
        setTimeout( () => {
          this.count += 3;
          $('.preloader').removeClass('show');
        }, 1500);
      },
      sortExam(id) {
        this.sort = id;
      }
    }
  });

}