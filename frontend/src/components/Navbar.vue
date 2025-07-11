<template>
  <header class="bg-tan shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img
          src="/eria.jpeg"
          alt="Foto Profil"
          class="w-10 h-10 rounded-full object-cover border-2 border-caput"
        />
        <span class="text-2xl font-bold text-caput">Eria Syalwa</span>
      </div>
      <ul class="flex space-x-6">
        <li><a href="#profil" class="text-caput hover:text-[#4f1a1a] transform hover:-translate-y-0.5 transition-all duration-300">Profil</a></li>
        <li><a href="#pendidikan" class="text-caput hover:text-[#4f1a1a] transform hover:-translate-y-0.5 transition-all duration-300">Pendidikan</a></li>
        <li><a href="#proyek" class="text-caput hover:text-[#4f1a1a] transform hover:-translate-y-0.5 transition-all duration-300">Proyek</a></li>
        <li><a href="#skill" class="text-caput hover:text-[#4f1a1a] transform hover:-translate-y-0.5 transition-all duration-300">Skill</a></li>
        <li><a href="#kontak" class="text-caput hover:text-[#4f1a1a] transform hover:-translate-y-0.5 transition-all duration-300">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNavbar"
};
</script>
