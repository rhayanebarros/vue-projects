<template>
  <div class="caixa">
    <CaixaEletronico/>
  </div>
</template>

<script>
// @ is an alias to /src
import CaixaEletronico from '@/components/CaixaEletronico.vue'

export default {
  name: 'Caixa',
  components: {
    CaixaEletronico
  }
}
</script>
