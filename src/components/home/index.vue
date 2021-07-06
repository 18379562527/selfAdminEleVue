<template>
  <div class="content">
    <div class="contentLeft">
      <Sidebar :isCollapse="isShow"></Sidebar>
    </div>
    <div class="contentRight">
      <header>
        <div class="iCon">
          <i class="el-icon-s-fold" v-show="isShow" @click="cutSidebar"></i>
          <i class="el-icon-s-unfold" v-show="!isShow" @click="cutSidebar"></i>
          <Breadcrumb :isShow="isShow"></Breadcrumb>
        </div>
        <div>
          <el-dropdown trigger="click" class="peopleImg" @command="Fn">
            <img src="@/assets/people.jpg">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,index) in optionsList" :key="index" :command="item" :divided="item.isDivided">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="peopleImg">
            <i class="el-icon-caret-bottom"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,index) in optionsList" :key="index" :command="item" :divided="item.isDivided">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="activeViews">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrumb from "./breadcrumb";
import Sidebar from "./sidebar";
export default {
  components: {
    Breadcrumb,
    Sidebar,
  },
  data() {
    return {
      isShow: false,
      optionsList:[
        {name:'个人信息',isDivided:false,clickFn:''},
        {name:'登出',isDivided:true,clickFn:'goOut'}
      ]
    };
  },
  methods: {
    cutSidebar() {
      this.isShow = !this.isShow;
    },
    Fn(item){
      console.log(item)
      console.log(this[item.clickFn])
      if(this[item.clickFn]){
        this[item.clickFn]();
      }
    },
    goOut(){
      console.log('666')
      localStorage.setItem('token','');
      this.$router.push({path:'/login'});
    }
  },
};
</script>
<style lang='scss'>
*{
  padding:0;
}
.content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .contentRight {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width:100%;
      padding:10px 15px;
      box-shadow:0 1px 5px #999;
      .iCon {
        display: flex;
        align-items: center;
        font-size: 24px;
        i {
          margin-right: 20px;
        }
      }
      .peopleImg{
        margin-right:5px;
        img{
          width:40px;
          overflow: hidden;
          border-radius: 4px;
        }
      }
    }
    .activeViews{
      width:100%;
      padding:15px;
    }
  }
}
</style>