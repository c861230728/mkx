import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:1,
        user_info:{},
        token:''
    },
    getters:{
        count:(state)=>{
            return state.count
        }
    },
    mutations:{
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