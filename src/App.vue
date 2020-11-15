<template>
  <div id="app">
    <SelectNum :numbers="numbers"/>
  </div>
</template>

<script>
import SelectNum from '@/components/SelectNum'

export default {
  name: 'App',
  components: {
    SelectNum
  },
  data () {
    return {
      numbers: [2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";
@import "src/assets/styles/scaffolding";
#app {
  font-family: 'PT Sans', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
