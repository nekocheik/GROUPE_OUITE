import Vue from 'vue';
import router from './router';
import App from './App.vue';
import './scss/styles.scss';
/*
import * as THREE from 'three';
import 'three/examples/js/postprocessing/EffectComposer';
import 'three/examples/js/postprocessing/RenderPass';
import 'three/examples/js/postprocessing/ShaderPass';
import 'three/examples/js/shaders/CopyShader'

import 'three/examples/js/postprocessing/UnrealBloomPass';
*/

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')