<script setup>
import SectionTitle from './SectionTitle.vue';

// Mendapatkan tahun saat ini untuk footer
const currentYear = new Date().getFullYear();

defineOptions({
  name: 'ContactSection'
});
</script>

<template>
  <footer id="kontak" class="py-20 bg-[#632024] text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-200 mb-8">
        Mau tanya-tanya? Langsung aja, bebas kok!
      </p>

      <!-- Tombol Email -->
      <a
        href="mailto:eriasyalwa@students.amikom.ac.id"
        class="bg-white text-[#632024] font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>

      <!-- Tautan Sosial -->
      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/eriasy"
          target="_blank"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://wa.me/6287713232504"
          target="_blank"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/eriaasy_"
          target="_blank"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-gray-400">&copy; {{ currentYear }} Eria Syalwa.</p>
    </div>
  </footer>
</template>
