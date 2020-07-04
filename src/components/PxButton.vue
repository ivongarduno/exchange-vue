<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-1 px-2 border border-indigo-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="`#667eea`" :size="8" />
    <!-- si no esta cargando muestra el texto del boton -->
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    buttonClick() {
      this.$emit('custom-click')
    }
  }
}
</script>
