<template>
  <div class="cards">
    <div class="cards__grid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  position: relative;
  margin: 75px 0;

  .cards__grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 990px;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
  }
}
</style>
