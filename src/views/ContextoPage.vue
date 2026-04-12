<template>
  <ion-page>
    <ion-content class="contexto-content">
      <div class="page-wrapper ion-padding">
        <div class="page-header">
          <span class="section-tag">Contexto</span>
          <h1>História, sociedade e apagamento</h1>
          <p>
            Entenda o ambiente em que João do Rio viveu e por que sua produção nem sempre recebeu
            o destaque merecido no cânone literário brasileiro.
          </p>
        </div>

        <div class="context-grid">
          <ion-card class="context-card grande">
            <ion-card-header>
              <ion-card-title>Contexto histórico e social</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p><strong>Região:</strong> {{ autor.regiao }}</p>
              <p><strong>Situação do Brasil:</strong> {{ autor.contexto }}</p>
              <p><strong>Pertencimento social:</strong> {{ autor.pertencimento }}</p>
            </ion-card-content>
          </ion-card>

          <ion-card class="context-card pequeno destaque">
            <ion-card-header>
              <ion-card-title>Reconhecimento</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>{{ autor.reconhecimento }}</p>
            </ion-card-content>
          </ion-card>

          <ion-card class="context-card pequeno">
            <ion-card-header>
              <ion-card-title>Redescoberta</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>{{ autor.redescoberta }}</p>
            </ion-card-content>
          </ion-card>
        </div>

        <ion-card class="apagamento-card">
          <ion-card-header>
            <ion-card-title>Hipótese sobre o apagamento</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="motivos-grid">
              <div v-for="motivo in autor.apagamento" :key="motivo" class="motivo-item">
                <h3>{{ motivo }}</h3>
                <p>
                  Esse fator ajuda a explicar por que certos autores foram menos valorizados ao longo
                  da formação do cânone literário brasileiro.
                </p>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { autor } from '@/data/joaoDoRio';
</script>

<style scoped>
.contexto-content {
  --background: linear-gradient(180deg, #f8fbff 0%, #edf2f9 100%);
  --padding-bottom: 100px;
}

.page-wrapper {
  max-width: 1100px;
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

.context-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 18px;
  margin-bottom: 20px;
}

.context-card,
.apagamento-card {
  border-radius: 24px;
  box-shadow: 0 10px 28px rgba(20, 30, 48, 0.08);
}

.destaque {
  background: linear-gradient(135deg, #22324a, #415a77);
}

.destaque ion-card-title,
.destaque p {
  color: white;
}

.motivos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.motivo-item {
  background: #f6f9fd;
  border-radius: 18px;
  padding: 16px;
  text-align: center;
}

.motivo-item h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #1b263b;
  font-size: 1rem;
}

.motivo-item p {
  margin: 0;
  line-height: 1.6;
  color: #536273;
}

@media (max-width: 900px) {
  .context-grid,
  .motivos-grid {
    grid-template-columns: 1fr;
  }
}
</style>