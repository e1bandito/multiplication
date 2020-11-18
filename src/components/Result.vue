<template>
  <section class="result" v-if="state === 'result'">
    <div class="container">
      <div class="result__inner">
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
@import "src/assets/styles/mixins";

.result {
  padding: 30px 0;

  @include max(500) {
    padding: 10px 0;
  }
}

.result__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result__text {
  color: $grey;
  margin: 0;
  font-size: 80px;
  text-align: center;
  font-weight: 700;

  @include max(500) {
    font-size: 40px;
    margin-bottom: 10px;
  }

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
  margin: 0;
  font-size: 30px;
  font-weight: 700;

  @include max(500) {
    font-size: 20px;
  }
}

.result__exp-val {
  color: $red;
  text-align: center;
  margin: 0 0 30px 0;
  font-size: 50px;
  font-weight: 700;

  @include max(500) {
    margin-bottom: 10px;
    font-size: 36px;
  }
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
  margin: 0 0 20px 0;
  font-size: 140px;
  font-weight: 700;

  @include max(500) {
    margin-bottom: 20px;
    font-size: 50px;
  }

  &--sub {
    color: $red;
  }

  &--up {
    color: $green;
  }
}
</style>
