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
        adminMenus: [
            {
                id: 1,
                path: "/admin",
                nameZh: "首页",
                parentId: 0,
                iconCls: null,
                children: null,
                },
                {
                id: 2,
                path: "/adminbbb",
                nameZh: "用户管理",
                iconCls: null,
                parentId: 0,
                children: [
                    {
                    id: 6,
                    path: "/bgfbfbgf",
                    iconCls: null,
                    nameZh: "用户信息",
                    parentId: 2,
                    children: null,
                    },
                    {
                    id: 7,
                    path: "/gbfbdb",
                    iconCls: null,
                    nameZh: "角色配置",
                    parentId: 2,
                    children: null,
                    },
                ],
                },
                {
                id: 3,
                path: "/dgbdbdb",
                nameZh: "内容管理",
                iconCls: null,
                parentId: 0,
                children: [
                    {
                    id: 9,
                    path: "/dbfdbdbf",
                    nameZh: "就业部类",
                    iconCls: null,
                    parentId: 3,
                    children: null,
                    },
                    {
                    id: 10,
                    path: "/dfbdbdfbdfb",
                    nameZh: "学生类",
                    iconCls: null,
                    parentId: 3,
                    children: [
                        {
                        id: 20,
                        path: "/dfbdbdfbd",
                        nameZh: "毕业生信息",
                        iconCls: null,
                        parentId: 10,
                        children: null,
                        },
                    ],
                    },
                    {
                    id: 11,
                    path: "/dbfdbszbfdz",
                    name: "Enterprise",
                    nameZh: "企业类",
                    iconCls: null,
                    component: "content/enterprise",
                    parentId: 3,
                    children: null,
                    },
                ],
                },
                {
                id: 4,
                path: "/dfbhdhdfh",
                name: "System",
                nameZh: "系统管理",
                iconCls: "el-icon-s-tools",
                component: "AdminIndex",
                parentId: 0,
                children: [
                    {
                    id: 12,
                    path: "/dfgdhbdfb",
                    name: "Run",
                    nameZh: "运行情况",
                    iconCls: null,
                    component: "system/run",
                    parentId: 4,
                    children: null,
                    },
                    {
                    id: 13,
                    path: "/dfgbdfhbdfbd",
                    name: "Data",
                    nameZh: "备份恢复数据库",
                    iconCls: null,
                    component: "system/data",
                    parentId: 4,
                    children: null,
                    },
                    {
                    id: 14,
                    path: "/safgbgfcbcxvbd",
                    name: "Log",
                    nameZh: "操作日志",
                    iconCls: null,
                    component: "system/log",
                    parentId: 4,
                    children: null,
                    },
                ],
                },
                {
                id: 5,
                path: "/dsgdfhgfdhb",
                name: "Link",
                nameZh: "链接",
                iconCls: null,
                component: "AdminIndex",
                parentId: 0,
                children: null,
                },
            ],
        };
    },
    mounted() {
        if (localStorage.menuList) {
        this.menuList = JSON.parse(localStorage.menuList);
        } else {
        this.$router.push({ path: "/login" });
        }
        console.log(this.menuList);
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