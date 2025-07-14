const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "Informatika"
  },
  {
    id: 2,
    period: "2020 - 2023",
    institution: "SMK TAMTAMA Karanganyar",
    major: "TKJ"
  }
];

const skills = [
  { name: "JavaScript", level: "Menengah" },
  { name: "Vue.js", level: "Menengah" },
  { name: "Tailwind CSS", level: "Menengah" }
];

const projects = [
  {
    title: "Portofolio Web",
    image: "https://example.com/portofolio.png",
    description: "Website portofolio interaktif",
    tech: ["Vue.js", "Tailwind", "Node.js"],
    link: "https://your-portofolio.vercel.app"
  }
];

// ✅ Wajib diekspor agar bisa digunakan di seed.js
module.exports = { educationHistory, skills, projects };
