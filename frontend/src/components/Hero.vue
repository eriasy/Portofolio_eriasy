<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-5xl font-bold text-caput mb-4 animate-slide-in-left" style="animation-delay: 200ms;">
        Halo, Saya <span class="text-[#D5B893]">Eria Syalwa</span>
      </h1>
      <p class="text-xl text-[#632024cc] mb-8 animate-slide-in-left" style="animation-delay: 400ms;">
        Seorang mahasiswa Informatika yang terus mengasah keterampilan dalam membangun website interaktif dan merancang pengalaman pengguna yang berkesan.
      </p>
      <a
        href="#kontak"
        class="bg-caput text-white font-bold py-3 px-6 rounded-lg hover:bg-[#4f1a1a] transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms;"
      >
        Hubungi Saya
      </a>
    </div>
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="/eria.jpeg"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg filter grayscale"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
};
</script>
