import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../styles/styles.scss'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)


app.use(VueSweetalert2)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
