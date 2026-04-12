<template>
  <ion-page>
    <ion-content class="home-content">
      <div class="page-wrapper ion-padding">
        <section class="hero-card">
          <div class="hero-image-box">
            <img
              src="https://f.i.uol.com.br/fotografia/2018/08/12/15341059245b7099448c0f3_1534105924_3x2_md.jpg"
              alt="João do Rio"
              class="hero-image"
            />
          </div>

          <div class="hero-text">
            <span class="badge">Exposição Virtual</span>
            <h1>{{ autor.nomeLiterario }}</h1>
            <p class="subtitle">Autor à margem do cânone literário</p>
            <p class="description">{{ autor.resumo }}</p>
          </div>
        </section>

        <div class="info-grid">
          <ion-card class="info-card">
            <ion-card-header>
              <ion-card-subtitle>Identificação</ion-card-subtitle>
              <ion-card-title>Quem foi João do Rio?</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p><strong>Nome completo:</strong> {{ autor.nomeCompleto }}</p>
              <p><strong>Período:</strong> {{ autor.periodo }}</p>
              <p><strong>Século:</strong> {{ autor.seculo }}</p>
              <p><strong>Área:</strong> {{ autor.area }}</p>
            </ion-card-content>
          </ion-card>

          <ion-card class="info-card destaque-card">
            <ion-card-header>
              <ion-card-subtitle>Destaque</ion-card-subtitle>
              <ion-card-title>Marca principal</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>
                Sua escrita aproximou a literatura das ruas, dando visibilidade a costumes,
                personagens e desigualdades da vida urbana carioca.
              </p>
            </ion-card-content>
          </ion-card>
        </div>

        <ion-card class="bio-card">
          <ion-card-header>
            <ion-card-subtitle>Biografia resumida</ion-card-subtitle>
            <ion-card-title>Trajetória</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="timeline-list">
              <div v-for="item in autor.biografia" :key="item" class="timeline-item">
                <div class="timeline-dot"></div>
                <p>{{ item }}</p>
              </div>
            </div>
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
.home-content {
  --background: linear-gradient(180deg, #f4f7fb 0%, #e8eef7 100%);
  --padding-bottom: 100px;
}

.page-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.hero-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 12px 32px rgba(22, 34, 58, 0.12);
  margin-top: 18px;
  margin-bottom: 22px;
}

.hero-image-box {
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 240px;
  height: 300px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.hero-text {
  text-align: left;
}

.badge {
  display: inline-block;
  background: #1b263b;
  color: #fff;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 14px;
}

.hero-text h1 {
  margin: 0 0 6px;
  font-size: 2.2rem;
  color: #152033;
}

.subtitle {
  margin: 0 0 14px;
  color: #48607f;
  font-weight: 700;
  font-size: 1.05rem;
}

.description {
  line-height: 1.7;
  color: #334155;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 18px;
}

.info-card,
.bio-card {
  border-radius: 24px;
  box-shadow: 0 10px 26px rgba(20, 30, 48, 0.08);
}

.destaque-card {
  background: linear-gradient(135deg, #1b263b 0%, #415a77 100%);
  color: white;
}

.destaque-card ion-card-title,
.destaque-card ion-card-subtitle,
.destaque-card p {
  color: white;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #415a77;
  margin-top: 5px;
  flex-shrink: 0;
}

.timeline-item p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 820px) {
  .hero-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>