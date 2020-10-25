import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import  BootstrapVue  from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase'
import './components/firebaseInit';
const db = firebase.firestore();

Vue.config.productionTip = false

//prevent go bac to login page when reload
let app;
firebase.auth().onAuthStateChanged (user => {
  if (!app) {
    app = new Vue({
      el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
  }
})


