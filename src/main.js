
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import HeaderTop from './components/header/HeaderTop'
import HeaderMiddle from './components/header/HeaderMiddle'
import HeaderBottom from './components/header/HeaderBottom'

import FooterBottom from './components/footer/FooterBottom'
import FooterTop from './components/footer/FooterTop'
import FooterWidget from './components/footer/FooterWidget'

import Content from './components/Content'

import Cart from './components/Cart'

import Slider from './Slider'
import {routes} from './routes'

import {goods} from './goods'

// var Itemtemplate = require('vue!./Itemtemplate.vue')

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  // url without #
  mode: 'history',
  // our objects with possible routes
  routes
})

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
    cartCount: 0,
    wishlist: [],
    cart: {},
    filters: {
      title: ''
    },
    items: goods
  },
  mutations: {
    favorite (state, goodsId) {
      var index = state.wishlist.indexOf(goodsId)
      if (index > -1) {
        state.wishlist.splice(index, 1)
      } else {
        state.wishlist.push(goodsId)
      }
    },
    filterTitle (state, searchString) {
      state.filters.title = searchString.toLowerCase()
    },
    addToCart (state, goodsId, quantity = 1) {
      // var element = state.cart.filter(item => {
      //   return item.id.toLowerCase().indexOf(goodsId) > -1
      // })

      // if (element) {
      //   element.quantity = quantity
      // } else {
      //   state.cart.push({'id': goodsId, 'quantity': quantity})
      // }

      state.cart[goodsId] = {
        'id': goodsId, 'quantity': quantity
      }

      state.cartCount = 0
      for (var property in state.cart) {
        if (state.cart.hasOwnProperty(property)) {
          state.cartCount += state.cart[property].quantity
        }
      }
    }
  },
  getters: {
    getWishlist: (state) => () => {
      return state.items.filter(item => {
        return state.wishlist.indexOf(item.id) > -1
      })
    },

    isFavorite: (state) => (goodsId) => {
      console.log(state.cart[goodsId])
      if (state.wishlist.indexOf(goodsId) > -1) {
        return true
      }
      return false
    },
    getByFilter: (state) => () => {
      if (state.filters.title === '') {
        return state.items
      }

      return state.items.filter(item => {
        return item.title.toLowerCase().indexOf(state.filters.title) > -1
      })
    },
    isInCart: (state) => (goodsId) => {
      console.log(state.cart[goodsId])
      if (state.cart[goodsId]) {
        return true
      }
      return false
    },
    getCart: (state) => () => {
      return state.items.filter(item => {
        return state.cart[item.id]
      })
    },
    getCartCount: (state) => () => {
      /*
      var count = 0
      console.log(state.cart)
      for (var property in state.cart) {
        if (state.cart.hasOwnProperty(property)) {
          count += state.cart[property].quantity
        }
      }
      */

      return state.cartCount
    },

    getById: (state) => (goodsId) => {
      if (!goodsId) {
        return
      }

      return state.items.filter(item => {
        return item.id.indexOf(goodsId) > -1
      })
    }
  }
})

/* eslint-disable no-new */

new Vue({
  el: '#header ',
  router,
  store,
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
  router,
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
