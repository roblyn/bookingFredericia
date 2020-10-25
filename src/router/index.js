import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from "firebase/app";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiresGuest: true
    }
  
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/modelokale',
    name: 'modelokale',
    component: () => import(/* webpackChunkName: "category" */ '../views/modelokale.vue'),
    meta: {
      requiresAuth: true
    }
  }, 
  {
    path: '/kantine',
    name: 'kantine',
    component: () => import(/* webpackChunkName: "category" */ '../views/Kantine.vue'),
    meta: {
      requiresAuth: true
    }
  },{
    path: '/Signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "category" */ '../views/Signup.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    component: () => import(/* webpackChunkName: "category" */ '../views/Kontakt.vue'),
    meta: {
      requiresAuth: true
    }
  },
  

]

const router = new VueRouter({
  routes
})
// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/Category',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;