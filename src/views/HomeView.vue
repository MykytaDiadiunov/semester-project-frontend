<template>
  <base-layout>
    <div class="main__wrapper">
      <div class="main__filter">
        <app-filter v-model:values="filterValues"/>
      </div>
      <div class="main__content">
        <app-content :data="data"/>
      </div>
    </div>
  </base-layout>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { Filter } from '@/types'
import AppFilter from '@/components/views/home-view/AppFilter.vue'
import AppContent from '@/components/views/home-view/AppContent.vue'

const filterValues = ref<Filter>({
  categories: [],
  requrementSkills: [],
})

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
}
</style>
