import { createStore } from 'vuex'

const store = createStore({
    state: {
        selectedCountry: {}
    },
    mutations: {
        setSelectedCountry (state, country) {
            state.selectedCountry = country
        }
    },
    actions: {
        selectCountry ({ commit }, country) {
            commit('setSelectedCountry', country)
        }
    },
    getters: {
        getSelectedCountry(state) {
            return state.selectedCountry
        }
    }
})

export default store
