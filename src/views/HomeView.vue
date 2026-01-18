<template>
  <base-layout>
    <div class="home-dashboard">
      <header class="dashboard-header">
        <h1>Analiza Rynku (Statystyka roczna)</h1>
      </header>

      <section class="kpi-cards">
        <div class="kpi-card">
          <h3>Suma ofert</h3>
          <p class="value">{{ totalOffers }}</p>
        </div>
        <div class="kpi-card">
          <h3>Średnia miesięczna</h3>
          <p class="value highlight">{{ Math.round(averageOffers) }}</p>
        </div>
        <div class="kpi-card">
          <h3>Najlepszy miesiąc</h3>
          <p class="value">{{ bestMonth }}</p>
        </div>
      </section>

      <section class="charts-grid">
        <div class="chart-container">
          <h3>Dynamika ofert (2025/2026)</h3>
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </section>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const rawValues = [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const chartData = {
  labels: labels,
  datasets: [
    {
      label: 'Liczba ofert',
      backgroundColor: '#f87979',
      data: rawValues,
      borderRadius: 4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#ccc' },
    },
  },
  scales: {
    y: {
      ticks: { color: '#aaa' },
      grid: { color: '#333' },
    },
    x: {
      ticks: { color: '#aaa' },
    },
  },
}

const totalOffers = computed(() => {
  return rawValues.reduce((acc, curr) => acc + curr, 0)
})

const averageOffers = computed(() => {
  return totalOffers.value / rawValues.length
})

const bestMonth = computed(() => {
  const maxVal = Math.max(...rawValues)
  const index = rawValues.indexOf(maxVal)
  return labels[index]
})
</script>

<style scoped lang="scss">
.home-dashboard {
  padding: 2rem;
  color: #e0e0e0;

  .dashboard-header {
    margin-bottom: 2rem;
    h1 {
      font-weight: 300;
      font-size: 1.8rem;
    }
  }

  .kpi-cards {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    .kpi-card {
      background: #1e1e1e;
      padding: 1.5rem;
      border-radius: 12px;
      min-width: 200px;
      flex: 1;
      border: 1px solid #333;

      h3 {
        font-size: 0.9rem;
        text-transform: uppercase;
        color: #888;
        margin-bottom: 0.5rem;
      }

      .value {
        font-size: 2rem;
        font-weight: bold;
        margin: 0;

        &.highlight {
          color: #f87979;
        }
      }
    }
  }

  .charts-grid {
    .chart-container {
      background: #1e1e1e;
      padding: 1.5rem;
      border-radius: 12px;
      height: 450px;
      border: 1px solid #333;

      h3 {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
