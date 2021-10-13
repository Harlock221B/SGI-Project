import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Documentos from '../views/Documentos.vue'
import Instrucoes from '../views/Instrucoes.vue'
import Calendario from '../views/Calendario.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Documentos',
    component: Documentos
  },
  {
    path: '/',
    name: 'Instrucoes',
    component: Instrucoes
  },
  {
    path: '/',
    name: 'Calendario',
    component: Calendario
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
