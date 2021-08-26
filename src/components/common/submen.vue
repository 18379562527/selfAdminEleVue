<template>
    <div class="slid-menu-item">
        <el-menu-item :index="item.route"  v-if="!item.children">
            <svg-icon class-name="component" :icon-class="item.icon" v-if="item.icon"/>
            <!-- <i :class="item.iconName" v-else ></i> -->
            <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu :index="item.route" v-else>
            <template slot="title">
                <svg-icon class-name="component" :icon-class="item.icon"  />
                <span slot="title">{{ item.name }}</span>
            </template>
            <navigationitem v-for="(item2,index2) in item.children" :key="index2" :item="item2"></navigationitem>
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