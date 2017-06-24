<template>

<div class="col-sm-4">
  <div class="product-image-wrapper">
    <div class="single-products">
        <div class="productinfo text-center">
          <img src="static/images/home/product1.jpg" alt="" />
          <h2>{{price}}</h2>
          <p>Easy Polo Black Edition</p>
          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
        </div>        
    </div>
    <div class="choose">
      <ul class="nav nav-pills nav-justified">
        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
      </ul>
    </div>
  </div>
</div>

</template>


<script>
export default {
  name: 'itemtemplate',
  data () {
    return {
      price: 'Welcome to Your Vue.js App2'
    }
  }
}
</script>
