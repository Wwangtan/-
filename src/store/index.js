import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 默认定位
        city: '成都',
        // 可以选择的城市
        cityList: ['成都', '重庆'],
        // 购物车的商品数量
        proCount: 0,
        // 购物车中的内容
        carProList: [],
        // 商品列表选择的索引,
        chooseIndex: 0,
        // 注册登录的切换
        loginShow: true,
    },
    mutations: {
        // 修改选择的索引
        chooseIndex(state, index) {
            state.chooseIndex = index
        },
        carProListAdd(state, val) {
            // 数组中的第一个不用判断
            if (state.carProList.length < 1) {
                // 默认第一个直接加进去
                state.carProList.push(val)
            } else {
                // 根据result 判断数组中是否包含这个对象
                let result = true
                    // 当数组中有了对象，就把后面需要加入的进行比较
                for (let i in state.carProList) {
                    if (state.carProList[i].proName === val.proName) {
                        result = false
                        state.carProList[i].proNum += 1;
                        break
                    }
                }
                if (result) {
                    state.carProList.push(val)
                }
            }
        },
        goRegs(state) {
            state.loginShow = !state.loginShow
        }
    },
    actions: {},
    modules: {}
})