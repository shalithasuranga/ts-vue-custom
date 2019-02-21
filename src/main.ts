import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'
import HelloWorld from '@/components/HelloWorld';


Vue.use(vueCustomElement);

Vue.config.productionTip = false


Vue.customElement("hello-world", new HelloWorld().$options);

new Vue({
  render: h => h(App),
}).$mount('#app')
