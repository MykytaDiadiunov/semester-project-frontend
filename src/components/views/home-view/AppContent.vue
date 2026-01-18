<template>
  <div>
    <Bar
      :data="data"
      :options="options"
    />
  </div>
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
  ChartData,
} from 'chart.js'
import { ExtendedDataPoint } from 'node_modules/vue-chartjs/dist/typedCharts'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
}

type Props = {
  data: ChartData<"bar", (number | [number, number])[] | ExtendedDataPoint[], unknown>
}

defineProps<Props>()

</script>
