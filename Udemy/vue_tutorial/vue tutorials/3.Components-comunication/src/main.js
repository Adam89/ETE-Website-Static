import Vue from 'vue'
import App from './App.vue'


export const eventBus = new Vue(); // create event bus before load component script below

new Vue({
  el: '#app',
  render: h => h(App)
})
