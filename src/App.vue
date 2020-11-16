<template>
  <div id="app">
    <SelectNum
      :numbers="numbers"
      :state="state"
      v-on:select="getActive"
    />
    <Exception
      :state="state"
      :current-num="currentNum"
      :factor="factor"
    />
  </div>
</template>

<script>
import SelectNum from '@/components/SelectNum'
import Exception from '@/components/Expression'

export default {
  name: 'App',
  components: {
    Exception,
    SelectNum
  },
  data () {
    return {
      numbers: [
        {
          value: 2,
          active: false
        },
        {
          value: 3,
          active: false
        },
        {
          value: 4,
          active: false
        },
        {
          value: 5,
          active: false
        },
        {
          value: 6,
          active: false
        },
        {
          value: 7,
          active: false
        },
        {
          value: 8,
          active: false
        },
        {
          value: 9,
          active: false
        }
      ],
      currentNum: null,
      factor: 5,
      state: 'select'
    }
  },
  methods: {
    getActive (index, state) {
      this.numbers.forEach((item) => {
        item.active = false
      })
      this.numbers[index].active = true
      this.currentNum = this.numbers[index].value
      this.setState(state)
    },
    setState (state) {
      this.state = state
    },
    getFactor () {
      return 3
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
