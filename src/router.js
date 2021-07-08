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
                path:'/',
                name:'首页',
                iconCls:'el-icon-user-solid',
                component:() => import('@/pages/home.vue') 
            },
            {
                path:'/demo',
                name:'测试',
                iconCls:'el-icon-user-solid',
                children: [
                    {
                        path:'/demo1',
                        name:'测试1',
                        component:() => import('@/pages/demo.vue'),
                    },
                    {
                        path:'/demo2',
                        name:'测试2',
                        component:() => import('@/pages/demo2.vue'),
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