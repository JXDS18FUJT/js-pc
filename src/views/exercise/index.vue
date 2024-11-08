<template>
	<view class="w-1920 block">
		<view class="w-full h-466 flex pt-30 pl-20 flex-col items-start content-start flex-wrap justify-start">
			<view class="flex flex-col relative w-162 h-39 border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">理论考试</view>
				<view class="text-14 pt-10">第 01 考台</view>
			</view>
			<view class="flex flex-col relative mt-30 w-162 h-367 pt-23 border-1px border-solid border-[#D6D9DDFF]">
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
			<view class="w-1320 h-466 ml-19 relative border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">理论考试</view>
				<view class="text-left block pt-30 pl-30">
					{{listIndex+1}}.<text v-if="list[listIndex].questionType==1"
						class="border-1px text-12 border-solid border-[#707070FF] pl-2 pr-2 pt-2 pb-2 rd-5px">判断题</text>
						<text v-if="list[listIndex].questionType==2" class="border-1px text-12 border-solid border-[#707070FF] pl-2 pr-2 pt-2 pb-2 rd-5px">选择题</text>
						{{list[listIndex].issue}}

				</view>
			</view>
		</view>

		<view class="w-full block pt-30 pl-20 flex">
			<view class="flex flex-col relative w-162 h-54  border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">理论考试</view>
				<view class="text-14 pt-10">{{countDown}}</view>
			</view>
			<view class="w-759 h-54 border-1px border-solid border-[#D6D9DDFF] ml-19 relative">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">提示信息</view>
				<view>判断题，请选择对错</view>
			</view>
			<view class="w-540 h-54 flex ml-20 justify-between">
				<view class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px">
					返回首页
				</view>
				<view class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px">
					语音技巧
				</view>
				<view class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px">
					官方解读
				</view>
				<view class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px">
					功能设置
				</view>
			</view>
		</view>
		<view class="pb-20 pt-20 pl-20 pr-20 block text-left ">
			<view class="relative border-1px border-solid border-[#959799FF] inline-block text-0 pt-20 pb-20 pl-20 pr-20">
				<view class="w-400 h-400 absolute z-99 flex flex-wrap items-start">
					<view v-for="item in 100" :key="item"
						class="w-40 flex-0 h-40 text-center lh-40  text-[#0A1A33FF] text-14">
						{{item}}
					</view>
				</view>
				
				<canvas class="w-400 h-400" width="400" height="400" id="grid"></canvas>
			</view>
			
		</view>

	</view>
</template>

<script lang="ts">
	import { onMounted, ref } from "vue"
	import { useDriverExam } from "@/hooks/exam/driverExam";
	import api from "@/api";

	export default {
		name: 'exercise',
		setup() {
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
			return {
				...useDriverExam(api.open.question2InfoList({
					model: 'cart',
					subject: '1',
					columnAll: '87'
				}))
			}
		}

	}
</script>

<style>
</style>