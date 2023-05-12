<template>
  <button class="button" :type="type" :class="btnClass" @click="handleClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    btnClass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: "button"
}
  },
  setup(props, { emit }) {
    const count = ref(0)

    function handleClick() {
      count.value++
      emit('click', count.value)
    }

    return {
      count,
      handleClick
    }
  }
})
</script>

<style scoped>
.button {
  text-decoration: none;
  outline: none;
  border: none;
  background-color: #1a76d1;
  color: white;
  padding: 25px;
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
