<template>
	<canvas class="w-400 absolute z-5 top-20" :style="{'pointerEvents': 'none','height':height+'rem'}" :width="width"
		:height="height" id="grid"></canvas>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 400
			},
			height: {
				type: Number,
				default: 400
			},
			interval: {
				type: Number,
				default: 40
			}
		},
		watch: {
			height() {
				window.setTimeout(()=>{
					this.initCanvas()
				},0)
				
			}
		},
		methods:{
			initCanvas() {
				const gridDom = document.getElementById("grid");
				const ctx = gridDom.getContext('2d');
				const gridDomWidth = gridDom.width;
				const gridDomHeight = gridDom.height;

				const rowLength = Math.ceil(gridDomHeight / 10)
				const colLength = Math.ceil(gridDomWidth / 10)
				for (let i = 0; i < rowLength; i++) {
					//上方边框
					ctx.moveTo(0, 0.5 + i * 40)
					ctx.lineTo(gridDomWidth, 0.5 + i * 40)
					ctx.strokeStyle = '#CDCEC9FF'
					ctx.stroke()

					//下方边框
					ctx.moveTo(0, gridDomHeight - 0.5)
					ctx.lineTo(gridDomWidth, gridDomHeight - 0.5)
					ctx.strokeStyle = '#CDCEC9FF'
					ctx.stroke()
				}

				for (let i = 0; i < colLength; i++) {
					//左边边框
					ctx.moveTo(0.5 + i * 40, 0)
					ctx.lineTo(0.5 + i * 40, gridDomHeight)
					ctx.strokeStyle = '#CDCEC9FF'
					ctx.stroke()

					//右边边框
					ctx.moveTo(gridDomWidth - 0.5, 0)
					ctx.lineTo(gridDomWidth - 0.5, gridDomHeight)
					ctx.strokeStyle = '#CDCEC9FF'
					ctx.stroke()
				}
			}
		},
		mounted() {
			this.initCanvas()
		}
	}
</script>

<style>
</style>