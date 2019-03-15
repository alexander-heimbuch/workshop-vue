<template>
  <div id="app" :class="{ fixed: search || loading || details.visible }">
    <search-toggle class="search-toggle" @click="showSearch" v-if="!search" />

    <transition name="fade">
      <search-form v-if="search" :query="query" @close="hideSearch" @search="onSearch" />
    </transition>
    <transition name="fade">
      <cards-wrapper v-if="!loading && movies.length > 0">
        <card v-for="(movie, index) in movies" :key="index" :title="movie.title" :image="movie.image" @click="showDetails(movie)" />
      </cards-wrapper>
    </transition>
    <transition name="fade">
      <movie-details v-if="details.visible" @close="hideDetails()" :title="details.title" :image="details.image" :overview="details.overview" :votes="details.votes" :rating="details.rating" @keydown.esc="hideSearch" />
    </transition>
    <transition name="fade">
      <loader v-if="loading" />
    </transition>

    <not-found v-if="!loading && movies.length === 0" />
  </div>
</template>

<script>
import api from './api'

import CardsWrapper from './components/CardsWrapper'
import Card from './components/Card'
import SearchToggle from './components/SearchToggle'
import SearchForm from './components/SearchForm'
import MovieDetails from './components/MovieDetails'
import Loader from './components/Loader'
import NotFound from './components/NotFound'

export default {
  data () {
    return {
      movies: [],
      search: false,
      loading: false,
      query: '',
      details: {
        visible: false,
        title: null,
        image: null,
        overview: null,
        rating: null,
        votes: null
      },
    }
  },

  components: {
    Card,
    CardsWrapper,
    SearchToggle,
    SearchForm,
    MovieDetails,
    Loader,
    NotFound
  },

  async mounted () {
    await this.fetchMovies();
  },

  created () {
    document.addEventListener('keyup', (event) => {
      switch (event.which) {
        case 27: // ESC
          this.hideSearch();
          this.hideDetails();
          break;
      }
    });
  },

  methods: {
    onSearch (query) {
      this.search = false;
      this.query = query;
      this.fetchMovies(query);
    },

    async fetchMovies (q = '') {
      this.loading = true;
      this.movies = await api.get({ q });
      this.loading = false;
    },

    showSearch () {
      this.search = true;
    },

    hideSearch () {
      this.search = false;
    },

    showDetails ({ title, image, overview, rating, votes }) {
      this.details.visible = true;
      this.details.title = title;
      this.details.image = image;
      this.details.overview = overview;
      this.details.rating = rating;
      this.details.votes = votes;
    },

    hideDetails () {
      this.details.visible = false;
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
