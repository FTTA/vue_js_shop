<template>

<div class="col-sm-4">
  <div class="product-image-wrapper" v-bind:data-goods-id="goodsId">
    <div class="single-products">
        <div class="productinfo text-center">
          <img v-bind:src="goodsImg" v-bind:alt="goodsTitle" />
          <h2>${{ goodsPrice }}</h2>
          <p>{{ goodsTitle }}</p>
          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
        </div>
    </div>
    <div class="choose">
      <ul class="nav nav-pills nav-justified">
        <li v-on:click="favorite(goodsId)">
        <a><i :class="wishlistClass"></i>{{ wishButtonText }}</a></li>
        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
      </ul>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data: function () {
    return {
      isFavorite: 0,
      wishlistClass: 'fa fa-plus-square',
      wishButtonText: 'Add to wishlist',

      addText: 'Add to wishlist',
      removeText: 'Remove from wishlist',
      plus: 'fa fa-plus-square',
      minus: 'fa fa-minus-square'
    }
  },
  methods: {
    favorite: function (goodsId) {
      this.$store.commit('favorite', goodsId)

      if (this.$store.getters.isFavorite(goodsId)) {
        this.wishlistClass = this.minus
        this.wishButtonText = this.removeText
      } else {
        this.wishlistClass = this.plus
        this.wishButtonText = this.addText
      }
    }
  },
  props: [
    'goodsTitle',
    'goodsImg',
    'goodsId',
    'goodsPrice'
  ]
}
</script>

/*
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})*/
