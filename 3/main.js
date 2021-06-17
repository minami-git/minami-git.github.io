//list3-4-5
Vue.filter('number_format', function (val) {
  return val.toLocaleString();
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',

    //list3-3-3

    count: 0,
    showSaleItem: false,
    showDelvFree: false,
    sortOrder: 1,
    products: [
      {
        name: 'Michael<br>スマホケース',
        price: 1580,
        image: 'images/01.jpg',
        delv: 0,
        isSale: true,
      },
      {
        name: 'Raphael<br>スマホケース',
        price: 1580,
        image: 'images/02.jpg',
        delv: 0,
        isSale: true,
      },
      {
        name: 'Gabriel<br>スマホケース',
        price: 1580,
        image: 'images/03.jpg',
        delv: 0,
        isSale: true,
      },
      {
        name: 'Uriel<br>スマホケース',
        price: 980,
        image: 'images/04.jpg',
        delv: 0,
        isSale: true,
      },
      {
        name: 'Ariel<br>スマホケース',
        price: 980,
        image: 'images/05.jpg',
        delv: 0,
        isSale: false,
      },
      {
        name: 'Azrael<br>スマホケース',
        price: 1580,
        image: 'images/06.jpg',
        delv: 0,
        isSale: false,
      },
    ],
  },

  //3-5-3
  watch: {
    showSaleItem: function (newVal, oldVal) {
      console.log('showsaleItem');
    },
  },
});
