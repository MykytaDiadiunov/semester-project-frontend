<template>
  <div class="wrapper">
    <app-header/>
    <main>
      <slot/>
    </main>
    <app-footer/>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layouts/base-layout/AppHeader.vue';
import AppFooter from '@/components/layouts/base-layout/AppFooter.vue';
</script>

<style lang="scss">
main {
  height: calc(100vh - 45px - 80px);
  padding-top: 80px;
}
</style>