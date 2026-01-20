<template>
  <n-card title="Statystyka Rynku" size="small">
    <div class="stats-grid">
      
      <div class="stat-box">
        <span class="label">Dostępne oferty</span>
        <span class="value main">{{ data.total }}</span>
      </div>

      <div class="stat-box">
        <span class="label">Z widełkami</span>
        <span class="value">
          {{ data.with_salary_count }}
          <small class="sub-text">
            ({{ Math.round((data.with_salary_count / data.total) * 100) }}%)
          </small>
        </span>
      </div>

      <div class="stat-box">
        <span class="label">Średnia na start</span>
        <span class="value money">
          {{ data.avg_salary_from.toLocaleString('pl-PL') }} PLN
        </span>
      </div>

      <div class="stat-box">
        <span class="label">Top stawka</span>
        <span class="value money highlight">
          {{ data.max_salary_possible.toLocaleString('pl-PL') }} PLN
        </span>
      </div>

    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui';
import { JobOfferGeneralStatistic } from '@/types';

type Props = {
  data: JobOfferGeneralStatistic
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-box {
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.label {
  font-size: 12px;
  opacity: 0.7;
  margin-bottom: 4px;
}

.value {
  font-size: 18px;
  font-weight: bold;
}

.sub-text {
  font-size: 12px;
  font-weight: normal;
  opacity: 0.5;
  margin-left: 4px;
}

.money {
  color: #4cd137; 
}

.highlight {
  color: #ffda79; 
}
</style>