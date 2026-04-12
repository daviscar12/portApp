<template>
  <ion-page>
    <ion-content class="equipe-content">
      <div class="page-wrapper ion-padding">
        <div class="page-header">
          <span class="section-tag">Equipe 1</span>
          <h1>Integrantes do projeto</h1>
          <p>
            Esta equipe foi responsável pela pesquisa, organização do conteúdo, design e construção
            da exposição virtual sobre João do Rio.
          </p>
        </div>

        <div class="team-grid">
          <ion-card v-for="integrante in equipe" :key="integrante.nome" class="team-card">
            <div class="photo-wrap">
              <img :src="integrante.foto" :alt="integrante.nome" class="team-photo" />
            </div>

            <ion-card-header>
              <ion-card-title>{{ integrante.nome }}</ion-card-title>
              <ion-card-subtitle>{{ integrante.funcao }}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              <p>{{ integrante.descricao }}</p>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/vue';
import { equipe } from '@/data/joaoDoRio';
</script>

<style scoped>
.equipe-content {
  --background: linear-gradient(180deg, #f7fbff 0%, #edf3fb 100%);
  --padding-bottom: 100px;
}

.page-wrapper {
  max-width: 1150px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 24px;
}

.section-tag {
  display: inline-block;
  background: #dbe7f5;
  color: #1b263b;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
}

.page-header h1 {
  margin: 0 0 10px;
  color: #1b263b;
}

.page-header p {
  max-width: 760px;
  margin: 0 auto;
  color: #526174;
  line-height: 1.7;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
}

.team-card {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(20, 30, 48, 0.08);
  text-align: center;
}

.photo-wrap {
  padding-top: 20px;
}

.team-photo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #e6eef8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.team-card p {
  line-height: 1.6;
  color: #536273;
}
</style>