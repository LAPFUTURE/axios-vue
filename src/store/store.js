import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
    generals:{},//全部武将信息
    user:'',//用户信息
    collection:{},//用户收藏信息
    comment:{},//用户评论
    detailid:'',//武将id
    detail:'',//搜索的武将信息
    allusers:[],//所有用户信息
    },

    mutations:{
    quit(state){ 
      state.user = '';
      state.collection = '';
    },//用户离开时清除数据

    },

    
})