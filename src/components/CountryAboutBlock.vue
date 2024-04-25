<template>
  <div class="country__about-block">
    <p class="country__about-name">{{nameField}}</p>
    <p class="country__about-value">{{valueField}}</p>
  </div>
</template>
<script>
export default {
  name: "CountryAboutBlock",
  props: {
    nameField: String,
    valueField: String|Number,
  },
}
</script>

<style lang="scss">
@media (max-width: 375px) {
  .country {
    &__about-block {
      display: flex;
    }
    &__about-name {
      font-weight: 600;
      font-size: 14px;
      line-height: 32px;
      color: #111517;
      margin: 0 3px 0 0;
    }
    &__about-value {
      font-weight: 400;
      font-size: 14px;
      line-height: 32px;
      color: #111517;
      margin: 0 3px 0 0;;
    }

  }

}
</style>
