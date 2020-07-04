import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowRight, faAddressCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)
