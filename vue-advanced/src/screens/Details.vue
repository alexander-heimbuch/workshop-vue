<template>
  <div class="details">
    <router-link to="/">
      <button class="details__close">
        <close-icon />
      </button>
    </router-link>

    <div class="details__wrapper">
      <card :image="image" />
      <div class="details__info">
        <h2 class="details__headline details__title">{{ title }}</h2>
        <h3 class="details__headline">Abstract</h3>
        <p>{{ overview }}</p>
        <div class="details__rating">
          <star-icon />
          <div class="rating__content">{{ rating }}</div>
        </div>
        <div class="details__rating">
          <thumb-icon />
          <div class="rating__content">{{ votes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { StarIcon } from '../components/icons';
import { ThumbIcon } from '../components/icons';
import { CloseIcon } from '../components/icons';
import Card from '../components/Card';

export default {
  props: {
    id: {
      type: String
    }
  },

  computed: {
    ...mapGetters([ 'movie' ]),

    selectedMovie () {
      return this.movie(this.id) || {};
    },

    image () {
      return this.selectedMovie.image;
    },

    title () {
      return this.selectedMovie.title;
    },

    overview () {
      return this.selectedMovie.overview;
    },

    rating () {
      return this.selectedMovie.rating;
    },

    votes () {
      return this.selectedMovie.votes;
    }
  },

  components: {
    Card, StarIcon, ThumbIcon, CloseIcon
  }
}
</script>

<style lang="scss" scoped>
  .details {
    z-index: 99;

    left: 0;
    top: 0;

    position: fixed;

    display: flex;
    width: 100%;
    height: 100%;
    padding: 50px;

    justify-content: center;
    align-items: center;

    background: rgba(49, 57, 76, 0.9);

    .details__wrapper {
      display: flex;
      max-width: 990px;
      width: 100%;
    }

    .details__info {
      width: 50%;
      margin-left: 30px;
      font-weight: 100;
      color: beige;
    }

    .details__headline {
      text-transform: uppercase;
      font-weight: 100;
    }

    .details__title {
      font-size: 28px;
    }

    .details__close {
      top: 20px;
      right: 30px;
      position: absolute;
      color: beige;
      cursor: pointer;
    }

    .details__rating {
      display: flex;
    }

    .details__rating .rating__content {
      padding-left: 10px;
      font-size: 1.2em;
    }
  }
</style>
