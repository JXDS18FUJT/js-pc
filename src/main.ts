import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import 'uno.css'
import './samples/node-api'
import router from './router'

function setRootFontSize() {

	const baseSize = 1; // 基准font-size，可以根据设计需求调整


	const designWidth = 1920; // 设计图的宽度


	const scaleFactor = window.innerWidth / designWidth;


	document.documentElement.style.fontSize = `${baseSize * scaleFactor}px`;


}


window.addEventListener('resize', setRootFontSize);


// 初始化调用


setRootFontSize();

createApp(App).use(router)
	.mount('#app')
	.$nextTick(() => {
		postMessage({ payload: 'removeLoading' }, '*')
	})