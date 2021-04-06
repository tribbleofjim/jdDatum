import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Category from '@/components/cate/Category'
import Categories from '@/components/Categories'
import Login from '@/components/Login'
import Item from '@/components/item/Item'
import ItemList from '@/components/item/ItemList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaintBrush, faTractor, faSchool, faToiletPaper, faGifts, faBook, faGuitar, faMobileAlt,
  faTv, faBaby, faShoePrints, faDog, faHamburger, faLaptop, faCameraRetro, faCarSide, faTshirt, faBriefcaseMedical,
  faPumpSoap, faArchive, faUtensils, faCouch, faSkiingNordic, faTruck, faSuitcaseRolling, faClock, faWineGlassAlt,
  faPeopleCarry, faChargingStation, faFish, faUmbrellaBeach, faFeatherAlt, faWarehouse } from '@fortawesome/free-solid-svg-icons'

library.add(faPaintBrush, faTractor, faSchool, faToiletPaper, faGifts, faBook, faGuitar, faMobileAlt,
  faTv, faBaby, faShoePrints, faDog, faHamburger, faLaptop, faCameraRetro, faCarSide, faTshirt, faBriefcaseMedical,
  faPumpSoap, faArchive, faUtensils, faCouch, faSkiingNordic, faTruck, faSuitcaseRolling, faClock, faWineGlassAlt,
  faPeopleCarry, faChargingStation, faFish, faUmbrellaBeach, faFeatherAlt, faWarehouse)

Vue.use(Router)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/',
      name: 'Login',
      component: Login
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
