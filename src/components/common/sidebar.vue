<template>
    <div class="scrollbar-wrapper">
        <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="rgb(48, 65, 86)"
        text-color="rgb(191, 203, 217)"
        :collapse-transition="true"
        mode="vertical"
        :router="true"
        :default-active="path"
        @select="menuSelect"
        >
            <navigationitem v-for="(item, index) in menuList" :key="index" :item="item" />
        </el-menu>
    </div>
</template>
<script>
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            menuList: [],
        };
    },
    computed:{
        path(){
            return this.$store.getters['tag/tagList'][this.$store.getters['tag/tagIndex']].path;
        }
    },
    mounted() {
        this.getMenuList()
    },
    methods: {
        getMenuList(){
            this.$http.post('/getMenuList',{role: sessionStorage.userName}).then(([success,res])=>{
                console.log('获取菜单列表');
                console.log(success,res);
                if(success){
                    this.menuList = res.body;
                }
            })
        },
        menuSelect(path){
            this.$store.getters['tag/tagList'].forEach((item,index) => {
                if(item.path === path){
                    this.$store.commit('tag/setTagIndex',index);
                }
            });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style scoped lang="scss">
/deep/ .el-menu {
    overflow: hidden;
    background: rgb(38, 52, 69) !important;
    color:rgb(191, 203, 217) !important;
    width: 100% !important;
}

/deep/.el-menu-item{
    font-size:16px;
    display: flex;
    align-items: center;
}
/deep/.el-submenu__title,.el-submenu__title span{
    font-size:16px;
    display: flex;
    align-items: center;
}
/deep/.el-menu-item{
    font-size:16px;
}
/* 改变elementui 侧边栏移入颜色 */
/deep/.el-menu-item:hover {
    background: rgb(38, 52, 69) !important;
}
/deep/.el-submenu__title:hover {
    background: rgb(38, 52, 69) !important;
}
/deep/.el-menu-item.is-active {
    background: rgb(38, 52, 69) !important;
}
/deep/.el-submenu__title.is-active {
    background: rgb(38, 52, 69) !important;
}
/deep/ .svg-icon{
    margin-right:10px;
}
</style>