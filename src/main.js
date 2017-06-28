
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
    wishlist: [],
    cart: {},
    filters: {
      title: ''
    },
    items: [
      {
        'title': 'test goods',
        'img': 'static/images/home/product1.jpg',
        'id': '1',
        'price': '11'
      },
      {
        'title': 'test boobs',
        'img': 'static/images/home/product1.jpg',
        'id': '2',
        'price': '12'
      },
      {
        'title': 'test moods',
        'img': 'static/images/home/product1.jpg',
        'id': '3',
        'price': '13'
      }
    ]
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
    }
  },
  getters: {
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
