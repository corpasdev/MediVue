<script lang="ts">
import { ref, computed, defineComponent, type PropType } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, required, numeric } from '@vuelidate/validators'
import type { MedicalOrder } from '@/types/medical-orders'
import type { Medicine } from '@/types/medicines'

export default defineComponent({
  name: 'MedicalOrderModal',
  props: {
    isOpen: { type: Boolean, required: true },
    medicines: { type: Array as PropType<Medicine[]>, require: true }
  },
  emits: ['save', 'hide'],
  setup(props, { emit }) {
    let isLoading = ref(false)
    const order = ref<MedicalOrder>({
      name: '',
      lastName: '',
      idNumber: '',
      eps: '',
      medicines: [],
      comments: '',
      doctorSignature: ''
    })

    const isModalOpen = computed(() => props.isOpen)
    const medicineOptions = computed(() => props.medicines)
    const rules = computed(() => ({
      name: { required },
      lastName: { required },
      idNumber: { required, numeric, maxLenght: maxLength(12) },
      eps: { required },
      medicines: [],
      doctorSignature: { required }
    }))

    const v$ = useVuelidate(rules, order)

    const handleSaveMO = async () => {
      const isFormValid = await v$.value.$validate()

      if (!isFormValid) {
        return
      }

      isLoading.value = true

      // TODO: save order
      order.value.createdAt = new Date().toISOString()
      emit('save', JSON.stringify(order.value))
      console.log('Guardando...')

      isLoading.value = false
    }

    const handleAddMedicine = () => {
      console.log('Agregando medicamento...')
    }

    return {
      v$,
      emit,
      order,
      isLoading,
      isModalOpen,
      handleSaveMO,
      medicineOptions,
      handleAddMedicine
    }
  }
})
</script>
<template>
  <!-- Scrollable modal -->
  <div v-show="isModalOpen" class="modal-dialog modal-dialog-scrollable">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis ut quasi eaque
      sed quo at amet non animi a exercitationem ipsa assumenda atque necessitatibus, consequuntur
      voluptatem laborum quod libero!
    </p>
  </div>
</template>

<style scoped>
.custom-modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000da;
  z-index: 9999;
}

.custom-modal {
  background-color: white;
  position: relative;
  height: 880px;
  width: 1200px;
  padding: 40px 0;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}
.close {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}

.is-bordered {
  border-bottom: 1px solid black;
}
</style>
