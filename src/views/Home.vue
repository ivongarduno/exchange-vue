<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#667eea'"
      :size="100"
    ></bounce-loader
    >>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: []
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false)) //en caso de error en la respuesta de la api isLoading se ejecutara
  }
}
</script>
