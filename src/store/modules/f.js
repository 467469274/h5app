const state = {
  confirmDetail:null
}

const getters = {
  confirmDetail(state){
    return state.confirmDetail
  }
}
const mutations = {
  setInfo(state,data){
    state.confirmDetail = data
  }
}
const actions = {
}
export default {
  state,
  getters,
  mutations,
  actions
}
