import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdMenu } from "oh-vue-icons/icons/md";
import './style.css'
import App from './App.vue'

// Page
import Home from "./pages/Home.vue"
import Products from "./pages/Products.vue"
import Contacts from "./pages/Contacts.vue"

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/products",
        name: "products",
        component: Products
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

// Add iconss
addIcons(MdMenu)

const app = createApp(App)
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
// createApp(App).use(router).mount('#app')
