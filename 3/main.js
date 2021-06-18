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
      console.log('showSaleItemウォッチャが呼び出されました。');
    },
    showDelvItem: function (newVal, oldVal) {
      console.log('showDelvItemウォッチャが呼び出されました。');
    },
  },

  computed: {
    filteredList: function () {
      var newList = [];
      for (var i = 0; i < this.products.length; i++) {
        var isShow = true;
        if (this.showSaleItem && !this.products[i].isSale) {
          isShow = false;
        }
        if (this.showDelvFree && !this.products[i].delv > 0) {
          isShow = false;
        }
        if (isShow) {
          newList.push(this.products[i]);
        }
      }
      return newList;
    }
  },
  count: function () {
    return this.filteredList.length;
  }
}
  
