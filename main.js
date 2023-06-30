// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import {
  $http
} from '@escook/request-miniprogram'

uni.$http = $http
$http.baseUrl = 'https://api-hmugo-web.itheima.net'

// 请求开始之前做一些事情
$http.beforeRequest = function(option) {
  uni.showLoading({
    title: '数据加载中...',
  })
}

$http.afterRequest = function() {
  uni.hideLoading()
}

uni.$showKsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none,'
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
