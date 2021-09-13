<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">
                    <!-- <a :href="item.path" v-if="item.isItClick && index !== breadcrumbList.length - 1">{{item.name}}</a> -->
                    <span :class="{fWeight: item.isItClick && (index === 0 || (index > 0 && index !== breadcrumbList.length - 1))}" @click="goToUrl(item)">{{item.name}}</span>
                </el-breadcrumb-item>
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
            breadcrumbList: [
                {path: '/', name: '首页',isItClick:true}
            ],
            menuList: sessionStorage.menuList ? JSON.parse(sessionStorage.menuList) : []
        };
    },
    watch:{
        '$route'(){
            console.log('666')
            this.breadcrumbList = [
                {path: '/', name: '首页',isItClick:true}
            ];
            this.getBreadcrumbList(this.$route.path,this.menuList)
        }
    },
    mounted(){
        this.getBreadcrumbList(this.$route.path,this.menuList)
    },
    methods: {
        goToUrl(item){
            if(item.isItClick){
                this.$router.push({path: item.path})
            }
        },
        //递归遍历菜单级数
        getBreadcrumbList(rootPath,menuList,step = 0){
            console.log(rootPath)
            if(rootPath === '/'){
                return
            }
            if(typeof step !== 'number'){
                console.error('TypeError：参数数据类型传输错误。')
                return
            }
            console.log('this.breadcrumbList',this.breadcrumbList)
            let pathList = rootPath.split('/').slice(1);
            console.log(pathList,step)
            let findPath = '/';
            pathList.forEach((item,index)=>{
                if(step >= index){
                    console.log(item,index)
                    let str = index === 0 ? item : '/' + item;
                    findPath += str;
                }
            })
            console.log('findPath',findPath)
            menuList.forEach(item=>{
                if(item.path === findPath && item.path !== '/'){ 
                    if(item.children && item.children.length > 0){
                        this.breadcrumbList.push({
                            path: item.path,
                            name: item.name
                        })
                        this.getBreadcrumbList(rootPath,item.children,++step);
                    }else{
                        this.breadcrumbList.push({
                            path: item.path,
                            name: item.name,
                            isItClick: true
                        })
                    }
                }
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
    .fWeight{
        font-weight: bold;
        cursor: pointer;
    }
}
</style>