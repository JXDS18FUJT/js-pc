<template>
	<view>
		<view class="relative block text-0">
			<img class="w-full" src="@/assets/home/头图2@2x.png" />
			<view class="left-1386 top-84 absolute flex items-center text-white">
				<view class="pr-20 text-24">欢迎登陆</view>
				<img class="w-76" src="@/assets/home/会员头像@2x.png" />
			</view>

		</view>
		<view>
			<view class="w-1200 m-auto h-114 block">
				<view class="w-full flex w-1200 h-64 pt-50 justify-between text-white">
					<view @click="()=>{
						subjectIndex=index
					}" v-for="(item,index) in subjects" :class="{
							'bg-[#E3EDFCFF]':subjectIndex!=index,
							'text-[#4688EBFF]':subjectIndex!=index,
							'bg-gradient-1':subjectIndex==index,
							'text-white':subjectIndex==index
						}" class="rd-32px w-200 lh-64 h-64 text-30 cursor-pointer subject box-border">{{item}}
					</view>
				</view>

			</view>
		</view>
		<view class="inline-flex w-1200 m-auto h-193 flex-wrap">
			<view @click="()=>{
				carTypesIndex=index
			}" v-for="(item,index) in carTypes" class="w-1/4 flex pt-63 justify-center flex-wrap">
				<img class="w-126 pb-5" :src="item.icon" />
				<view class="text-20 w-full text-center block">
					<view class="w-full block">{{item.cert}}</view>
					<view class="w-full block">{{item.name}}</view>
				</view>
			</view>
			<view class="w-1200 h-3 bg-[#E7E9EBFF] mt-13 relative">
				<view class="w-1/4 h-full absolute left-[0%]" :class="{
					'left-[25%]':carTypesIndex==1,
					'left-[50%]':carTypesIndex==2,
					'left-[75%]':carTypesIndex==3
				}">
					<view class="w-2/3 bg-[#4688EBFF] block h-full m-auto"></view>
				</view>
			</view>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script setup name="home" lang="ts">
	import { ref } from 'vue';
	import xcIcon from '@/assets/home/轿车@2x.png'
	import kcIcon from '@/assets/home/客车@2x.png'
	import hcIcon from '@/assets/home/货车@2x.png'
	import mtcIcon from '@/assets/home/摩托车@2x.png'
	const carTypesIndex = ref(0)
	const carTypes = ref([{
		icon: xcIcon,
		name: "轿车",
		cert: "C1/C2/C3",

	}, {
		icon: kcIcon,
		name: "客车",
		cert: "A1/A2/B1",

	}, {
		icon: hcIcon,
		name: "货车",
		cert: "A2/B2",

	}, {
		icon: mtcIcon,
		name: "摩托车",
		cert: "D/E/F",

	}])
	const msg = ref('hello')
	const subjects = ['科目一', '科目四', '满分学习', '注销恢复', '资格证']
	const subjectIndex = ref(0)
</script>

<style scoped>
	.bg-gradient-1 {
		background: linear-gradient(131deg, #26A1EE 0%, #498EF5 100%);
	}
	.subject:hover{
		border: 1px solid #498EF5;
		
	}
</style>