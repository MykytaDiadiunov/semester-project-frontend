<template>
  <base-layout>
    <div class="main__wrapper">
      <div class="main__filter">
        <app-filter v-model:values="filterValues"/>
      </div>
      <div class="main__content">
        <div v-if="barData && pieData && statisticDataNew">
          <app-content :bar-data="barData" :pie-data="pieData" :statistic-data-new="statisticDataNew"/>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { Filter } from '@/types'
import AppFilter from '@/components/views/home-view/AppFilter.vue'
import AppContent from '@/components/views/home-view/AppContent.vue'
import { requestService } from '@/services'
import { message, useChartConfig } from '@/composables'

const { getBarConfig, getPieConfig } = useChartConfig()

const request = requestService()

const barData = ref(null)
const pieData = ref(null)

const statisticDataNew = ref(null)


const filterValues = ref<Filter>({
  categories: [],
  requrementSkills: [],
})

onMounted(async () => {
  try {
    const statisticResponse = await request.getOffersStatistic()

    statisticDataNew.value = statisticResponse

    barData.value = getBarConfig(
      statisticResponse.top_skills.map(val => val.count),
      statisticResponse.top_skills.map(val => val.skill_title)
    )

    pieData.value = getPieConfig(
      statisticResponse.work_types.map(val => val.count),
      statisticResponse.work_types.map(val => val.work_place_type),
      ["#FF0055", "#00E5FF", "#76FF03", "#D500F9", "#FFD600"]
    )


  } catch (e: unknown) {
    message.error(String(e))
  }
})


</script>

<style scoped lang="scss">
.main {
  &__wrapper {
    display: flex;
  }

  &__content {
    width: 100%;
  }

  &__filter {
    width: 30%;
  }
}
</style>
