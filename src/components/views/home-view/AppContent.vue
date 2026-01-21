<template>
  <div>
    <AppGraphs title="2025" :bar-data="barDataNew" :pie-data="pieDataNew"/>
    <AppStatistic :data="statisticDataNew.general"/>

    <br/>

    <AppGraphs title="2023" :bar-data="barDataOld" :pie-data="pieDataOld"/>
    <AppStatistic :data="statisticDataOld.general"/>
  </div>
</template>

<script setup lang="ts">
  import { ChartData } from 'chart.js';
  import { JobOfferStatistic } from '@/types';
  import AppStatistic from '@/components/views/home-view/AppStatistic.vue'
  import AppGraphs from '@/components/views/home-view/AppGraphs.vue'

type Props = {
  barDataNew: ChartData<"bar">
  pieDataNew: ChartData<"pie">
  statisticDataNew: JobOfferStatistic
  barDataOld: ChartData<"bar">
  pieDataOld: ChartData<"pie">
  statisticDataOld: JobOfferStatistic 
}

defineProps<Props>()
</script>

<style scoped lang="scss">

</style>