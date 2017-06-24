
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Itemtemplate from './Itemtemplate'
import Recomendeditems from './Recomendeditems'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
import Slider from './Slider'
// import router from './router'
// var Itemtemplate = require('vue!./Itemtemplate.vue')

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#header',
  components: {
    headertop: HeaderTop,
    headermiddle: HeaderMiddle,
    headerbottom: HeaderBottom
  }
})

new Vue({
  el: '#slider',
  components: {
    slider: Slider
  }
})

new Vue({
  el: '#vue_container_section',
  // router,
  // template: '<Itemtemplate/>',
  components: {
    Itemtemplate: Itemtemplate,
    Recomendeditems: Recomendeditems
  },
  data: function () {
    return {
      goodsitems: [
        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155'
        },

        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155'
        },
        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155'
        }
      ]
    }
  }
})
