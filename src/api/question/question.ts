import request from "../request"
import { questionApi } from "./type"

export default {
    //获取分类专题分类
    questionInfoSelectFlQuestionInfo(params: {
        excellIssueName?: string
        excellSort?: number
        liceBus?: string
        liceCar?: string
        liceMoto?: string
        liceTruck?: string
        subject: number
    }): Promise<questionApi.selectSxQuestionInfo> {
        return request({
            params,
            url: "/pc/question/info/selectFlQuestionInfo",
            method: 'get'

        })
    },
    //取题查询题库列表
    questionInfoQlist(params: {

        classIssue?: string
        classIssueName?: string
        subject: number
        isRand: string

    }): Promise<questionApi.selectTestK14QuestionInfoList> {
        return request({
            params,
            url: "/pc/question/info/qlist",
            method: 'get'
        })
    },
    //清空错题
    questionWrongCancelAll(data: {
        km: number
    }) {

        return request({
            data,
            url: "/question/wrong/cancelAll",
            method: 'DELETE',

        })
    },
    //清空错题(三力测试)
    questionThreeWrongCancelAll(){
        return request({
            url: "/question/threeWrong/cancelAll",
            method: 'DELETE',

        })

    },
    //合并本机和云端的错题
    questionWrongWrongs(data: {
        km: number
        wrongs: { id: number, timestamp: number }[]

    }) {
        return request({
            data,
            url: "/question/wrong/wrongs",
            method: 'post',

        })
    },
    //合并本机和云端错题(三力测试)
    questionthreeWrongWrongs(data: {
        wrongs: { id: number, timestamp: number }[]

    }) {
        return request({
            data,
            url: "/question/threeWrong/wrongs",
            method: 'post',

        })
    },
    //获取用户的错题
    questionWrongWrongByUser(params: {
        km: number
    }): Promise<{data:{ id: number, timestamp: number }[]}> {
        return request({
            params,
            url: "/question/wrong/wrongByUser",
            method: 'get',

        })
    },
    //(三力测试)恢复云端错题到本机（根据用户获取错题）
    questionThreeWrongWrongByUser(): Promise<{data:{ id: number, timestamp: number }[]}> {
        return request({
            url: "/question/threeWrong/wrongByUser",
            method: 'get',

        })
    },
    //获取题库详细信息批量取题
    questionInfoGetQuestionInfoByIds(params: {
        ids: string
    }): Promise<questionApi.selectTestK14QuestionInfoList> {
        return request({
            url: "/pc/question/info/getQuestionInfoByIds",
            method: 'get',
            params

        })

    },

}