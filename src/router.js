import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress' // 页面加载进度条
import common from '@/components/home/index.vue' // 公共组件 侧边栏加头部

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'hash',
    routes: [
        // 动态路径参数 以冒号开头
        { 
            path: '/', 
            component: common,
            children: [
                {
                    path:'home',
                    name:'首页',
                    component:() => import('@/pages/home.vue') 
                }
            ]
        },
        { path: '/login', component: () => import('@/pages/login/login.vue') },
        { path: '/register', component: () => import('@/pages/login/register.vue') },
    ]
})

router.beforeEach((to, from, next)=>{
    // 进度条开始
    NProgress.start()
    console.log(to,from)
    let arr = ['/register','/login'];
    console.log(arr.includes(to.path))
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
            // 进度条开始
            next();
            NProgress.done()
        }else{
            // 进度条开始
            next({ path: '/login' })
            NProgress.done()
        }
    }
})
export default router