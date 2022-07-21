import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/Login'
// import RouteView from '@/layouts/RouteView'
// import MenuView from '@/layouts/MenuView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/views/login/Login'),
      invisible: true
    },
    {
      path: '/homePage',
      component: () => import('@/views/homepage/index'),
      hidden: true
    },
    {
      path: '/',
      name: '首页',
      // component: MenuView,
      component: () => import('@/layouts/MenuView'),
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        // {
        //   path: '/dashboard',
        //   name: '首页',
        //   // component: RouteView,
        //   component: () => import('@/layouts/RouteView'),
        //   icon: 'dashboard',
        //   children: [
        //     {
        //       path: '/dashboard/map',
        //       name: '车辆全图监控',
        //       component: () => import('@/views/Dashboard/Map'),
        //       icon: 'none',
        //     },
        //   ]
        // },
        {
          path: '/notice',
          name: '通知',
          // component: RouteView,
          component: () => import('@/layouts/RouteView'),
          icon: 'profile',
          children: [
            {
              path: '/notice/warning',
              name: '警报',
              component: () => import('@/views/Notice/Warning'),
              icon: 'none'
            },        
          ]
        },



        {
          path: '/list',
          name: '信息管理',
          // component: RouteView,
          component: () => import('@/layouts/RouteView'),
          icon: 'table',
          children: [
            {
              path: '/list/driver',
              name: '司机管理',
              component: () => import('@/views/List/Driver'),
              icon: 'none'
            },
            {
              path: '/list/vehicle',
              name: '车辆基础信息管理',
              component: () => import('@/views/List/Vehicle'),
              icon: 'none'
            },
            {
              path: '/list/details',
              name: '车辆详情页',
              component: () => import('@/views/List/Details'),
              icon: 'none',
              invisible:true
            },
          ]
        },
        {
          path: '/user',
          name: '用户信息',
          // component: RouteView,
          component: () => import('@/layouts/RouteView'),
          icon: 'check-circle-o',
          children: [
            {
              path: '/user/information',
              name: '个人中心',
              component: () => import('@/views/User/Information'),
              icon: 'none'
            },
            {
              path: '/user/modify',
              name: '基本设置',
              component: () => import('@/views/User/Modify'),
              icon: 'none'
            }
           
          ]
        },
      ]
    }
  ]
})
