<template>
    <div>
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
            return this.$store.getters['a/tagList'][this.$store.getters['a/tagIndex']].path;
        }
    },
    mounted() {
        if (localStorage.menuList) {
            this.menuList = JSON.parse(localStorage.menuList);
        } else {
            this.$router.push({ path: "/login" });
        }
    },
    methods: {
        menuSelect(path){
            this.$store.getters['a/tagList'].forEach((item,index) => {
                if(item.path === path){
                    this.$store.commit('a/setTagIndex',index);
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
/deep/ .el-menu {
    min-height:100vh;
    height: 100%;
    overflow: hidden;
    background: rgb(38, 52, 69) !important;
    color:rgb(191, 203, 217) !important;
}

/deep/.el-menu-item{
    font-size:16px;
}
/deep/.el-submenu__title,.el-submenu__title span{
    font-size:16px;
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
</style>