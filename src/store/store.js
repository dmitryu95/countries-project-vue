import { createStore } from 'vuex'

const store = createStore({
    state: {
        selectedCountry: {},
        filteredCountries: [],
    },
    mutations: {
        setSelectedCountry (state, country) {
            state.selectedCountry = country
        },
        setFilteredCountries(state, countries) {
            state.filteredCountries = countries
        }
    },
    actions: {
        selectCountry ({ commit }, country) {
            commit('setSelectedCountry', country)
        },
        saveCountries ({ commit }, countries) {
            commit('setFilteredCountries', countries)
        }
    },
    getters: {
        getSelectedCountry(state) {
            return state.selectedCountry
        },
        getFilteredCountries(state) {
            return state.filteredCountries
        }
    }
})

export default store
