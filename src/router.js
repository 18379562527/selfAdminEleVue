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
                iconName: 'component',
                isShowIcon: true,
                component: () => import('@/pages/downloadPDF') 
            },
            {
                path:'/demo',
                name:'服装管理',
                iconName: 'component',
                isShowIcon: true,
                children: [
                    {
                        path:'/demo/demo1',
                        name:'上衣',
                        component:() => import('@/pages/demo.vue'),
                    },
                    {
                        path:'/demo/demo2',
                        name:'下装',
                        iconName: 'component',
                        isShowIcon: true,
                        children: [
                            {
                                path:'/demo/demo2/demo3',
                                name:'短裤',
                                component:() => import('@/pages/demo3.vue'),
                            }
                        ]
                    }
                ]
            },
        ]
    },
];
let unMenuList = [
    { path: '/login', component: () => import('@/pages/login/login.vue') },
    { path: '/register', component: () => import('@/pages/login/register.vue') },
]
localStorage.setItem('menuList',JSON.stringify(menuList[0].children));

let router = new VueRouter({
    mode: 'hash',
    routes: menuList.concat(unMenuList)
})

export default router