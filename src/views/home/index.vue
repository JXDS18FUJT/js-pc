<template>
	<view>
		<view class="relative block text-0">
			<img class="w-full" src="@/assets/home/组 2000@2x.png" />
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
					}" v-for="(item,index) in subjects"
						:class="{
							'bg-[#E3EDFCFF]':subjectIndex!=index,
							'text-[#4688EBFF]':subjectIndex!=index,
							'bg-gradient-1':subjectIndex==index,
							'text-white':subjectIndex==index
						}"
						 class="rd-32px w-200 lh-64 h-64 text-30">{{item}}
					</view>
				</view>
				
			</view>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script setup name="home" lang="ts">
	import { ref } from 'vue';

	const msg = ref('hello')
	const subjects = ['科目一', '科目四', '满分学习', '注销恢复', '资格证']
	const subjectIndex = ref(0)
</script>

<style scoped>
	.bg-gradient-1{
		background: linear-gradient( 131deg, #26A1EE 0%, #498EF5 100%);
	}
</style>