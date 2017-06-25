
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import HeaderTop from './components/header/HeaderTop'
import HeaderMiddle from './components/header/HeaderMiddle'
import HeaderBottom from './components/header/HeaderBottom'

import FooterBottom from './components/footer/FooterBottom'
import FooterTop from './components/footer/FooterTop'
import FooterWidget from './components/footer/FooterWidget'

import Content from './components/Content'

import Cart from './components/Cart'

import Slider from './Slider'
// import router from './router'
// var Itemtemplate = require('vue!./Itemtemplate.vue')

Vue.config.productionTip = false

var cartVisibility = {
  debug: true,
  state: {
    show: true
  },
  chageState: function (event) {
    if (this.state.show === 1) {
      alert('here')
      this.state.show = false
    } else {
      alert('here 2')
      this.state.show = true
    }
  }
}

/* eslint-disable no-new */

new Vue({
  el: '#header ',
  components: {
    headertop: HeaderTop,
    headermiddle: HeaderMiddle,
    headerbottom: HeaderBottom
  },
  data: {
    cartVisibility: cartVisibility
  }
})

new Vue({
  el: '#slider',
  components: {
    slider: Slider
  }
})

new Vue({
  el: '#content',
  components: {
    maincontent: Content,
    carttemplate: Cart
  },
  data: {
    cartVisibility: cartVisibility
  }
})

new Vue({
  el: '#footer',
  components: {
    footertop: FooterTop,
    footerwidget: FooterWidget,
    footerbottom: FooterBottom
  }
})
