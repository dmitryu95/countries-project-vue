<template>
<div class="search-form">
  <img class="search-form__image"
      src="@/assets/search.svg"
      alt="search-svg">
  <input
      class="search-form__input"
      type="text"
      placeholder="Search for a country…"
      v-model.trim="text"
      @keyup.enter="sendText"
  >
</div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    sendText() {
      this.$emit('sendText', this.text)
    }
  }
}
</script>

<style lang="scss" scoped>

@media (max-width: 375px) {
  .search-form {
    display: flex;
    width: 93vw;
    min-width: 250px;
    max-width: 343px;
    height: 48px;
    margin: 24px 0;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.05);
    &__image {
      height: 16px;
      width: 16px;
      margin-left: 32px;
      margin-right: 26px;
    }
    &__input {
      width: 116px;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      outline: none;
      border: none;
    }&:focus {
         outline: none;
         border: none;
       }
  }
}
</style>
