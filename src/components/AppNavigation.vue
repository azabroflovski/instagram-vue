<template>
  <div class="app-navigation">
    <ul class="app-navigation-list">
      <li class="app-navigation-list__item" v-for="item in navigation" :key="item.label">
        <v-icon :name="item.icon" scale="1.5" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const navigation = [
  {
    label: 'Главная',
    icon: 'md-home-round',
  },
  {
    label: 'Поисковый запрос',
    icon: 'md-search',
  },
  {
    label: 'Интересное',
    icon: 'md-lightbulb-outlined',
  },
  {
    label: 'Reels',
    icon: 'md-slowmotionvideo-outlined',
  },
  {
    label: 'Сообщения',
    icon: 'md-message-outlined',
  },
  {
    label: 'Уведомления',
    icon: 'md-circlenotifications-outlined',
  },
  {
    label: 'Создать',
    icon: 'md-addbox-outlined',
  },
]
</script>
