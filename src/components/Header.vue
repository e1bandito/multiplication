<template>
  <header class="header" v-if="state !== 'select'">
    <div class="container">
      <div class="header__inner">
        <p class="header__counter">Очков набрано: <span class="header__counter-val"
        :class="success ? 'header__counter-val--success' : 'header__counter-val--error'"
        >{{ counter }}</span> </p>
        <h2 class="header__title">Умножаем на {{ currentNum }}</h2>
        <Btn
          text="Сменить цифру"
          classes="btn--header"
          v-on:clickBtn="newNumber"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Btn from '@/components/Btn'
export default {
  name: 'Header',
  components: { Btn },
  props: {
    counter: Number,
    state: String,
    success: Boolean,
    currentNum: Number
  },
  methods: {
    newNumber () {
      this.$emit('newNumber')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.header__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.header__title {
  font-size: 40px;
  color: $dark-blue;
  margin: 0;
}

.header__counter {
  font-size: 24px;
  margin: 0;
  font-weight: 700;
  color: $grey;
  justify-self: start;
}

.header__counter-val {
  color: $dark-blue;

  &--success {
    color: $green;
  }

  &--error {
    color: $red;
  }
}
</style>
