<template>
  <div>
    <n-card>
      <div class="buttons">
        <n-button type="info" @click="handleFilter">Filtr</n-button>  
        <n-button type="error" @click="handleClearFilter">Wyczyść filtr</n-button>  
      </div>
      <n-checkbox-group v-model:value="filterValues.categories">
        <div class="filter__title">Kategorie</div>
        <n-card class="scrollable-card" @scroll="handleCategoriesScroll">
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
        </n-card>
      </n-checkbox-group>
      <!-- I'm so lazy :) -->
      <br/> 
      <n-checkbox-group v-model:value="filterValues.requrementSkills">
        <div class="filter__title">Wymagane umiejętności</div>
        <n-card class="scrollable-card" @scroll="handleRequirementSkillsScroll">
          <n-space
            :style="{
              display: 'flex',
              flexDirection: 'column',
            }"
            item-style="display: flex;"
          >
            <n-checkbox
              v-for="(value, index) in offerRequirementSkills"
              :key="index"
              :value="value.id"
              :label="value.skill_title"
            />
          </n-space>
        </n-card>
      </n-checkbox-group>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NCheckbox, NCheckboxGroup, NSpace, NCard, NButton } from 'naive-ui'
import { message } from '@/composables'
import { requestService } from '@/services'
import { Filter, JobRequirementSkill, Pagination } from '@/types'

const pageSize = 20

const request = requestService()

const offerCategories = ref<string[]>([])
const offerRequirementSkills = ref<JobRequirementSkill[]>([])

const isOfferCategoriesLoading = ref<boolean>(false)
const isOfferRequirementSkillsLoading = ref<boolean>(false)

const currentCategoriesPage = ref<number>(1)
const currentRequirementSkillsPage = ref<number>(1)

const maxCategoriesPages = ref<number>(1)
const maxRequirementSkillsPages = ref<number>(1)


const filterValues = defineModel<Filter>('values')

const emit = defineEmits<{
  (e: 'filter'): void
}>()

onMounted(async () => {
  try {
    const categoriesResponse: Pagination<string> = await request.getOffersCategory({
        page: currentCategoriesPage.value,
        page_size: pageSize,
    })
    offerCategories.value = categoriesResponse.results
    maxCategoriesPages.value = Math.ceil(categoriesResponse.count / pageSize)


    const requirementSkillsResponse: Pagination<JobRequirementSkill> = 
      await request.getRequirementSkills({
        page: currentRequirementSkillsPage.value,
        page_size: pageSize,
      })
    offerRequirementSkills.value = requirementSkillsResponse.results
    maxRequirementSkillsPages.value = Math.ceil(requirementSkillsResponse.count / pageSize)

  } catch (e: unknown) {
    message.error(String(e))
  }
})

function handleCategoriesScroll(e: Event) {
  const target = e.target as HTMLElement
  
  const { scrollTop, scrollHeight, clientHeight } = target
  
  if (
      (scrollHeight - scrollTop <= clientHeight) && 
      (currentCategoriesPage.value < currentCategoriesPage.value)
    ) {
      loadMoreCategories()
  }
}

function handleRequirementSkillsScroll(e: Event) {
  const target = e.target as HTMLElement
  
  const { scrollTop, scrollHeight, clientHeight } = target
  
  if (
    (scrollHeight - scrollTop <= clientHeight) && 
    (currentRequirementSkillsPage.value < maxRequirementSkillsPages.value)
  ) {
    loadMoreRequirementSkills()
  }
}

async function loadMoreCategories() {
  if (isOfferCategoriesLoading.value) return;

  try {
    isOfferCategoriesLoading.value = true
    currentCategoriesPage.value++

    const categoriesResponse: Pagination<string> = await request.getOffersCategory({
        page: currentCategoriesPage.value,
        page_size: pageSize,
    })
    offerCategories.value = offerCategories.value.concat(categoriesResponse.results)
  } catch (e: unknown) {
    message.error(String(e))
  } finally {
    isOfferCategoriesLoading.value = false
  }
}

async function loadMoreRequirementSkills() {
  if (isOfferRequirementSkillsLoading.value) return;

  try {
    isOfferRequirementSkillsLoading.value = true
    currentRequirementSkillsPage.value++

    const requirementSkillsResponse: Pagination<JobRequirementSkill> = 
      await request.getRequirementSkills({
        page: currentRequirementSkillsPage.value,
        page_size: pageSize,
      })
    offerRequirementSkills.value = offerRequirementSkills.value.concat(requirementSkillsResponse.results)
  } catch (e: unknown) {
    message.error(String(e))
  } finally {
    isOfferRequirementSkillsLoading.value = false
  }
}

function handleFilter() {
  emit('filter')
}

function handleClearFilter() {
  filterValues.value.categories = []
  filterValues.value.requrementSkills = []
}

</script>

<style scoped lang="scss">
  .filter {
    &__title {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    
    button {
      margin-bottom: 10px;
    }
  }

  .scrollable-card {
    max-height: 300px;
    overflow-y: auto;
  }
</style>