<template>
    <div class="tab">
        <el-table :data="tableData" :height="height" :style={width:width} highlight-current-row>
            <slot name="index"></slot>
            <slot name="selection"></slot>
            <el-table-column 
                :fixed="item.fixed" 
                :prop="item.prop" 
                :label="item.label" 
                :width="item.width" 
                v-for="(item, index) in colums"
                :key="index">
            </el-table-column>
            <slot name="operate"></slot>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: ()=>{ return []}
        },
        colums: {
            type: Array,
            default: ()=>{ return []}
        },
        height: {
            type: String,
            default: '0'
        },
        width: {
            type: String,
            default: '100%'
        },
        operate:{
            type: String,
            default: ''
        }
    },
    data() {
        return {
        };
    },
    mounted(){
        console.log(this.tableData)
        console.log(this.colums)
    },
    methods: {
        deleteRow(index, rows) {
        rows.splice(index, 1);
        },
    },

};
</script>