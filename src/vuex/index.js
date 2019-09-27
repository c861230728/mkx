import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:1,
        user_info:{},
        token: localStorage.getItem('token'),
        userID: localStorage.getItem('userID')
    },
    getters:{
        count:(state)=>{
            return state.count
        }
    },
    mutations:{
        // 设置token
        set_token(state,data){
            state.token = data
            localStorage.setItem('token',data)
        },
        // 获取用户ID
        get_user(state,data){
            state.userID = data
            localStorage.setItem('userID',data)
        },
        // 登出
        log_out(state){
          state.token = state.userID = null
            localStorage.removeItem('token')
            localStorage.removeItem('userID')
        },
        upCount(state,n){
            state.count=n
            console.log(n)
        },
        upUserInfo(state,value){
            state.user_info=value
        },
        upToken(state,value){
            state.token=value
        }
    }
})
export default store
