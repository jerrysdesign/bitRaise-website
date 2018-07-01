import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import AllServices from '@/components/AllServices'
import IcoMarketing from '@/components/IcoMarketing'
import IcoFinancial from '@/components/IcoFinancial'
import PosticoServices from '@/components/PosticoServices'
import IcoLegal from '@/components/IcoLegal'
import Team from '@/components/Team'
import Partners from '@/components/Partners'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/services',
      component: Services,
      meta: {
        scrollToTop: true
      },
      children: [
        {
          path: '',
          component: AllServices
        },
        {
          path: 'ico-marketing',
          component: IcoMarketing
        },
        {
          path: 'ico-legal',
          component: IcoLegal
        },
        {
          path: 'ico-financial',
          component: IcoFinancial
        },
        {
          path: 'post-ico-services',
          component: PosticoServices
        }
      ]
    }
  ]
})
