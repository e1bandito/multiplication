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
      v-on:sendAnswer="showResult"
    />
    <Result
      :state="state"
      :counter="counter"
      :current-num="currentNum"
      :factor="factor"
      :res="res"
      :success="success"
      v-on:nextExp="nextExp"
    />
  </div>
</template>

<script>
import SelectNum from '@/components/SelectNum'
import Expression from '@/components/Expression'
import { getRes, getRndNum, shuffle } from '@/assets/js/functions'
import Result from '@/Result'

export default {
  name: 'App',
  components: {
    Result,
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
      res: null,
      state: 'select',
      counter: 0,
      success: undefined
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
      this.getExpression(this.answers)
    },
    setState (state) {
      this.state = state
    },
    getExpression (arr) {
      this.factor = getRndNum(1, 10)
      if (this.currentNum !== null) {
        arr.length = 0
        const res = getRes(this.currentNum, this.factor)
        arr.push(res)
        while (arr.length < 4) {
          const num = getRndNum(1, 10) * this.currentNum
          if (!arr.includes(num)) {
            arr.push(num)
          }
        }
        shuffle(arr)
      }
    },
    showResult (value) {
      this.res = getRes(this.currentNum, this.factor)
      if (this.res === value) {
        this.counter++
        this.success = true
      } else {
        this.counter--
        this.success = false
      }
      this.state = 'result'
    },
    nextExp () {
      this.setState('expression')
      this.getExpression(this.answers)
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
