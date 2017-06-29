<template>
<div>
<div class="row" v-for="item in $store.getters.getCart()">

  <div class="col-sm-2 cart_product">
    <a href=""><img src="images/cart/one.png" alt=""></a>
  </div>
  <div class="col-sm-2 cart_description">
    <h4><a href="">{{ item.title }}</a></h4>
    <p>Web ID: {{ item.id }}</p>
  </div>
  <div class="col-sm-2 cart_price">
    <p>${{ item.price }}</p>
  </div>
  <div class="col-sm-2 cart_quantity">
    <div class="cart_quantity_button">
      <input class="cart_quantity_input" type="number" name="quantity" value="" autocomplete="off" size="2">
    </div>
  </div>
  <div class="col-sm-2 cart_total">
    <p class="cart_total_price">${{ item.price }}</p>
  </div>
  <div class="col-sm-2 cart_delete">
    <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
  </div>

</div>
</div>
</template>
