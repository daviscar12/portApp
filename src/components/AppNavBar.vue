<template>
  <div class="bottom-nav">
    <router-link to="/home" class="nav-item" :class="{ active: route.path === '/home' }">
      <ion-icon :icon="homeOutline" />
      <span>Início</span>
    </router-link>

    <router-link to="/contexto" class="nav-item" :class="{ active: route.path === '/contexto' }">
      <ion-icon :icon="bookOutline" />
      <span>Contexto</span>
    </router-link>

    <router-link to="/obras" class="nav-item" :class="{ active: route.path === '/obras' }">
      <ion-icon :icon="libraryOutline" />
      <span>Obras</span>
    </router-link>

    <router-link to="/equipe" class="nav-item" :class="{ active: route.path === '/equipe' }">
      <ion-icon :icon="peopleOutline" />
      <span>Equipe</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { homeOutline, bookOutline, libraryOutline, peopleOutline } from 'ionicons/icons';

const route = useRoute();
</script>

<style scoped>
.bottom-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  background: rgba(27, 38, 59, 0.96);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.18);
  padding: 10px 8px 14px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
  color: #dfe7f5;
  font-size: 11px;
  font-weight: 600;
  transition: 0.25s ease;
}

.nav-item ion-icon {
  font-size: 22px;
}

.nav-item.active {
  color: #ffd166;
  transform: translateY(-2px);
}
</style>