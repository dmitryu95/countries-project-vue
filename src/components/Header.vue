<template>
<div class="header">
  <p class="header__text">Where in the world?</p>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">

@media (max-width: 375px) {
  .header {
    display: flex;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.25);
    justify-content: left;
    height: 80px;
    width: 100%;
    align-items: center;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
    &__text {
      font-size: 14px;
      font-family: Nunito, sans-serif;
      font-weight: 800;
      line-height: 20px;
      color: #111517;
      margin-left: 16px;
    }
  }
}

</style>
