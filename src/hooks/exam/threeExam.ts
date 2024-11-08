import { computed, onMounted, reactive, ref, watch, onBeforeUnmount } from "vue";

import moment from 'moment';
import audio from "@/utils/audio";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { threeApi } from "@/api/three/type";
import router from "@/router";
import api from "@/api";
export const useThreeExam = (requestFn: Promise<threeApi.threeForceList>, config = {
    countDown: true,
    autoAnswer: true,
    recordUncomplete: true
}) => {
    const store = useStore()
    let timerId = 0
    let examTimeMillSeconds = config.countDown ? 45 * 60 * 1000 : 0
    const falseNum = ref(0)
    const trueNum = ref(0)
    const list = ref<threeApi.threeForceList["rows"]>([{
        "id": 26950,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "下图时钟指示的时间是五点整。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "1",
        "explain": "图中时钟是五点整，因此本题正确。",
        "bestanswerid": "1334792674833649664",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "26950-1607070544975.webp",
        "videoUrl": "",
        "diffDegree": 1,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/26950-1607070544975.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中时钟是五点整，因此本题正确。",
        "userAnswer": ''

    },
    {
        "id": 26971,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "下图中物体的颜色是红色。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "1",
        "explain": "图中玫瑰花的颜色是红色，题中说红色，因此本题正确。",
        "bestanswerid": "1334802770611470337",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "26971-1607070553838.webp",
        "videoUrl": "",
        "diffDegree": 2,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/26971-1607070553838.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中玫瑰花的颜色是红色，题中说红色，因此本题正确。",
        "userAnswer": ''
    },
    {
        "id": 27355,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "注意观察图片：中间箭头的方向是向下。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "2",
        "explain": "图中箭头的方向依次是下、上、下、上、下、下、上，中间箭头的方向是上。",
        "bestanswerid": "1363676634208559104",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "27355-1613961310107.webp",
        "videoUrl": "",
        "diffDegree": 4,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 1,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/27355-1613961310107.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中箭头的方向依次是下、上、下、上、下、下、上，中间箭头的方向是上。",
        "userAnswer": ''
    },
    {
        "id": 26969,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "下图时钟指示的时间是十二点整。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "2",
        "explain": "图中时钟是十一点整，因此本题错误。",
        "bestanswerid": "1334802442033872897",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "26969-1607070552164.webp",
        "videoUrl": "",
        "diffDegree": 3,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/26969-1607070552164.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中时钟是十一点整，因此本题错误。",
        "userAnswer": ''
    },
    {
        "id": 26947,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "下图时钟指示的时间是一点整。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "1",
        "explain": "图中时钟是一点整，因此本题正确。",
        "bestanswerid": "1334788634762596352",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "26947-1607070542895.webp",
        "videoUrl": "",
        "diffDegree": 4,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/26947-1607070542895.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中时钟是一点整，因此本题正确。",
        "userAnswer": ''
    },
    {
        "id": 27309,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "前进中的小粉猪在小黑猪的右后方。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "2",
        "explain": "图中前进中的小粉猪在小黑猪的左前方。",
        "bestanswerid": "1363676622615502848",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "27309-1613961215487.webp",
        "videoUrl": "",
        "diffDegree": 4,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/27309-1613961215487.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中前进中的小粉猪在小黑猪的左前方。",
        "userAnswer": ''
    },
    {
        "id": 26997,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "下图左右两边物体数量相同。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "2",
        "explain": "图中左边数量为8，右边数量为7，因此本题错误。",
        "bestanswerid": "1334808346569539585",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "26997-1607070563554.webp",
        "videoUrl": "",
        "diffDegree": 2,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/26997-1607070563554.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中左边数量为8，右边数量为7，因此本题错误。",
        "userAnswer": ''
    },
    {
        "id": 27385,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "注意观察图中苹果有3个。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "2",
        "explain": "图中从左到右是橘子、苹果、橘子、梨、苹果、橘子。所以本题错误。",
        "bestanswerid": "1363676641330487296",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "27385-1613961370577.webp",
        "videoUrl": "",
        "diffDegree": 5,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/27385-1613961370577.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中从左到右是橘子、苹果、橘子、梨、苹果、橘子。所以本题错误。",
        "userAnswer": ''
    },
    {
        "id": 27202,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "注意图片中亮起的信号灯是黄色。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "2",
        "explain": "由图可知，图中亮起的信号灯是最左面的红灯。",
        "bestanswerid": "1347779221883215872",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "27202-1610171483156.webp",
        "videoUrl": "",
        "diffDegree": 1,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/27202-1610171483156.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "由图可知，图中亮起的信号灯是最左面的红灯。",
        "userAnswer": ''
    },
    {
        "id": 26984,
        "type": 1,
        "intnumber": "",
        "strtppe": "87",
        "strtypeL": "8701",
        "licensetype": "",
        "question": "行驶中的红车在蓝车的正前方。",
        "an1": "正确",
        "an2": "错误",
        "an3": "",
        "an4": "",
        "an5": "",
        "an6": "",
        "an7": "",
        "answertrue": "1",
        "explain": "图中红车在蓝车的正前方。",
        "bestanswerid": "1334807100232089600",
        "kemu": 1,
        "jieshiFrom": "",
        "moretypes": "",
        "chapterid": 0,
        "sinaimg": "26984-1607070558596.webp",
        "videoUrl": "",
        "diffDegree": 1,
        "cityid": 0,
        "gs": "test",
        "keyword": "",
        "errorRate": 0,
        "mediaUrl": "https://t1-1305573081.file.myqcloud.com/yd/app/media/26984-1607070558596.webp",
        "showOptionType": 0,
        "questionSource": 1,
        "bestExplainNew": "图中红车在蓝车的正前方。",
        "userAnswer": ''
    }])
    const listIndex = ref(0)
    const listPageNum = ref('1')
    const countDown = ref('00:45:00')
    // const issueAutoRead = () => {
    //     let redIssue = list.value[listIndex.value].question
    //     if (store.state.sysConfig.autoRed) {
    //       redIssue = redIssue.replace(list.value[listIndex.value].titlekeyword, '<span class="text-red-500">' + list.value[listIndex.value].titlekeyword + '</span>')

    //     }
    //     return redIssue


    //   }



    const setPageNumToListIndex = (page: string | number) => {
        page = Number(page)
        listIndex.value = page - 1

    }

    const getProblemTypeName = (type: number) => {
        let name = "";
        switch (type) {
            case 1:
                name = "判断题";
                break;
            case 2:
                name = "选择题";
                break;
            case 3:
                name = "多选题";
                break;
            default:
                break;
        }
        return name;
    };
    const setPageToListIndex = (page: number | string) => {
        if (list.value.length < Number(page)) {
            message.error({
                content: '超过最大值'
            })
            return
        }
        else if (Number(page) < 1) {
            message.error({
                content: '低于最小值'
            })
        }
        else {
            listIndex.value = Number(page) - 1

        }
    }
    const nextProblem = () => {
        console.log("nextProblem");
        if (listIndex.value < list.value.length - 1) {
            listIndex.value++;
            return;
        }
    };
    const preProblem = () => {
        if (listIndex.value > 0) {
            listIndex.value = listIndex.value - 1;
        }
    };
    const setIsSkipWrong = (isSkipWrong: boolean) => {
        list.value[listIndex.value].isSkipWrong = !list.value[listIndex.value].isSkipWrong
    }
    const setUserAnswer = (answer: string) => {
        //没有多选题
        list.value[listIndex.value].userAnswer = answer;

    };
    //用于直接出结果
    const setUserAnswerAndRes = (userAnswer: string) => {
        if (list.value[listIndex.value].type == 3) {
            //三力测试没有多选题

        } else {
            list.value[listIndex.value].userAnswer = userAnswer;
        }
        //判断对错,以及是否自动下一题
        if (
            list.value[listIndex.value].type !== 3 &&

            list.value[listIndex.value].userAnswer.length
        ) {
            const userAnswer = list.value[listIndex.value].userAnswer as string;
            const answer = list.value[listIndex.value]['an' + list.value[listIndex.value].answertrue];
            if (answer == userAnswer) {
                list.value[listIndex.value].isComplete = true;
                list.value[listIndex.value].isError = false;
                trueNum.value++;
                //自动跳转下一题
                if (store.state.sysConfig.autoNext) {
                    window.setTimeout(() => {
                        nextProblem()
                    }, 1500)

                }
            } else {
                list.value[listIndex.value].isComplete = true;
                list.value[listIndex.value].isError = true;
                falseNum.value++;
            }
        }
        //判断对错
    };
    const switchIndexByJudge = (index: number) => {
        let name = "";
        switch (index) {
            case 0:
                name = "√";
                break;
            case 1:
                name = "×";
                break;
        }
        return name;
    };
    const switchIndexBySelect = (index: number | string) => {
        let name = "";
        const i = Number(index)
        switch (i) {
            case 0:
                name = "A";
                break;
            case 1:
                name = "B";
                break;
            case 2:
                name = "C";
                break;
            case 3:
                name = "D";
                break;
            case 4:
                name = "E";
                break;
            case 5:
                name = "F";
                break;
        }
        return name;
    };
    const switchPageNumBySelect = (index: number | string) => {
        let name = "";
        const i = Number(index) - 1
        switch (i) {
            case 0:
                name = "A";
                break;
            case 1:
                name = "B";
                break;
            case 2:
                name = "C";
                break;
            case 3:
                name = "D";
                break;
            case 4:
                name = "E";
                break;
            case 5:
                name = "F";
                break;
        }
        return name;
    };
    const switchAnswerBySelect = (userAnswer: string, index: number) => {
        let select = "";
        for (let i = 1; i <= 6; i++) {
            if (userAnswer == '') {
                break;
            }

            if (userAnswer == list.value[index]['an' + i]) {
                select = String.fromCharCode(i + 64)
            }
        }
        return select;
    };

    watch(listIndex, (newVal, oldVal) => {
        if (config.autoAnswer) {
            //判断对错
            if (
                list.value[oldVal].type !== 3 &&
                !list.value[oldVal].isComplete &&
                list.value[oldVal].userAnswer.length
            ) {
                const userAnswer = list.value[oldVal].userAnswer as string;
                const answer = list.value[oldVal]['an' + list.value[oldVal].answertrue];
                if (answer == userAnswer) {
                    list.value[oldVal].isComplete = true;
                    list.value[oldVal].isError = false;
                    trueNum.value++;
                } else {
                    list.value[oldVal].isComplete = true;
                    list.value[oldVal].isError = true;
                    falseNum.value++;
                }
            }
            //判断对错
            //提示
            if (
                list.value[oldVal].isError &&
                list.value[oldVal].type !== 1 &&
                list.value[oldVal].isComplete
            ) {

                alert(
                    "正确答案：" + (switchAnswerBySelect(list.value[oldVal]['an' + list.value[oldVal].answertrue], oldVal))
                );
            } else if (
                list.value[oldVal].isError &&
                list.value[oldVal].type === 1 &&
                list.value[oldVal].isComplete
            ) {
                alert("正确答案：" + (list.value[oldVal]['an' + list.value[oldVal].answertrue] == '正确' ? '√' : '×'));
            }

        }


        //提示
    });

    const getCorrectRate = () => {
        if (trueNum.value + falseNum.value) {
            Math.round((trueNum.value) / (trueNum.value + falseNum.value) * 100) / 100
            return

        }
        else {
            return 0
        }

    }

    const submitThreeExam = () => {
        setUserAnswerAndRes(list.value[listIndex.value].userAnswer)
        let score = 0
        const wrongTempList: threeApi.threeForceList["rows"] = [] //临时错题
        const wrongList: threeApi.threeForceList["rows"] = [] //永久错题
        const wrongListRes: string[] = []
        list.value.forEach((item, index) => {
            //题目正确加分
            if (item.isComplete && !item.isError && list.value[index].userAnswer.length > 0) {
                score = score + 1
            }
            else if (!item.isComplete && list.value[index].userAnswer.length == 0) {
                //没做的题目
                if (config.recordUncomplete) {
                    wrongTempList.push(list.value[index])
                    wrongListRes.push('0')
                }

            }
            else {
                //错误的题目
                let userAnswerIndex = 0

                for (let i = 1; i <= 6; i++) {
                    if (list.value[index].userAnswer == '') {
                        break;
                    }

                    if (list.value[index].userAnswer == list.value[index]['an' + i]) {
                        userAnswerIndex = i
                    }
                }
                //isSkipWrong是假值的时候才收集错题
                if (!list.value[listIndex.value].isSkipWrong) {
                    wrongTempList.push(list.value[index])
                    wrongListRes.push(String(userAnswerIndex))
                    wrongList.push(list.value[index])
                }

            }
        })
        //保存临时错题
        window.sessionStorage.setItem('threeExam_temp_wrong_list', JSON.stringify(wrongTempList))
        //同步全部的错题
        api.question.questionthreeWrongWrongs({

            wrongs: wrongList.map(item => {
                return {
                    id: item.id,
                    timestamp: + new Date()
                }
            })

        }).then(res => {
            store.dispatch('AsyncThreeWrongList')
            router.push({
                path: '/threeExamAnaly',
                query: {
                    wrongListRes: JSON.stringify(wrongListRes),
                    score: score,
                    showScore:'1'
                }
            })
        }).catch(err => {
            router.push({
                path: '/threeExamAnaly',
                query: {
                    wrongListRes: JSON.stringify(wrongListRes),
                    score: score,
                    showScore:'1'
                }
            })

        })

    }

    onMounted(() => {
        message.loading('题目加载中', 0)
        requestFn.then(res => {
            res.rows.forEach(item => {
                item.userAnswer = ""
            })
            window.sessionStorage.setItem("threeExam_current_list", JSON.stringify(res.rows));
            list.value = res.rows;
            message.destroy()
        }).catch(err => {
            message.destroy()
        })
        timerId = window.setInterval(() => {
            if (examTimeMillSeconds === 0) {
                console.log('已经清除')
                window.clearInterval(timerId)
                return
            }
            examTimeMillSeconds = examTimeMillSeconds - 1000
            countDown.value = moment(examTimeMillSeconds).format('00:mm:ss')

        }, 1000)



    })
    onBeforeUnmount(() => {
        window.clearInterval(timerId)

    })

    return {
        falseNum,
        trueNum,
        list,
        listIndex,
        countDown,
        listPageNum,
        setUserAnswer,
        setUserAnswerAndRes,
        getProblemTypeName,
        getCorrectRate,
        nextProblem,
        preProblem,
        switchIndexByJudge,
        switchAnswerBySelect,
        switchIndexBySelect,
        setPageNumToListIndex,
        switchPageNumBySelect,
        submitThreeExam,
        setIsSkipWrong,
        setPageToListIndex



    }




}