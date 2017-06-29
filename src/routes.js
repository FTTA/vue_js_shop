
// import Hello from '@/components/Hello'
import Content from '@/components/Content'
import Cart from '@/components/Cart'
import Wishlist from '@/components/Wishlist'
// import itemTemplate from '@/components/itemTemplate'

export const routes = [
  {path: '/cart', component: Cart},
  {path: '/wishlist', component: Wishlist},
  {path: '/', component: Content}
]
