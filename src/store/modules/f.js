var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
const state = {
  confirmDetail:null,
  isWechat:isWeixin?true:false
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
