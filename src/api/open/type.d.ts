import question from "../question/question"

interface Res {
	code : number,
	msg : string

}
export declare namespace openApi {
	interface question {
			isSkipWrong ?: boolean
			isError ?: boolean
			isComplete ?: boolean
			userAnswer : string | string[]
			optsArr : string[]
			answer : string
			answerkeyword : string
			answermp3 : string
			chapterId : number
			classIssue : string
			classIssueName : string
			classSort : number
			createTime : string
			diffDegree : number
			excellIssue : string
			excellIssueName : string
			excellSort : number
			explainGif : string
			explainJq : string
			explainJs : string
			explainMp3 : string
			explainjsmp3 : string
			id : number
			idYdt : number
			image : string
			imageYdt : string
			isNew : number
			issue : string
			issuemp3 : string
			liceBus : string
			liceCar : string
			liceMoto : null
			liceTruck : string
			number : number
			opts : string
			placeIssue : null
			placeIssueName : null
			placeSort : null
			questionType : number
			sequeIssue : string
			sequeIssueName : string
			sequeSort : number
			skillkeyword : string
			subject : number
			titlekeyword : string
			updateTime : string
			isRedIssue ?: boolean

		}
	interface selectTestK14QuestionInfoList extends Res {
		data : question[]
		total : number
	}
	interface selectFreeQuestionInfoRes extends Res {
		rows : question[]
		total : number

	}
	interface question2InfoGetQuestionColumn extends Res {
		data : {
			"createTime" : string,
			"updateTime" : null,
			"id" : number,
			"columnId" : number,
			"sort" : number,
			"model" : string,
			"subject" : string,
			"title" : string
		}[]

	}

}