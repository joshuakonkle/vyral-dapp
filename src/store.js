import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        key: "VyralDapp"
    })],

    state: {
        selectedWallet: 'METAMASK',
        termsAgreed: false,
        hasContributed: false,
        contributionValue: 1,
    },

    getters: {
        termsAgreed(state){
            return state.termsAgreed
        },

        selectedWallet(state){
            return state.selectedWallet
        },

        hasContributed(state){
            return state.hasContributed
        },

        contributionValue(state){
            return state.contributionValue
        }
    },

    mutations: {
        setTermsAgreed(state, hasAgreed){
           state.termsAgreed = hasAgreed
        },

        setWallet(state, walletType){
            state.selectedWallet = walletType
        },

        setContributedStatus(state, hasContributed){
            state.hasContributed = hasContributed
        },

        setContributionValue(state, amount){
            state.contributionValue = amount
        }
    },

    actions: {
        setTermsAgreed(context, hasAgreed){
            context.commit('setTermsAgreed', hasAgreed)
        },

        setWallet(context, walletType){
            context.commit('setWallet', walletType)
        },

        setContributedStatus(context, hasContributed){
            context.commit('setContributedStatus', hasContributed)
        },

        setContributionValue(context, amount){
            context.commit('setContributionValue', amount)
        }
    },
})