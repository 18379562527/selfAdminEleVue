import router from './router'
import store from './store/index'
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css' // 进度条样式

NProgress.configure({ showSpinner: false }) // 页面加载进度条配置

router.beforeEach(async (to, from, next) => {
    console.log(to, from)
    // 进度条开始
    NProgress.start()
    let hasAccountToken = sessionStorage.accountToken
    if (hasAccountToken) {
        // 设置标签页
        let isHave = store.state.tag.tagList.some(item => {
            if (item.path === to.path) {
                return true;
            } else {
                return false;
            }
        })
        if (from.name && to.name) {
            if (!isHave) {
                store.commit('tag/addTagList', { name: to.name, path: to.path });
                store.commit('tag/setTagIndex', store.state.tag.tagList.length - 1);
            } else {
                store.state.tag.tagList.forEach((item, index) => {
                    if (item.path === to.path) {
                        store.commit('tag/setTagIndex', index);
                    }
                })
            }
        } else {
            store.commit('tag/setTagIndex', 0);
        }
        next();
    }else{
        // 当进入的是当前页不进行跳转
        if (to.path === from.path) {
            next(false);
        }
        // 白名单
        let arr = ['/register', '/login'];
        if (arr.includes(to.path)) {
            // 进度条开始
            next();
        } else {
            next({ path: '/login' });
        }
    }
})
// 路由进入之后,确保进度条关闭
router.afterEach(() => {
    // 完成进度条
    NProgress.done();
})



