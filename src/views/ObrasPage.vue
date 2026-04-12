<template>
  <ion-page>
    <ion-content class="obras-content">
      <div class="page-wrapper ion-padding">
        <div class="page-header">
          <span class="section-tag">Obras</span>
          <h1>Produção literária</h1>
          <p>
            As obras de João do Rio revelam um autor atento ao espaço urbano, às desigualdades e à
            complexidade social do Rio de Janeiro.
          </p>
        </div>

        <div class="obras-grid">
          <ion-card v-for="obra in autor.obras" :key="obra.titulo" class="obra-card">
            <img :src="obra.imagem" :alt="obra.titulo" class="obra-image" />
            <ion-card-header>
              <ion-card-subtitle>{{ obra.tema }}</ion-card-subtitle>
              <ion-card-title>{{ obra.titulo }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>{{ obra.descricao }}</p>
            </ion-card-content>
          </ion-card>
        </div>

        <div class="extra-grid">
          <ion-card class="extra-card">
            <ion-card-header>
              <ion-card-title>Temas centrais</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chips-wrap">
                <span v-for="tema in autor.temas" :key="tema" class="chip">{{ tema }}</span>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="extra-card">
            <ion-card-header>
              <ion-card-title>Características da escrita</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ul class="styled-list">
                <li v-for="caracteristica in autor.caracteristicas" :key="caracteristica">
                  {{ caracteristica }}
                </li>
              </ul>
            </ion-card-content>
          </ion-card>
        </div>

        <ion-card class="trecho-card">
          <ion-card-header>
            <ion-card-title>Trecho representativo</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <blockquote>{{ autor.trecho }}</blockquote>
          </ion-card-content>
        </ion-card>
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
import { autor } from '@/data/joaoDoRio';
</script>

<style scoped>
.obras-content {
  --background: linear-gradient(180deg, #f7f9fd 0%, #eef3f9 100%);
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

.obras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  margin-bottom: 20px;
}

.obra-card,
.extra-card,
.trecho-card {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(20, 30, 48, 0.08);
}

.obra-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.extra-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 18px;
}

.chips-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  background: #e4edf8;
  color: #1b263b;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.92rem;
}

.styled-list {
  margin: 0;
  padding-left: 18px;
}

.styled-list li {
  margin-bottom: 10px;
  line-height: 1.6;
}

blockquote {
  margin: 0;
  padding: 18px;
  background: linear-gradient(135deg, #22324a, #415a77);
  color: white;
  border-radius: 18px;
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: center;
}

@media (max-width: 820px) {
  .extra-grid {
    grid-template-columns: 1fr;
  }
}
</style>