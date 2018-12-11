<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppContent from "./components/AppContent.vue";

    export default {
        name: 'app',
        data () {
            return {
            }
        },
        components: {
            AppHeader,
            AppContent
        }
    }
</script>

<style lang="scss">
  .container {
    max-width: 1180px;
    padding: 0 10px;
    margin: 0 auto;
  }
  html, body {
    font-size: 18px;
  }
  html, body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  .btn {
    display: inline-block;
    border-radius: 5px;
    padding: 5px 10px;
    color: #ffffff;
  }
  .btn-success {
    background-color: #5cb85c;
    &:hover {
      background-color: #47a447;
      border-color: #398439;
    }
  }
  .btn-error {
    background-color: #d9534f;
    border-color: #d43f3a;
    &:hover {
      background-color: #d2322d;
      border-color: #ac2925;
    }
  }

</style>
