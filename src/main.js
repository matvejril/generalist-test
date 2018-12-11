import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'

import ActivityList from './components/ActivityList'
import ActivityStatistics from './components/ActivityStatistics.vue'

Vue.use(VueRouter);

let router = new VueRouter({
   routes: [
       {path: '/', component: ActivityList},
       {path: '/statistics', component: ActivityStatistics},
   ]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
