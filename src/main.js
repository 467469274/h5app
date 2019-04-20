// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './app'
import router from './router'
import 'vant/lib/index.css';
import Vue from 'vue';
import Vant from 'vant';
import vueUpload from '@/components/common/upload';
import {$ajax} from '@/common/ajax';
import {setCookie,getCookie} from '@/common/cookies';
import 'vant/lib/index.css';
import { Lazyload,Toast } from 'vant';
Vue.use(Vant);
Vue.config.productionTip = false

// options 为可选参数，无则不传
Vue.use(Lazyload);Vue.use(Toast);
Vue.component('vueUpload',vueUpload)
Vue.prototype.$ajax = $ajax
Vue.prototype.setCookie = setCookie;
Vue.prototype.getCookie = getCookie;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
