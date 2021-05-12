import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/Question.vue'
import Answer from '../views/Answer.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/question',
    name:'Question',
    component: Question,
    meta:{
      needLogin : true
    }
  },
  {
    path:'/answer',
    name:'Answer',
    component:Answer,
    meta : {
      needLogin:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})
router.beforeEach(function(to,from,next){
  if(to.meta.needLogin === true && !store.state.isArrivedHome){
    console.log("ggg")
    next({name:'Home'})
  }
  next();
})
export default router
