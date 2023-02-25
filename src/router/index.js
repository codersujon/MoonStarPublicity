// These can be imported from other files
import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Portfolio from '../views/PortfolioView.vue'
import Services from '../views/ServicesView.vue'
import Clients from '../views/ClientsView.vue'
import Contact from '../views/ContactView.vue'

const routes = [
  {     path: '/', 
        name: 'Home',
        component: Home,
        meta:{
            title: 'Moon Star Publicity'
        } 
  },
  {     path: '/about', 
        name: 'About',
        component: About,
        meta:{
            title: 'About'
        } 
  },
  {     path: '/portfolio', 
        name: 'Portfolio',
        component: Portfolio,
        meta:{
            title: 'Portfolio'
        } 
  },
  {     path: '/services', 
        name: 'Services',
        component: Services,
        meta:{
            title: 'Services'
        } 
  },
  {     path: '/clients', 
        name: 'Clients',
        component: Clients,
        meta:{
            title: 'Clients'
        } 
  },
  {     path: '/contact', 
        name: 'Contact',
        component: Contact,
        meta:{
            title: 'Contact'
        } 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

router.beforeEach((to, fro, next) =>{
    document.title = `${to.meta.title}`;
    next(); 
})

export default router;