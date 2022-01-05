import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiredAuth : true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiredAuth : true
    }
  },
  {
    path: '/user/list',
    name: 'UserList',
    component: () => import(/* webpackChunkName: "user-list" */ '../views/UserList.vue'),
    meta: {
      requiredAuth : true
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiredGuest : true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      requiredGuest : true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "register" */ '../views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, from, next) {
  // get all required data for auth check
  const token = store.getters['auth/token'];
  const user = store.getters['auth/currentUser'];
  const requiredAuth = to.meta.requiredAuth;
  const requiredGuest = to.meta.requiredGuest;
  
  // check authentication
  if(requiredAuth && !token && !user){
    next('/')
  }else if(requiredGuest && token && user){
    next('/home')
  }

  next()
});

export default router
