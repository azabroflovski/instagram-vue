<template>
  <div class="app-layout">
    <app-navigation />

    <div class="app-layout-content">
      <router-view />
    </div>

    <app-aside />
  </div>
</template>

<script lang="ts" setup>
import AppNavigation from '@/components/AppNavigation.vue'
import AppAside from '@/components/AppAside.vue'
</script>
