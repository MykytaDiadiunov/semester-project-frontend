<template>
  <div class="wrapper">
    <header>
      <span 
        class="logo"
        @click="routing.toHome()"
      >
        Logo
      </span>
      <ul class="action__list">
        <li 
          class="action__item" 
          v-for="(item, index) in actionList" 
          :key="index"
          @click="item.routing()"
        >
          <n-button quaternary>
            {{ item.title }}
          </n-button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useRouting } from '@/composables';
import { HeaderActionItem } from '@/models';

const routing = useRouting()

const actionList: HeaderActionItem[] = [
  {
    title: "Home",
    routing: routing.toHome
  },
  {
    title: "Back",
    routing: routing.back
  },
]

</script>

<style lang="scss">
header {
  position: fixed;
  width: calc(100% - 20px);
  padding: 15px 10px;
  background-color: #1e1e23;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.logo {
  font-size: 1.6rem;
  cursor: pointer;
  padding: 5px;
}

.action {
  &__list {
    display: flex;
  }
  &__item {
    margin: 0px 5px;

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>