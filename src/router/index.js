import Vue from 'vue'
import Router from 'vue-router'

import AgreeTermsPage from '@/components/AgreeTermsPage'
import SelectWalletPage from '@/components/SelectWalletPage'
import ContributePage from '@/components/ContributePage'
import ReferralLinkPage from '@/components/ReferralLinkPage'
import GetReferralLinkPage from '@/components/GetReferralLinkPage'
import ReferrerPage from '@/components/ReferrerPage'
import CheckBalancePage from '@/components/CheckBalancePage'
import PreSaleEndedPage from '@/components/PreSaleEndedPage'


Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'PreSaleEndedPage',
    component: PreSaleEndedPage
  },
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
    path: '/get-referral-link',
    name: 'GetReferralLinkPage',
    component: GetReferralLinkPage,
  },
  {
    path: '/referrer/:referrer',
    name: 'ReferrerPage',
    component: ReferrerPage,
  },
  {
    path: '/balance',
    name: 'CheckBalancePage',
    component: CheckBalancePage,
  }
];

export default new Router({
  routes: routes,
  // mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})
