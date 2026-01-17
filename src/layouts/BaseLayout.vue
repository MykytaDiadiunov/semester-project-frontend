<template>
  <div class="base-layout">
    <app-header />
    <main class="main-content">
      <div>
        <slot />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layouts/base-layout/AppHeader.vue'
import AppFooter from '@/components/layouts/base-layout/AppFooter.vue'
</script>

<style lang="scss" scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
