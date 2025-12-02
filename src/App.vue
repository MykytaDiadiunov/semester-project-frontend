<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
import { useAppI18n } from '@/i18n';

const appI18n = useAppI18n()

onMounted(async () => {
  appI18n.init()
})

</script>

<style scoped scss>
</style>
