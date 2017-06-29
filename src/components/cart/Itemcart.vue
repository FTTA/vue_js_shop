<template>
<tbody>
<tr v-for="item in $store.getters.getCart()">
  <td class="cart_product">
    <a href=""><img src="images/cart/one.png" alt=""></a>
  </td>
  <td class="cart_description">
    <h4><a href="">{{ item.goodsTitle }}</a></h4>
    <p>Web ID: {{ item.goodsId }}</p>
  </td>
  <td class="cart_price">
    <p>${{ item.goodsPrice }}</p>
  </td>
  <td class="cart_quantity">
    <div class="cart_quantity_button">
      <a class="cart_quantity_up" href=""> + </a>
      <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
      <a class="cart_quantity_down" href=""> - </a>
    </div>
  </td>
  <td class="cart_total">
    <p class="cart_total_price">$59</p>
  </td>
  <td class="cart_delete">
    <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
  </td>
</tr>
</tbody>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
  },
  props: [
  /*
    'goodsTitle',
    'goodsImg',
    'goodsId',
    'goodsPrice'
  */
  ]
}
</script>
