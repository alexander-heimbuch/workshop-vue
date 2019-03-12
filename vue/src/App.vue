<template>
  <div id="app">
    <card title="fooo" image="https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg" />
  </div>
</template>

<script>
import Card from './components/Card'

export default {
  components: {
    Card
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
</style>
