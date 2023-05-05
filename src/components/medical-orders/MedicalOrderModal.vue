<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, required, numeric } from '@vuelidate/validators'
import type { MedicalOrder } from '@/types/medical-orders'

export default defineComponent({
  name: 'MedicalOrderModal',
  props: {
    isOpen: { type: Boolean, required: true }
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
      handleAddMedicine
    }
  }
})
</script>

<template>
  <div v-show="isModalOpen" class="custom-modal-overlay">
    <div class="custom-modal">
      <div class="columns is-multiline px-5">
        <div class="column is-12 mt-5">
          <h3 class="title is-size-5 is-bordered">Información del paciente</h3>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="has-text-grey has-text-weight-light"
              >Nombres del paciente<span class="has-text-danger">*</span></label
            >
            <div class="control">
              <input v-model="v$.name.$model" class="input" type="text" />
            </div>
            <p v-if="v$.name.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="has-text-grey has-text-weight-light"
              >Apellidos del paciente<span class="has-text-danger">*</span></label
            >
            <div class="control">
              <input v-model="v$.lastName.$model" class="input" type="text" />
            </div>
            <p v-if="v$.lastName.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="has-text-grey has-text-weight-light"
              >Cedula<span class="has-text-danger">*</span></label
            >
            <div class="control">
              <input v-model="v$.idNumber.$model" class="input" type="text" />
            </div>
            <p v-if="v$.idNumber.maxLenght.$invalid" class="has-text-danger">
              Límite de 12 carácteres
            </p>
            <p v-if="v$.idNumber.required.$invalid" class="has-text-danger">Campo obligatorio</p>
            <p v-if="v$.idNumber.numeric.$invalid" class="has-text-danger">
              Campo debe ser númerico
            </p>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="has-text-grey has-text-weight-light"
              >EPS<span class="has-text-danger">*</span></label
            >
            <div class="control has-icons-left">
              <div class="select is-fullwidth">
                <select v-model="v$.eps.$model">
                  <option value="SURA" selected>SURA</option>
                  <option value="PONAL">PONAL</option>
                  <option value="SALUD TOTAL">SALUD TOTAL</option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <i class="fa fa-building"></i>
              </div>
            </div>
            <p v-if="v$.eps.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>

        <!-- Selector de medicamentos -->
        <div class="column is-12 mt-5">
          <h3 class="title is-size-5 is-bordered">Receta medica</h3>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Medicamento</label>
            <div class="control has-icons-left">
              <div class="select is-fullwidth">
                <select>
                  <option selected>Seleccione una opción</option>
                  <option>Medicamento 1</option>
                  <option>Medicamento 2</option>
                  <option>Medicamento 3</option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <i class="fa fa-building"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Cantidad</label>
            <div class="control">
              <input class="input" type="number" />
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label style="opacity: 0">Empty</label>
            <div class="control">
              <button class="button is-primary is-outlined is-fullwidth" @click="handleAddMedicine">
                <span class="icon mr-1"> <i class="fa fa-plus"></i> </span>Agregar
              </button>
            </div>
          </div>
        </div>

        <!-- Tabla de medicamentos seleccionados -->
        <div class="column is-12">
          <vue-good-table
            :columns="[]"
            :rows="[]"
            :sort-options="{
              enabled: true
            }"
          >
            <template #emptystate>No se ha agregado ningún medicamento</template>
          </vue-good-table>
        </div>

        <div class="column is-12">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Comentarios</label>
            <div class="control">
              <textarea v-model="order.comments" class="textarea" />
            </div>
          </div>
        </div>
        <div class="column is-12">
          <div class="field">
            <label class="has-text-grey has-text-weight-light"
              >Firma del doctor<span class="has-text-danger">*</span></label
            >
            <div class="control">
              <input v-model="v$.doctorSignature.$model" class="input" type="text" />
            </div>
            <p v-if="v$.doctorSignature.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-12 mt-6">
          <button class="button is-primary is-fullwidth" @click="handleSaveMO">Guardar</button>
        </div>
      </div>
    </div>
    <div class="close" @click="() => emit('hide')">
      <i class="fa fa-times"></i>
    </div>
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
  justify-content: center;
  background-color: #000000da;
  z-index: 9999;
}

.custom-modal {
  background-color: white;
  height: 880px;
  width: 1200px;
  margin-top: 10%;
  padding: 40px 0;
  border-radius: 10px;
}
.close {
  margin: 10.5% 0 0 -25px;
  cursor: pointer;
}

.is-bordered {
  border-bottom: 1px solid black;
}
</style>
