<template>
    <div class="slid-menu-item">
        <el-menu-item :index="item.path"  v-if="!item.children">
            <i :class="item.iconCls"></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-else>
            <template slot="title">
                <i :class="item.iconCls"></i>
                <span slot="title">{{ item.name }}</span>
            </template>
            <!-- <navigation-item v-for="(item2,index2) in item.children" :key="index2" :item="item2"></navigation-item > -->
                <el-menu-item :index="item2.path" v-for="(item2,index2) in item.children" :key="index2">
                    <span>{{ item2.name }}</span>
                </el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
export default {
    name: "navigationitem",
    props: {
        item: {
            type: Object,
            required: false,
        },
    },
};
</script>

<style lang="scss">
/*隐藏文字*/
.el-menu--collapse{
    .el-submenu__title{
        span{
            display: none;
        }
        .el-submenu__icon-arrow::before{
            content: '';
        }
    }
}
</style>