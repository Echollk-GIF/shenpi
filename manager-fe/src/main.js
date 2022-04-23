import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from "./utils/request"
import storage from './utils/storage'

const app = createApp(App)

//在app上全局挂载对象
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(router).use(ElementPlus).mount('#app')
