<script setup>
import SectionTitle from './SectionTitle.vue';
defineOptions({ name: 'ProjectsSection' });
const skills = [
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Menengah' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5', level: 'Menengah' },
];
</script>

<template>
  <section id="skill" class="py-20 bg-tan">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-[#fdfaf5] p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-caput">{{ skill.name }}</h3>
          <p class="text-[#63202499] mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
