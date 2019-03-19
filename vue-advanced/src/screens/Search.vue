<template>
  <div class="search__wrapper">
    <button class="search__close" @click="handleClick()">
      <close-icon />
    </button>
    <input class="search__input" placeholder="Search" :value="query" @keyup.enter="handleInput($event)" />
  </div>
</template>

<script>
import { CloseIcon } from '../components/icons';

export default {
  props: {
    query: {
      type: String
    }
  },

  components: {
    CloseIcon
  },

  methods: {
    handleClick () {
      this.$router.push('/');
    },

    handleInput ({ target }) {
      this.$router.push(`/${target.value}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.search__wrapper {
  left: 0;
  top: 0;

  position: fixed;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.6s;

  background: rgba(0, 0, 0, 0.6);
  z-index: 99;

  .search__input {
    color: beige;
    font-size: 52px;
    border-bottom: 1px solid beige;
    text-align: center;
    font-weight: 100;
  }

  .search__close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: beige;
    cursor: pointer;
  }
}
</style>
