<template>
  <div id="app" :class="{ fixed }">
    <router-link :to="`/search/${query}`" v-if="search">
      <search-toggle class="search-toggle" />
    </router-link>

    <transition name="fade">
      <cards-wrapper v-if="!loading && movies.length > 0">
        <card v-for="(movie, index) in movies" :key="index" :title="movie.title" :image="movie.image" @click="showDetails(movie)" />
      </cards-wrapper>
    </transition>

    <transition name="fade">
      <not-found v-if="!loading && movies.length === 0" />
    </transition>

    <transition name="fade">
      <loader v-if="loading" />
    </transition>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import SearchToggle from './components/SearchToggle'
import Loader from './components/Loader'
import CardsWrapper from './components/CardsWrapper'
import Card from './components/Card'
import NotFound from './components/NotFound'

export default {
  data () {
    return {
      loading: false
    }
  },

  components: {
    SearchToggle,
    Loader,
    Card,
    CardsWrapper,
    NotFound
  },

  watch: {
    query: 'load'
  },

  created () {
    this.load();
  },

  methods: {
    ...mapActions([
      'load'
    ]),

    showDetails (movie) {
      this.$router.push({ path: 'details', query: movie })
    }
  },

  computed: {
    ...mapGetters([
      'movies'
    ]),

    query () {
      return this.$route.params.query || ''
    },

    search () {
      return this.$route.matched.length === 0
    },

    fixed () {
      return true
    }
  }
}

</script>

<style lang="scss">
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #31394c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;
    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    line-height: normal;
    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    /* Corrects inability to style clickable `input` types in iOS */
    -webkit-appearance: none;
    /* Remove excess padding and border in Firefox 4+ */
  }

  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .fixed {
    overflow: hidden;
    height: 100vh;
  }

  .search-toggle {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 300ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
