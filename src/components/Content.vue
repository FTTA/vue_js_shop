<template>

    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <Sidebar></Sidebar>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items" ><!--features_items-->
            <h2 class="title text-center">Features Items</h2>

            <div v-for="item in $store.getters.getByFilter()">
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
import Recomendeditems from './content/Recomendeditems'
import Sidebar from './content/Sidebar'

export default({
  components: {
    Itemtemplate: Itemtemplate,
    Recomendeditems: Recomendeditems,
    Sidebar: Sidebar
  },
  beforeCreate () {
    // console.log(this.$store)
  },
  data: function () {
    return {
      goodsitems: [
      ]
    }
  }
})
</script>
