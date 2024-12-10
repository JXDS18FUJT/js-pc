import { computed, onMounted, reactive, ref, watch, onBeforeUnmount } from "vue";
import { openApi } from "@/api/open/type";
import moment from 'moment';
import audio from "@/utils/audio";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import api from "@/api";
import { useRoute } from "vue-router";
import router from "@/router";
export const useDriverExam = (requestFn: Promise<openApi.selectFreeQuestionInfoRes>, config = {
  countDown: true,
  autoAnswer: true,
  recordUncomplete: true
}) => {
  const store = useStore()
  const route = useRoute()
  let timerId = 0
  let examTimeMillSeconds = config.countDown ? 45 * 60 * 1000 : 0
  const falseNum = ref(0)
  const trueNum = ref(0)
  const list = ref<openApi.selectFreeQuestionInfoRes["rows"]>([{
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
  },
  {
    createTime: "2022-10-09 15:05:43",
    updateTime: "2022-10-10 10:19:19",
    id: 1295,
    idYdt: 762,
    number: 74,
    answer: "√",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain1295.gif",
    explainJq: "题目中看到“确认安全”.“答对”。",
    explainJs:
      "车辆起步前，驾驶人应观察车辆周边交通情况，在确保安全的情况下起步。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain1295.mp3",
    image: "",
    imageYdt: "",
    issue:
      "车辆起步前，驾驶人应对车辆周围交通情况进行观察，确认安全时再开始起步。",
    opts: "√-×",
    skillkeyword: "确认安全-答对",
    titlekeyword: "确认安全",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue1295.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer1295.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS1295.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "1",
    classIssue: "44",
    placeIssue: null,
    excellIssue: "28",
    sequeIssueName: "练习一",
    placeIssueName: null,
    excellIssueName: "选学题一",
    classIssueName: "安全常识",
    questionType: 1,
    subject: 1,
    classSort: 4,
    excellSort: 50,
    sequeSort: 74,
    placeSort: null,
    chapterId: 2,
    diffDegree: 2,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:43",
    updateTime: "2022-10-10 10:19:19",
    id: 1615,
    idYdt: 26051,
    number: 75,
    answer: "√",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain1615.gif",
    explainJq: "题目中看到“确认安全”.“答对”。",
    explainJs:
      "注意进入驾驶室前，也就是上车前。上车前，要从驾驶室车门外开始，逆时针绕车一周，检查车辆及周边情况，查看车底、车后有无异常情况，确认安全后再上车。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain1615.mp3",
    image: "",
    imageYdt: "",
    issue:
      "驾驶人在进入驾驶室前，首先要观察机动车周围情况，确认安全后再上车。",
    opts: "√-×",
    skillkeyword: "确认安全-答对",
    titlekeyword: "确认安全",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue1615.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer1615.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS1615.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "1",
    classIssue: "44",
    placeIssue: null,
    excellIssue: "28",
    sequeIssueName: "练习一",
    placeIssueName: null,
    excellIssueName: "选学题一",
    classIssueName: "安全常识",
    questionType: 1,
    subject: 1,
    classSort: 5,
    excellSort: 51,
    sequeSort: 75,
    placeSort: null,
    chapterId: 108,
    diffDegree: 2,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:43",
    updateTime: "2022-10-10 10:19:19",
    id: 490,
    idYdt: 167,
    number: 76,
    answer: "√",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain490.gif",
    explainJq: "题目中看到“确认安全”.“答对”。",
    explainJs:
      "《道路交通安全法实施条例》第六十四条：机动车行经漫水路或者漫水桥时，应当停车察明水情，确认安全后，低速通过。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain490.mp3",
    image: "",
    imageYdt: "",
    issue: "驾驶机动车遇到漫水桥时要察明水情确认安全后再低速通过。",
    opts: "√-×",
    skillkeyword: "确认安全-答对",
    titlekeyword: "确认安全",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue490.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer490.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS490.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "1",
    classIssue: "83",
    placeIssue: null,
    excellIssue: "28",
    sequeIssueName: "练习一",
    placeIssueName: null,
    excellIssueName: "选学题一",
    classIssueName: "特殊路段/路况",
    questionType: 1,
    subject: 1,
    classSort: 6,
    excellSort: 52,
    sequeSort: 76,
    placeSort: null,
    chapterId: 2,
    diffDegree: 1,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:43",
    updateTime: "2022-10-10 10:19:19",
    id: 469,
    idYdt: 150,
    number: 77,
    answer: "√",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain469.gif",
    explainJq: "题目中看到“确认安全”.“答对”。",
    explainJs:
      "图中标志是无人看守的铁路道口，要停车观察确认安全后再通过。《道路交通安全法》第四十六条：机动车通过铁路道口时，应当按照交通信号或者管理人员的指挥通行；没有交通信号或者管理人员的，应当减速或者停车，在确认安全后通过。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain469.mp3",
    image: "https://t1-1305573081.file.myqcloud.com/kt/image/image469.jpg",
    imageYdt:
      "https://t1-1305573081.file.myqcloud.com/kt/image_ydt/5eb4d75agw1e28ypmvbktj.jpg",
    issue: "行至这种情况的铁路道口要减速或者停车观察，在确认安全后通过。",
    opts: "√-×",
    skillkeyword: "确认安全-答对",
    titlekeyword: "确认安全",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue469.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer469.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS469.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "1",
    classIssue: "84",
    placeIssue: null,
    excellIssue: "28",
    sequeIssueName: "练习一",
    placeIssueName: null,
    excellIssueName: "选学题一",
    classIssueName: "铁路道口",
    questionType: 1,
    subject: 1,
    classSort: 1,
    excellSort: 53,
    sequeSort: 77,
    placeSort: null,
    chapterId: 2,
    diffDegree: 2,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:43",
    updateTime: "2022-10-10 10:19:19",
    id: 1083,
    idYdt: 801,
    number: 78,
    answer: "√",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain1083.gif",
    explainJq: "题目中看到“确认安全”.“答对”。",
    explainJs:
      "变更车道步骤：提前开转向灯，观察后方情况，确保安全距离，再变更。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain1083.mp3",
    image: "",
    imageYdt: "",
    issue:
      "在高速公路变更车道时，应提前开启转向灯，观察情况，确认安全后，驶入需要变更的车道。",
    opts: "√-×",
    skillkeyword: "确认安全-答对",
    titlekeyword: "确认安全",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue1083.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer1083.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS1083.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "1",
    classIssue: "85",
    placeIssue: null,
    excellIssue: "28",
    sequeIssueName: "练习一",
    placeIssueName: null,
    excellIssueName: "选学题一",
    classIssueName: "变更车道",
    questionType: 1,
    subject: 1,
    classSort: 1,
    excellSort: 54,
    sequeSort: 78,
    placeSort: null,
    chapterId: 2,
    diffDegree: 1,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:58",
    updateTime: "2022-10-10 10:19:19",
    id: 291,
    idYdt: 74,
    number: 284,
    answer: "×",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain291.gif",
    explainJq: '题目中看到“可不”或“可以不”.直接"答错"。',
    explainJs:
      "超车只能从左侧超越，应提前开启左转向灯。《道路交通安全法实施条例》第五十七条：机动车向左转弯、向左变更车道、准备超车、驶离停车地点或者掉头时，应当提前开启左转向灯。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain291.mp3",
    image: "",
    imageYdt: "",
    issue: "驾驶机动车在道路上超车时可以不使用转向灯。",
    opts: "√-×",
    skillkeyword: "可以不-答错",
    titlekeyword: "可以不",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue291.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer291.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS291.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "2",
    classIssue: "86",
    placeIssue: null,
    excellIssue: "29",
    sequeIssueName: "练习二",
    placeIssueName: null,
    excellIssueName: "选学题二",
    classIssueName: "超车题",
    questionType: 1,
    subject: 1,
    classSort: 24,
    excellSort: 41,
    sequeSort: 99,
    placeSort: null,
    chapterId: 2,
    diffDegree: 1,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:58",
    updateTime: "2022-10-10 10:19:19",
    id: 303,
    idYdt: 77,
    number: 285,
    answer: "×",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain303.gif",
    explainJq: '题目中看到“可不”或“可以不”.直接"答错"。',
    explainJs:
      "向右变更车道，应提前开启右转向灯，告知后方车辆。《道路交通安全法实施条例》第五十七条：机动车向右转弯、向右变更车道、超车完毕驶回原车道、靠路边停车时，应当提前开启右转向灯。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain303.mp3",
    image: "",
    imageYdt: "",
    issue: "驾驶机动车在道路上向右变更车道可以不使用转向灯。",
    opts: "√-×",
    skillkeyword: "可以不-答错",
    titlekeyword: "可以不",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue303.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer303.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS303.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "2",
    classIssue: "85",
    placeIssue: null,
    excellIssue: "29",
    sequeIssueName: "练习二",
    placeIssueName: null,
    excellIssueName: "选学题二",
    classIssueName: "变更车道",
    questionType: 1,
    subject: 1,
    classSort: 14,
    excellSort: 42,
    sequeSort: 100,
    placeSort: null,
    chapterId: 2,
    diffDegree: 5,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:58",
    updateTime: "2022-10-10 10:19:19",
    id: 1053,
    idYdt: 774,
    number: 286,
    answer: "×",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain1053.gif",
    explainJq: '题目中看到“可不”或“可以不”.直接"答错"。',
    explainJs:
      "任何情况下，机动车都要礼让行人。《道路交通安全法》第四十七条：机动车遇行人横过道路，应当避让。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain1053.mp3",
    image: "",
    imageYdt: "",
    issue: "当行人出现交通安全违法行为时，车辆可以不给行人让行。",
    opts: "√-×",
    skillkeyword: "可以不-答错",
    titlekeyword: "可以不",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue1053.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer1053.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS1053.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "2",
    classIssue: "91",
    placeIssue: null,
    excellIssue: "29",
    sequeIssueName: "练习二",
    placeIssueName: null,
    excellIssueName: "选学题二",
    classIssueName: "优先通行/礼让",
    questionType: 1,
    subject: 1,
    classSort: 27,
    excellSort: 43,
    sequeSort: 101,
    placeSort: null,
    chapterId: 2,
    diffDegree: 5,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  },
  {
    createTime: "2022-10-09 15:05:58",
    updateTime: "2022-10-10 10:19:19",
    id: 1055,
    idYdt: 775,
    number: 287,
    answer: "×",
    answerkeyword: "",
    explainGif:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_gif/explain1055.gif",
    explainJq: '题目中看到“可不”或“可以不”.直接"答错"。',
    explainJs:
      "任何情况下，机动车都要礼让行人、非机动车，不可与其抢行，安全行车最重要。",
    explainMp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_mp3/explain1055.mp3",
    image: "",
    imageYdt: "",
    issue: "车辆在交叉路口绿灯亮后，遇非机动车抢道行驶时，可以不让行。",
    opts: "√-×",
    skillkeyword: "可以不-答错",
    titlekeyword: "可以不",
    issuemp3:
      "https://t1-1305573081.file.myqcloud.com/kt/issue_mp3/issue1055.mp3",
    answermp3:
      "https://t1-1305573081.file.myqcloud.com/kt/answer_mp3/answer1055.mp3",
    explainjsmp3:
      "https://t1-1305573081.file.myqcloud.com/kt/explain_js_mp3/explainJS1055.mp3",
    liceCar: "1",
    liceBus: "1",
    liceTruck: "1",
    liceMoto: null,
    sequeIssue: "2",
    classIssue: "91",
    placeIssue: null,
    excellIssue: "29",
    sequeIssueName: "练习二",
    placeIssueName: null,
    excellIssueName: "选学题二",
    classIssueName: "优先通行/礼让",
    questionType: 1,
    subject: 1,
    classSort: 28,
    excellSort: 44,
    sequeSort: 102,
    placeSort: null,
    chapterId: 2,
    diffDegree: 1,
    isNew: 0,
    userAnswer: "",
    optsArr: ["√", "×"],
  }])
  const previewImageVisible = ref(false)
  const answerAnalyVisible = ref(false)
  const listIndex = ref(0)
  const listPageNum = ref('1')
  const countDown = ref('00:45:00')
  const carTypeMap = {
    'xc':'小车',
    'mtc':'摩托车',
    'hc':'货车',
    'kc':'客车'
  }
  const playIssueAudio = () => {
    audio.stopAudio()
    audio.playAudio(list.value[listIndex.value].issuemp3)
  }
	  
  const playSkillAudio = ()=>{
	  audio.stopAudio()
	  audio.playAudio(list.value[listIndex.value].explainjsmp3)
  }
  const playExplainAudio = ()=>{
  	  audio.stopAudio()
  	  audio.playAudio(list.value[listIndex.value].explainMp3)
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
  //设置用户的答案
  const setUserAnswer = (answer: string) => {
    if (list.value[listIndex.value].questionType == 3) {
      let userAnswer = list.value[listIndex.value].userAnswer as string[];
      console.log(userAnswer.indexOf(answer))
      if (userAnswer.indexOf(answer) > -1) {
        userAnswer = userAnswer.splice(userAnswer.indexOf(answer), 1)
      } else {
        userAnswer.push(answer);
      }
    } else {
      list.value[listIndex.value].userAnswer = answer;
    }
  };
  //设置用户的答案并且判断对错
  const setUserAnswerAndRes = (answer: string | string[]) => {
    if (list.value[listIndex.value].questionType == 3 && Array.isArray(answer)) {
      list.value[listIndex.value].userAnswer = answer;
    } else {
      list.value[listIndex.value].userAnswer = answer;
    }
    //判断对错,以及是否自动下一题
    if (
      list.value[listIndex.value].questionType !== 3 &&

      list.value[listIndex.value].userAnswer.length
    ) {
      const userAnswer = list.value[listIndex.value].userAnswer as string;
      const answer = list.value[listIndex.value].answer;
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
    } else if (
      list.value[listIndex.value].questionType == 3 &&

      list.value[listIndex.value].userAnswer.length
    ) {
      const userAnswer = Object.assign([], list.value[listIndex.value].userAnswer) as string[];
      userAnswer.sort();
      const answer = list.value[listIndex.value].answer.split("-");
      answer.sort();
      if (userAnswer.toString() == answer.toString()) {
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
  const setIsSkipWrong = (isSkipWrong: boolean) => {
    list.value[listIndex.value].isSkipWrong = !list.value[listIndex.value].isSkipWrong
  }
  const cancelUserAnswer = (answer: string) => {
    if (list.value[listIndex.value].questionType == 3) {
      let userAnswer = list.value[listIndex.value].userAnswer as string[]
      //深拷贝
      userAnswer = Object.assign([], list.value[listIndex.value].userAnswer)
      userAnswer = userAnswer.filter(item => {
        return item !== answer
      })
      list.value[listIndex.value].userAnswer = userAnswer
    }

  }
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
  const switchIndexBySelect = (index: number) => {
    let name = "";
    switch (index) {
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
    }
    return name;
  };
  const switchAnswerBySelect = (answer: string | string[], index: number) => {
    let select = "";
    console.log(answer)
    if (Array.isArray(answer)) {
      answer.forEach((item) => {

        select = select + switchIndexBySelect(
          list.value[index].optsArr.indexOf(item)
        );
      });
    } else {
      // console.log( list.value[index],index)
      select += switchIndexBySelect(
        list.value[index].optsArr.indexOf(answer)
      );
    }
    return select;
  };
  
  const issueAutoRead = () => {
    let redIssue = list.value[listIndex.value].issue
    if (store.state.sysConfig.autoRed) {
      redIssue = redIssue.replace(list.value[listIndex.value].titlekeyword, '<span class="text-red-500">' + list.value[listIndex.value].titlekeyword + '</span>')

    }
    return redIssue
  }
  
  const issueRed = () => {
    let redIssue = list.value[listIndex.value].issue
      redIssue = redIssue.replace(list.value[listIndex.value].titlekeyword, '<span style="color:red">' + list.value[listIndex.value].titlekeyword + '</span>')
    return redIssue
  }
  //驾驶考试提交
  const submitDriveExam = (isUploadScore?:boolean) => {
    setUserAnswerAndRes(list.value[listIndex.value].userAnswer)
    let score = 0
    const wrongTempList: openApi.selectFreeQuestionInfoRes["rows"] = [] //临时错题
    const wrongList: openApi.selectFreeQuestionInfoRes["rows"] = [] //永久错题
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
        let userAnswerIndex = '0'
        //错误的题目
        if (list.value[index].questionType == 3 && Array.isArray(list.value[index].userAnswer)) {
          const userAnswer = list.value[index].userAnswer as string[]
          const optsArr = list.value[index].optsArr
          userAnswerIndex = userAnswer.map(item => {

            return String(optsArr.indexOf(item) + 1)

          }).join('')
        }
        else if (list.value[index].questionType != 3 && !Array.isArray(list.value[index].userAnswer)) {
          const optsArr = list.value[index].optsArr
          const userAnswer = list.value[index].userAnswer as string
          userAnswerIndex = (String(optsArr.indexOf(userAnswer) + 1))
        }
        //isSkipWrong是假值的时候才收集错题
        if (!list.value[index].isSkipWrong) {
          wrongTempList.push(list.value[index])
          wrongList.push(list.value[index])
          wrongListRes.push(String(userAnswerIndex))
        }
      }
    })
    //保存临时错题
    window.sessionStorage.setItem('driverExam_temp_wrong_list', JSON.stringify(wrongTempList || '[]'))
    //同步全部的错题
    api.question.questionWrongWrongs({
      km: Number(route.query.subject),
      wrongs: wrongList.map(item => {
        return {
          id: item.id,
          timestamp: + new Date()
        }
      })

    }).then(res => {
      console.log(route)
      if (Number(route.query.subject) == 1) {
        console.log(route.query.subject)
        store.dispatch('AsyncDriver1WrongList')
      }
      if (Number(route.query.subject) == 4) {
        console.log(route.query.subject)
        store.dispatch('AsyncDriver4WrongList')
      }
      //科目四每题是2分
      if (Number(route.query.subject) == 4) {
        score=score*2
      }
      router.push({
        path: '/driverExamAnaly',
        query: {
          wrongListRes: JSON.stringify(wrongListRes),
          score: score,
          ...route.query
        }
      })

    }).catch(err => {
      router.push({
        path: '/driverExamAnaly',
        query: {
          wrongListRes: JSON.stringify(wrongListRes),
          score: score,
          ...route.query
        }
      })

    })
    //上传考试成绩
    if(isUploadScore){
      console.log(route.query)
      api.score.scoreInfo({
        score:score,
        kskm:route.query.subject=='1'?'科目一':'科目四',
        type:carTypeMap[route.query.gs as string]
      }).then(res=>{
        console.log(res)

      })

    }







  }
  //上传考试成绩
  // const uploadDriveExamScore = ()=>{

  // }
  //删除驾驶考试的全部的错题
  const deleteAllWrong = () => {
    api.question.questionWrongCancelAll({
      km: Number(route.query.subject)
    }).then(res => {
      message.success({
        content: '成功清除'
      })

    })


  }

  watch(listIndex, (newVal, oldVal) => {
    if (config.autoAnswer) {
      //判断对错
      if (
        list.value[oldVal].questionType !== 3 &&
        !list.value[oldVal].isComplete &&
        list.value[oldVal].userAnswer.length
      ) {
        const userAnswer = list.value[oldVal].userAnswer as string;
        const answer = list.value[oldVal].answer;
        if (answer == userAnswer) {
          list.value[oldVal].isComplete = true;
          list.value[oldVal].isError = false;
          trueNum.value++;
        } else {
          list.value[oldVal].isComplete = true;
          list.value[oldVal].isError = true;
          falseNum.value++;
        }
      } else if (
        list.value[oldVal].questionType == 3 &&
        !list.value[oldVal].isComplete &&
        list.value[oldVal].userAnswer.length
      ) {
        const userAnswer = Object.assign([], list.value[oldVal].userAnswer) as string[];
        userAnswer.sort();
        const answer = list.value[oldVal].answer.split("-");
        answer.sort();
        if (userAnswer.toString() == answer.toString()) {
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
        list.value[oldVal].questionType !== 1 &&
        list.value[oldVal].isComplete
      ) {
		
        // alert(
        //   "正确答案：" + switchAnswerBySelect(list.value[oldVal].answer.split('-'), oldVal)
        // );
      } else if (
        list.value[oldVal].isError &&
        list.value[oldVal].questionType === 1 &&
        list.value[oldVal].isComplete
      ) {
       // alert("正确答案：" + list.value[oldVal].answer);
      }

    }
    if (store.state.sysConfig.autoRead) {
      playIssueAudio()
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

  onMounted(() => {
    message.loading('题目加载中', 0)
    requestFn.then(res => {
      res.rows.forEach((element) => {
        element.optsArr = element.opts.split("-");
        if (element.questionType !== 3) {
          element.userAnswer = "";
        } else if (element.questionType == 3) {
          element.userAnswer = [];
        }
      });
      window.sessionStorage.setItem('driverExam_current_list', JSON.stringify(res.rows))
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
    cancelUserAnswer,
    playIssueAudio,
    issueAutoRead,
    submitDriveExam,
    deleteAllWrong,
    setIsSkipWrong,
    setPageToListIndex,
	playSkillAudio,
	playExplainAudio,
	issueRed,
	previewImageVisible,
	answerAnalyVisible,

  }




}