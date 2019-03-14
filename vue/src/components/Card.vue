<template>
  <div class="card" @click="handleClick()">
    <div class="card__title" v-if="title">
      {{ title }}
    </div>

    <img class="card__poster" :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },

    image: {
      type: String
    }
  },

  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    position: relative;

    width: 300px;
    height: 435px;
    margin: 15px;

    border-radius: 10px;

    cursor: pointer;

    overflow: hidden;
    z-index: 2;
    will-change: transform;

    transition: all 0.2s linear;

    .card__title {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;

      position: absolute;

      width: 100%;
      height: 100%;
      padding: 10px;

      border-radius: 10px;

      font-size: 2em;
      line-height: 1.1em;
      text-align: center;

      color: white;
      background: rgba(0, 0, 0, 0.6);

      transition: opacity 0.6s;
    }

    .card__poster {
      width: 100%;
      height: auto;
    }

    &:hover {
      filter: contrast(1.2);
      transform: scale(1.1);
      z-index: 4;
    }

    &:hover .card__title {
      opacity: 1;
    }
  }
</style>
