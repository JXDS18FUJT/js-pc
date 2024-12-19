<template>
	<view class="w-full block">
		<answerAnalyMask @close="()=>{
			answerAnalyVisible = false
		}" v-if="answerAnalyVisible" :zIndex="100" :listItem="wrongListItem"></answerAnalyMask>
		<answerAnalyMask @close="()=>{
			officialExplainVisible = false
		}" v-if="officialExplainVisible" :zIndex="100" :listItem="list[listIndex]"></answerAnalyMask>
		<skillExplainMask @close="()=>{
			skillExplainVisible =false
		}" :zIndex="100" v-if="skillExplainVisible" :listItem="list[listIndex]"></skillExplainMask>
		<view class="w-full h-456 flex pt-20 pl-20 flex-col items-start content-start flex-wrap justify-start">
			<view class="flex flex-col relative w-162 h-39 border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">{{title}}</view>
				<view class="text-14 pt-10">第 01 考台</view>
			</view>
			<view class="flex flex-col relative mt-30 w-162 h-367 pt-23 border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">{{title}}</view>
				<view>
					<img class="w-118 rd-[50%]"
						src="https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132" />
					<view class="pt-10 w-full flex flex-wrap text-left pl-18 pr-18 text-14">
						<view class="w-full">考生姓名：林笑笑</view>
						<view class="w-full">性 别：男</view>
						<view class="w-full">考试科目：科目一理论</view>
						<view class="w-full">考试车型：D/E/F</view>

					</view>
				</view>

			</view>
			<view class="w-1320 h-466 ml-19 relative border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">{{title}}</view>
				<view class="text-left block pt-30 pl-30 ">
					{{listIndex+1}}.<text v-if="list[listIndex].questionType==1"
						class="border-1px text-18 border-solid border-[#707070FF] pl-2 pr-2 pt-2 pb-2 rd-5px">判断题</text>
					<text v-if="list[listIndex].questionType==2"
						class="border-1px text-18 border-solid border-[#707070FF] pl-2 pr-2 pt-2 pb-2 rd-5px">选择题</text>
					<text v-if="list[listIndex].questionType==3"
						class="border-1px text-18 border-solid border-[#707070FF] pl-2 pr-2 pt-2 pb-2 rd-5px">多选题</text>
					<text v-if="!list[listIndex].isRedIssue" class="text-18 ml-16">{{list[listIndex].issue}}</text>
					<text v-if="list[listIndex].isRedIssue" v-html="issueRed()" class="text-18 ml-16"></text>
				</view>
				<view class="pt-19 pl-30 flex w-full h-30">
					<view @click="()=>{
							
						}" class="border-1px cursor-pointer border-solid border-[#D6D9DDFF] w-68 h-30 items-center flex justify-center rd-5px">
						<img class="w-16 h-16" src="@/assets/img/exercise/收藏灰@2x.png" />
						<text class="text-15 pl-4">收藏</text>
					</view>

					<view @click="()=>{
							list[listIndex].isRedIssue = true
						}" class="ml-15 cursor-pointer border-1px border-solid border-[#FE3B2BFF] w-84 h-30 items-center flex justify-center rd-5px">
						<img class="w-16 h-16" src="@/assets/img/exercise/关键字@2x.png" />
						<text class="text-15 pl-4">关键字</text>
					</view>

					<view @click="playIssueAudio()"
						class="ml-15 cursor-pointer border-1px border-solid border-[#4688EBFF] w-84 h-30 items-center flex justify-center rd-5px">
						<img class="w-16 h-16" src="@/assets/img/exercise/读题@2x.png" />
						<text class="text-15 pl-4">读题</text>
					</view>
				</view>
				<view class="h-auto w-full block text-left pl-30 pt-40 ">
					<view class="block w-full" v-for="(item,index) in list[listIndex].optsArr">
						{{switchIndexBySelect(index)}}.{{item}}
					</view>
				</view>
				<view class="pl-30 h-40 lh-40 w-full flex justify-between items-center content-center text-left">
					<view>您选择的答案：<text>{{switchAnswerBySelect(list[listIndex].userAnswer,listIndex)}}</text></view>
					<view class="w-435 lh-40 flex">
						请选择答案：
						<view @click="list[listIndex].isComplete ? '': setUserAnswer(item)" :class="{
							'bg-[#EEF1F5FF]':list[listIndex].questionType<3&&list[listIndex].userAnswer==item||list[listIndex].questionType==3&&list[listIndex].userAnswer.includes(item),
							
						}" v-for="(item,index) in list[listIndex].optsArr"
							class="h-40 hover:bg-[#EEF1F5FF] cursor-pointer text-center mr-12 text-20 lh-40 w-40 border-1px border-solid border-[#959799FF] rd-5px">
							<view v-if="list[listIndex].questionType==1">{{switchIndexByJudge(index)}}</view>
							<view v-if="list[listIndex].questionType>1">{{switchIndexBySelect(index)}}</view>
							<!-- 	<view>{{item}}</view> -->
						</view>
						<view v-if="list[listIndex].questionType==3"
							class="w-60 rd-5px text-center cursor-pointer hover:bg-[#EEF1F5FF] h-40 border-1px border-solid border-[#959799FF]">
							确定</view>
					</view>
				</view>

				<view class="pl-30 mt-23 h-40 lh-40 w-full flex justify-between items-center content-center text-left">
					<view class="text-white">正确答案：<text>√</text></view>
					<view class="w-435 lh-40 flex">

						<view @click="preProblem()"
							class="hover:bg-[#EEF1F5FF] cursor-pointer h-40 text-center mr-15 text-20 lh-40 w-124 border-1px border-solid border-[#959799FF] rd-5px">
							上一题
						</view>
						<view @click="nextProblem()"
							class="hover:bg-[#EEF1F5FF] cursor-pointer h-40 text-center mr-15 text-20 lh-40 w-124 border-1px border-solid border-[#959799FF] rd-5px">
							下一题
						</view>
						<view @click="submitDriveExam()"
							class="hover:bg-[#EEF1F5FF] cursor-pointer h-40 text-center mr-15 text-20 lh-40 w-124 border-1px border-solid border-[#959799FF] rd-5px">
							交卷
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="w-full block pt-20 pl-20 flex">
			<view class="flex flex-col relative w-162 h-40  border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">{{title}}</view>
				<view class="text-14 pt-10 text-[#4688EBFF]">{{countDown}}</view>
			</view>
			<view class="w-759 h-40 lh-40 border-1px border-solid border-[#D6D9DDFF] ml-19 relative text-16">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">提示信息</view>
				<view v-if="list[listIndex].questionType==1">判断题，请选择对错</view>
				<view v-if="list[listIndex].questionType==2">选择题，请选择正确选项</view>
				<view v-if="list[listIndex].questionType==3">多选题，请选择正确选项</view>
			</view>
			<view class="w-540 h-40 flex ml-20 justify-between">
				<view @click="backHomePage()"
					class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px cursor-pointer">
					返回首页
				</view>
				<view @click="()=>{
					skillExplainVisible = true
				}" class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px cursor-pointer">
					语音技巧
				</view>
				<view @click="()=>{
					officialExplainVisible=true
				}" class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px cursor-pointer">
					官方解读
				</view>
				<view
					class="text-20 lh-40 text-[#0A1A33FF] border-1px border-solid border-[#959799FF] block w-124 h-full rd-5px cursor-pointer">
					功能设置
				</view>
			</view>
		</view>
		<view class="pb-20 pt-20 pl-20 pr-20 flex text-left ">
			<view
				class="relative h-442 overflow-y-auto flex-0 border-1px border-solid border-[#D6D9DDFF] inline-block text-0 pt-20 pb-20 pl-20 pr-20">

				<view class="w-400 h-400 flex flex-wrap items-start content-start">
					<view v-for="(item,index) in list.length" @click="()=>{
							listIndex = index
						}" :key="item" class="w-40 h-40 text-center text-[#0A1A33FF] text-14 hover:bg-[#EEF1F5FF] cursor-pointer">
						<view class="block w-full">{{item}}({{list[index].questionType}})</view>
						<view :class="{
								'text-green':list[index].isComplete&&!list[index].isError,
								'text-red':list[index].isComplete&&list[index].isError
							}" v-if="list[index].isComplete&&list[index].questionType==1" class="block w-full">
							{{list[index].userAnswer}}
						</view>
						<view :class="{
								'text-green':list[index].isComplete&&!list[index].isError,
								'text-red':list[index].isComplete&&list[index].isError
							}" v-if="list[index].isComplete&&list[index].questionType>1" class="block w-full">
							{{switchAnswerBySelect(list[index].userAnswer,index)}}
						</view>
					</view>
				</view>
				<grid-border  :height="listRows*40"></grid-border>
				<!-- <canvas class="w-400 h-440 absolute z-5 top-20" style="pointer-events: none;" width="400" height="440"
					id="grid"></canvas> -->


			</view>
			<view
				class="flex-0 w-1045 text-center block h-442 pt-20 relative ml-20 border-1px border-solid border-[#D6D9DDFF]">
				<view class="text-[#FE3B2BFF] text-16 absolute top-0 left-13 translate-[0%,-50%]">图片信息</view>
				<img @click="()=>{
					previewImageVisible = true
				}" class="h-402 cursor-pointer" :src="list[listIndex].image" v-if="list[listIndex].image" />

			</view>
			<view @click="()=>{
				previewImageVisible =false
			}" v-if="previewImageVisible"
				class="fixed z-11 flex justify-center items-center top-0 left-0 w-100vw h-100vh bg-[rgba(0,0,0,0.3)]">
				<img class="min-h-60vh bg-[rgba(0,0,0,0)]" :src="list[listIndex].image" />
			</view>


		</view>

	</view>
