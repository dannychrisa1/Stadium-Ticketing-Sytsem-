import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Reserve from '../views/reserve.vue'
import SelectSeat from '../views/selectseat.vue'
import SelectBook from '../views/selectbook.vue'
import Invoice from '../views/invoice.vue'
import Login from '../views/admin/login.vue'
import AddMatch from '../views/admin/addmatch.vue'
import UpdateMatch from '../views/admin/updatematch.vue'
import Matches from '../views/admin/matches.vue'
import Bookings from '../views/admin/bookings.vue'

let guard = (to, from, next) => {
  let authToken = localStorage.getItem("authToken");
  if(authToken){
      next();
      return;
  }
  next('/admin');
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/reserve',
    name: 'Reserve',
    component: Reserve
  },
  {
    path: '/selectseat',
    name: 'SelectSeat',
    component: SelectSeat
  },
  {
    path: '/selectbook',
    name: 'SelectBook',
    component: SelectBook
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/admin',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/addmatch',
    name: 'AddMatch',
    component: AddMatch,
    beforeEnter: guard
  },
  {
    path: '/admin/updatematch/:matchId',
    name: 'UpdateMatch',
    component: UpdateMatch,
    beforeEnter: guard
  },
  {
    path: '/admin/matches',
    name: 'Matches',
    component: Matches,
    beforeEnter: guard
  },
  {
    path: '/admin/bookings',
    name: 'Bookings',
    component: Bookings,
    beforeEnter: guard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
