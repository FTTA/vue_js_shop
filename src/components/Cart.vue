
<template>
<section id="cart_items">
<div class="table-responsive cart_info">
  <table class="table table-condensed">
    <thead>
      <tr class="cart_menu">
        <td class="image">Item</td>
        <td class="description"></td>
        <td class="price">Price</td>
        <td class="quantity">Quantity</td>
        <td class="total">Total</td>
        <td></td>
      </tr>
    </thead>

      <tbody>
        <tr>
        <div class="row" v-for="item in $store.getters.getCart()">
          <itemcart
            v-bind:goods-title="item.title"
            v-bind:goods-img="item.img"
            v-bind:goods-id="item.id"
            v-bind:goods-price="item.price"></itemcart>
        </div>



          >
        </tr>
      </tbody>

  </table>
</div>
</section>
</template>

<script>

import Itemcart from './cart/Itemcart'

export default {
  components: {
    Itemcart: Itemcart
  },
  props: [
    // 'cartVisibility'
  ]
}
</script>
