<template>
  <div class="countries">
    <Header/>
    <SearchForm @sendText="sendText"/>
    <div v-if="filteredCountries.length === 0">
      <h5>No countries found</h5>
    </div>
    <ul class="countries__list">
      <li class="countries__item"
          v-for="country in filteredCountries"
          :key="country.name"
          @click="openCountry(country)"
      >
      <country-item :country="country" />
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchForm from "@/components/SearchForm.vue";
import "@/scss/_countries.scss"
import data from "@/data.json";
import CountryItem from "@/components/CountryItem.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'CountriesView',
  components: { CountryItem, SearchForm, Header },
  data() {
    return {
      countries: data,
      text: '',
    }
  },
  computed: {
    filteredCountries() {
      return this.getFilteredCountries()
    },
  },
  methods: {
    ...mapActions(['selectCountry', 'saveCountries']),
    ...mapGetters(['getFilteredCountries']),

    findCountries() {
      this.saveCountries(this.countries.filter((country) => {
        return country.name.includes(this.text);
      }))
    },
    sendText (text) {
      this.text = text ?`${text[0].toUpperCase()}${text.slice(1)}`.trim() : 'country'
      this.findCountries()
    },
    openCountry(country) {
      this.selectCountry(country);
      this.$router.push({ name: 'CountryView', params: { name: country.name }})
    }
  }
}

</script>


