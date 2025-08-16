# Frontend - Batik Vision

Frontend Batik Vision adalah implementasi UI/UX untuk website prediksi Batik Madura dan Batik Nusantara berbasis HTML, CSS, dan JavaScript (Vanilla JS).

## Fitur

- Upload gambar batik
- Preview hasil klasifikasi:
  - Batik Madura vs Luar Madura
  - Batik Nusantara (beberapa jenis batik Nusantara)
- Menampilkan confidence dari model
- Terhubung langsung ke REST API dari backend Flask
- Tampilan responsif dengan desain modern

## Teknologi

- HTML5
- CSS3 (Custom + Variabel Warna)
- JavaScript Vanilla (Fetch API)

## Instalasi Lokal

1. Clone repository:
    ```bash
    git clone <repo-url>
    cd <repo-folder>
    git checkout FE
    ```

2. Jalankan menggunakan live server (misal dengan **VSCode Live Server Extension**) atau:
    ```bash
    python -m http.server 5500
    ```

3. Pastikan endpoint di `api.js` mengarah ke Cloud Run:
    ```javascript
    const API_URL = "https://batik-backend-xxxx.a.run.app/predict";
    ```

   > Ganti `API_URL` sesuai URL backend Flask kamu.

---

## Struktur Folder

```bash
.
├── index.html              # Halaman utama
├── batikmadura.html        # Halaman prediksi Batik Madura
├── batiknusantara.html     # Halaman prediksi Batik Nusantara
├── assets/                 # Gambar, ikon, logo, dll
├── css/                    # File CSS custom
└── js/                     # File JavaScript (misalnya api.js)

