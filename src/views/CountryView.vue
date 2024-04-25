<template>
  <div class="country">
    <Header/>
    <div class="country__container">
      <button class="country__btn"
              @click="openMainPage()">
        <img class="country__btn-icon"
             src="@/assets/back.png"
             alt="back-btn"
        >
        <p class="country__btn-title">Back</p>
      </button>
      <img class="country__flag-img"
           :src=country.flag
           alt="flag-image">
      <div class="country__about-main">
        <h3 class="country__name">{{country.name}}</h3>
        <country-about-block
          :name-field = "`Native Name: `"
          :value-field="country.nativeName"
        />
        <country-about-block
            :name-field = "`Population: `"
            :value-field="country.population"
        />
        <country-about-block
            :name-field = "`Region: `"
            :value-field="country.region"
        />
        <country-about-block
            :name-field = "`Sub Region: `"
            :value-field="country.subregion"
        />
        <country-about-block
            :name-field = "`Capital: `"
            :value-field="country.capital"
        />
      </div>
      <div class="country__about-main mr-top">
        <div class="country__about-block">
          <p class="country__about-name">Top Level Domain:</p>
          <p class="country__about-value"
             v-for="(item, index) in country.topLevelDomain"
             :key="index"
            >{{item}}</p>
        </div>
        <div class="country__about-block">
          <p class="country__about-name">Currencies: </p>
          <p class="country__about-value"
             v-for="(item, index) in country.currencies"
             :key="index"
          >{{item.name}}</p>
        </div>
        <div class="country__about-block">
          <p class="country__about-name">Languages: </p>
          <p class="country__about-value"
             v-for="(item, index) in country.languages"
             :key="index"
          >
            {{item.name}}{{country.languages.length - 1 === index ? '' : ', '}}
          </p>
        </div>
      </div>
      <country-borders
        :borders = 'country.borders'/>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapGetters } from 'vuex'
import CountryAboutBlock from "@/components/CountryAboutBlock.vue";
import CountryBorders from "@/components/CountryBorders.vue";

export default {
  name: 'CountryView',
  components: {CountryBorders, Header, CountryAboutBlock},
  data() {
    return {
      country: {}
    }
  },
  methods: {
    ...mapGetters(['getSelectedCountry']),

    openMainPage() {
      this.$router.push({ path: `/` });
    },
  },
  mounted() {
    this.country = this.getSelectedCountry()

    if(!this.country) {
      this.$router.push({ path: `/` });
    }
  },
}
</script>

<style lang="scss" scoped>

@media (max-width: 375px) {
  .country {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    &__container {
      max-width: 320px;
      width: 100%;
      min-width: 250px;
      padding-bottom: 60px;
    }
    &__btn {
      display: flex;
      flex-direction: row;
      padding: 0;
      box-shadow: 0 3px 7px 4px rgba(0, 0, 0, 0.25);
      background-color: white;
      border: none;
      width: 104px;
      height: 32px;
      justify-content: center;
      align-items: center;
      align-self: baseline;
      margin: 40px 0 64px 0;
    }
    &__btn-icon {
      margin-right: 8px;
      width: 18px;
    }
    &__btn-title {
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      color: #111517;
    }
    &__item {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    &__flag-img {
      width: 320px;
      border-radius: 5px;
    }
    &__about-main {
      margin: 44px 0 32px 0;
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }
    &__name {
      font-size: 22px;
      font-weight: 800;
      line-height: 30px;
      color: #111517;
      margin: 0 0 16px 0;
    }
  }
  .mr-top {
    margin-top: 0;
  }
}
</style>
