<template>
  <base-layout>
    <div class="main__wrapper">
      <div class="main__filter">
        <app-filter v-model:values="filterValues" @filter="fetchData"/>
      </div>
      <div class="main__content">
        <div 
          v-if="
            barDataNew && 
            pieDataNew && 
            statisticDataNew && 
            barDataOld && 
            pieDataOld && 
            statisticDataOld
          ">
          <app-content 
            :bar-data-new="barDataNew" 
            :pie-data-new="pieDataNew" 
            :statistic-data-new="statisticDataNew"
            :bar-data-old="barDataOld" 
            :pie-data-old="pieDataOld" 
            :statistic-data-old="statisticDataOld"
          />
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

const barDataNew = ref()
const pieDataNew = ref()
const barDataOld = ref()
const pieDataOld = ref()

const statisticDataNew = ref()
const statisticDataOld = ref()


const filterValues = ref<Filter>({
  offer_category__in: [],
  requirement_skills__skill_id__in: [],
})

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
    try {
    const newStatisticResponse = await request.getOffersStatistic({
      date: '2025',
      offer_category__in: filterValues.value.offer_category__in.join(',') || null,
      requirement_skills__skill_id__in: filterValues.value.requirement_skills__skill_id__in.join(',') || null
    })

    statisticDataNew.value = newStatisticResponse

    barDataNew.value = getBarConfig(
      newStatisticResponse.top_skills.map(val => val.count),
      newStatisticResponse.top_skills.map(val => val.skill_title)
    )

    pieDataNew.value = getPieConfig(
      newStatisticResponse.work_types.map(val => val.count),
      newStatisticResponse.work_types.map(val => val.work_place_type),
      ["#FF0055", "#00E5FF", "#76FF03", "#D500F9", "#FFD600"]
    )

    const oldStatisticResponse = await request.getOffersStatistic({
      date: '2023',
      offer_category__in: filterValues.value.offer_category__in.join(',') || null,
      requirement_skills__skill_id__in: filterValues.value.requirement_skills__skill_id__in.join(',') || null
    })

    statisticDataOld.value = oldStatisticResponse

    barDataOld.value = getBarConfig(
      oldStatisticResponse.top_skills.map(val => val.count),
      oldStatisticResponse.top_skills.map(val => val.skill_title)
    )

    pieDataOld.value = getPieConfig(
      oldStatisticResponse.work_types.map(val => val.count),
      oldStatisticResponse.work_types.map(val => val.work_place_type),
      ["#FF0055", "#00E5FF", "#76FF03", "#D500F9", "#FFD600"]
    )


  } catch (e: unknown) {
    message.error(String(e))
  }
}


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
