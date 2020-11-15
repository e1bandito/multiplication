<template>
  <section class="select">
    <div class="container">
      <h1 class="select__title">Выбери цифру, для тренировки умножения</h1>
      <ul class="select__list">
        <li class="select__item"
        v-for="(item, index) in numbers"
            :key="index"
            v-on:click="selectNumber(index, item, $event)"
        >{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SelectNum',
  props: {
    numbers: Array
  },
  methods: {
    selectNumber (index, item, event) {
      console.log(index)
      console.log(item)
      console.log(event.target)
      event.target.classList.add('select__item--active')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";
.select__title {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.15;
  text-align: center;
  color: $dark-blue;
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
}

.select__item {
  font-weight: bold;
  font-size: 100px;
  line-height: 1.2;
  text-align: center;
  color: $red;

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
