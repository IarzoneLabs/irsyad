# Irsyad Portfolio Sanity Studio

Sanity Studio ini adalah dashboard admin untuk mengelola konten portfolio.

## Cara Setup Pertama Kali

1. Buat akun di Sanity.
2. Buat project baru dan dataset `production`.
3. Salin `projectId`.
4. Ganti `YOUR_PROJECT_ID` di `sanity.config.js`.
5. Ganti `projectId` kosong di `../sanity-config.js`.
6. Jalankan Studio:

```bash
npm install
npm run dev
```

## Cara Tambah Project Baru

1. Buka Sanity Studio.
2. Pilih `Project`.
3. Klik `Create new`.
4. Isi:
   - `Order`
   - `Title > Indonesia`
   - `Title > English`
   - `Description > Indonesia`
   - `Description > English`
   - `Tags`
5. Klik `Publish`.

Website akan mengambil data dari Sanity jika `../sanity-config.js` sudah memiliki `projectId`.
Kalau `projectId` masih kosong, website tetap memakai fallback dari `../content.js`.

## Tipe Konten

- `Project`
- `Certification`
- `Award`
- `Education`
- `Organization`

Setiap field utama memiliki versi `Indonesia` dan `English` supaya switch bahasa di website tetap rapi.
