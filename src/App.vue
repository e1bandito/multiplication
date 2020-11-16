<template>
  <div id="app">
    <SelectNum
      :numbers="numbers"
      :state="state"
      v-on:select="getActive"
    />
    <Expression
      :state="state"
      :current-num="currentNum"
      :factor="factor"
      :answers="answers"
    />
  </div>
</template>

<script>
import SelectNum from '@/components/SelectNum'
import Expression from '@/components/Expression'

export default {
  name: 'App',
  components: {
    Expression,
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
      answers: [],
      currentNum: null,
      factor: null,
      state: 'select'
    }
  },
  methods: {
    shuffle (arr) {
      arr.sort(() => Math.random() - 0.5)
    },
    getRes (a, b) {
      return a * b
    },
    getActive (index, state) {
      this.numbers.forEach((item) => {
        item.active = false
      })
      this.numbers[index].active = true
      this.currentNum = this.numbers[index].value
      this.setState(state)
      this.getFactor()
      this.getAnswers(this.answers)
    },
    setState (state) {
      this.state = state
    },
    getRndNum (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    getFactor () {
      this.factor = this.getRndNum(1, 10)
    },
    getAnswers (arr) {
      if (this.currentNum !== null) {
        arr.length = 0
        const res = this.getRes(this.currentNum, this.factor)
        arr.push(res)
        while (arr.length < 4) {
          const num = this.getRndNum(1, 10) * this.currentNum
          if (!arr.includes(num)) {
            arr.push(num)
          }
        }
        this.shuffle(arr)
      }
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
