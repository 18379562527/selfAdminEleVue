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
            <img src="@/assets/people.jpg" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in optionsList"
                :key="index"
                :command="item"
                :divided="item.isDivided"
                >{{ item.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click" class="peopleImg">
            <i class="el-icon-caret-bottom"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in optionsList"
                :key="index"
                :command="item"
                :divided="item.isDivided"
                >{{ item.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="tagList">
          <el-tag
            :key="index"
            v-for="(item,index) in tagList"
            :closable="!item.isUnClose"
            :disable-transitions="false"
            @click="goToUrl(item)"
            @close="tagClose(item)">
            {{item.name}}
          </el-tag>
        </div>
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
      optionsList: [
        { name: "个人信息", isDivided: false, clickFn: "" },
        { name: "登出", isDivided: true, clickFn: "goOut" },
      ],
    };
  },
  computed:{
    tagList(){
      return this.$store.state.a.tagList;
    }
  },
  mounted(){
    console.log(this.$store.state)
  },
  methods: {
    tagClose(index){
      let tagList = this.$store.state.a.tagList;
      tagList.replice(index,1);
      console.log(tagList)
    },
    goToUrl(item){
      this.$router.push({path:item.url});
    },
    cutSidebar() {
      this.isShow = !this.isShow;
    },
    Fn(item) {
      console.log(item);
      console.log(this[item.clickFn]);
      if (this[item.clickFn]) {
        this[item.clickFn]();
      }
    },
    goOut() {
      console.log("666");
      localStorage.setItem("token", "");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang='scss'>
* {
  padding: 0;
}
.content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .contentRight {
    width: 100%;
    height:100vh;
    display: flex;
    flex-wrap: wrap;
    background: white;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 15px;
      box-shadow: 0 1px 5px #999;
      .iCon {
        display: flex;
        align-items: center;
        font-size: 24px;
        i {
          margin-right: 20px;
        }
      }
      .peopleImg {
        margin-right: 5px;
        img {
          width: 40px;
          overflow: hidden;
          border-radius: 4px;
        }
      }
    }
    .tagList{
      padding:10px;
      span{
        margin-right:15px;
      }
    }
    .activeViews {
      width: calc(100% - 20px);
      padding: 15px 5px 15px 15px;
      background: #f0f2f5;
      height: calc(100% - 146px);
      overflow-y: scroll;
    }
  }
}
div::-webkit-scrollbar{
  width:10px;
  height:10px;
  /**/
}
div::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
div::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
div::-webkit-scrollbar-thumb:hover{
  background: #333;
}
div::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>