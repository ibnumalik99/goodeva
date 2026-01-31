## Konfigurasi
### BE
- Konfigurasi username, password dan juga nama database di `src/data-source.ts` dan `src/app.module.ts`
- Buat schema dengan perintah `npx typeorm-ts-node-commonjs migration:generate dist/migration/InitSchema --data-source src/data-source.ts --pretty`
- Jalankan migrasi denga perintah `npx typeorm-ts-node-commonjs -d src/data-source.ts migration:run`
- Running `npm run star:dev`
### FE
- Running APP `npm start`
### Node Version
- v24.13.0
### Keputusan singkat
- BE menggunakan TypeORM agar lebih mudah dalam melakukan proses Query.
- code di FE sudah dirancang sehingg ada proses pengiriman id yang valid (401) dari FE ke BE.
