import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue';
import ContextoPage from '@/views/ContextoPage.vue';
import ObrasPage from '@/views/ObrasPage.vue';
import EquipePage from '@/views/EquipePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/contexto',
    name: 'Contexto',
    component: ContextoPage
  },
  {
    path: '/obras',
    name: 'Obras',
    component: ObrasPage
  },
  {
    path: '/equipe',
    name: 'Equipe',
    component: EquipePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;