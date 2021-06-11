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
            { name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
            { name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
            { name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 0, isSale: true },
            { name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.pg', delv: 0, isSale: true },
            { name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
            { name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false },
        ]
    }
});


//list3-3-4
products: {
    { 商品オブジェクト },
            { 商品オブジェクト },
            { 商品オブジェクト },
            { 商品オブジェクト },
            { 商品オブジェクト },
            { 商品オブジェクト },
}

        //list3-4-1
        <div class="item">
            <figure class="image">
                <!--▼セール対象の場合▼-->
<div class="status">SALE</div>
                <!--▲セール対象の場合▲-->
        <img src="images/01.jpg" alt="">
                    <figcaption>Michael<br>スマホケース</figcaption>
    </figure>

                    <div class="detail">
                        <div class="price"><span>1,580</span>円（税込）</div>
                        <!--▼送料無料の場合▼-->
<div class="shipping-fee none">送料無料</div>
                        <!--▲送料無料の場合▲-->
                        <!--▼送料ありの場合▼-->
<div class="shipping-fee none">+送料240円</div>
                        <!--▲送料ありの場合▲-->
                    </div>
                </div>



//3-4-2
 <div class="list">
                    <div class="item" v-for="product in products">
                        <!--この範囲がproductsの配列要素の数だけ繰り返される-->
    </div>
                </div>

//3-4-3
                <div class="list">
                    <div class="item" v-for="product in products">
                        <figure class="image">
                            <template v-if="product.isSale">
                                <div class="status">SALE</div>
                            </template>
                            <img v-bind:src="product.image" alt="">
                                <figcaption>{{ product.name }}</figcaption>
    </figure>

                            <div class="detail">
                                <div class="price"><span>{{ product.price }}</span>円（税込）</div>
                                <template v-if="product.delv == 0">
                                    <div class="shipping-fee none">送料無料</div>
                                </template>
                                <template v-else>
                                    <div class="shipping-fee">+送料{{ product.delv }}円</div>
                                </template>
                            </div>
    </div>
                    </div>
















                                },
        methods: {},
        computed: {},
        });


    