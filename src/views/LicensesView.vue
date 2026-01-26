<template>
  <base-layout>
    <div class="licenses-container">
      <header class="page-header">
        <h1>Licencje i Źródła</h1>
      </header>

      <div class="blocks-wrapper">
        <div class="license-block">
          <div class="block-header header-blue">CEL EDUKACYJNY</div>
          <div class="block-content">
            <p>
              Niniejszy projekt został zrealizowany wyłącznie w
              <strong>celach edukacyjnych</strong> w ramach zaliczenia przedmiotu
              <strong>Projekt semestralny 1</strong> na Uniwersytecie WSB Merito. Aplikacja służy do
              analizy rynku IT i nie ma charakteru komercyjnego. Projekt nie generuje przychodów, a
              przedstawione dane służą jedynie do wizualizacji trendów rynkowych.
            </p>
          </div>
        </div>

        <div class="license-block">
          <div class="block-header header-green">Wykorzystane Zbiory Danych</div>
          <div class="block-content">
            <p>
              Analiza została przeprowadzona w oparciu o publicznie dostępne dane:
              <br />
              <strong>"JustJoin.it Job Offers Data (2021-2023)"</strong>.
            </p>
            <div class="link-row">
              <a
                href="https://www.kaggle.com/datasets/jszafranqb/justjoinit-job-offers-data-2021-10-2023-09"
                target="_blank"
                >[ Link do Kaggle ]</a
              >
            </div>
          </div>
        </div>

        <div class="license-block">
          <div class="block-header header-red">ORYGINALNE ŹRÓDŁO</div>
          <div class="block-content">
            <p>
              Wszelkie prawa do znaków towarowych "Just Join IT" oraz treści oryginalnych ogłoszeń
              należą do ich prawnych właścicieli. Projekt nie jest powiązany, sponsorowany ani
              autoryzowany przez właścicieli serwisu JustJoin.it.
            </p>
            <div class="link-row">
              <a href="https://justjoin.it/" target="_blank">[ Odwiedź JustJoin.it ]</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
// Brak logiki JS, tylko template i style
</script>

<style scoped lang="scss">
/* Główny kontener - wyśrodkowany */
.licenses-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
  /* Czcionka techniczna, jak na Twoich screenach */
  font-family: 'Courier New', Courier, monospace;
}

/* Nagłówek strony */
.page-header {
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 2.5rem;
    color: #e0e0e0;
    margin-bottom: 10px;
    letter-spacing: -1px;
  }

  .subtitle {
    color: #777;
    font-size: 1rem;
  }
}

.blocks-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px; /* Odstęp między blokami */
}

/* --- STYLE BLOKÓW --- */

.license-block {
  display: flex;
  flex-direction: column;
}

/* Nagłówki - wyglądają jak przyciski z Twojego screena */
.block-header {
  padding: 12px 20px;
  font-weight: bold;
  font-size: 1.1rem;
  color: #000; /* Czarny tekst na kolorowym tle */
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Zaokrąglenie tylko na górze */
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* Kolory nagłówków */
.header-blue {
  background-color: #64b5f6; /* Kolor przycisku "Filtr" */
}

.header-red {
  background-color: #e57373; /* Kolor przycisku "Wyczyść filtr" */
}

.header-green {
  background-color: #81c784; /* Dodatkowy kolor pasujący do palety */
}

/* Treść - wygląda jak input field z Twojego screena */
.block-content {
  background-color: #121212; /* Bardzo ciemne tło (prawie czarne) */
  border: 1px solid #333; /* Cienka ramka */
  border-top: none; /* Brak ramki na górze, bo styka się z nagłówkiem */
  padding: 20px;
  color: #ccc;
  line-height: 1.5;

  /* Zaokrąglenie tylko na dole */
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  /* Cień wewnątrz, żeby wyglądało jak wgłębienie (input) */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Linki i dodatkowe info wewnątrz ramek */
.link-row {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #333; /* Przerywana linia oddzielająca */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  a {
    color: #64b5f6;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>
