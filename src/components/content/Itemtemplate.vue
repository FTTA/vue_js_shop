<template>

<div class="col-sm-4">
  <div class="product-image-wrapper" v-bind:data-goods-id="goodsId">
    <div class="single-products">
        <div class="productinfo text-center">
          <img v-bind:src="goodsImg" v-bind:alt="goodsTitle" />
          <h2>${{ goodsPrice }}</h2>
          <p>{{ goodsTitle }}</p>
          <a v-if="$store.getters.isInCart(goodsId)" class="btn btn-default add-to-cart">
            <i class="fa fa-shopping-cart"></i>Add to cart
          </a>
          <a v-on:click="$store.commit('addToCart', goodsId)" class="btn btn-default add-to-cart" v-else>
            <i class="fa fa-shopping-cart"></i>Add to cart
          </a>
        </div>
    </div>
    <div class="choose">
      <ul class="nav nav-pills nav-justified">
        <li v-on:click="$store.commit('favorite', goodsId)">
          <a v-if="$store.getters.isFavorite(goodsId)"><i class="fa fa-minus-square"></i>Remove from wishlist</a>
          <a v-else><i class="fa fa-plus-square"></i>Add to wishlist</a>
        </li>
      </ul>
    </div>
  </div>
</div>

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
    'goodsTitle',
    'goodsImg',
    'goodsId',
    'goodsPrice'
  ]
}
</script>
