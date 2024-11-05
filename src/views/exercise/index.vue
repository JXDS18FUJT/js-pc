<template>
	<view class="w-1920 block">
		<view class="w-full block border-b-1px border-b-solid border-b-[#ff4400]">网格</view>
		<view class="pb-20 pt-20 pl-20 pr-20 block text-left">
			<view class="w-400px h-400px absolute z-99 flex flex-wrap items-start">
				<view v-for="item in 100" :key="item" class="w-40px flex-0 h-40px text-center lh-40px  text-[#0A1A33FF]">
					{{item}}
				</view>
			</view>
			
			<canvas class="w-400px h-400px"  width="400" height="400" id="grid"></canvas>	
		</view>
	
	</view>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
	onMounted(()=>{
		let gridDom = document.getElementById("grid") as HTMLCanvasElement
		let ctx = gridDom.getContext('2d')
		const gridDomWidth = 400
		const gridDomHeight = 400
		
	
		
		
		for (let i = 0; i < 10; i++) {
			//上方边框
			ctx.moveTo(0,0.5+i*40)
			ctx.lineTo(gridDomWidth,0.5+i*40)
			ctx.strokeStyle = '#CDCEC9FF'
			ctx.stroke()
			
			//下方边框
			ctx.moveTo(0,gridDomHeight-0.5)
			ctx.lineTo(gridDomWidth,gridDomHeight-0.5)
			ctx.strokeStyle = '#CDCEC9FF'
			ctx.stroke()
		}
		
		for (let i = 0; i < 10; i++) {
			//左边边框
			ctx.moveTo(0.5+i*40,0)
			ctx.lineTo(0.5+i*40,gridDomHeight)
			ctx.strokeStyle = '#CDCEC9FF'
			ctx.stroke()
			
			//右边边框
			ctx.moveTo(gridDomWidth-0.5,0)
			ctx.lineTo(gridDomWidth-0.5,gridDomHeight)
			ctx.strokeStyle = '#CDCEC9FF'
			ctx.stroke()
		}
		
	})
</script>

<style>
</style>