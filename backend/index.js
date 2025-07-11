// Import express dan cors
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware untuk mengizinkan permintaan dari frontend
app.use(cors());

// Data riwayat pendidikan
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
    major: "Teknik Komputer dan Jaringan (TKJ)"
  }
];

// Endpoint untuk mengirim data pendidikan ke frontend
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});


// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server backend berjalan di http://localhost:${PORT}`);
});
