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
        :unique-opened="true"
        mode="vertical"
        >
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
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
        return {};
    },
    methods: {
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
.el-menu {
    height: 100vh;
    overflow: hidden;
}
/* 改变elementui 侧边栏移入颜色 */
/deep/.el-menu-item:hover{
    background: rgb(38, 52, 69)!important;
}
/deep/.el-submenu__title:hover {
    background: rgb(38, 52, 69)!important;
}
/deep/.el-menu-item.is-active {
    background: rgb(38, 52, 69)!important;
}
/deep/.el-submenu__title.is-active {
    background: rgb(38, 52, 69)!important;
}
</style>