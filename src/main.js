
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

import Slider from './Slider'
// import router from './router'
// var Itemtemplate = require('vue!./Itemtemplate.vue')

Vue.config.productionTip = false

/* eslint-disable no-new */

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
  el: '#content',
  components: {
    maincontent: Content
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
