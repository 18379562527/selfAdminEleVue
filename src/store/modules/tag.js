const moduleA = {
    namespaced: true,
    state: {
        count: 0,
        tagList: [{path:'/',name:'首页',iconCls:"el-icon-user-solid",isUnClose:true}],
        tagIndex: 0
    },
    mutations: {
        addTagList(state,val){
            state.tagList.push(val);
        },
        removeTagList(state,index){
            state.tagList.splice(index,1);
        },
        setTagIndex(state,index){
            state.tagIndex = index;
        }
    },
    actions: {},
    getters: {
        tagList(state){
            return state.tagList;
        },
        tagIndex(state){
            return state.tagIndex;
        }
    }
}

export default moduleA;