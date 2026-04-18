# 🌿 Website Desa Bluek Lamkabu

Website resmi Pemerintah Desa Bluek Lamkabu, Kabupaten Pidie, Provinsi Aceh — dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework apapun.

---

## ✨ Fitur Utama

- **4 Halaman Lengkap**: Beranda, Profil, Kegiatan, Informasi
- **Navigasi Modern**: Hamburger menu dengan animasi slide dari kanan + overlay gelap
- **Hero Section Premium**: Background foto alam dengan efek parallax dan overlay gradasi hijau
- **Statistik Desa Animasi**: Angka counter yang bergerak saat di-scroll
- **Galeri Foto**: Grid galeri dengan efek hover dan caption
- **Google Maps Embed**: Peta lokasi desa dengan tampilan rounded + shadow
- **Filter Kegiatan**: Tombol filter kategori kegiatan (Sosial, Budaya, Pembangunan, dll.)
- **Animasi Scroll**: Fade-in reveal saat elemen masuk ke viewport
- **Responsive Design**: Tampilan optimal di desktop, tablet, dan mobile
- **Footer Lengkap**: Navigasi, kontak, dan informasi desa

---

## 📁 Struktur File

```
desa-bluek-lamkabu/
├── index.html        → Beranda / Dashboard utama
├── profil.html       → Profil Desa
├── kegiatan.html     → Kegiatan Desa
├── informasi.html    → Informasi & Pengumuman
├── style.css         → Stylesheet utama (semua halaman)
├── main.js           → JavaScript utama (semua halaman)
└── README.md         → Dokumentasi ini
```

---

## 🚀 Cara Menjalankan

### Metode 1 — Buka Langsung (Paling Mudah)
1. Download atau clone semua file ke satu folder
2. Double-click file `index.html`
3. Website akan terbuka di browser default

### Metode 2 — Live Server (Disarankan untuk Development)
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan `index.html` → **Open with Live Server**
3. Browser akan otomatis terbuka di `http://127.0.0.1:5500`

### Metode 3 — Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Lalu buka: http://localhost:8000
```

---

## 🌐 Cara Hosting di GitHub Pages

1. **Buat Repository GitHub**
   - Login ke [github.com](https://github.com)
   - Klik tombol **New** → beri nama repo (contoh: `desa-bluek-lamkabu`)
   - Set ke **Public** → klik **Create repository**

2. **Upload Semua File**
   ```bash
git init
git add .
git commit -m "Initial commit: Website Desa Bluek Lamkabu"
git branch -M main
git remote add origin https://github.com/USERNAME/desa-bluek-lamkabu.git
git push -u origin main
```

3. **Aktifkan GitHub Pages**
   - Buka tab **Settings** di repository
   - Klik **Pages** di sidebar kiri
   - Di bagian **Source** → pilih branch **main**, folder **/ (root)**
   - Klik **Save**

4. **Akses Website**
   - Website akan online dalam 1–2 menit di:
   - `https://USERNAME.github.io/desa-bluek-lamkabu/`

> Pastikan semua file `.html`, `style.css`, `main.js`, dan folder `images/` ada di root repository.

---

## 📝 Penyesuaian untuk GitHub Pages

- Gunakan path relatif untuk semua link internal, misalnya `profil.html`, `kegiatan.html`, `informasi.html`
- Pastikan tidak ada `href="/..."` atau `src="/..."` yang menunjuk ke root server lokal
- Semua link di proyek ini sudah menggunakan path relatif, jadi siap untuk GitHub Pages
- Bila menggunakan domain khusus, tambahkan file `CNAME` di root dengan nama domain Anda

---

## 🎨 Kustomisasi

### Ubah Nama Desa
Cari dan ganti teks `Bluek Lamkabu` di semua file HTML.

### Ubah Data Statistik
Di `index.html`, cari elemen dengan `data-target`:
```html
<div class="stat-value" data-target="1248">0</div>
```
Ubah angka di `data-target` sesuai data desa Anda.

### Ubah Foto Hero
Di `style.css`, cari:
```css
.hero-bg {
  background-image: url('...');
}
```
Ganti URL dengan foto desa Anda (bisa upload ke Imgur atau gunakan path lokal `images/nama-gambar.jpg`).

### Ubah Lokasi Google Maps
Di `index.html`, cari `<iframe` dalam `.maps-section` dan ganti parameter `q=` di URL embed dengan nama desa Anda.

### Ubah Warna Tema
Di `style.css`, modifikasi variabel di `:root`:
```css
:root {
  --green-700: #15803d;
  --green-500: #22c55e;
}
```

---

## 🛠️ Teknologi

- HTML5 — Struktur halaman semantik
- CSS3 — Animasi, layout responsif, custom properties
- Vanilla JS — Interaksi tanpa framework
- Google Fonts — `Plus Jakarta Sans` + `Playfair Display`
- Unsplash — Foto placeholder (ganti dengan foto desa asli)

---

## 📄 Lisensi

Dibuat untuk keperluan pemerintahan desa. Bebas dimodifikasi sesuai kebutuhan.

---

*Dibangun dengan ❤️ untuk kemajuan Desa Bluek Lamkabu*
