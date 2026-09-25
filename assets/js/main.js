// =========================================================
// FinTrack — main.js
// Fungsi umum yang dipakai di semua halaman
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  setActiveNavFromPath();
});

/* ---- Toggle sidebar (desktop: collapse, mobile: slide-in) ---- */
function initSidebarToggle() {
  const toggle = document.getElementById('sidebarToggle');
  const shell = document.getElementById('appShell');
  if (!toggle || !shell) return;

  toggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      shell.classList.toggle('sidebar-open');
    } else {
      shell.classList.toggle('sidebar-collapsed');
    }
  });
}

/* ---- Set menu aktif berdasarkan nama file halaman ---- */
function setActiveNavFromPath() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    if (item.dataset.page === path) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

/* ---- Format angka ke Rupiah ---- */
function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID');
}

/* ---- Format tanggal ke format Indonesia ---- */
function formatTanggal(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ---- Validasi form sederhana (dipakai di halaman form) ---- */
function validateRequired(formEl) {
  let valid = true;
  formEl.querySelectorAll('[required]').forEach(field => {
    const errorEl = field.parentElement.querySelector('.form-error');
    if (!field.value.trim()) {
      field.classList.add('error');
      if (errorEl) errorEl.style.display = 'block';
      valid = false;
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.style.display = 'none';
    }
  });
  return valid;
}
