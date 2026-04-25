# Dokumentasi Portfolio Irsyad + Sanity CMS

Dokumentasi ini menjelaskan cara kerja website portfolio, cara menjalankannya, dan cara mengedit konten melalui Sanity CMS.

## 1. Gambaran Sistem

Website ini terdiri dari dua bagian:

1. Website portfolio
   - File utama: `index.html`, `style.css`, `main.js`
   - Dipakai pengunjung untuk melihat portfolio.
   - Hosted di Vercel: `https://irsyad-gilt.vercel.app`

2. Sanity Studio
   - Folder: `sanity-studio/`
   - Dipakai admin untuk menambah/mengedit konten.
   - Berjalan lokal di: `http://127.0.0.1:3333`

Alur datanya:

```text
Kamu edit konten di Sanity Studio
        ↓
Konten tersimpan di Sanity Content Lake
        ↓
Website Vercel mengambil data dari Sanity API
        ↓
Pengunjung melihat konten terbaru
```

Website juga punya fallback lokal di `content.js`. Jika Sanity belum bisa diakses, website tetap menampilkan konten dari file tersebut.

## 2. Struktur Folder Penting

```text
Web/
├─ index.html              # Struktur halaman portfolio
├─ style.css               # Styling website
├─ main.js                 # Logic switch bahasa, render konten, fetch Sanity
├─ content.js              # Data fallback lokal jika Sanity gagal diakses
├─ sanity-config.js        # Project ID dan dataset Sanity untuk website
├─ assets/                 # CV dan foto lokal fallback
└─ sanity-studio/          # Dashboard CMS Sanity
```

## 3. Konfigurasi Sanity

Project Sanity yang dipakai:

```text
Project ID: 7uodvvek
Dataset: production
Website origin: https://irsyad-gilt.vercel.app
```

Konfigurasi website ada di:

```js
// Web/sanity-config.js
const SANITY_CONFIG = {
  projectId: "7uodvvek",
  dataset: "production",
  apiVersion: "2025-04-25",
  useCdn: true
};
```

Konfigurasi Studio ada di:

```js
// Web/sanity-studio/sanity.config.js
projectId: '7uodvvek',
dataset: 'production',
```

## 4. Cara Menjalankan Website Lokal

Karena website ini masih HTML/CSS/JS biasa, cara paling sederhana adalah membuka file:

```text
Web/index.html
```

Namun untuk hasil yang lebih mirip website asli, jalankan server lokal dari folder `Web`.

Contoh dengan Python:

```bash
cd Web
python -m http.server 8000
```

Lalu buka:

```text
http://127.0.0.1:8000
```

Jika Python tidak tersedia, bisa juga pakai extension Live Server di VS Code.

## 5. Cara Menjalankan Sanity Studio

```cd C:\Users\Asus
cd irsyad
cd Web\sanity-studio
npm install
npm run dev```





Masuk ke folder Studio:

```bash
cd Web/sanity-studio
```

Install dependency sekali saja:

```bash
npm install
```

Jalankan Studio:

```bash
npm run dev
```

Buka:

```text
http://127.0.0.1:3333
```

Jika diminta menghubungkan Studio ke project, pilih:

```text
Add development host
```

Untuk lokal, jangan pilih `Register this studio` dulu.

## 6. Menu Konten di Sanity Studio

Saat Studio terbuka, menu yang tersedia:

```text
Profile / Hero
Project
Certification
Award
Education
Organization
```

Penjelasannya:

```text
Profile / Hero  = bagian paling atas website, nama, deskripsi, kontak, foto, statistik
Project         = daftar portfolio/project
Certification   = daftar lisensi dan sertifikasi
Award           = daftar penghargaan dan prestasi
Education       = pendidikan formal/vokasi
Organization    = pengalaman organisasi
```

## 7. Cara Edit Bagian Hero/Home

Di Sanity Studio:

```text
Profile / Hero → pilih dokumen Irsyad Adi Rochman
```

Field yang bisa diedit:

```text
First Name
Last Name
Status Text
Subtitle
Description
CV Button Text
Contact Button Text
Photo Alt Text
Profile Photo
Email
Phone
LinkedIn Label
LinkedIn URL
Hero Metrics
```

Setelah selesai:

```text
Klik Publish
```

Kalau upload foto di `Profile Photo`, website akan memakai foto dari Sanity. Kalau kosong, website memakai foto lokal dari folder `assets`.

## 8. Cara Tambah Project Baru

Di Sanity Studio:

```text
Project → tombol + → isi data
```

Isi field:

```text
Order
Title > Indonesia
Title > English
Description > Indonesia
Description > English
Tags
```

