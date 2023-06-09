import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';


import { router } from './routes';

createApp(App).use(BalmUI)
    .use(BalmUIPlus)
    .use(router)
    .mount('#app')
