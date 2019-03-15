<template>
  <button class="search-button" @click="clickHandler()">
    <search-icon />
  </button>
</template>

<script>
import { SearchIcon } from './icons'

export default {
  components: {
    SearchIcon
  },

  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-button {
    cursor: pointer;
    opacity: 1;
    color: beige;
  }
</style>
