<template>
  <div id="app">
    <search-toggle class="search-toggle" @click="showSearch" v-if="!search" />
    <search-form v-if="search" @close="hideSearch" @search="onSearch"/>
    <cards-wrapper>
      <card v-for="(movie, index) in movies" :key="index" :title="movie.title" :image="movie.image" @click="showDetails(movie)" />
    </cards-wrapper>
    <movie-details v-if="details.visible" @close="hideDetails()" :title="details.title" :image="details.image" :overview="details.overview" :votes="details.votes" :rating="details.rating" />
  </div>
</template>

<script>
import api from './api'

import CardsWrapper from './components/CardsWrapper'
import Card from './components/Card'
import SearchToggle from './components/SearchToggle'
import SearchForm from './components/SearchForm'
import MovieDetails from './components/MovieDetails'

export default {
  data () {
    return {
      movies: [],
      search: false,
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
    MovieDetails
  },

  async mounted () {
    await this.fetchMovies();
  },

  methods: {
    onSearch (query) {
      this.fetchMovies(query).then(() => {
        this.search = false;
      });
    },

    async fetchMovies (q = '') {
      this.movies = await api.get({ q });
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

  .search-toggle {
    position: absolute;
    top: 20px;
    right: 30px;
  }
</style>
