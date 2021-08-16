import mockjs from 'mockjs';

let data = mockjs.mock([
    {
        "id": "1",
        "pid": "0",
        "name": "工作台",
        "url": "/dashboard",
        "icon": "el-icon-s-platform",
        "children": []
    },
    {
        "id": "2",
        "pid": "0",
        "name": "教务管理",
        "icon": "el-icon-s-opportunity",
        "children": [
            {
                "id": "21",
                "pid": "2",
                "name": "学员中心",
                "url": "/educate/student"
            },
            {
                "id": "22",
                "pid": "2",
                "name": "班级管理",
                "url": "/educate/class"
            },
            {
                "id": "23",
                "pid": "2",
                "name": "课程管理",
                "url": "/educate/course"
            },
            {
                "id": "24",
                "pid": "2",
                "name": "课表管理",
                "url": "/educate/table"
            }
        ]
    },
    {
        "id": "3",
        "pid": "0",
        "name": "系统设置",
        "icon": "el-icon-s-opportunity",
        "children": [
            {
                "id": "31",
                "pid": "3",
                "name": "基础信息",
                "url": "/setting/base"
            },
            {
                "id": "32",
                "pid": "3",
                "name": "职员管理",
                "url": "/setting/user"
            },
            {
                "id": "33",
                "pid": "3",
                "name": "岗位管理",
                "url": "/setting/role"
            }
        ]
    }
])
export default data;