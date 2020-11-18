<template>
  <section class="select" v-if="state === 'select'">
    <div class="container">
      <div class="select__inner">
        <h1 class="select__title">Выбери цифру, для тренировки умножения</h1>
        <ul class="select__list">
          <li class="select__item"
          v-for="(item, index) in numbers"
              :key="index"
              v-on:click="selectNumber(index)"
              :class="{'select__item--active': item.active}"
          >{{ item.value }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SelectNum',
  props: {
    numbers: Array,
    state: String
  },
  methods: {
    selectNumber (index) {
      this.$emit('select', index, 'expression')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";

.select {
  padding: 30px 0;
}

.select__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.select__title {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.15;
  text-align: center;
  color: $dark-blue;
  margin: 0 0 75px 0;

  @include max($lg) {
    font-size: 30px;
  }

  @include max(500) {
    font-size: 26px;
    margin-bottom: 30px;
  }
}

.select__list {
  max-width: 525px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);

  @include max(500) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.select__item {
  font-weight: bold;
  font-size: 100px;
  line-height: 1.2;
  text-align: center;
  color: $red;
  transition: background-color 0.3s, color 0.3s;

  @include max(500) {
    font-size: 60px;
  }

  &--active {
    background-color: $dark-blue;
    color: $white;
  }

  &:hover {
    background-color: $dark-blue;
    color: $white;
    cursor: pointer;
  }
}

</style>
