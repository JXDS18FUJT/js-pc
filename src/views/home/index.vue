<template>
	<view>
		<view class="relative block text-0">
			<img class="w-full" src="@/assets/img/home/头图2@2x.png" />
			<view class="left-1386 top-84 absolute flex items-center text-white">
				<view class="pr-20 text-24">欢迎登陆</view>
				<img class="w-76" src="@/assets/img/home/会员头像@2x.png" />
			</view>

		</view>
		<view>
			<view class="w-1200 m-auto h-114 block">
				<view class="w-full flex w-1200 h-64 pt-50 text-white">
					<view @click="()=>{
						subjectIndex=index
						query.subject = item.subject
						
					}" v-for="(item,index) in subjects" :class="{
							'bg-[#E3EDFCFF]':subjectIndex!=index,
							'text-[#4688EBFF]':subjectIndex!=index,
							'bg-gradient-1':subjectIndex==index,
							'text-white':subjectIndex==index
						}" class="rd-32px mr-16 w-200 lh-64 h-64 text-30 cursor-pointer subject box-border">{{item.title}}
					</view>
				</view>

			</view>
		</view>
		<view class="inline-flex w-1200 m-auto h-200 flex-wrap">
			<view @click="()=>{
				carTypesIndex=index
				query.model = carTypes[index].model
				
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
		
		<view class="flex mt-35">
			<view class="w-1240 m-auto inline-flex flex-wrap overflow-hidden">
				<router-link :to="{path:'./classifyNecessary',query:query}" class="flex w-270 h-80 bg-[#E0E3E6FF] rd-32 mr-40 mb-40">
					<img class="w-80 h-80" src="@/assets/img/home/必学考题@2x.png" />
					<text class="text-30 lh-80">必学考题</text>
				</router-link>
				<router-link :to="{path:'./beforeMock',query:query}" class="flex w-270 h-80 bg-[#E0E3E6FF] rd-32 mr-40 mb-40">
					<img class="w-80 h-80" src="@/assets/img/home/模拟考试@2x.png" />
					<text class="text-30 lh-80">模拟考试</text>
				</router-link>
				<view class="flex w-270 h-80 bg-[#E0E3E6FF] rd-32 mr-40 mb-40">
					<img class="w-80 h-80" src="@/assets/img/home/我的收藏@2x.png" />
					<text class="text-30 lh-80">我的收藏</text>
				</view>
				<view class="flex w-270 h-80 bg-[#E0E3E6FF] rd-32 mr-40 mb-40">
					<img class="w-80 h-80" src="@/assets/img/home/用户管理@2x.png" />
					<text class="text-30 lh-80">用户管理</text>
				</view>
				<router-link :to="{path:'./classifyKind',query:query}" class="flex w-270 h-80 bg-[#E0E3E6FF] rd-32 mr-40 mb-40">
					<img class="w-80 h-80" src="@/assets/img/home/分类练习@2x.png" />
					<text class="text-30 lh-80">分类练习</text>
				</router-link>
			</view>
			
		</view>
	</view>
</template>

<script setup name="home" lang="ts">
	import { ref } from 'vue';
	import xcIcon from '@/assets/img/home/轿车@2x.png'
	import kcIcon from '@/assets/img/home/客车@2x.png'
	import hcIcon from '@/assets/img/home/货车@2x.png'
	import mtcIcon from '@/assets/img/home/摩托车@2x.png'
	
	defineOptions({
		name:'home'
	})
	const query = ref({
		subject:'1',
		model:'cart'
		
	})
	const carTypesIndex = ref(0)
	const carTypes = ref([{
		icon: xcIcon,
		name: "轿车",
		cert: "C1/C2/C3",
		model:"cart"

	}, {
		icon: kcIcon,
		name: "客车",
		cert: "A1/A2/B1",
		model:"bus"

	}, {
		icon: hcIcon,
		name: "货车",
		cert: "A2/B2",
		model:"truck"

	}, {
		icon: mtcIcon,
		name: "摩托车",
		cert: "D/E/F",
		model:"mtc"

	}])
	const msg = ref('hello')
	const subjects = [{title:'科目一',subject:'1'}, {title:'科目四',subject:'4'}]
	const subjectIndex = ref(0)
</script>

<style scoped>
	.bg-gradient-1 {
		background: linear-gradient(131deg, #26A1EE 0%, #498EF5 100%);
	}

	.subject:hover {
		border: 1px solid #498EF5;

	}
</style>