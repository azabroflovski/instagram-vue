<script lang="ts" setup>
import AppNavigation from '@/components/AppNavigation.vue'
import AppAside from '@/components/AppAside.vue'
</script>

<template>
  <div class="app-layout">
    <AppNavigation />

    <div class="app-layout-content">
      <router-view />
    </div>

    <AppAside />
  </div>
</template>
