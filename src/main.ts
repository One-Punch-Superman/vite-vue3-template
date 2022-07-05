import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import Prism from 'prismjs';

VMdEditor.use(vuepressTheme, { Prism }).use(createCopyCodePlugin());

import router from './router';
import store from './store';
import '@/style/index.scss';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VMdEditor);
app.use(ElementPlus);

app.mount('#app');
