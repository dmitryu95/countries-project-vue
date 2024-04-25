<template>
  <div class="country__border-block">
    <p class="country__border-title">
      Border Countries:
    </p>
    <div class="country__border-list">
      <p class="country__border-name"
         v-for="border in borders"
         :key="borders">
        {{border}}
      </p>
    </div>
</div>
</template>

<script>

export default {
  name: "CountryBorders",
  props: {
    borders: String | Object,
  },
}

</script>

<style lang="scss">
@media (max-width: 375px) {
  .country {
    &__border-block {
      margin: 2px 0 0 0;
    }
    &__border-title {
      line-height: 24px;
      font-weight: 600;
      font-size: 16px;
      color: #111517;
      margin: 0 0 16px 0;
      padding: 0;
      display: flex;
    }
    &__border-list {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
    }
    &__border-name {
      font-size: 12px;
      line-height: 16px;
      font-weight: 300;
      color: #111517;
      width: 96px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 5px;
      border-radius: 3px;
      padding: 0;
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
    }
  }
}

@media (min-width: 375px) {
  .country {
    &__border-block {
      margin: 68px 0 0 0;
      width: 100%;
      display: flex;
      align-items: baseline;
    }
    &__border-title {
      line-height: 24px;
      font-weight: 600;
      font-size: 16px;
      color: #111517;
      padding: 0;
      display: flex;
      min-width: 140px;
      height: 33px;
    }
    &__border-list {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
    }
    &__border-name {
      font-size: 12px;
      line-height: 16px;
      font-weight: 300;
      color: #111517;
      width: 96px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 5px;
      border-radius: 3px;
      padding: 0;
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
