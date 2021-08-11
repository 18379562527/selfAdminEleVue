const moduleA = {
    namespaced: true,
    state: {
        tagList: [{path:'/',name:'首页',iconCls:"el-icon-user-solid",isUnClose:true}], // 标签列表
        tagIndex: 0 // 当前选中标签下标
    },
    mutations: {
        // 添加标签
        addTagList(state,val){
            state.tagList.push(val);
        },
        // 删除标签
        removeTagList(state,index){
            state.tagList.splice(index,1);
        },
        // 设置当前选中标签
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