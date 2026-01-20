<template>
  <div>
    <AppGraphs title="2025" :bar-data="barData" :pie-data="pieData"/>
    <AppStatistic :data="statisticDataNew.general"/>

    <br/>

    <AppGraphs title="2023" :bar-data="barData" :pie-data="pieData"/>
    <AppStatistic :data="statisticDataNew.general"/>
  </div>
</template>

<script setup lang="ts">
  import { ChartData } from 'chart.js';
  import { JobOfferStatistic } from '@/types';
  import AppStatistic from '@/components/views/home-view/AppStatistic.vue'
  import AppGraphs from '@/components/views/home-view/AppGraphs.vue'

type Props = {
  barData: ChartData<"bar">
  pieData: ChartData<"pie">
  statisticDataNew: JobOfferStatistic 
}

defineProps<Props>()
</script>

<style scoped lang="scss">

</style>