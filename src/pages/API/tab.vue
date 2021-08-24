<template>
    <commonTab :tableData="tableData" :height="'300'" :width="'100%'" :colums="colums">
        <!-- <template> 
            <el-table-column label="序号" fixed="left" slot="index" type="index" align="center" width="70"></el-table-column>
        </template> -->
        <template> 
            <el-table-column label="序号" fixed="left" slot="selection" type="selection" align="center" width="70"></el-table-column>
        </template>
        <template>
            <el-table-column label="操作" fixed="right" slot="operate" width="300">
                <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope)"
                    >编辑</el-button
                >
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope)"
                    >删除</el-button
                >
                </template>
            </el-table-column>
        </template>
    </commonTab>
</template>

<script>
export default {
    data() {
        return {
        tableData: [
            {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
            {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
            {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
            {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
            {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
            {
            date: "2016-05-06",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
            {
            date: "2016-05-07",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            },
        ],
        colums: [
            { fixed: "left", prop: "date", label: "日期", width: 150 },
            { prop: "name", label: "姓名", width: 150 },
            { prop: "province", label: "省份", width: 150 },
            { prop: "city", label: "市区", width: 150 },
            { prop: "address", label: "地址", width: 500 },
            { prop: "zip", label: "邮编", width: 150 },
        ],
        height: "300",
        };
    },
    methods: {
        //编辑
        handleEdit(item) {
            console.log(item)
        },
        // 删除
        handleDelete(item) {
            console.log(item)
        },
    },
    };
</script>

<style scoped>

</style>
