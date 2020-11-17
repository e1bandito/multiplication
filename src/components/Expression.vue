<template>
  <section class="expression" v-if="state === 'expression'">
    <div class="container">
      <div class="expression__inner">
        <h2 class="expression__title">Умножаем на {{ currentNum }}</h2>
        <p class="expression__text">Сколько получится, если..</p>
        <p class="expression__quest">{{ currentNum }} * {{ factor }} = ?</p>
        <h3 class="expression__answers-title">Варианты ответов:</h3>
        <ul class="expression__list">
          <li class="expression__item"
          v-for="(item, index) in answers"
              :key="index"
          >
            <Radio
              :item="item"
              :index="index"
              v-on:getValue="getRadioValue"
            />
          </li>
        </ul>
        <Btn
          text="Я выбрал!"
          classes="btn--expression"
          v-on:clickBtn="applyAnswer"
        />
      </div>
    </div>
  </section>
</template>

<script>

import Radio from '@/components/Radio'
import Btn from '@/components/Btn'
export default {
  name: 'expression',
  components: { Btn, Radio },
  props: {
    state: String,
    currentNum: Number,
    factor: Number,
    answers: Array
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    getRadioValue (item) {
      this.value = item
    },
    applyAnswer () {
      if (this.value !== null) {
        this.$emit('sendAnswer', this.value)
      }
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";

.expression {
  padding: 70px 0;
}

.expression__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.expression__title {
  color: $dark-blue;
  font-size: 40px;
  text-align: center;
  margin: 0 0 40px 0;
}

.expression__text {
  color: $grey;
  margin: 0 0 60px 0;
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  font-weight: 700;
}

.expression__quest {
  color: $red;
  font-weight: 700;
  font-size: 100px;
  margin: 0 0 60px 0;
}

.expression__answers-title {
  color: $grey;
  margin: 0 0 40px 0;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
}

.expression__list {
  @include lsr;
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto 70px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
