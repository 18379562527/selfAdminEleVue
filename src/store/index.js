import Vue from 'vue'
import Vuex from 'vuex'
import tag from './modules/tag'
import user from './modules/user'
import createVuexAlong from "vuex-along";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tag: tag,
        user: user
    },
    plugins: [
        createVuexAlong({
            // 设置保存的集合名字，避免同站点下的多项目数据冲突
            name: "hello-vuex-along",
            local: {
                // list: ["a"],
                // // 过滤模块 ma 数据， 将其他的存入 localStorage
                // isFilter: true,
            },
            session: {
                // 保存模块 ma 中的 a1 到 sessionStorage  
                // tag.tagList 标签列表
                list: ["tag.tagList"],
            },
        }),
    ]
})

export default store;