<template>
  <header class="shadow w-screen">
    <nav>
      <nav
        class="flex items-center justify-between flex-wrap bg-indigo-300 p-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <!-- para usar rutas dinamicas, usamos el nombre de la ruta definida
          en el router-->
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >PlatziExchange</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <!-- estos links cambiaran la ruta, sin embargo la pagina coin detail
              no se recargara por si sola -->
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
        <a href="https://www.linkedin.com/in/ivongarduno" class="mr-4"
          ><font-awesome-icon icon="address-card" class="text-white text-xl"
        /></a>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',
  components: { PxIcon },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
