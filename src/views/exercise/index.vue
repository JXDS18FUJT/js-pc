<template>
	<view class="w-1920 block">
		<view class="w-full h-466 flex pt-30 pl-30 flex-col items-start flex-wrap justify-start">

			<view class="flex flex-col relative w-162 h-39 border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">理论考试</view>
				<view class="text-14 pt-10">第 01 考台</view>
			</view>
			<view class="flex flex-col relative mt-30 w-162 h-340 pt-23 border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">理论考试</view>
				<view>
					<img class="w-118 rd-[50%]"
						src="https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132" />
					<view class="pt-10 w-full flex flex-wrap text-left pl-18 pr-18 text-14">
						<view class="w-full">考生姓名：林笑笑</view>
						<view class="w-full">性 别：男</view>
						<view class="w-full">考试科目：科目一理论</view>
						<view class="w-full">考试车型：D/E/F</view>
						<view class="w-full">考试原因：初次申请</view>
					</view>
				</view>

			</view>
			<view class="w-1320 h-466 relative border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">理论考试</view>
			</view>
		</view>




		<view class="w-full block border-b-1px border-b-solid border-b-[#ff4400]">网格</view>
		<view class="pb-20 pt-20 pl-20 pr-20 block text-left">
			<view class="w-400px h-400px absolute z-99 flex flex-wrap items-start">
				<view v-for="item in 100" :key="item"
					class="w-40px flex-0 h-40px text-center lh-40px  text-[#0A1A33FF]">
					{{item}}
				</view>
			</view>

			<canvas class="w-400px h-400px" width="400" height="400" id="grid"></canvas>
		</view>

	</view>
</template>

<script lang="ts" setup>
	import { onMounted } from "vue"
	onMounted(() => {
		let gridDom = document.getElementById("grid") as HTMLCanvasElement
		let ctx = gridDom.getContext('2d')
		const gridDomWidth = 400
		const gridDomHeight = 400




		for (let i = 0; i < 10; i++) {
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

		for (let i = 0; i < 10; i++) {
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

	})
</script>

<style>
</style>