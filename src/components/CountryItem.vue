<template>
  <div class="country-item">
    <img class="country-item__flag-img"
         :src=country.flag
         alt="flag-img">
    <div class="country-item__content">
      <h5 class="country-item__name">{{country.name}}</h5>
      <div class="country-item__text-block">
        <p class="country-item__text-block_name">
          {{"Population: "}}
        </p>
        <p class="country-item__text-block_value">
          {{country.population}}
        </p>
      </div>
      <div class="country-item__text-block">
        <p class="country-item__text-block_name">
          {{"Region: "}}
        </p>
        <p class="country-item__text-block_value">
          {{country.region}}
        </p>
      </div>
      <div class="country-item__text-block">
        <p class="country-item__text-block_name">
          {{"Capital: "}}
        </p>
        <p class="country-item__text-block_value">
          {{country.capital}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryItem",
  props: {
    country: Object|undefined
  }
}
</script>

<style lang="scss" scoped>

@media (max-width: 375px) {
  .country-item {
    display: flex;
    width: 264px;
    height: 336px;
    margin: 0 55px 40px 55px;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.05);
    flex-direction: column;
    &__flag-img {
      height: 160px;
      width: 264px;
    }
    &__content {
      width: 216px;
      align-items: baseline;
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      margin-bottom: 46px;
    }
    &__name {
      margin: 0 0 16px 0;
      padding: 0;
      font-weight: 800;
      font-size: 18px;
      line-height: 26px;
      color:  #111517;
    }
    &__text-block {
      display: flex;
      margin-bottom: 8px;
      &_name {
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
        margin-right: 3px;
      }
      &_value {
        font-size: 14px;
        font-weight: 300;
        line-height: 16px;
      }
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
