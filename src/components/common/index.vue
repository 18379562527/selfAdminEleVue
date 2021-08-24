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
            <img src="@/assets/img/people.jpg" />
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
            :effect="tagIndex === index ? 'dark' : 'plain'"
            @click="goToUrl(item,index)"
            @close="tagClose(index)">
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
      console.log(this.$store.state.tag.tagList)
      return this.$store.state.tag.tagList;
    },
    tagIndex(){
      return this.$store.getters['tag/tagIndex'];
    }
  },
  mounted(){
  },
  methods: {
    tagClose(index){
      if(this.$route.path === this.tagList[index].path){
        this.$store.commit('tag/setTagIndex',0);
        this.$router.push({path:'/'});
      }else{
        this.$store.commit('tag/setTagIndex',this.$store.getters['tag/tagIndex'] > index ? this.$store.getters['tag/tagIndex'] - 1 : this.$store.getters['tag/tagIndex']);
      }
      this.$store.commit('tag/removeTagList',index);
    },
    goToUrl(item){
      this.$router.push({path:item.path});
    },
    cutSidebar() {
      this.isShow = !this.isShow;
    },
    Fn(item) {
      if (this[item.clickFn]) {
        this[item.clickFn]();
      }
    },
    goOut() {
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
  .contentLeft{
    height:100vh;
    max-width: 236px;
    overflow-y: auto;
    background: #263445 !important;
  }
  .contentRight {
    width:100%;
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
        .el-icon-s-fold,.el-icon-s-unfold{
          cursor: pointer;
        }
      }
      .peopleImg {
        margin-right: 5px;
        cursor: pointer;
        img {
          width: 40px;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .tagList{
      padding:10px 15px;
      span{
        margin-right:15px;
        cursor: pointer;
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
  background: #999;
}
div::-webkit-scrollbar-corner{
  background: transparent;
}
/* 改变elementui 侧边栏移入颜色 */
.el-menu--vertical{
  .el-menu{
    .el-menu-item:hover {
        background: rgb(38, 52, 69) !important;
    }
  }
}
</style>