<template>
	<view :style="{
		zIndex:zIndex
	}" class="w-100vw h-100vh fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] flex flex-wrap justify-center items-center">
		<view class="bg-[#4688EBFF] pb-20 w-1000 h-auto flex flex-wrap justify-center content-start">
			<view class="w-full h-50 lh-50  text-24 text-white">交卷结果</view>
			<view class="w-full bg-white w-9/10 pt-20 pb-20 pl-20 pr-20">
				<view class="block">
					题目总数：{{total}}
				</view>
				<view class="block">
					正确数：{{trueNum}}
				</view>
				<view class="block">
					错误数：{{falseNum}}
				</view>
				<view>
					正确率：{{trueNum*100/total}}%
				</view>
			</view>
			<view class="w-9/10 flex justify-between mt-20">
				<view @click="backPage()" class="w-150 lh-40 bg-[#f9f9f9] cursor-pointer">返回上一页</view>
				<view @click="closeMask()" class="w-150 lh-40 bg-[#f9f9f9] cursor-pointer">关闭</view>
			</view>

		</view>
	</view>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { useRouter } from 'vue-router';
	const emit = defineEmits(['close'])
	const router = useRouter()
	const props = defineProps({
		zIndex: {
			type: Number,
			default: 100
		},
		total: {
			type: Number,
			default: 0
		},
		trueNum: {
			type: Number,
			default: 0
		},
		falseNum: {
			type: Number,
			default: 0
		}


	});
	onMounted(() => {

	})
	const closeMask = () => {
		emit('close')

	}
	const backPage = () => {

		router.back()
	}
</script>

<style>
</style>