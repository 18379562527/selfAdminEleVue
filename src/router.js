import Vue from 'vue'
import VueRouter from 'vue-router'
import common from '@/components/common/index.vue' // 公共组件 侧边栏加头部
import mockData from '@/mockjs'
console.log('-------------mockData',mockData)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

let menuList = [
    { 
        path: '/', 
        component: common,
        children: [
            {
                path: '/',
                name: '首页',
                iconName: 'component',
                isShowIcon: true,
                component: () => import('@/pages/home.vue') 
            },
            {
                path: '/downloadPDF',
                name: 'PDF下载',
                iconName: 'pdf',
                isShowIcon: true,
                component: () => import('@/pages/downloadPDF') 
            },
        ]
    },
];
export const unMenuList = [
    { path: '/login', component: () => import('@/pages/login/login.vue') },
    { path: '/register', component: () => import('@/pages/login/register.vue') },
    { path: '/404', component: () => import('@/pages/error-page/404.vue') },
    { path: '/401', component: () => import('@/pages/error-page/401.vue') },
]
localStorage.setItem('menuList',JSON.stringify(menuList[0].children));

// router.addRoutes(menuList.concat(unMenuList))
let router = new VueRouter({
    mode: 'hash',
    routes: menuList.concat(unMenuList)
})
export default router