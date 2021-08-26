const moduleA = {
    namespaced: true,
    state: {
        token: undefined,
        relo: '', // 权限  2 超级管理员  1 管理员  0 游客
        asyncRouters: [], // 异步菜单列表（最终菜单列表）
    },
    mutations: {
        setToken(state,token){
            state.token = token
        },
        setRelo(state,relo){
            state.relo = relo
        },
    },
    actions: {},
    getters: {}
}

export default moduleA;