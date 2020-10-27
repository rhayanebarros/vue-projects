<template>
  <div class="home">
    <HomeContent msg="Hello world!"/>
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
