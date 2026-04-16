# 🎵 Hargai Aku - Aesthetic Lyrics Player

[![GitHub stars](https://img.shields.io/github/stars/dimsyyy/HargaiAku?style=for-the-badge)](https://github.com/dimsyyy/HargaiAku/stargazers)
[![GitHub license](https://img.shields.io/github/license/dimsyyy/HargaiAku?style=for-the-badge)](https://github.com/dimsyyy/HargaiAku/blob/main/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/dimsyyy/HargaiAku/graphs/commit-activity)

Project web sederhana untuk memutar lagu **"Hargai Aku"** dengan tampilan lirik yang estetik, sinkron, dan memiliki efek visual unik. Dibuat dengan Vanilla JavaScript untuk performa yang ringan.

---

## ✨ Fitur Utama

- **📺 Dynamic TV Noise Effect**: Latar belakang interaktif menggunakan HTML5 Canvas yang mensimulasikan noise TV jadul (static grain).
- **🎭 Smooth Crossfade Lyrics**: Transisi lirik yang saling mencampur (blend) saat berganti, memberikan kesan sinematik dan modern.
- **🔴 Lyric Highlighting**: Penekanan visual pada bagian lirik tertentu menggunakan *class highlight* yang mencolok.
- **🕒 Precision Timing**: Sinkronisasi lirik yang akurat berdasarkan *timestamp* asli lagu.
- **📱 Responsive Design**: Tampilan yang tetap rapi saat dibuka di berbagai perangkat.
- **🔄 Auto-Reset**: Lirik otomatis bersih dan sistem berhenti bekerja saat lagu selesai untuk menghemat memori browser.

---

## 🚀 Demo Tampilan

> [!TIP]
> **[KLIK DI SINI UNTUK MELIHAT LIVE DEMO](https://dimsyyy.github.io/HargaiAku/)** > *(Pastikan kamu sudah mengaktifkan GitHub Pages di pengaturan repositori)*

---

## 🛠️ Tech Stack

Project ini murni menggunakan teknologi web dasar tanpa framework berat:

- **HTML5**: Struktur halaman dan elemen Audio.
- **CSS3**: Animasi pulse, efek blur, dan layouting.
- **JavaScript (ES6+)**: Logika sinkronisasi lirik, manipulasi DOM, dan rendering noise pada Canvas.
- **FontAwesome**: Untuk ikon play yang interaktif.

---

## 📂 Struktur Folder

```text
HargaiAku/
├── index.html      # Struktur utama halaman
├── style.css       # Styling, animasi fade, dan layout
├── main.js        # Logika noise, audio, dan lirik
├── hargaiaku.mp3   # Aset lagu
└── bg.jpg          # Aset background (opsional)