</template>

<script lang="ts">
	import { onMounted, ref } from "vue";
	import { useDriverExam } from "@/hooks/exam/driverExam";
	import api from "@/api";
	import { useRoute } from "vue-router";
	// import answerAnalyMask from '@/components/answerAnalyMask/answerAnalyMask.vue';
	// import skillExplainMask from '@/components/skillExplainMask/skillExplainMask.vue';
	export default {
		name: 'doTopics',
		setup() {
			const route = useRoute()

			const query = route.query
			const skillExplainVisible = ref(false)
			const officialExplainVisible = ref(false)
			const backHomePage = () => {
				window.location.href = './'

			}

		
			onMounted(() => {

				
			})
			return {
				skillExplainVisible,
				officialExplainVisible,
				backHomePage,
				...useDriverExam(api.open.question2InfoList({
					model: query.model as string,
					subject: query.subject as string,
					columnAll: query.columnAll as string
				}))
			}
		},
		data() {
			return {

			}
		},
		methods: {
			resizeCanvas(){
				let gridDom = document.getElementById("grid") as HTMLCanvasElement
				//let ctx = gridDom.getContext('2d') as CanvasRenderingContext2D
				gridDom.height = Math.ceil(this.list.length/10)*40 
			},
			initCanvas() {
				let gridDom = document.getElementById("grid") as HTMLCanvasElement
				let ctx = gridDom.getContext('2d') as CanvasRenderingContext2D
				const gridDomWidth = gridDom.width
				const gridDomHeight = gridDom.height

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

		props: {
			title: {
				type: String,
				default: '理论考试'
			},

		},
		components: {
			// answerAnalyMask,
			// skillExplainMask,

		}

	}
</script>

<style>
</style>