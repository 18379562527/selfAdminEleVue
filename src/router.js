import Vue from 'vue'
import VueRouter from 'vue-router'
import common from '@/components/common/index.vue' // 公共组件 侧边栏加头部

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

export const defaultRouters = [
    { 
        path: '/', 
        component: common,
        children: [
            {
                path: '/',
                name: '首页',
                iconName: 'component',
                isShowIcon: true,
                component: () => import('@/pages/home'),
                mate: {
                    relo: '0',
                }
            },
            {
                path: '/downloadPDF',
                name: 'PDF下载',
                iconName: 'pdf',
                isShowIcon: true,
                component: () => import('@/pages/downloadPDF'),
                mate: {
                    relo: '1',
                }
            },
            {
                path: '/API',
                name: '组件API',
                iconName: 'API',
                isShowIcon: true,
                component: () => import('@/pages/API') ,
                mate: {
                    relo: '2',
                },
                children:[
                    {
                        path: '/API/commonTab',
                        name: '表格组件',
                        component: () => import('@/pages/API/tab.vue'),
                        mate: {
                            relo: '2',
                        }
                    },
                ]
            },
            
        ]
    },
    { path: '/login', component: () => import('@/pages/login/login.vue') },
    { path: '/register', component: () => import('@/pages/login/register.vue') },
    { path: '/404', component: () => import('@/pages/error-page/404.vue') },
    { path: '/401', component: () => import('@/pages/error-page/401.vue') },
    { path: '*', component: () => import('@/pages/error-page/404.vue')},
];

let router = new VueRouter({
    mode: 'hash',
    routes: defaultRouters
})
// const router = createRouter()
// export function resetRouter() {
//     const newRouter = router()
//     router.matcher = newRouter.matcher // 新路由实例matcer，赋值给旧路由实例的matcher，（相当于replaceRouter）
// }
export default router