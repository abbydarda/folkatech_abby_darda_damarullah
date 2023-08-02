# Folkatech - Abby Darda Damarullah

![Node.js Version](https://img.shields.io/badge/Node.js-18.16.0-green) ![Express Version](https://img.shields.io/badge/Express-4.18.2-blue)

Ini adalah API untuk test backend developer Folkatech.

## Prasyarat

Pastikan Anda telah menginstal [Docker](https://www.docker.com/get-started) pada sistem Anda sebelum melanjutkan.

## Instalasi

1. Clone repositori ini ke direktori lokal Anda:

   ```bash
   git clone git@github.com:abbydarda/folkatech_abby_darda_damarullah.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd folkatech_abby_darda_damarullah
   ```

3. Buat file `.env` dan isi dengan konfigurasi yang sesuai:

   ```bash
   touch .env
   ```

   Contoh isi file `.env`:

   ```
   NODE_ENV=development||production
   APP_PORT=3001
   JWT_SECRET=super-secret
   JWT_EXP=1d
   DB_URI=mongodb://db_abby_darda_damarullah:27017/abby_darda_damarullah
   REDIS_URI=redis://redis_abby_darda_damarullah:6379
   ```

4. Jalankan aplikasi menggunakan Docker Compose:

```bash
docker compose up -d
```

Aplikasi akan berjalan di `http://localhost:3001`.

Untuk Dokumentasi ada di `http://localhost:3001/api/docs`.
