<script lang="ts" setup>
const navigation = [
  {
    label: 'Главная',
    icon: 'md-home-round',
    route: '/',
  },
  {
    label: 'Поисковый запрос',
    icon: 'md-search',
    route: '/search',
  },
  {
    label: 'Интересное',
    icon: 'md-lightbulb-outlined',
    route: '/explore',
  },
  {
    label: 'Reels',
    icon: 'md-slowmotionvideo-outlined',
    route: '/reels',
  },
  {
    label: 'Сообщения',
    icon: 'md-message-outlined',
    route: '/messages',
  },
  {
    label: 'Уведомления',
    icon: 'md-circlenotifications-outlined',
    route: '/notifications',
  },
  {
    label: 'Создать',
    icon: 'md-addbox-outlined',
    route: '/create',
  },
]
</script>

<template>
  <div class="app-navigation">
    <ul class="app-navigation-list">
      <router-link v-for="item in navigation" :key="item.label" :to="item.route">
        <li class="app-navigation-list__item">
          <v-icon :name="item.icon" scale="1.5" />
          <span>{{ item.label }}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>
