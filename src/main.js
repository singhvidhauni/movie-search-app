import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
// importing bootstrap
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line new-cap
const eventBus = new mitt();

const app = createApp(App);
app.config.globalProperties.eventBus = eventBus;
app.mount('#app');