Contoh:

```text
Order: 7

Title Indonesia:
Dashboard Produksi

Title English:
Production Dashboard

Description Indonesia:
Dashboard untuk memantau performa produksi harian.

Description English:
Dashboard for monitoring daily production performance.

Tags:
Power BI, SQL, Manufacturing
```

Setelah selesai:

```text
Klik Publish
```

Website akan otomatis menampilkan project sesuai urutan `Order`.

## 9. Cara Tambah Sertifikasi Baru

Di Sanity Studio:

```text
Certification → tombol + → isi data
```

Isi field:

```text
Year
Title > Indonesia
Title > English
Issuer > Indonesia
Issuer > English
```

Contoh:

```text
Year: 2026
Title Indonesia: Six Sigma White Belt
Title English: Six Sigma White Belt
Issuer Indonesia: Educate 360
Issuer English: Educate 360
```

Setelah selesai:

```text
Klik Publish
```

## 10. Draft vs Published

Sanity memakai dua status utama:

```text
Draft      = konten masih konsep, belum muncul di website
Published  = konten sudah live dan bisa dibaca website
```

Saat membuat konten baru, buat sebagai Draft dulu, isi datanya, lalu klik Publish.

Jika muncul error:

```text
Cannot create a published document
```

Solusinya:

1. Buka dropdown kanan atas yang bertuliskan `Published`.
2. Pilih mode draft/drafts.
3. Buat dokumen baru dari situ.
4. Setelah isi lengkap, klik `Publish`.

## 11. Kenapa Konten Baru Belum Muncul di Website?

Cek urutan ini:

1. Pastikan dokumen sudah `Published`, bukan masih Draft.
2. Refresh website dengan hard refresh:

```text
Ctrl + F5
```

3. Tunggu sebentar. Sanity CDN kadang butuh beberapa detik.
4. Pastikan CORS Sanity sudah mengizinkan domain Vercel.

CORS yang sudah dipasang:

```text
https://irsyad-gilt.vercel.app
```

Jika perlu menambahkan lagi:

```bash
cd Web/sanity-studio
npx sanity cors add https://irsyad-gilt.vercel.app --no-credentials
```

## 12. Cara Login Sanity CLI

Jika terminal meminta login:

```bash
cd Web/sanity-studio
npx sanity login --provider github
```

Gunakan akun GitHub yang terhubung ke project Sanity.

## 13. Cara Import Data Awal

Data awal sudah disediakan di:

```text
Web/sanity-studio/seed/portfolio.ndjson
Web/sanity-studio/seed/profile.ndjson
```

Import portfolio:

```bash
cd Web/sanity-studio
npx sanity dataset import seed/portfolio.ndjson --dataset production --replace
```

Import profile/hero:

```bash
npx sanity dataset import seed/profile.ndjson --dataset production --replace
```

Catatan:

```text
--replace akan mengganti dokumen dengan ID yang sama.
```

## 14. Cara Deploy Perubahan Kode

Kalau mengubah kode seperti schema, HTML, CSS, atau JS:

```bash
git add .
git commit -m "Pesan commit"
git push origin main
```

Vercel akan otomatis redeploy dari branch `main`.

Kalau hanya mengubah konten dari Sanity Studio:

```text
Tidak perlu git commit.
Tidak perlu redeploy.
Cukup Publish di Sanity.
```

## 15. Flow Harian yang Paling Sering Dipakai

Untuk update konten:

```text
1. Jalankan Sanity Studio
2. Buka http://127.0.0.1:3333
3. Pilih menu konten
4. Edit atau tambah item
5. Klik Publish
6. Hard refresh website
```

Untuk update tampilan/desain:

```text
1. Edit file HTML/CSS/JS
2. Test lokal
3. Commit
4. Push ke GitHub
5. Tunggu Vercel redeploy
```

## 16. Troubleshooting Singkat

Studio tidak jalan:

```bash
cd Web/sanity-studio
npm install
npm run dev
```

Port 3333 sudah dipakai:

```text
Tutup terminal/dev server lama, lalu jalankan npm run dev lagi.
```

Konten tidak muncul di website:

```text
Pastikan Published, bukan Draft.
Pastikan CORS aktif.
Pastikan internet aktif.
Hard refresh browser.
```

Field baru tidak muncul di Studio:

```text
Restart Sanity Studio.
Stop npm run dev, lalu jalankan lagi.
```

Website masih menampilkan data lama:

```text
Kemungkinan sedang memakai cache CDN atau fallback content.js.
Tunggu beberapa detik, lalu Ctrl + F5.
```
