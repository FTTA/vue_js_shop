
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Itemtemplate from './Itemtemplate'
import Recomendeditems from './Recomendeditems'
// import router from './router'
// var Itemtemplate = require('vue!./Itemtemplate.vue')

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#vueapp',
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
