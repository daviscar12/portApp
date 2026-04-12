<template>
  <ion-app>

    <!-- CONTEÚDO DAS PÁGINAS -->
    <ion-router-outlet />

    <!-- NAVBAR EMBAIXO -->
    <ion-footer>
      <app-navbar />
    </ion-footer>

  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonFooter } from '@ionic/vue';
import AppNavbar from '@/components/AppNavBar.vue';
</script>