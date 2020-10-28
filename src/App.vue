<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

// Fonts
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

// Resets and base
@import './assets/style/resets/reset.scss';
@import './assets/style/_utils.scss';
// @import './assets/style/_variables.scss'; __ globally imported via vue.config.js

body {
  background-color: $body-color;
  font-family: $font;
  font-weight: $regular;
  color: $gray-dark;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}
</style>
