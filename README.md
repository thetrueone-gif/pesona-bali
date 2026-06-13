# 🌺 Pesona Bali — Panduan Deployment ke Vercel

Website edukasi interaktif tentang Pulau Bali untuk tugas PKN Pancasila.

## 📁 Struktur Project

```
pesona-bali/
├── index.html      ← Struktur halaman (HTML)
├── style.css       ← Desain & tampilan (CSS)
├── app.js          ← Logika interaktif (JavaScript)
├── vercel.json     ← Konfigurasi Vercel
└── README.md       ← Panduan ini
```

## 🚀 CARA DEPLOY KE VERCEL (Step by Step)

---

### METODE 1 — Via GitHub (Recommended)

#### Step 1: Buat Repository GitHub
1. Buka https://github.com dan login
2. Klik tombol **"New"** (hijau) di pojok kiri atas
3. Isi:
   - Repository name: `pesona-bali`
   - Visibility: **Public**
4. Klik **"Create repository"**

#### Step 2: Upload File ke GitHub
**Cara A — Via Web (tanpa install Git):**
1. Di halaman repo yang baru dibuat, klik **"uploading an existing file"**
2. Drag & drop semua file: `index.html`, `style.css`, `app.js`, `vercel.json`
3. Scroll ke bawah, klik **"Commit changes"**

**Cara B — Via Git (jika sudah install Git):**
```bash
cd pesona-bali
git init
git add .
git commit -m "feat: initial Pesona Bali website"
git branch -M main
git remote add origin https://github.com/USERNAME/pesona-bali.git
git push -u origin main
```

#### Step 3: Deploy ke Vercel
1. Buka https://vercel.com dan login (bisa pakai akun GitHub)
2. Klik **"Add New Project"**
3. Di bagian **"Import Git Repository"**, pilih `pesona-bali`
4. Klik **"Import"**
5. Di halaman konfigurasi:
   - **Framework Preset**: pilih **"Other"**
   - **Root Directory**: biarkan kosong (`.`)
   - **Build Command**: kosongkan
   - **Output Directory**: kosongkan
6. Klik **"Deploy"** 🚀

#### Step 4: Selesai! Website Live
- Vercel akan memberikan URL seperti: `pesona-bali-xxx.vercel.app`
- Website sudah **public** dan bisa diakses siapa saja
- Setiap kali kamu push ke GitHub, Vercel otomatis update

---

### METODE 2 — Via Vercel CLI (Advanced)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy dari folder project
cd pesona-bali
vercel

# Ikuti instruksi, lalu untuk production:
vercel --prod
```

---

### METODE 3 — Drag & Drop (Paling Mudah)

1. Buka https://vercel.com
2. Login
3. Di dashboard, cari area **"Deploy"** atau drag folder ke halaman
4. Drag seluruh folder `pesona-bali` ke browser
5. Vercel otomatis deploy dalam hitungan detik!

---

## 🎨 Custom Domain (Opsional)

Setelah deploy, kamu bisa menambahkan domain kustom:
1. Di dashboard Vercel, buka project `pesona-bali`
2. Klik tab **"Settings"** → **"Domains"**
3. Tambahkan domain yang kamu punya, misalnya: `pesonabali.com`

---

## ✅ Checklist Sebelum Deploy

- [ ] Semua file ada: `index.html`, `style.css`, `app.js`, `vercel.json`
- [ ] Test di browser lokal: buka `index.html` langsung di browser
- [ ] Cek tampilan mobile (DevTools → Toggle Device Toolbar)
- [ ] Pastikan semua link navigasi berfungsi
- [ ] Test Gamelan Virtual (tekan A, S, D, F, G, H, J, K)

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| HTML5 | Struktur halaman & semantik |
| CSS3 | Desain, animasi, responsive layout |
| Vanilla JavaScript | Interaktivitas, Web Audio API |
| Google Fonts | Tipografi (DM Serif + Inter) |
| Vercel | Hosting & CDN gratis |

## 🎯 Fitur Website

- ✅ Navbar sticky dengan scroll effect
- ✅ Hero section dengan animasi
- ✅ Info 9 Kabupaten/Kota interaktif
- ✅ 9 Kartu Budaya dengan filter kategori
- ✅ 8 Kartu Keindahan Alam
- ✅ Modal popup dengan nilai Pancasila
- ✅ Gamelan Bali virtual (keyboard + klik)
- ✅ Fully responsive (mobile-friendly)
- ✅ Scroll reveal animations

---

*© 2026 — Tugas PKN Pancasila · Pesona Bali*
