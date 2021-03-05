import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Category from '@/components/cate/Category'
import Categories from '@/components/Categories'
import Item from '@/components/item/Item'
import ItemList from '@/components/item/ItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/category/:cate',
      name: 'Category',
      component: Category
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/item/:skuId',
      name: 'Item',
      component: Item
    },
    {
      path: '/itemList/:keyword',
      name: 'ItemList',
      component: ItemList
    }
  ]
})
