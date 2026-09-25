// =========================================================
// FinTrack — mock-data.js
// Data dummy client-side sesuai ERD di PERANCANGAN.md
// (Pengganti sementara database sungguhan)
// =========================================================

const MOCK_ACCOUNTS = [
  { id: 1, name: 'BCA - Giro Operasional', type: 'bank', balance: 52800000 },
  { id: 2, name: 'Kas Tunai', type: 'tunai', balance: 4750000 },
  { id: 3, name: 'Mandiri - Giro Payroll', type: 'bank', balance: 26450000 },
];

const MOCK_CATEGORIES = [
  { id: 1, name: 'Penjualan', type: 'pemasukan' },
  { id: 2, name: 'Operasional & Bahan Baku', type: 'pengeluaran' },
  { id: 3, name: 'Transportasi', type: 'pengeluaran' },
  { id: 4, name: 'Perpajakan', type: 'pengeluaran' },
  { id: 5, name: 'Hiburan & Relasi', type: 'pengeluaran' },
];

const MOCK_TRANSACTIONS = [
  { id: 'TX-20260928-01', date: '2026-09-28', desc: 'Pembayaran Invoice PT Sinar Jaya Abadi', category: 'Penjualan', account: 'BCA - Giro Operasional', type: 'pemasukan', amount: 14500000 },
  { id: 'TX-20260927-04', date: '2026-09-27', desc: 'Belanja Stok Bahan Baku Dapur', category: 'Operasional', account: 'BCA Corporate', type: 'pengeluaran', amount: 4250000 },
  { id: 'TX-20260926-02', date: '2026-09-26', desc: 'Tagihan Listrik PLN & Internet Telkom Fiber', category: 'Operasional', account: 'BCA Auto-Debit', type: 'pengeluaran', amount: 1450000 },
  { id: 'TX-20260925-05', date: '2026-09-25', desc: 'Pengisian BBM Armada Operasional', category: 'Transportasi', account: 'Kas Petty Cash', type: 'pengeluaran', amount: 950000 },
  { id: 'TX-20260924-03', date: '2026-09-24', desc: 'Jasa Konsultan Pajak Bulanan', category: 'Perpajakan', account: 'Bank Mandiri', type: 'pengeluaran', amount: 3500000 },
];

const MOCK_BUDGETS = [
  { category: 'Operasional & Bahan Baku', total: 6375000, percent: 78, budget: 8125000, status: 'aman' },
  { category: 'Transportasi', total: 4875000, percent: 108, budget: 4500000, status: 'melebihi' },
  { category: 'Hiburan & Relasi', total: 3375000, percent: 95, budget: 3550000, status: 'waspada' },
];

const MOCK_WEEKLY = {
  labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
  pemasukan: [6300000, 7100000, 9800000, 9300000],
  pengeluaran: [4600000, 3900000, 5200000, 5050000],
};

// Ringkasan bulan berjalan
const MOCK_SUMMARY = {
  totalSaldo: 84000000,
  pemasukanBulanIni: 32500000,
  pengeluaranBulanIni: 18750000,
  selisihBersih: 13750000,
};
