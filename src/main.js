import { createApp } from 'vue'; // eslint-disable-next-line import/no-extraneous-dependencies
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import zh from './languages/zh-TW.json';
import en from './languages/en.json';
import App from './App.vue';
import router from './router';
import 'bootstrap';

const i18n = createI18n({
  allowComposition: true, // you need to specify that!
  legacy: false, // 啟用新的 Vue3 選項
  locale: 'en', // 設置默認語言
  messages: {
    en,
    'zh-TW': zh // 引入 zh-TW.json 文件
  }
});
library.add(fas);

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
