import { UserInfo as State } from './index'
const user = {
  mutations: {
    userCode(state: State, userCode: string) {
      state.userCode = userCode
    },
    userInfo(state: State, userInfo: State) {
      state = userInfo
    }
  },
  getters: {
    userCode(state: State) {
      return state.userCode
    },
    userInfo(state: State) {
      return state
    }
  }
}
export default user
