
<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="inputValue"
    @input="handleInput"
    class="input-form"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = ref(props.modelValue)

    function handleInput(event: any) {
      inputValue.value = event.target.value
      emit('update:modelValue', inputValue.value)
    }

    return {
      inputValue,
      handleInput
    }
  }
})
</script>

<style scoped>
.input-form {
  border: none;
  outline: none;
  border: 0.5px solid #d7d7da81;
  border-radius: 3px;
  padding: 10px 18px;
  transition: .1s outline ease-in;
}

.input-form:focus {
    outline: 2px solid #000;
}
</style>

