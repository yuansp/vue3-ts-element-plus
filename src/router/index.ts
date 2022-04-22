import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home'
    }
  },
  {
    path: '/index',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home'
    }
  },
  {
    path: '/table',
    name: 'table',
    redirect: '/table/table1',
    component: () => import('@/views/table/index.vue'),
    meta: {
      title: '表格',
      icon: 'table'
    },
    children: [
      {
        path: 'table1',
        name: 'table1',
        component: () => import('@/views/table/child/table1.vue'),
        meta: {
          title: '基础表格1',
          icon: 'table'
        }
      },
      {
        path: 'table2',
        name: 'table2',
        component: () => import('@/views/table/child/table2.vue'),
        meta: {
          title: '基础表格2',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    redirect: '/form/form1',
    component: () => import('@/views/form/index.vue'),
    meta: {
      title: '表单',
      icon: 'form'
    },
    children: [
      {
        path: 'form1',
        name: 'form1',
        component: () => import('@/views/form/child/form1.vue'),
        meta: {
          title: '基础表单1',
          icon: 'form'
        }
      },
      {
        path: 'form2',
        redirect: '/form/form2/form3',
        name: 'form2',
        component: () => import('@/views/form/child/form2.vue'),
        meta: {
          title: '基础表单2',
          icon: 'form'
        },
        children: [
          {
            path: 'form3',
            name: 'form3',
            component: () => import('@/views/form/child/form3.vue'),
            meta: {
              title: '基础表单3',
              icon: 'form'
            }
          },
          {
            path: 'form4',
            name: 'form4',
            component: () => import('@/views/form/child/form4.vue'),
            meta: {
              title: '基础表单4',
              icon: 'form'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/meus',
    name: '多级菜单',
    redirect: '/meus/meus1',
    meta: {
      title: '多级菜单'
    },
    component: () => import('@/views/meus/index.vue'),
    children: [
      {
        path: 'meus1',
        name: 'meus1',
        component: () => import('@/views/meus/meuchild/meus1.vue'),
        meta: {
          title: '多级菜单',
          icon: 'meus'
        }
      },
      {
        path: 'meus2',
        name: 'meus2',
        component: () => import('@/views/meus/meuchild/meus2.vue'),
        meta: {
          title: '多级菜单2',
          icon: 'meus'
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
