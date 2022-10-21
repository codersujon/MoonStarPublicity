import { createApp } from 'vue'
import App from './App.vue'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faClock, faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faYoutube, } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faClock, faLocationDot, faFacebookF, faLinkedinIn, faPinterestP, faYoutube, faInstagram)

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"

/* Default Styles */
import "../src/assets/styles/css/styles.css"




createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
