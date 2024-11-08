import api from '@/api';
import { message } from 'ant-design-vue';
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    sysConfig: JSON.parse(window.localStorage.getItem('vuex_sysConfig') || '{"autoNext":true,"autoRead":false,"autoRed":false}') as {
      autoNext: boolean,
      autoRead: boolean,
      autoRed: boolean

    },
    model:'cart'
  },
  getters: {
  },
  mutations: {
    SET_SYSCONFIG(state, sysConfig: {
      autoNext: boolean,
      autoRead: boolean,
      autoRed: boolean

    }) {
      state.sysConfig = sysConfig
      return state


    },
    SET_MODEL(state,model:string){
      state.model = model
      return state
    }
  },
  actions: {
    LoginOut() {
      localStorage.setItem('token', '')
    },
    ClearDriver1WrongList() {
      api.question.questionWrongCancelAll({
        km: 1
      }).then(res => {
        window.localStorage.setItem('driverExam1_local_wrong_list', '[]')

        message.success('清除成功')

      })

    },
    ClearDriver4WrongList() {
      api.question.questionWrongCancelAll({
        km: 4
      }).then(res => {
        window.localStorage.setItem('driverExam4_local_wrong_list', '[]')

        message.success('清除成功')

      })

    },
    ClearThreeWrongList() {
      api.question.questionThreeWrongCancelAll().then(res => {
        window.localStorage.setItem('threeExam_local_wrong_list', '[]')

        message.success('清除成功')

      })

    },
    AsyncDriver4WrongList() {
      api.question.questionWrongWrongByUser({
        km: 4
      }).then(res => {
        window.localStorage.setItem('driverExam4_local_wrong_list', JSON.stringify(res.data || '[]'))
      })
    },
    AsyncDriver1WrongList() {
      api.question.questionWrongWrongByUser({
        km: 1
      }).then(res => {
        window.localStorage.setItem('driverExam1_local_wrong_list', JSON.stringify(res.data || '[]'))
      })
    },
    AsyncThreeWrongList() {
      api.question.questionThreeWrongWrongByUser().then(result => {
        window.localStorage.setItem('threeExam_local_wrong_list', JSON.stringify(result.data || '[]'))
      })
    }
  },
  modules: {
  }
})
