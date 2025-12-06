<template>
  <header class="app-header">
    <div class="header-inner">
      <a class="logo-btn" @click="routing.toHome()"> Logo </a>

      <nav class="actions">
        <ul class="actions__list">
          <li v-for="item in actionList" :key="item.title" class="actions__item">
            <n-button quaternary @click="item.routing()">
              {{ item.title }}
            </n-button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useRouting } from '@/composables'
import type { HeaderActionItem } from '@/models' // Лучше использовать type-only import

const routing = useRouting()

const actionList: HeaderActionItem[] = [
  { title: 'Home', routing: routing.toHome },
  { title: 'Back', routing: routing.back },
]
</script>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;
  background-color: #1e1e23;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  box-sizing: border-box;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin: 0 auto;
}

.actions {
  &__list {
    display: flex;
    gap: 10px;
  }
}
</style>
