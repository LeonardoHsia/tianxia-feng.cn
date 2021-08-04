export default {
    routes: [
        {
            id: 1001,
            path: '/login',
            name: '登录',
            component: () => import('@views/Login'),
            slient: true
        }, {
            id: 2001,
            name: '首页',
            path: '/',
            redirect: '/home',
            slient: true
        }, {
            id: 2002,
            name: '首页',
            path: '/index',
            redirect: '/home',
            slient: true
        }, {
            id: 2003,
            name: '首页',
            path: '/home',
            component: () => import('@views/Index')
        }, {
            id: 2004,
            name: '个人介绍',
            path: '/resume',
            component: () => import('@views/Resume')
        }, {
            id: 2005,
            name: 'Hello World',
            path: '/helloworld',
            component: () => import('@views/HelloWorld')
        }, {
            id: 2007,
            name: '项目介绍',
            path: '/project',
            component: () => import('@views/Projects')
        }, {
            id: 0,
            name: '404',
            path: '*',
            component: () => import('@views/404'),
            slient: true
        }
    ]
}
