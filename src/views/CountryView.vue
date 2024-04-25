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
      <div class="country__text-content">
        <img class="country__flag-img"
             :src=country.flag
             alt="flag-image">
        <div class="country__about-main-wrap">
          <h3 class="country__name">{{country.name}}</h3>
          <div class="country__about-wrap">
            <div class="country__about-container">
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
          </div>
          <country-borders
              v-if="country.borders"
              :borders = 'country.borders'/>
        </div>
      </div>
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

    if(!this.country.name) {
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
      border-radius: 5px;
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
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
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
      margin: 44px 0 16px 0;
      display: flex;
    }
  }
  .mr-top {
    margin-top: 34px;
  }
}

@media (min-width: 375px) {
  .country {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    &__container {
      width: 100%;
    }
    &__btn {
      display: flex;
      flex-direction: row;
      padding: 0;
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.29);
      background-color: white;
      border: none;
      border-radius: 5px;
      width: 136px;
      height: 40px;
      justify-content: center;
      align-items: center;
      margin: 80px 0 80px 80px;
    }
    &__btn-icon {
      margin-right: 10px;
      width: 20px;
    }
    &__btn-title {
      font-size: 16px;
      font-weight: 300;
      line-height: 20px;
      color: #111517;
    }
    &__about-container {
      width: 100%;
      min-width: 250px;
    }
    &__text-content {
      display: flex;
    }
    &__item {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    &__flag-img {
      width: 560px;
      border-radius: 5px;
      display: flex;
      margin-left: 80px;
      margin-right: 120px;
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
    }
    &__about-main {
      margin: 44px 0 32px 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 250px;
    }
    &__about-main-wrap {
      width: 598px;
    }
    &__about-wrap {
      display: flex;
    }
    &__name {
      font-size: 22px;
      font-weight: 800;
      line-height: 30px;
      color: #111517;
      margin: 0 0 16px 0;
      display: flex;
    }
  }
  .mr-top {
    margin-top: 0;
  }
}

</style>
