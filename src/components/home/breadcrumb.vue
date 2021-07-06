<template>
    <div>
        <div>
            <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isShow:{
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
        activeIndex: "1",
        activeIndex2: "1",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
    },
};
</script>

<style lang='scss'>
.breadcrumb {
    font-size: 18px;
}
</style>