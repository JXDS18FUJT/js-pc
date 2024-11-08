import request from "../request"
import { openApi } from "./type"
export default {
    //获取分类的新接口
    question2InfoGetQuestionColumn(params: {
        model: string,
        subject: string

    }): Promise<openApi.question2InfoGetQuestionColumn> {
        return request({
            params,
            url: '/open-api/question2/info/getQuestionColumn'
        })

    },
    questionInfoSelectFreeQuestionInfo(params: {
        subject: number
    }): Promise<openApi.selectFreeQuestionInfoRes> {
        return request({
            params,
            url: "/open-api/question/info/selectFreeQuestionInfo",
            method: 'get'

        })
    },
    //获取题目的新接口
    question2InfoList(params: {
        columnAll?: string
        model?: string,
        subject: string | number
    }): Promise<openApi.selectFreeQuestionInfoRes> {
        return request({
            params,
            url: "/open-api/question2/info/list"
        })

    },
    //获取模拟考试题目
    questionInfoSelectTestK14QuestionInfoList(params: {
        subject: number,
        gs: string
    }): Promise<openApi.selectFreeQuestionInfoRes> {
        return request({
            params,
            url: "/open-api/question/info/selectTestK14QuestionInfoList",
            method: 'get'
        })
    },
    question2InfoSelectTestK14QuestionInfoList(params:{
        subject: number,
        model: string
    }): Promise<openApi.selectFreeQuestionInfoRes> {
        return request({
            params,
            url: "/open-api/question2/info/selectTestK14QuestionInfoList",
            method: 'get'
        })
    }
}
