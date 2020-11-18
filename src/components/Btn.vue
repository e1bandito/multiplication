<template>
  <button
    class="btn"
    :class="classes"
    v-on:click="sendClick"
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
    sendClick () {
      this.$emit('clickBtn')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";

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

  &--header {
    font-size: 18px;
    padding: 12px 15px;
    min-width: 200px;
    background-color: $white;
    color: $blue;
    border: 2px solid $blue;
    transition: background-color 0.3s, color 0.3s;
    justify-self: end;

    @include max(500) {
      min-width: auto;
      padding: 10px;
      font-size: 16px;
    }

    &:hover {
      background-color: $blue;
      color: $white;
    }
  }
}

</style>
