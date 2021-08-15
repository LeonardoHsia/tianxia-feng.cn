export default {
    routes: [
        {
            id: 1001,
            path: '/login',
            name: '登录',
            component: () => import('@pages/Login'),
            slient: true
        }, {
            id: 2001,
            name: '首页',
            path: '/',
            redirect: '/home',
            slient: true
        }, {
            id: 2002,
            path: '/index',
            redirect: '/home',
            slient: true
        }, {
            id: 2003,
            path: '/home',
            component: () => import('@pages/Index')
        }, {
            id: 2004,
            name: '个人介绍',
            path: '/resume',
            component: () => import('@pages/Resume')
        }, {
            id: 2005,
            name: 'Hello World',
            path: '/helloworld',
            component: () => import('@pages/HelloWorld')
        }, {
            id: 2007,
            name: '项目介绍',
            path: '/project',
            component: () => import('@pages/Projects')
        }, {
            id: 0,
            name: '404',
            path: '*',
            component: () => import('@pages/404'),
            slient: true
        }
    ]
}
