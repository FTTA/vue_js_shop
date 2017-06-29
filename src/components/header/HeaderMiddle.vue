<template>

  <div class="header-middle"><!--header-middle-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="logo pull-left">
            <router-link to="/"><img src="static/images/home/logo.png" alt="" /></router-link>
          </div>
          <div class="btn-group pull-right">
            <div class="btn-group"></div>

            <div class="btn-group"></div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="shop-menu pull-right">
            <ul class="nav navbar-nav">
              <li><router-link to="/wishlist"><i class="fa fa-star"></i> Wishlist</router-link></li>
              <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i>Cart {{ $store.getters.getCartCount() }} </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div><!--/header-middle-->

</template>

<script>
export default {
  data: function () {
    return {
      tttt: 1
    }
  },
  props: [

  ],
  methods: {
    cartCount: function () {
      return this.$store.getters.getCartCount()
    }
  }
}
</script>
