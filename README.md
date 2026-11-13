# Surat Tugas Req Material

Halaman pintu masuk aplikasi (GitHub Pages) untuk web app Apps Script **Surat Tugas Req Material** — Proyek Starlite.
Halaman ini hanya meneruskan pengunjung ke aplikasi, sehingga **tiap deploy versi baru di Apps Script otomatis tampil** tanpa mengubah GitHub.

## Pasang (sekali saja)
1. GitHub → **New repository** → nama bebas (mis. `surat-tugas`) → Public → Create.
2. **Add file → Upload files** → unggah semua isi folder ini (`index.html`, `config.js`, `logo.jpg`, `.nojekyll`, `README.md`) → Commit.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. Tunggu 1–2 menit. Alamat aplikasi: `https://<username>.github.io/<nama-repo>/`

## Update aplikasi (tiap ada perubahan Code.gs)
1. Tempel `Code.gs` baru di Apps Script → Simpan.
2. **Deploy → Kelola deployment** → ikon pensil pada deployment yang ada → **Versi: Versi baru** → Deploy.
3. Selesai. Link tidak berubah, halaman GitHub langsung membuka versi terbaru.

> Jangan pakai **Deployment baru** karena link `/exec` berganti. Bila terpaksa, ubah `APP_URL` di `config.js` lalu commit.

## Catatan
- Akses web app harus **Jalankan sebagai: Saya** dan **Siapa yang memiliki akses: Siapa saja**.
- Parameter pada alamat diteruskan, mis. `.../surat-tugas/?page=ttd&k=...` dibuka sebagai link TTD.
- Tambahkan `?stay=1` bila halaman tidak boleh mengalihkan otomatis.
- Link aplikasi hanya ada di `config.js`.
