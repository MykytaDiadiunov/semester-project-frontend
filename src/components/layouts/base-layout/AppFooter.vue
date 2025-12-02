<template>
  <div class="wrapper">
    <footer>
      <span>Boilerplate {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
footer {
  width: calc(100% - 20px);
  padding: 10px;
  background-color: #1e1e23;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.25);
}
</style>