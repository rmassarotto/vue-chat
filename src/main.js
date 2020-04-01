import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCNeYVO83WYcwYkPhkAwbeTKGxkPEUaI6A",
  authDomain: "vue-chat-3b1fd.firebaseapp.com",
  databaseURL: "https://vue-chat-3b1fd.firebaseio.com",
  projectId: "vue-chat-3b1fd",
  storageBucket: "vue-chat-3b1fd.appspot.com",
  messagingSenderId: "56527525606",
  appId: "1:56527525606:web:0606e5790c9771a3ea4d27",
  measurementId: "G-KLPX18JF1Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebase.firestore();

window.db = db;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
