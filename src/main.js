
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

const store = new Vuex.Store({
  state: {
    wishlist: [],
    items: [
      {
        'title': 'test goods',
        'img': 'static/images/home/product1.jpg',
        'id': '1',
        'price': '11'
      },
      {
        'title': 'test goods',
        'img': 'static/images/home/product1.jpg',
        'id': '2',
        'price': '12'
      },
      {
        'title': 'test goods',
        'img': 'static/images/home/product1.jpg',
        'id': '3',
        'price': '13'
      }
    ]
  },
  mutations: {
    addToWishlist (state, goodsId) {
      state.items.id.indexOf(goodsId).inWishlist = true
    },
    removeFromWishlist (state, goodsId) {
      state.items.id.indexOf(goodsId).inWishlist = true
    },
    favorite (state, goodsId) {
      var index = state.wishlist.indexOf(goodsId)
      if (index > -1) {
        alert('remove')
        state.wishlist.splice(index, 1)
      } else {
        alert('add')
        state.wishlist.push(goodsId)
      }
    }
  },
  getters: {
    isFavorite: (state) => (goodsId) => {
      if (state.wishlist.indexOf(goodsId) > -1) {
        return true
      }
      return false
    }
  }
})

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
  store,
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
