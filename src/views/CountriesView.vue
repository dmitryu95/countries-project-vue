<template>
<div class="countries">
  <Header/>
  <SearchForm @sendText="sendText"/>
  <div v-if="findCountries.length === 0">
    <h5>No countries found</h5>
  </div>
  <ul class="countries__list">
    <li class="countries__item"
        v-for="country in findCountries"
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
import { mapActions } from 'vuex'

export default {
  name: 'CountriesView',
  components: { CountryItem, SearchForm, Header },
  data() {
    return {
      countries: data,
      text: 'def',
    }
  },
  computed: {
    findCountries() {
      return this.countries.filter((country) => {
        return country.name.includes(this.text);
      });
    },
  },
  methods: {
    ...mapActions(['selectCountry']),

    sendText (text) {
      this.text = `${text[0].toUpperCase()}${text.slice(1)}`
    },
    openCountry(country) {
      this.selectCountry(country);
      this.$router.push({ name: 'CountryView', params: { name: country.name }})
    }
  },
}

</script>


