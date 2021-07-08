const moduleA = {
    state: {
        count: 0,
        tagList: [{url:'/',name:'首页',iconCls:"el-icon-user-solid",isUnClose:true}],
        tagIndex:0
    },
    mutations: {
        addTagList(state,val){
            state.tagList.push(val);
        },
        removeTagList(state,index){
            state.tagList.resplice(index,1);
        },
        setTagIndex(state,index){
            state.tagIndex = index;
        }
    },
    actions: {},
    getters: {}
}

export default moduleA;