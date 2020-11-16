<template>
  <button
    class="btn"
    :class="classes"
    v-on:click="applyNum"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    text: String,
    classes: String,
    numbers: Array
  },
  methods: {
    applyNum () {
      this.numbers.forEach((item) => {
        if (item.active) {
          this.$emit('setState', 'exception')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.btn {
  appearance: none;
  border: none;
  min-width: 300px;
  background-color: $blue;
  color: $white;
  font-weight: 700;
  font-size: 26px;
  cursor: pointer;
  padding: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken($blue, 15%);
  }
}

</style>
