import mockjs from 'mockjs';

let data = mockjs.mock({
    path:'/demo',
    name:'测试',
    iconName: 'test',
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
})
// {
//     path:'/demo',
//     name:'测试',
//     iconName: 'test',
//     isShowIcon: true,
//     children: [
//         {
//             path:'/demo/demo1',
//             name:'上衣',
//             component:() => import('@/pages/demo.vue'),
//         },
//         {
//             path:'/demo/demo2',
//             name:'下装',
//             iconName: 'component',
//             isShowIcon: true,
//             children: [
//                 {
//                     path:'/demo/demo2/demo3',
//                     name:'短裤',
//                     component:() => import('@/pages/demo3.vue'),
//                 }
//             ]
//         }
//     ]
// },
export default data;