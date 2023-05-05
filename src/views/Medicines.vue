<script setup lang="ts">
import { ref } from 'vue'
import LoadingSkeleton from '../components/shared/LoadingSkeleton.vue'
import MedicineModal from '../components/medicines/MedicineModal.vue'
import CustomTable from '../components/shared/CustomTable.vue'
import Welcome from '../components/common/Welcome.vue'

let isLoading = ref(false)
let isModalOpen = ref(false)

const getMedicines = () => {
  // isLoading.value = true
}

const handleAddMedicine = () => {}

// getMedicines()
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-12 mt-5 mb-5">
      <Welcome message="Bienvenid@ David P. Avila" />
    </div>

    <!-- Buttons -->
    <div class="column is-12 has-text-right">
      <button class="button is-primary" @click="isModalOpen = true">
        <span class="icon mr-1"> <i class="fa fa-plus"></i> </span> Agregar
      </button>
    </div>

    <div class="column is-12">
      <LoadingSkeleton v-if="isLoading" />
      <CustomTable v-else :cols="[]" :rows="[]" />
    </div>

    <MedicineModal
      :is-open="isModalOpen"
      @hide="isModalOpen = !isModalOpen"
      @save="handleAddMedicine"
    />
  </div>
</template>
