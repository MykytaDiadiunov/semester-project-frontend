<template>
  <base-layout>
    <div class="instructions-container">
      <header class="page-header">
        <h1>Instrukcja Obsługi</h1>
        <p class="subtitle">Jak korzystać z narzędzia do analizy rynku IT</p>
      </header>

      <div class="steps-wrapper">
        <section class="step-card">
          <div class="step-number">01</div>
          <div class="step-content">
            <h2>Wybór parametrów</h2>
            <p>
              Po lewej stronie ekranu znajduje się <strong>Panel Filtrów</strong>. Wybierz
              interesujące Cię parametry, takie jak:
            </p>
            <ul>
              <li>Miasto (np. Warszawa, Kraków)</li>
              <li>Technologia (np. JavaScript, Python)</li>
              <li>Doświadczenie (Junior/Mid/Senior)</li>
            </ul>

            <div class="screenshot-placeholder">
              <span class="placeholder-text">Tu wstaw zrzut ekranu lewego panelu (Filtry)</span>
            </div>
          </div>
        </section>

        <section class="step-card">
          <div class="step-number">02</div>
          <div class="step-content">
            <h2>Generowanie danych</h2>
            <p>
              Po wybraniu parametrów kliknij przycisk <strong>"Filtruj"</strong> (lub "Szukaj").
              Aplikacja pobierze najnowsze dane oraz dane archiwalne.
            </p>
          </div>
        </section>

        <section class="step-card">
          <div class="step-number">03</div>
          <div class="step-content">
            <h2>Analiza wyników (2025 vs 2023)</h2>
            <p>
              Po prawej stronie pojawią się wykresy porównawcze. Możesz zobaczyć, jak zmieniał się
              rynek na przestrzeni lat:
            </p>
            <ul>
              <li><strong>Sekcja górna (2025):</strong> Aktualne trendy i zarobki.</li>
              <li><strong>Sekcja dolna (2023):</strong> Dane historyczne do porównania.</li>
            </ul>

            <div class="screenshot-placeholder">
              <span class="placeholder-text">Tu wstaw zrzut ekranu wykresów (Prawa strona)</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </base-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.instructions-container {
  padding: 2rem;
  color: #e0e0e0;
  max-width: 1000px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #888;
    font-size: 1.1rem;
  }
}

.steps-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.step-card {
  background: #1e1e1e;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  border: 1px solid #333;

  .step-number {
    font-size: 3rem;
    font-weight: bold;
    color: #f87979;
    opacity: 0.8;
    line-height: 1;
  }

  .step-content {
    flex: 1;

    h2 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    p {
      line-height: 1.6;
      margin-bottom: 1rem;
      color: #ccc;
    }

    ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;

      li {
        margin-bottom: 0.5rem;
        color: #bbb;
      }
    }
  }
}

.screenshot-placeholder {
  width: 100%;
  height: 200px;
  border: 2px dashed #444;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  margin-top: 1rem;
  transition: all 0.3s ease;

  .placeholder-text {
    color: #666;
    font-style: italic;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;
    object-fit: contain;
  }
}
</style>
