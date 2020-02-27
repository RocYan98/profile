import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://rocyan.com:8080/api";
let instance = axios.create({
  baseURL: "http://rocyan.com:8080/api",
  headers: {'Content-Type': 'multipart/form-data;boundary'}
});
Vue.config.productionTip = false;
Vue.prototype.instance = instance;

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
