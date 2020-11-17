<template>
  <section class="result" v-if="state === 'result'">
    <div class="container">
      <div class="result__inner">
        <h2 class="result__title">Умножаем на {{ currentNum }}</h2>
        <p class="result__text result__text--success" v-if="success">В ТОЧКУ!</p>
        <p class="result__text result__text--error" v-else>МИМО!</p>
        <p class="result__exp-text">правильный ответ:</p>
        <p class="result__exp-val">{{ currentNum }} * {{ factor }} = {{ res }}</p>
        <p class="result__counter-text">очков набрано:</p>
        <p class="result__counter-val"
          :class="counter > 0 ? 'result__counter-val--up' : 'result__counter-val--sub'"
        >{{ counter }}</p>
        <Btn
          text="Дальше!"
          classes="btn--result"
          v-on:clickBtn="nextExp"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '@/components/Btn'
export default {
  name: 'Result',
  components: { Btn },
  props: {
    state: String,
    counter: Number,
    currentNum: Number,
    factor: Number,
    res: Number,
    success: Boolean
  },
  methods: {
    nextExp () {
      this.$emit('nextExp')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.result {
  padding: 70px 0;
}

.result__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result__title {
  margin: 0 0 60px 0;
  color: $dark-blue;
  font-size: 40px;
  text-align: center;
}

.result__text {
  color: $grey;
  margin: 0 0 10px 0;
  font-size: 80px;
  text-align: center;
  font-weight: 700;

  &--success {
    color: $green;
  }

  &--error {
    color: $red;
  }
}

.result__exp-text {
  text-align: center;
  color: $grey;
  margin: 0 0 10px 0;
  font-size: 30px;
  font-weight: 700;
}

.result__exp-val {
  color: $red;
  text-align: center;
  margin: 0 0 30px 0;
  font-size: 50px;
  font-weight: 700;
}

.result__counter-text {
  text-align: center;
  margin: 0;
  font-size: 30px;
  color: $grey;
  font-weight: 700;
}

.result__counter-val {
  text-align: center;
  color: $grey;
  margin: 0 0 50px 0;
  font-size: 140px;
  font-weight: 700;

  &--sub {
    color: $red;
  }

  &--up {
    color: $green;
  }
}
</style>
