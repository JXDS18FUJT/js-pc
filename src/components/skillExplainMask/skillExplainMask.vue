<template>
	<view :style="{
		zIndex:zIndex
	}" class="w-100vw h-100vh fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] flex flex-wrap justify-center items-center">
		<view class="bg-[#4688EBFF] pb-20 w-1000 h-auto flex flex-wrap justify-center content-start">
			<view class="w-full h-50 lh-50  text-24 text-white">语音技巧</view>
			<view class="w-9/10 pt-20 text-left pb-20 pl-20 pr-20 bg-white">
				{{listItem.explainJq}}
			</view>
			
			<view class="w-9/10 flex justify-between mt-20">
				<view @click="playAudioExplainjq()" class="w-150 lh-40 bg-[#f9f9f9] cursor-pointer">语音播放</view>
				<view @click="closeMask()" class="w-150 lh-40 bg-[#f9f9f9] cursor-pointer">关闭</view>
			</view>
			
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import audio from "@/utils/audio";
	const emit = defineEmits(['close'])
	const props = defineProps({
		zIndex: {
			type: Number,
			default: 100
		},
		listItem: {
			type: Object,
			default: {
				createTime: "2022-10-09 15:05:43",
				updateTime: "2022-10-10 10:19:19",
				id: 821,
				idYdt: 389,
				number: 73,
				answer: "√",
				answerkeyword: "",
				explainGif:
					"https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain821.gif",
				explainJq: "题目中看到“确认安全”.“答对”。",
				explainJs:
					"《道路交通安全法实施条例》第四十二条：闪光警告信号灯为持续闪烁的黄灯，提示车辆、行人通行时注意瞭望，确认安全后通过。",
				explainMp3:
					"https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain821.mp3",
				image: "",
				imageYdt: "",
				issue: "路口黄灯持续闪烁，警示驾驶人要注意瞭望，确认安全通过。",
				opts: "√-×",
				skillkeyword: "确认安全-答对",
				titlekeyword: "确认安全",
				issuemp3:
					"https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue821.mp3",
				answermp3:
					"https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer821.mp3",
				explainjsmp3:
					"https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS821.mp3",
				liceCar: "1",
				liceBus: "1",
				liceTruck: "1",
				liceMoto: null,
				sequeIssue: "1",
				classIssue: "46",
				placeIssue: null,
				excellIssue: "28",
				sequeIssueName: "练习一",
				placeIssueName: null,
				excellIssueName: "选学题一",
				classIssueName: "交通信号灯",
				questionType: 1,
				subject: 1,
				classSort: 1,
				excellSort: 49,
				sequeSort: 73,
				placeSort: null,
				chapterId: 2,
				diffDegree: 4,
				isNew: 0,
				userAnswer: "",
				optsArr: ["√", "×"],
			}
		}
	});
	const closeMask = ()=>{
		emit('close')
		audio.stopAudio()
	}
	const playAudioExplainjq = ()=>{
		audio.stopAudio()
		//字段就是这个
		audio.playAudio(props.listItem.explainMp3)
	}
	const switchAnswerToLetter = (opts : string[], answer : string[] | string) => {
		let letters = ['A', 'B', 'C', 'D', 'E', 'F']
		let answerLetters = []
		if (typeof answer == 'string') {

			answerLetters.push(letters[opts.findIndex((item => {
				return answer == item
			}))])

		}
		else if (Array.isArray(answer)) {
			opts.forEach((item, index) => {
				if (answer.includes(item)) {
					answerLetters.push(letters[index])
				}
			})
		}

		return answerLetters.join(',')


	}
</script>

<style>
</style>