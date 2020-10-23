<template>
  <div class="home">
    <img alt="Gif Programação" src="https://media.giphy.com/media/cNfIqjpCY1zqfaLmd8/giphy.gif">
    <HomeContent msg="Hello World!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent
  }
}
</script>
