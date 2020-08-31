import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Characters from './components/Characters.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters,
      props: true
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
