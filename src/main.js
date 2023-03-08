import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/styles/css/styles.css"
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faClock, faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faClock, faLocationDot, faFacebookF, faLinkedinIn, faPinterestP, faYoutube, faInstagram, faTwitter, faPhone, faLocationDot)


createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app');

import "bootstrap/dist/js/bootstrap.bundle.js";







