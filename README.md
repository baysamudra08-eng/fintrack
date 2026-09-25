# FinTrack — Admin Panel Dashboard Keuangan

Project client-side (HTML/CSS/JS murni) untuk tugas Milestone 2 & 3.

## Struktur Folder

```
fintrack/
├── index.html              → entry point, redirect ke dashboard
├── layout.html              → template master (Milestone 2)
├── assets/
│   ├── css/styles.css       → design tokens & semua styling
│   └── js/
│       ├── main.js          → toggle sidebar, format rupiah, validasi
│       └── mock-data.js     → data dummy (accounts, categories, transactions, budgets)
└── pages/
    ├── dashboard.html        → KPI cards + Chart.js + tabel transaksi terbaru
    ├── data-master.html      → tabel semua transaksi + filter
    ├── form.html              → form tambah transaksi + validasi JS
    └── laporan.html           → laporan printable (Cetak / Unduh PDF)
```

## Cara Menjalankan

**Opsi 1 — Langsung buka di browser**
Double-click `index.html`. Catatan: beberapa fitur (fetch data) bisa dibatasi kebijakan `file://`, tapi untuk project ini (data statis di JS) sudah cukup jalan.

**Opsi 2 — Live Server di VS Code (disarankan)**
1. Install extension **Live Server** dari Extensions Marketplace.
2. Klik kanan `index.html` → **Open with Live Server**.
3. Browser otomatis terbuka ke `http://127.0.0.1:5500`, auto-refresh tiap kamu simpan perubahan.

**Opsi 3 — Python HTTP server**
```bash
cd fintrack
python -m http.server 8000
```
Buka `http://localhost:8000` di browser.

## Yang Sudah Diimplementasikan

- ✅ Layout admin panel responsif (sidebar, header, content, footer)
- ✅ Sidebar dengan toggle collapse (desktop) dan slide-in (mobile)
- ✅ Dashboard dengan KPI cards, grafik Chart.js (pemasukan vs pengeluaran per minggu), progress anggaran per kategori, tabel transaksi terbaru
- ✅ Halaman Data Master (Semua Transaksi) dengan filter tipe/kategori/akun
- ✅ Form Tambah Transaksi dengan validasi JavaScript (required fields, shortcut nominal cepat)
- ✅ Laporan Ringkasan Bulanan — bisa di-print (tombol Cetak memicu `window.print()`), tabel rincian kategori dengan badge status (Aman/Waspada/Melebihi), tabel transaksi terbesar, area tanda tangan

## Yang Masih Perlu Dikembangkan (opsional, sesuai kebutuhan tugas)

- Halaman Transfer Antar Akun, Kategori, Akun/Rekening (Data Master detail), Anggaran, Arus Kas, Pengaturan — bisa dibuat mengikuti pola `layout.html` + isi konten spesifik
- Integrasi backend/database sungguhan (saat ini semua data dummy di `mock-data.js`)
- Fungsi unduh PDF sungguhan (saat ini tombol "Unduh PDF" belum terhubung ke library seperti jsPDF atau html2pdf)

## Palet Warna (Design Tokens)

Semua warna & tipografi didefinisikan sebagai CSS variables di `assets/css/styles.css`, mengikuti spesifikasi di `PERANCANGAN.md` section 6.1–6.2. Ubah di satu tempat itu untuk mengubah tema di seluruh halaman.
