// Contoh backend sederhana
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware: Izinkan request dari frontend (CORS)
app.use(cors());

// Data pendidikan
const educationHistory = [
  {
    id: 1,
    period: "2022 - Sekarang",
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

// Tambahkan route untuk root agar tidak error saat akses /
app.get('/', (req, res) => {
  res.send('✅ Backend berjalan. Gunakan endpoint /api/education untuk melihat data.');
});

// Endpoint utama: /api/education
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
