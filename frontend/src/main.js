import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
import TopHeader from './components/TopHeader'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.component('top-header', TopHeader)

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCYt9wSKpU5NctdZbCHZ-Z6uQ4R3epSlo4",
    authDomain: "vue-firebase-login-b54fd.firebaseapp.com",
    projectId: "vue-firebase-login-b54fd",
    storageBucket: "vue-firebase-login-b54fd.appspot.com",
    messagingSenderId: "817488288036",
    appId: "1:817488288036:web:6de9006ed8346ab6663bb1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let app;

  firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  })
