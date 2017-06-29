<template>
<div>
  <div class="col-sm-2 cart_product">
    <a href=""><img src="images/cart/one.png" alt=""></a>
  </div>
  <div class="col-sm-2 cart_description">
    <h4><a href="">{{ goodsTitle }}</a></h4>
    <p>Web ID: {{ goodsId }}</p>
  </div>
  <div class="col-sm-2 cart_price">
    <p>${{ goodsPrice }}</p>
  </div>
  <div class="col-sm-2 cart_quantity">
    <div class="cart_quantity_button">
      <input class="cart_quantity_input" type="number" name="quantity" value="" autocomplete="off" size="2">
    </div>
  </div>
  <div class="col-sm-2 cart_total">
    <p class="cart_total_price">${{ goodsPrice }}</p>
  </div>
  <div class="col-sm-2 cart_delete">
    <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'goodsTitle',
    'goodsImg',
    'goodsId',
    'goodsPrice'
  ],
  data: function () {
    return {
    }
  },
  methods: {
    cartCount: function () {
      return this.$store.getters.getCartCount()
    }
  }
}
</script>
