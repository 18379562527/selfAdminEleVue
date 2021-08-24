const moduleA = {
    namespaced: true,
    state: {
        token: undefined
    },
    mutations: {
        setToken(state,token){
            state.token = token
        }
    },
    actions: {
        
    },
    getters: {}
}

export default moduleA;