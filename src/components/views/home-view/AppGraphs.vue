<template>
  <n-card>
    <div class="charts__row">
      <div class="chart-container">
        <Bar :data="barData" :options="options" />
      </div>
      
      <div class="chart-container">
        <Pie :data="pieData" :options="options" />
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui'
import { Bar, Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  ChartData,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
}

  
type Props = {
  barData: ChartData<"bar">
  pieData: ChartData<"pie">
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.charts__row {
  display: flex;       
  justify-content: space-between;
  gap: 20px;            
  height: 400px;       
  width: 100%;
}

.chart-container {
  flex: 1;            
  min-width: 0;       
  height: 100%;       
  position: relative; 
}
</style>
