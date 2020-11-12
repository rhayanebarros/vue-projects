<template>
  <div class="bank">
    <Return />
    <CashMachine/>
  </div>
</template>

<script>
// @ is an alias to /src
import CashMachine from '@/components/CashMachine.vue'
import Return from '@/components/shared/Return.vue'

export default {
  name: 'Bank',
  components: {
    Return,
    CashMachine
  }
}
</script>
