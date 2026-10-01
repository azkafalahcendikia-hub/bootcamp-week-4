# Song Cards — React Fundamental

Aplikasi sederhana berbasis React yang menampilkan koleksi lagu dalam bentuk kartu.
Setiap kartu berisi gambar, judul lagu, penyanyi, dan deskripsi yang dapat ditampilkan
atau disembunyikan melalui tombol interaktif.

Project ini dibuat sebagai tugas individu Week 4 untuk mempraktikkan penggunaan
component, props, dan state pada React.

---

## Tampilan dan Interaksi

Halaman utama menampilkan beberapa lagu dengan informasi yang berbeda-beda.
Masing-masing card menggunakan component yang sama, tetapi data yang ditampilkan
dikirim secara berbeda melalui props.

Pada setiap card tersedia tombol **Show Details**. Ketika tombol ditekan, deskripsi
lagu akan ditampilkan secara lengkap. Tombol tersebut kemudian berubah menjadi
**Hide Details** untuk menyembunyikan deskripsi kembali.

Interaksi tersebut dilakukan menggunakan React State sehingga halaman tidak perlu
dimuat ulang.

---

## Yang Dipelajari

Melalui project ini diterapkan beberapa konsep dasar React:

**Reusable Component**  
Component `Card` digunakan berulang kali untuk membuat beberapa kartu lagu.

**Props**  
Informasi setiap lagu dikirim dari `App.jsx` ke `Card.jsx` melalui beberapa props,
yaitu `imgSrc`, `title`, `author`, dan `desc`.

**State (`useState`)**  
State digunakan pada `Card.jsx` untuk mengatur apakah deskripsi lagu sedang
ditampilkan atau disembunyikan.

---

## Teknologi

Project ini menggunakan:

- React
- Vite
- JavaScript
- Tailwind CSS

---

## Susunan File

```text
bootcamp-week-4/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Header.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Menjalankan Project di Komputer

Pastikan Node.js sudah terpasang, kemudian buka terminal pada folder project.

Install seluruh package yang dibutuhkan:

```text
npm install
```

Setelah proses instalasi selesai, jalankan server pengembangan:

```text
npm run dev
```

Vite kemudian akan memberikan alamat lokal pada terminal. Buka alamat tersebut
menggunakan browser, contohnya:

```text
http://localhost:5173/
```
