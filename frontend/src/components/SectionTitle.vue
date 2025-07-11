<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="mb-12 text-center">
    <h2 class="text-4xl font-bold text-caput">{{ title }}</h2>
    <div class="w-24 h-1 bg-caput mx-auto mt-4 rounded"></div>
  </div>
</template>
