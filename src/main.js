
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Itemtemplate from './Itemtemplate'
import Recomendeditems from './Recomendeditems'

import HeaderTop from './components/header/HeaderTop'
import HeaderMiddle from './components/header/HeaderMiddle'
import HeaderBottom from './components/header/HeaderBottom'

import FooterBottom from './components/footer/FooterBottom'
import FooterTop from './components/footer/FooterTop'
import FooterWidget from './components/footer/FooterWidget'

import Slider from './Slider'
// import router from './router'
// var Itemtemplate = require('vue!./Itemtemplate.vue')

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#footer',
  components: {
    footertop: FooterTop,
    footerwidget: FooterWidget,
    footerbottom: FooterBottom
  }
})

new Vue({
  el: '#header ',
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
          'id': '155',
          'price': '10'
        },

        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155',
          'price': '10'
        },
        {
          'title': 'test goods',
          'img': 'static/images/home/product1.jpg',
          'id': '155',
          'price': '10'
        }
      ]
    }
  }
})
