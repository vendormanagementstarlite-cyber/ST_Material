# Form Request Pengambilan Material

Halaman GitHub Pages untuk web app Apps Script **Form Request Pengambilan Material** — Proyek Starlite.
Aplikasi ditampilkan di dalam halaman ini (alamat tetap `github.io`, tidak pindah ke `script.google.com`), sehingga **tiap deploy versi baru di Apps Script otomatis tampil** tanpa mengubah GitHub.

## Pasang (sekali saja)
1. GitHub → **New repository** → nama bebas (mis. `surat-tugas`) → Public → Create.
2. **Add file → Upload files** → unggah semua isi folder ini (`index.html`, `config.js`, `logo.png`, `.nojekyll`, `README.md`) → Commit.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. Tunggu 1–2 menit. Alamat aplikasi: `https://<username>.github.io/<nama-repo>/`

## Update aplikasi (tiap ada perubahan Code.gs)
1. Tempel `Code.gs` baru di Apps Script → Simpan.
2. **Deploy → Kelola deployment** → ikon pensil pada deployment yang ada → **Versi: Versi baru** → Deploy.
3. Selesai. Link tidak berubah, halaman GitHub langsung membuka versi terbaru.

> Jangan pakai **Deployment baru** karena link `/exec` berganti. Bila terpaksa, ubah `APP_URL` di `config.js` lalu commit.

## Catatan
- Akses web app harus **Jalankan sebagai: Saya** dan **Siapa yang memiliki akses: Siapa saja**.
- Link TTD yang dibuat sistem sudah memakai alamat GitHub (`WEB_URL` di Code.gs), mis. `.../ST_Material/?page=ttd&k=...`.
- Bila perlu membuka tanpa bingkai (cadangan), tambahkan `?direct=1` pada alamat.
- Link aplikasi hanya ada di `config.js`.

## Menjadikannya aplikasi (PWA)

Halaman ini sudah berupa aplikasi yang bisa dipasang (manifest.json, sw.js, ikon, halaman offline).
Upload SEMUA file di folder ini ke repo GitHub (termasuk manifest.json, sw.js, offline.html, icon-*.png, apple-touch-icon.png).

Cara memasang (buka link GitHub Pages, bukan link script):
- Android / Chrome: menu titik tiga > "Instal aplikasi" (atau "Tambahkan ke layar utama").
- Windows / Mac (Chrome atau Edge): ikon pasang di kanan address bar > "Instal".
- iPhone / iPad (Safari): tombol Bagikan > "Tambah ke Layar Utama".

Catatan: aplikasi tetap butuh internet untuk memuat data. Tanpa internet muncul halaman "Tidak ada koneksi".
Setelah deploy Apps Script versi baru, aplikasi otomatis memakai versi terbaru (isi aplikasi tidak disimpan di cache).

## Catatan: foto bukti pengambilan (mobil & bon)
Form mitra kini meminta foto mobil dan foto bon yang diambil langsung dengan kamera HP, lengkap dengan latlong dan alamat.
Tag `iframe` di `index.html` sudah memakai `allow="... geolocation *; camera *"` agar izin lokasi/kamera dapat diminta dari halaman ini.
Saat pertama kali mengambil foto, peramban akan meminta izin lokasi: pilih **Izinkan**. Jika lokasi ditolak, foto tidak dapat dipakai.

## Pembaruan (Status Reimbursement, Dashboard, Unduh PDF)
Perubahan kali ini ada di `Code.gs` (Apps Script). File GitHub hanya perlu diunggah ulang agar cache aplikasi (PWA) ikut diperbarui (`sw.js` versi `st-v4`).
- Status baru: **On Process SCM** (menggantikan Menunggu SCM), Not Approved, Approved. Data lama otomatis terbaca sebagai On Process SCM.
- Dashboard SCM menampilkan total nominal, nama mitra, dan status Reimbursement.
- Kirim ulang Reimbursement dengan kode ST yang sama menghapus foto lama (dipindah ke sampah Drive).
- Semua Preview di SCM punya tombol **Unduh PDF**; mitra bisa unduh PDF dari Cek Status.
- Setelah mengunggah file ke GitHub, tutup lalu buka ulang aplikasi (atau hapus cache) agar versi terbaru termuat.
