<template>
	<view class="w-1920">
		<view class="w-full h-80 bg-[#4688EBFF] block">
			<view @click="backPage()" class="w-full h-full flex items-center pr-340 pl-340">
				<view class="block text-0">
					<img class="w-8" src="@/assets/img/classifyNecessary/返回@2x.png" />
					<view class="text-20 text-white ml-5">
						返回
					</view>
				</view>
				<view class="text-white text-20 ml-80">必学考题</view>
				<view class="text-white text-20 ml-40">技巧练习</view>
				<view class="w-140 h-40 bg-[#E3EDFCFF] rd-32px ml-725 display flex justify-center items-center">
					<img class="w-12 mr-5" src="@/assets/img/classifyNecessary/学习要求@2x.png" />
					<view class="text-[#4688EBFF] text-20">学习要求</view>
				</view>
			</view>


		</view>
		<view class="block pt-16 pb-16">
			<view class="">
				<!-- @ts-ignore -->
				<view class="block">车型：{{modelMap(model)}}</view>
				<!-- @ts-ignore -->
				<view class="block">科目：{{ subjectMap(subject) }}</view>
			</view>
			<router-link :to="{
				path:'./exerciseMock',
				query:query
			}" class="m-auto flex justify-center cursor-pointer rd-20px">
				<view class="w-100 h-35 lh-35 text-white bg-[#4688EBFF] block">进入考试</view>
			</router-link>
		</view>

		<!-- 	<view class="m-auto flex justify-center pt-60 pb-50">
			<view class="w-366 h-50 lh-50 mr-50 bg-[#E3EDFCFF] text-20 rd-32px">
				<text>258道速通考题<text class="text-red">（加速通关）</text></text>
			</view>
			<view class="w-366 h-50 lh-50 bg-[#4688EBFF] text-20 rd-32px mr-50">
				<text class="text-white">精选必学500+强化<text class="text-[#EBE046FF]">（加速通关）</text></text>
			</view>
			<view class="w-366 h-50 lh-50 mr-50 bg-[#E3EDFCFF] text-20 rd-32px">
				<text>258道速通考题<text class="text-red">（加速通关）</text></text>
			</view>

		</view> -->


		<view class="w-1200 block  pt-24 pl-20 pb-20 m-auto border-tip">
			<view class="w-1160 block bg-white rd-20px">
				<view class="block text-center text-30 pt-26">老题分析与学习要求</view>
				<view class="text-left flex flex-wrap pt-30 pl-78 pr-78 text-20 pb-30">
					<view class="w-full">1.精选必学500+强化(快速通关)，涵盖了驾考理论各类题库的重点难点;</view>
					<view class="w-full">2.根据数据分析，总结500万+用户的线下互动通关经验，精选必学核心题库，减少2300+题的学习量，用更少的时间掌握驾考知识点:</view>
					<view class="w-full">3.针对时间紧、记忆差、畏惧考试的学员，举一反三，轻松学会!</view>
					<view class="w-full">4.考试有方法，学习有技巧，按要求完成学习:每套题能达95分以上，再学习模拟考试。模找考试能连续5次以上达到95分左右，即可参加考试:</view>
					<view class="w-full">5.多次学习未达到要求请切换至核心必学考题(稳固通关)题库</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import classifyNecessary1 from '@/assets/img/classifyNecessary/1@2x.png'
	import classifyNecessary2 from '@/assets/img/classifyNecessary/2@2x.png'
	import classifyNecessary3 from '@/assets/img/classifyNecessary/3@2x.png'
	import classifyNecessary4 from '@/assets/img/classifyNecessary/4@2x.png'
	import classifyNecessary5 from '@/assets/img/classifyNecessary/5@2x.png'
	import empty from '@/assets/img/classifyNecessary/empty@2x.png'
	import api from '@/api/index'
	import { ref } from 'vue'
	import { openApi } from '@/api/open/type'
	import { useRoute, useRouter } from 'vue-router'

	const route = useRoute()
	const router = useRouter()
	const query = ref(route.query)
	const subject = ref(Number(route.query.subject))
	const model = ref(route.query.model as string)
	const modelMap = (model : string) => {
		switch (model) {
			case 'model':
				return '轿车'
			case 'bus':
				return '客车'
			case 'truck':
				return '货车'
			case 'mtc':
				return '摩托车'
			default:
				return '无'
		}
	}

	const backPage = () => {

		router.back()
	}
	const subjectMap = (index : string | number) => {
		switch (index) {
			case 0:
			case '0':
				return '科目零'
			case 1:
			case '1':
				return '科目一'
			case 2:
			case '2':
				return '科目二'
			case 3:
			case '3':
				return '科目三'
			case 4:
			case '4':
				return '科目四'
			default:
				return '科目不明'


		}



	}
	defineOptions({
		name: 'beforeMock'
	})
</script>

<style>
	.border-tip {
		background: linear-gradient(180deg, #91BEFC 0%, #BDE0F9 100%);
		box-shadow: 0px 2px 10px 1px rgba(100, 101, 102, 0.12);
		border-radius: 20px 20px 20px 20px;
	}
</style>