const Projects = [
    {
        name: 'Topo',
        path: 'topo',
        component: () => import('@pages/Projects/TopoProj'),
        meta: {
            screenshots: [
                'topo/lifecycle.png'
            ]
        }
    }, {
        name: 'Graph Drag Editor1',
        path: 'grapheditor',
        component: () => import('@pages/Projects/GraphDragEditor'),
        meta: {
            screenshots: [
                'topo/noExisted.png',
                'topo/lifecycle.png'
            ]
        }
    }, {
        name: 'Graph Drag Editor2',
        path: 'grapheditor',
        component: () => import('@pages/Projects/GraphDragEditor'),
        meta: {
            screenshots: [
                'topo/noExisted.png',
                'topo/lifecycle.png'
            ]
        }
    }, {
        name: 'Graph Drag Editor3',
        path: 'grapheditor',
        component: () => import('@pages/Projects/GraphDragEditor'),
        meta: {
            screenshots: [
                'topo/noExisted.png',
                'topo/lifecycle.png'
            ]
        }
    }, {
        name: 'Graph Drag Editor4',
        path: 'grapheditor',
        component: () => import('@pages/Projects/GraphDragEditor'),
        meta: {
            screenshots: [
                'topo/noExisted.png',
                'topo/lifecycle.png'
            ]
        }
    }
]

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
            component: () => import('@pages/Index'),
            name: '首页'
        }, {
            id: 2004,
            name: '个人介绍',
            path: '/resume',
            component: () => import('@pages/Resume')
        }, {
            id: 2007,
            name: '项目介绍',
            path: '/projects',
            component: () => import('@pages/Projects'),
            children: Projects
        }, {
            id: 0,
            name: '404',
            path: '*',
            component: () => import('@pages/404'),
            slient: true
        }
    ]
}

export {
    Projects
}
