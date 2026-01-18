<template>
  <base-layout>
    <div class="main__wrapper">
      <div class="main__filter">
        <app-filter />
      </div>
      <div class="main__content">
        <Bar
          :style="{
            width: '100%',
            heigth: '100%',
          }"
          :data="data"
          :options="options"
        />
      </div>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
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
import AppFilter from '@/components/views/home-view/AppFilter.vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
}

const data = {
  labels: [
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
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
  ],
}
</script>

<style scoped lang="scss">
.main {
  &__wrapper {
    display: flex;
  }

  &__filter {
    width: 30%;
  }

  &__main {
    width: 100%;
  }
}
</style>
