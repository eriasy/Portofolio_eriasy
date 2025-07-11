<script setup>
defineOptions({ name: 'SkillsSection' });
import SectionTitle from './SectionTitle.vue'

// Daftar proyek
const projects = [
  {
    name: 'UI/UX Design Figma',
    url: 'https://www.figma.com/design/s4p2jUed2HMkOyLANqxz3y/SOBAT--Aplikasi-Mental-Health-?node-id=0-1&t=h5wcj52fZ4AgtRXO-1',
    image: '/ui1.png'
  },
  {
    name: 'UI/UX Design Figma',
    url: 'https://www.figma.com/design/SrKUpn6kW1KYRHMs9DDw7O/Untitled?node-id=0-1&t=MEJpcGXutSbrZIYn-1',
    image: '/ui2.png'
  },
]
</script>

<template>
  <section id="project" class="py-20 bg-[#D5B893]">
    <div class="container mx-auto px-6">
      <SectionTitle title="Project" />
      <div class="flex flex-wrap justify-center gap-8">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          class="w-80 bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 group hover:bg-[#632024]"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-40 object-cover"
            onerror="this.style.display='none'"
          />
          <div class="p-4 text-center">
            <h3 class="text-lg font-bold text-[#632024] group-hover:text-white">
              {{ project.name }}
            </h3>
            <p class="text-sm mt-2 underline text-[#632024] group-hover:text-white">
              Lihat Proyek
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
