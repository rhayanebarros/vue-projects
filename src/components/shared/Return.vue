<template>
  <div class="nav" id="nav">
    <router-link to="/">voltar</router-link>
  </div>
</template>

<script>
export default {
  name: 'Return'
}
</script>

<style scoped lang="scss">
.nav {
  padding: 40px 0 0 60px;
  a {
    font-size: 16px;
    font-weight: $medium;
    &::before {
      content: '';
      background-image: url('../../assets/images/left-arrow.svg');
      background-repeat: no-repeat;
      width: 13px;
      height: 13px;
      background-size: 100% auto;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      cursor: pointer;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
