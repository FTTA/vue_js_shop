<template>

  <div class="left-sidebar">
    <h2>Search</h2>
    <div class="panel-group category-products" id="accordian"><!--category-productsr-->
      <div class="panel panel-default text-center">
        <input type="text" placeholder="Search" v-model="search"/>
      </div>
    </div><!--/category-products-->

    <div class="price-range"><!--price-range-->
      <h2>Price Range</h2>
      <div class="well text-center">
         <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" ><br />
         <b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
      </div>
    </div><!--/price-range-->

    <div class="shipping text-center"><!--shipping-->
      <img src="static/images/home/shipping.jpg" alt="" />
    </div><!--/shipping-->

  </div>

</template>

<script>
export default {
  data: function () {
    return {
      search: ''
    }
  },
  watch: {
    search: function () {
      this.$store.commit('filterTitle', this.search)
    }
  }
}
</script>
