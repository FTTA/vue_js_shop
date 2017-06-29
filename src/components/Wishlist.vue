<template>

    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <Sidebar></Sidebar>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items" ><!--features_items-->
            <h2 class="title text-center">Features Items</h2>

            <div v-for="item in $store.getters.getWishlist()">
              <Itemtemplate
                v-bind:goods-title="item.title"
                v-bind:goods-img="item.img"
                v-bind:goods-id="item.id"
                v-bind:goods-price="item.price">
              </Itemtemplate>
            </div>

          </div><!--features_items-->

          <Recomendeditems></Recomendeditems>
        </div>
      </div>
    </div>

</template>

<script>

import Itemtemplate from './content/Itemtemplate'

export default({
  components: {
    Itemtemplate: Itemtemplate
  },
  beforeCreate () {
    // console.log(this.$store)
  },
  data: function () {
    return {
      goodsitems: [
        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155',
          'price': '11'
        },

        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155',
          'price': '12'
        },
        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155',
          'price': '13'
        }
      ]
    }
  }
})
</script>
