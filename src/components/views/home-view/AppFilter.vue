<template>
  <div>
    <n-card>
      <n-checkbox-group v-model:value="filterValues.categories">
        <div style="font-size: 18px">Categories</div>
        <n-space
          :style="{
            display: 'flex',
            flexDirection: 'column',
          }"
          item-style="display: flex;"
        >
          <n-checkbox
            v-for="(value, index) in offerCategories"
            :key="index"
            :value="value"
            :label="value"
          />
        </n-space>
      </n-checkbox-group>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { message } from '@/composables'
import { requestService } from '@/services'
import { Filter, Pagination } from '@/types'
import { NCheckbox, NCheckboxGroup, NSpace, NCard } from 'naive-ui'
import { onBeforeMount, onMounted, ref } from 'vue'

const request = requestService()

const offerCategories = ref<string[]>([])

const filterValues = defineModel<Filter>('values')

onBeforeMount(() => {
  filterValues.value = {
    categories: [],
    requrementSkills: [],
  }
})

onMounted(async () => {
  try {
    const categoriesResponse: Pagination<string> = await request.getOffersCategory()
    offerCategories.value = categoriesResponse.results
  } catch (e: unknown) {
    message.error(String(e))
  }
})
</script>
