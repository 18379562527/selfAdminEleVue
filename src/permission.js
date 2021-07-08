import router from './router'
// import store from './store/index'
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css' // 进度条样式
NProgress.configure({ showSpinner: false }) // 页面加载进度条配置

router.beforeEach((to, from, next)=>{
    // 进度条开始
    NProgress.start()
    console.log(to,from)
    let arr = ['/register','/login'];
    console.log(arr.includes(to.path))
    if(to.path === from.path){
        // 进度条开始
        next(false);
        NProgress.done();
    }
    if(arr.includes(to.path)){
        // 进度条开始
        next();
        NProgress.done();
    }else{
        console.log(localStorage.token)
        if(to.path === '/'){
            localStorage.setItem("token", "111");
        }
        console.log('localStorage.token',localStorage.getItem('token'))
        if(localStorage.getItem('token')){

            // let isHave = store.$store.state.a.tagList.some((item,index)=>{
            //     if(item.path === to.path){
            //         this.$emit('setTagIndex', index);
            //         return true;
            //     }else{
            //         return false;
            //     }
            // })
            // if(!isHave){
            //     this.$emit('addTagList',{name:to.name,path:to.path});
            //     this.$emit('setTagIndex', store.$store.state.a.tagList.length - 1);
            // }

            // 进度条开始
            next();
            NProgress.done();
        }else{
            // 进度条开始
            next({ path: '/login' });
            NProgress.done();
        }
    }
})
// 路由进入之后,确保进度条关闭
router.afterEach(() => {
    // 完成进度条
    NProgress.done();
})