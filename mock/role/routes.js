// Just a mock data

const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'projectManagement',
    name: 'projectManagement',
    meta: {
      title: '项目管理',
      icon: 'dashboard' // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/projectManagement/index'),
        name: 'Project',
        meta: { title: '项目', icon: 'dashboard', affix: true }
      },
      {
        path: 'entryDomain',
        component: () => import('@/views/projectManagement/entryDomain'),
        name: 'EntryDomain',
        meta: { title: '入口域名', icon: 'dashboard' }
      },
      {
        path: 'jumpDomain',
        component: () => import('@/views/projectManagement/jumpDomain'),
        name: 'JumpDomain',
        meta: { title: '跳转域名', icon: 'dashboard' }
      }
    ]
  }
]

const asyncRoutes = [{ path: '*', redirect: '/404', hidden: true }]

module.exports = {
  constantRoutes,
  asyncRoutes
}
