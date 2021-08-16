import router from './router'
import store from './store/index'
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css' // 进度条样式
import mockData from '@/mockjs'
import serverApi from './units/server-api'

NProgress.configure({ showSpinner: false }) // 页面加载进度条配置
console.log('-------------router',router)
console.log('-------------mockData',mockData)
router.beforeEach(async(to, from, next)=>{
    console.log(to,from)
    // 进度条开始
    NProgress.start()
    let arr = ['/register','/login'];
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
        if(to.path === '/'){
            localStorage.setItem("token", "111");
        }
        
        if(localStorage.getItem('token')){
            let menuList = await getMenu();
            console.log('menuList',menuList)
            console.log(store.state)
            // if(!localStorage.menuList){
            //     localStorage.setItem('menuList',mockData);
            // }
            let isHave = store.state.tag.tagList.some(item=>{
                if(item.path === to.path){
                    return true;
                }else{
                    return false;
                }
            })
            if(from.name && to.name){
                if(!isHave){
                    store.commit('tag/addTagList',{name:to.name,path:to.path});
                    store.commit('tag/setTagIndex', store.state.tag.tagList.length - 1);
                }else{
                    store.state.tag.tagList.forEach((item,index)=>{
                        if(item.path === to.path){
                            store.commit('tag/setTagIndex', index);
                        }
                    })
                }
            }else{
                store.commit('tag/setTagIndex', 0);
            }
            
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



function getMenu(){
    let http = new serverApi();
    console.log('http',http)
    return new Promise((resolve,reject)=>{
        http.post('/api/selfAdminEleVue/getMenuList',{role:'admin'}).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err)
        })
    })
    
}