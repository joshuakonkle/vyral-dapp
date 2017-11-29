import Vue from 'vue'
import Router from 'vue-router'

import AgreeTermsPage from '@/components/AgreeTermsPage'
import SelectWalletPage from '@/components/SelectWalletPage'
import ContributePage from '@/components/ContributePage'
import ReferralLinkPage from '@/components/ReferralLinkPage'
import ReferrerPage from '@/components/ReferrerPage'


// import vueConfig from 'vue-config'
// const config = require("../utils/Config")



Vue.use(Router)
// Vue.use(vueConfig, config)


const routes = [
  {
    path: '/',
    name: 'AgreeTermsPage',
    component: AgreeTermsPage,
  },
  {
    path: '/select-wallet',
    name: 'SelectWalletPage',
    component: SelectWalletPage,
  },
  {
    path: '/contribute',
    name: 'ContributePage',
    component: ContributePage,
  },
  {
    path: '/referral-link',
    name: 'ReferralLinkPage',
    component: ReferralLinkPage,
  },
  {
    path: '/referrer/:referrer',
    name: 'ReferrerPage',
    component: ReferrerPage,
  }
];

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})
