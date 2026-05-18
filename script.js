// ════════════════════════════════════════════════════════
//  DATABASE PENGETAHUAN BIMO
//  Strategi keywords:
//  - Gunakan kata-kata PERSIS yang diketik pengunjung
//  - Sertakan variasi bahasa sehari-hari, singkatan, typo umum
//  - Pisah frasa dengan spasi agar Fuse.js bisa token-match
// ════════════════════════════════════════════════════════
const KB = [

  // ── SALAM ──────────────────────────────────────────────
  {
    id: 'salam',
    keywords: 'halo hai hello hi selamat pagi siang sore malam apa kabar perkenalan siapa kamu apa itu bimo bot',
    answer: `Halo! 👋 Selamat datang di <b>BIMO</b>, Bot Informasi Imigrasi Bitung.<br><br>
Saya siap membantu Anda dengan informasi seputar:<br>
<ul>
  <li>🛂 Paspor baru &amp; perpanjangan</li>
  <li>💳 Biaya dan prosedur layanan</li>
  <li>📱 Aplikasi M-Paspor</li>
  <li>🚨 Paspor hilang atau rusak</li>
</ul>
Silakan pilih menu di samping atau langsung ketik pertanyaan Anda! 😊`
  },

  // ── PASPOR BARU ────────────────────────────────────────
  {
    id: 'paspor_baru',
    keywords: 'syarat paspor baru buat paspor bikin paspor pertama kali belum punya paspor mau buat paspor dokumen apa saja persyaratan paspor baru permohonan paspor ketentuan paspor baru daftar paspor cara buat paspor prosedur',
    answer: `<b>🛂 Syarat Pembuatan Paspor Baru:</b><br><br>
<b>Dokumen Wajib (Asli):</b><br>
<ul>
  <li>E-KTP asli</li>
  <li>Kartu Keluarga (KK) asli</li>
  <li>Salah satu: <b>Akta Kelahiran</b> atau <b>Ijazah</b> atau <b>Buku Nikah</b></li>
</ul>
<b>Catatan Penting:</b><br>
<ul>
  <li>Semua dokumen dibawa yang asli</li>
  <li>Wajib daftar antrian via <b>M-Paspor</b> sebelum datang</li>
  <li>Proses normal: <b>3–4 hari kerja</b> setelah perekaman biometrik</li>
</ul>
<div class="highlight">💡 Pastikan data di KTP, KK, dan dokumen pendukung sesuai. Perbedaan nama atau tanggal lahir perlu surat keterangan dari Dukcapil.</div>`
  },

  // ── PERPANJANGAN ───────────────────────────────────────
  {
    id: 'perpanjang',
    keywords: 'perpanjang paspor perpanjangan paspor renew paspor paspor habis paspor mati paspor kadaluarsa paspor expired paspor mau habis sisa berlaku ganti paspor lama syarat perpanjang dokumen perpanjang paspor lama mau habis masa berlaku habis',
    answer: `<b>🔄 Syarat Perpanjangan Paspor:</b><br><br>
<b>Paspor terbitan 2009 ke atas:</b><br>
<ul>
  <li>E-KTP asli</li>
  <li>Paspor lama asli</li>
</ul>
<b>Paspor terbitan sebelum 2009:</b><br>
<ul>
  <li>E-KTP asli</li>
  <li>KK asli</li>
  <li>Akta Kelahiran / Ijazah / Buku Nikah (salah satu)</li>
  <li>Paspor lama asli</li>
</ul>
<div class="highlight">💡 Disarankan perpanjang minimal <b>6 bulan sebelum</b> masa berlaku habis — banyak negara menolak paspor dengan sisa berlaku di bawah 6 bulan.</div>`
  },

  // ── BIAYA ──────────────────────────────────────────────
  {
    id: 'biaya',
    keywords: 'biaya paspor harga paspor tarif paspor berapa biaya bayar paspor berapa harga ongkos paspor biaya buat paspor biaya perpanjang paspor pnbp paspor berapa bayarnya pembayaran paspor biaya ganti paspor biaya permohonan',
    answer: `<b>💳 Rincian Biaya Paspor:</b><br><br>
<ul>
  <li><b>E-Paspor (berlaku 5 tahun):</b> Rp 650.000</li>
  <li><b>E-Paspor (berlaku 10 tahun):</b> Rp 950.000</li>
</ul>
<b>Biaya Tambahan:</b><br>
<ul>
  <li><b>Layanan Percepatan (1 hari jadi):</b> + Rp 1.000.000</li>
  <li><b>Denda paspor hilang:</b> Rp 1.000.000</li>
  <li><b>Denda paspor rusak:</b> Rp 500.000</li>
</ul>
<div class="highlight">💳 Pembayaran via bank teller, ATM, atau marketplace seperti Tokopedia, Bukalapak, dan Shopee.</div>`
  },

  // ── PASPOR HILANG / RUSAK ──────────────────────────────
  {
    id: 'hilang_rusak',
    keywords: 'paspor hilang paspor rusak paspor basah paspor terbakar paspor hancur paspor tercecer kehilangan paspor paspor robek paspor lecek lapor paspor hilang urus paspor hilang prosedur paspor hilang denda hilang denda rusak paspor ketlisut paspor lenyap',
    answer: `<b>🚨 Penanganan Paspor Hilang / Rusak:</b><br><br>
<b>Langkah 1 — Lapor Polisi</b> (khusus hilang)<br>
Buat <b>Surat Keterangan Kehilangan</b> di Kantor Polisi terdekat.<br><br>
<b>Langkah 2 — Siapkan Dokumen</b><br>
<ul>
  <li>E-KTP asli</li>
  <li>KK asli</li>
  <li>Surat laporan polisi (jika hilang)</li>
  <li>Paspor yang rusak (jika rusak/basah)</li>
</ul>
<b>Langkah 3 — Datang ke Kantor Imigrasi</b><br>
Jalani proses <b>BAP</b> (Berita Acara Pemeriksaan) oleh petugas.<br><br>
<b>Langkah 4 — Bayar Denda</b><br>
Denda hilang <b>Rp 1.000.000</b> atau rusak <b>Rp 500.000</b>, ditambah biaya buku paspor baru.`
  },

  // ── M-PASPOR ───────────────────────────────────────────
  {
    id: 'mpaspor',
    keywords: 'mpaspor m-paspor aplikasi mpaspor cara pakai mpaspor daftar mpaspor download mpaspor antrian online booking paspor jadwal paspor cara daftar online cara booking paspor aplikasi imigrasi antrian mpaspor tidak bisa login mpaspor error cara registrasi mpaspor',
    answer: `<b>📱 Cara Menggunakan Aplikasi M-Paspor:</b><br><br>
<ol>
  <li><b>Download</b> di <a href="https://play.google.com/store/apps/details?id=id.go.imigrasi.mpaspor" target="_blank">Play Store (Android)</a> atau <a href="https://apps.apple.com/id/app/m-paspor/id1588832107" target="_blank">App Store (iOS)</a></li>
  <li><b>Registrasi</b> menggunakan email aktif</li>
  <li><b>Pilih layanan</b> (Baru/Penggantian) dan Kantor Imigrasi Bitung</li>
  <li><b>Upload foto dokumen</b> asli (KTP, KK, dll)</li>
  <li><b>Pilih jadwal</b> kedatangan ke kantor</li>
  <li><b>Bayar PNBP</b> via bank/marketplace sebelum batas waktu</li>
</ol>
<div class="highlight">📆 Kuota antrian biasanya dibuka setiap <b>Jumat sore</b> atau <b>Senin pagi</b> — segera ambil sebelum penuh.</div>`
  },

  // ── PASPOR ANAK ────────────────────────────────────────
  {
    id: 'paspor_anak',
    keywords: 'paspor anak buat paspor anak syarat paspor anak anak bawah umur bayi paspor balita paspor remaja paspor anak kecil dokumen paspor anak anak berapa tahun bikin paspor anak umur berapa buat paspor anak sekolah paspor anak sd smp sma',
    answer: `<b>👶 Syarat Paspor Anak (di bawah 17 tahun):</b><br><br>
<ul>
  <li>KTP asli <b>kedua orang tua</b></li>
  <li>Kartu Keluarga (KK) asli</li>
  <li>Akta Kelahiran asli</li>
  <li>Buku Nikah orang tua asli</li>
  <li>Paspor orang tua (jika ada)</li>
  <li>Paspor lama anak (jika perpanjangan)</li>
</ul>
<div class="highlight">👦 Anak <b>wajib hadir</b> secara fisik saat perekaman biometrik (foto &amp; sidik jari) di kantor.</div>`
  },

  // ── E-PASPOR ───────────────────────────────────────────
  {
    id: 'epaspor',
    keywords: 'epaspor e-paspor paspor elektronik chip paspor rfid paspor autogate paspor biometrik apa itu epaspor bedanya epaspor paspor biasa keunggulan epaspor manfaat epaspor kenapa pilih epaspor jepang visa waiver bebas visa jepang',
    answer: `<b>📱 Apa Itu E-Paspor?</b><br><br>
E-Paspor adalah paspor yang dilengkapi <b>chip RFID</b> yang menyimpan data biometrik pemilik (foto wajah &amp; sidik jari).<br><br>
<b>✅ Keunggulan E-Paspor:</b><br>
<ul>
  <li>Bisa pakai <b>autogate</b> di bandara internasional — antrean lebih cepat</li>
  <li>Mendapat fasilitas <b>Visa Waiver Jepang</b> (bebas visa ke Jepang)</li>
  <li>Keamanan data lebih tinggi dan sulit dipalsukan</li>
  <li>Proses imigrasi di luar negeri lebih mudah</li>
</ul>
<b>Biaya:</b> 5 tahun <b>Rp 650.000</b> | 10 tahun <b>Rp 950.000</b>`
  },

  // ── JAM OPERASIONAL ────────────────────────────────────
  {
    id: 'jam_operasional',
    keywords: 'jam buka imigrasi jam kantor imigrasi jam pelayanan kapan buka imigrasi bitung buka jam berapa tutup jam berapa hari apa buka hari apa saja layanan kantor imigrasi buka sabtu buka minggu libur imigrasi waktu pelayanan jadwal buka',
    answer: `<b>🕐 Jam Operasional Kantor Imigrasi Bitung:</b><br><br>
<ul>
  <li><b>Senin – Kamis:</b> 08.00 – 16.00 WITA</li>
  <li><b>Jumat:</b> 08.00 – 16.30 WITA</li>
  <li><b>Istirahat:</b> 12.00 – 13.00 WITA (Jumat: 11.30 – 13.15)</li>
  <li><b>Sabtu &amp; Minggu:</b> Tutup</li>
</ul>
<div class="highlight">📆 Kuota M-Paspor biasanya dibuka tiap <b>Jumat sore</b> atau <b>Senin pagi</b>. Pantau terus aplikasi M-Paspor!</div>`
  },

  // ── LAMA PROSES ────────────────────────────────────────
  {
    id: 'lama_proses',
    keywords: 'berapa lama paspor jadi kapan paspor selesai lama proses paspor waktu tunggu paspor estimasi paspor berapa hari paspor selesai proses paspor berapa lama paspor sudah bisa diambil kapan bisa diambil paspor cepat paspor normal',
    answer: `<b>⏱️ Estimasi Waktu Proses Paspor:</b><br><br>
<ul>
  <li><b>Layanan Normal:</b> 3–4 hari kerja setelah perekaman biometrik</li>
  <li><b>Layanan Percepatan:</b> 1 hari kerja (selesai hari yang sama jika daftar sebelum pukul 10.00)</li>
</ul>
<div class="highlight">📲 Anda akan dihubungi via SMS/WhatsApp saat paspor sudah siap diambil.</div>`
  },

  // ── LOKASI ─────────────────────────────────────────────
  {
    id: 'lokasi',
    keywords: 'alamat imigrasi bitung lokasi kantor imigrasi bitung dimana kantor imigrasi bitung dimana letak imigrasi bitung peta imigrasi bitung maps imigrasi telepon imigrasi bitung nomor telpon kontak imigrasi bitung jalan alamat lengkap',
    answer: `<b>📍 Lokasi Kantor Imigrasi Bitung:</b><br><br>
<b>Kantor Imigrasi Kelas II TPI Bitung</b><br>
Jl. Samratulangi, Bitung Tengah, Kota Bitung, Sulawesi Utara<br><br>
<ul>
  <li>📞 <b>(0438) 21077</b></li>
  <li>🌐 <a href="https://bitung.imigrasi.go.id" target="_blank">bitung.imigrasi.go.id</a></li>
  <li>📸 <a href="https://instagram.com/imigrasi_bitung" target="_blank">@imigrasi_bitung</a></li>
</ul>
<div class="highlight">🕐 Jam layanan: Senin–Jumat, 08.00–16.00 WITA</div>`
  },

  // ── PERCEPATAN ─────────────────────────────────────────
  {
    id: 'percepatan',
    keywords: 'paspor percepatan layanan percepatan paspor 1 hari jadi paspor sehari jadi paspor kilat paspor cepat selesai hari ini paspor express paspor sama hari paspor besok bisa biaya percepatan daftar percepatan cara percepatan paspor sehari',
    answer: `<b>⚡ Layanan Percepatan Paspor (1 Hari Jadi):</b><br><br>
<ul>
  <li>Paspor selesai <b>di hari yang sama</b></li>
  <li>Biaya tambahan: <b>+ Rp 1.000.000</b> (di luar biaya buku paspor)</li>
  <li>Pendaftaran maksimal pukul <b>10.00 pagi</b></li>
  <li>Pembayaran langsung di kasir kantor imigrasi</li>
</ul>
<div class="highlight">⚠️ Layanan percepatan <b>tidak bisa</b> dipesan via M-Paspor — harus datang langsung ke kantor.</div>`
  },

  // ── UMROH / HAJI ───────────────────────────────────────
  {
    id: 'umroh_haji',
    keywords: 'paspor umroh paspor haji syarat paspor umroh buat paspor untuk umroh umroh butuh paspor haji paspor arab saudi ibadah mekkah madinah ziarah perjalanan religi paspor untuk haji urus paspor umroh',
    answer: `<b>🕌 Paspor untuk Umroh / Haji:</b><br><br>
Persyaratan sama dengan paspor biasa. Beberapa hal yang perlu diperhatikan:<br><br>
<ul>
  <li>Gunakan <b>E-Paspor</b> untuk kemudahan proses di Arab Saudi</li>
  <li>Masa berlaku paspor minimal <b>6 bulan</b> dari tanggal keberangkatan</li>
  <li>Jemaah haji biasanya diurus kolektif melalui Kemenag setempat</li>
  <li>Proses bisa lebih cepat dengan surat keterangan dari travel umroh resmi</li>
</ul>
<div class="highlight">💡 Segera urus paspor jauh hari sebelum jadwal keberangkatan!</div>`
  },

  // ── WNA / ITAS ─────────────────────────────────────────
  {
    id: 'wna_itas',
    keywords: 'wna izin tinggal orang asing itas itap tinggal di indonesia izin tinggal terbatas izin tinggal tetap perpanjang izin tinggal visa tinggal warga negara asing mau tinggal di indonesia vitas kitas kitap',
    answer: `<b>🌐 Izin Tinggal untuk WNA (Warga Negara Asing):</b><br><br>
<b>Jenis Izin Tinggal:</b><br>
<ul>
  <li><b>VITAS</b> — Visa Tinggal Terbatas (diajukan di KBRI/KJRI luar negeri)</li>
  <li><b>ITAS/KITAS</b> — Izin Tinggal Terbatas (berlaku 1–2 tahun, bisa diperpanjang)</li>
  <li><b>ITAP/KITAP</b> — Izin Tinggal Tetap (untuk WNA yang sudah lama tinggal di Indonesia)</li>
</ul>
<div class="highlight">📋 Untuk persyaratan lengkap, hubungi kantor kami di <b>(0438) 21077</b> atau kunjungi <a href="https://bitung.imigrasi.go.id" target="_blank">bitung.imigrasi.go.id</a></div>`
  },

  // ── VISA ───────────────────────────────────────────────
  {
    id: 'visa',
    keywords: 'visa visa kunjungan visa wisata visa turis visa liburan visa bisnis visa kerja visa pelajar voa visa on arrival cara buat visa cara urus visa syarat visa biaya visa visa indonesia visa ke luar negeri',
    answer: `<b>🌍 Informasi Visa Kunjungan:</b><br><br>
<b>Visa on Arrival (VoA):</b><br>
<ul>
  <li>Tersedia untuk warga negara tertentu saat tiba di bandara internasional</li>
  <li>Biaya: <b>Rp 500.000</b></li>
  <li>Berlaku 30 hari, dapat diperpanjang 30 hari</li>
</ul>
<b>Visa Kunjungan Biasa:</b><br>
<ul>
  <li>Diajukan di Kedutaan Besar/Konsulat RI di negara asal</li>
  <li>Tersedia untuk wisata, bisnis, sosial budaya</li>
</ul>
<div class="highlight">📋 Info lengkap: <a href="https://molina.imigrasi.go.id" target="_blank">molina.imigrasi.go.id</a></div>`
  },

  // ── BEDA KANTOR ────────────────────────────────────────
  {
    id: 'beda_kantor',
    keywords: 'perpanjang paspor beda kantor urus paspor di kota lain paspor beda domisili paspor luar kota bisa urus paspor di mana saja paspor tidak sesuai ktp pindah kota urus paspor imigrasi lain boleh urus paspor beda wilayah lintas kota',
    answer: `<b>📍 Perpanjang Paspor di Kantor Berbeda:</b><br><br>
Mulai tahun 2023, perpanjangan paspor <b>bisa dilakukan di kantor imigrasi mana saja</b> di seluruh Indonesia — tidak harus di kantor sesuai domisili KTP.<br><br>
<ul>
  <li>Cukup daftar antrian via <b>M-Paspor</b> ke kantor tujuan</li>
  <li>Syarat dokumen tetap sama</li>
  <li>Berlaku untuk perpanjangan maupun penggantian</li>
</ul>
<div class="highlight">💡 Namun untuk kemudahan verifikasi, disarankan tetap mengurus di kantor sesuai domisili KTP.</div>`
  },

  // ── PASPOR TIDAK DIAMBIL ───────────────────────────────
  {
    id: 'paspor_tidak_diambil',
    keywords: 'paspor belum diambil paspor tidak diambil lewat 30 hari paspor hangus lupa ambil paspor batas ambil paspor batas waktu ambil paspor sudah jadi tapi belum diambil paspor kedaluwarsa pengambilan paspor sudah lama tidak diambil paspor kena hangus telat ambil paspor',
    answer: `<b>⏰ Paspor Belum Diambil / Lewat Batas 30 Hari:</b><br><br>
Paspor yang sudah selesai memiliki <b>batas waktu pengambilan 30 hari</b> sejak dicetak.<br><br>
<b>Jika sudah lewat 30 hari:</b><br>
<ul>
  <li>Paspor akan <b>dimusnahkan</b> sesuai prosedur</li>
  <li>Harus <b>mengajukan permohonan baru dari awal</b></li>
  <li>Biaya PNBP yang sudah dibayar <b>tidak dapat dikembalikan</b></li>
</ul>
<b>Jika masih dalam 30 hari:</b><br>
<ul>
  <li>Segera datang dengan <b>bukti pembayaran &amp; KTP asli</b></li>
  <li>Boleh diwakilkan dengan <b>surat kuasa + KTP pengambil</b></li>
</ul>
<div class="highlight">📲 Cek status via <b>M-Paspor</b> atau hubungi <b>(0438) 21077</b> untuk konfirmasi.</div>`
  },

  // ── PENGAMBILAN DIWAKILKAN ─────────────────────────────
  {
    id: 'perwakilan_pengambilan',
    keywords: 'ambil paspor diwakilkan wakilkan pengambilan paspor tidak bisa ambil sendiri orang lain ambil paspor surat kuasa ambil paspor kirim orang ambil paspor boleh diambilkan titip ambil paspor tidak hadir ambil paspor',
    answer: `<b>👤 Pengambilan Paspor Diwakilkan:</b><br><br>
Paspor <b>boleh diambil orang lain</b> dengan syarat:<br><br>
<ul>
  <li><b>Surat Kuasa</b> bermaterai Rp 10.000 yang ditandatangani pemohon</li>
  <li><b>KTP asli</b> penerima kuasa</li>
  <li><b>KTP asli/fotokopi</b> pemohon</li>
  <li><b>Bukti pembayaran</b> PNBP</li>
</ul>
<div class="highlight">⚠️ Untuk paspor anak, yang boleh mewakili adalah orang tua kandung atau wali yang tercantum di KK.</div>`
  },

  // ── CEK STATUS PASPOR ──────────────────────────────────
  {
    id: 'status_paspor',
    keywords: 'cek status paspor paspor sudah jadi belum lacak paspor tracking paspor kapan paspor selesai notifikasi paspor sms paspor whatsapp paspor cek antrian paspor lihat status posisi paspor apakah paspor sudah bisa diambil paspor sudah siap belum',
    answer: `<b>🔍 Cara Cek Status Paspor:</b><br><br>
<b>Via Aplikasi M-Paspor:</b><br>
<ul>
  <li>Buka aplikasi → menu <b>"Antrian Saya"</b></li>
  <li>Status akan berubah: Diajukan → Diproses → Selesai</li>
</ul>
<b>Via Telepon:</b><br>
<ul>
  <li>Hubungi langsung: <b>(0438) 21077</b></li>
  <li>Sebutkan nama lengkap dan tanggal perekaman</li>
</ul>
<div class="highlight">📲 Anda akan mendapat <b>notifikasi SMS/WhatsApp</b> otomatis saat paspor siap diambil.</div>`
  },

  // ── GANTI NAMA ─────────────────────────────────────────
  {
    id: 'ganti_nama',
    keywords: 'ganti nama paspor nama di paspor salah beda nama paspor perubahan nama nama sudah ganti nama berubah setelah nikah nama di paspor tidak sesuai ktp update nama paspor nama beda ktp nama baru paspor lama paspor nama lama',
    answer: `<b>📝 Ganti Paspor karena Perubahan Nama:</b><br><br>
Perubahan nama termasuk kategori <b>Penggantian Paspor</b>. Dokumen yang dibutuhkan:<br><br>
<ul>
  <li>E-KTP baru (dengan nama yang sudah diperbarui)</li>
  <li>KK terbaru</li>
  <li>Dokumen penetapan perubahan nama dari <b>Pengadilan Negeri</b> atau akta nikah/cerai</li>
  <li>Paspor lama asli</li>
</ul>
<div class="highlight">⚠️ Pastikan perubahan nama sudah tercatat di Dukcapil dan terefleksi di KTP &amp; KK sebelum mengurus paspor.</div>`
  },

  // ── DATA SALAH ─────────────────────────────────────────
  {
    id: 'data_salah',
    keywords: 'data paspor salah nama salah di paspor tanggal lahir salah paspor typo paspor kesalahan cetak paspor koreksi paspor perbaikan paspor data keliru di paspor nama tertukar salah tulis di paspor tempat lahir salah paspor',
    answer: `<b>✏️ Paspor Ada Kesalahan Data:</b><br><br>
<b>Kesalahan dari pihak imigrasi:</b><br>
<ul>
  <li>Laporkan <b>segera sebelum paspor diambil</b></li>
  <li>Perbaikan <b>tidak dikenakan biaya tambahan</b></li>
</ul>
<b>Kesalahan karena data dokumen tidak konsisten:</b><br>
<ul>
  <li>Perbaiki dulu data di <b>Dukcapil</b> (KTP/KK/Akta)</li>
  <li>Kemudian ajukan penggantian paspor dengan dokumen yang sudah diperbaiki</li>
</ul>
<div class="highlight">📞 Segera hubungi <b>(0438) 21077</b> jika menemukan kesalahan sebelum paspor diambil.</div>`
  },

  // ── PASPOR PENUH ───────────────────────────────────────
  {
    id: 'paspor_penuh',
    keywords: 'paspor penuh paspor halaman habis halaman paspor penuh visa penuh cap penuh paspor sudah penuh cap ganti paspor penuh lembar paspor habis paspor isi penuh tidak ada halaman kosong paspor tidak ada tempat cap',
    answer: `<b>📖 Paspor Halaman Penuh:</b><br><br>
Jika halaman paspor sudah <b>penuh cap/stempel visa</b>, Anda perlu mengganti paspor meski masa berlaku belum habis.<br><br>
<ul>
  <li>Proses sama seperti <b>perpanjangan/penggantian</b> paspor biasa</li>
  <li>Bawa paspor lama yang penuh sebagai dokumen pendukung</li>
  <li>Paspor lama akan <b>dilubangi/dinonaktifkan</b> saat paspor baru diterbitkan</li>
</ul>
<div class="highlight">💡 Paspor Indonesia tersedia dalam <b>48 halaman</b> — cukup untuk perjalanan internasional intensif.</div>`
  },

  // ── BIAYA PASPOR ANAK ──────────────────────────────────
  {
    id: 'biaya_anak',
    keywords: 'biaya paspor anak harga paspor anak berapa biaya paspor anak tarif paspor anak pnbp paspor anak biaya buat paspor buat anak biaya paspor untuk anak kecil berapa bayar paspor anak',
    answer: `<b>💳 Biaya Paspor Anak:</b><br><br>
Biaya paspor anak <b>sama</b> dengan paspor dewasa:<br><br>
<ul>
  <li><b>E-Paspor 5 tahun:</b> Rp 650.000</li>
  <li><b>E-Paspor 10 tahun:</b> Rp 950.000</li>
</ul>
<div class="highlight">💡 Untuk anak di bawah 17 tahun, disarankan pilih <b>paspor 5 tahun</b> karena data fisik anak berubah cepat. Paspor tidak otomatis diperpanjang saat anak sudah 17 tahun.</div>`
  },

  // ── KUOTA PENUH ────────────────────────────────────────
  {
    id: 'kuota_penuh',
    keywords: 'kuota mpaspor penuh antrian penuh slot habis tidak ada jadwal kosong tidak bisa booking mpaspor mpaspor tidak ada kuota reschedule paspor batalkan antrian paspor gagal daftar mpaspor kuota habis terus kapan kuota buka jadwal mpaspor kosong',
    answer: `<b>📅 Kuota M-Paspor Penuh:</b><br><br>
Jika kuota antrian sedang penuh:<br><br>
<ul>
  <li>Pantau aplikasi pada <b>Jumat sore (16.00–18.00 WITA)</b> atau <b>Senin pagi (07.00–08.00 WITA)</b></li>
  <li>Aktifkan <b>notifikasi push</b> di aplikasi M-Paspor agar tidak ketinggalan</li>
  <li>Coba daftar ke <b>kantor imigrasi terdekat lainnya</b> yang masih punya slot</li>
</ul>
<b>Jika perlu reschedule:</b><br>
<ul>
  <li>Batalkan antrian <b>sebelum H-1</b> jadwal kedatangan</li>
  <li>Daftar ulang di jadwal baru yang tersedia</li>
</ul>
<div class="highlight">⚠️ Tidak hadir tanpa membatalkan dapat dikenakan <b>pembatasan layanan sementara</b>.</div>`
  },

  // ── KETENTUAN FOTO ─────────────────────────────────────
  {
    id: 'ketentuan_foto',
    keywords: 'foto paspor syarat foto paspor bawa foto sendiri foto paspor ukuran pakai jilbab foto paspor pakai kacamata foto paspor latar foto paspor warna baju foto paspor ketentuan foto paspor boleh pakai kerudung foto paspor difoto di kantor foto sendiri',
    answer: `<b>📸 Ketentuan Foto Paspor:</b><br><br>
<b>Foto diambil langsung oleh petugas</b> saat Anda datang ke kantor. Tidak perlu membawa foto sendiri.<br><br>
<b>Yang perlu diperhatikan saat ke kantor:</b><br>
<ul>
  <li>Kenakan pakaian <b>rapi dan sopan</b> (hindari seragam dinas/militer)</li>
  <li>Wajah harus terlihat jelas, tidak memakai <b>kacamata gelap</b></li>
  <li>Yang berjilbab/berkerudung <b>boleh pakai jilbab</b> asal wajah terlihat penuh</li>
  <li>Ekspresi wajah <b>netral</b>, mulut tertutup</li>
</ul>
<div class="highlight">💡 Latar foto otomatis <b>putih</b> karena diambil di booth khusus oleh petugas imigrasi.</div>`
  },

  // ── SINGLE PARENT ──────────────────────────────────────
  {
    id: 'single_parent',
    keywords: 'paspor anak orang tua tunggal single parent janda buat paspor anak duda buat paspor anak suami meninggal buat paspor anak istri meninggal paspor anak cerai orang tua bercerai paspor anak tanpa ayah paspor anak tanpa ibu syarat paspor anak single parent',
    answer: `<b>👩 Paspor Anak untuk Orang Tua Tunggal:</b><br><br>
<b>Jika salah satu orang tua meninggal:</b><br>
<ul>
  <li>KTP orang tua yang masih hidup</li>
  <li>Akta Kematian orang tua yang meninggal</li>
  <li>KK + Akta Kelahiran anak</li>
</ul>
<b>Jika orang tua bercerai:</b><br>
<ul>
  <li>KTP orang tua yang mengurus</li>
  <li>Akta Cerai + Putusan Pengadilan (hak asuh)</li>
  <li>KK + Akta Kelahiran anak</li>
</ul>
<div class="highlight">💡 Jika ada perselisihan hak asuh, imigrasi akan meminta <b>surat persetujuan kedua orang tua</b> atau penetapan pengadilan.</div>`
  },

  // ── PASPOR DARURAT ─────────────────────────────────────
  {
    id: 'paspor_darurat',
    keywords: 'paspor darurat paspor mendesak paspor mendadak buat paspor besok tiket sudah beli belum punya paspor berangkat lusa paspor cepat keperluan mendadak urgent paspor butuh paspor segera paspor kilat tidak ada waktu',
    answer: `<b>🚨 Paspor Darurat / Keberangkatan Mendadak:</b><br><br>
Tersedia <b>Layanan Percepatan (1 Hari Jadi)</b>:<br><br>
<ul>
  <li>Datang langsung ke kantor <b>sebelum pukul 10.00 WITA</b></li>
  <li>Biaya tambahan: <b>+ Rp 1.000.000</b> (di luar biaya buku paspor)</li>
  <li>Bawa <b>bukti keberangkatan</b> (tiket/surat undangan) sebagai pendukung</li>
  <li>Tidak perlu daftar via M-Paspor — langsung ke loket percepatan</li>
</ul>
<div class="highlight">⚠️ Layanan percepatan <b>terbatas kuota</b> per hari. Datang sepagi mungkin agar tidak kehabisan slot.</div>`
  },

  // ── TNI/POLRI/PNS ──────────────────────────────────────
  {
    id: 'tni_polri_pns',
    keywords: 'paspor tni paspor polri paspor pns paspor pegawai negeri paspor anggota polisi paspor anggota tentara buat paspor tni syarat paspor polisi surat izin atasan rekomendasi kantor paspor aparatur sipil negara asn paspor militer',
    answer: `<b>🪖 Paspor untuk TNI / Polri / PNS:</b><br><br>
Untuk keperluan <b>pribadi</b> (bukan dinas), tambahan dokumen yang diperlukan:<br><br>
<ul>
  <li>Semua dokumen paspor biasa (KTP, KK, dll)</li>
  <li><b>Surat izin / rekomendasi</b> dari atasan/komandan/instansi</li>
  <li>SK pengangkatan atau kartu tanda anggota/dinas</li>
</ul>
<div class="highlight">💡 Paspor dinas/diplomatik diurus melalui <b>Kementerian Luar Negeri</b> — bukan di kantor imigrasi biasa.</div>`
  },

  // ── LANSIA / DIFABEL ───────────────────────────────────
  {
    id: 'lansia_difabel',
    keywords: 'paspor lansia paspor orang tua lanjut usia paspor kakek nenek paspor difabel disabilitas kursi roda layanan prioritas tidak bisa jalan buat paspor paspor orang sakit buat paspor ibu hamil antrian prioritas imigrasi',
    answer: `<b>👴 Layanan Prioritas untuk Lansia / Difabel:</b><br><br>
Tersedia layanan prioritas untuk:<br><br>
<ul>
  <li>Lansia (usia <b>60 tahun ke atas</b>)</li>
  <li>Penyandang disabilitas</li>
  <li>Ibu hamil</li>
</ul>
<b>Untuk yang tidak dapat hadir ke kantor:</b><br>
<ul>
  <li>Hubungi <b>(0438) 21077</b> untuk koordinasi layanan kunjungan</li>
  <li>Bawa surat keterangan dokter jika kondisi tidak memungkinkan</li>
</ul>
<div class="highlight">⚠️ Perekaman biometrik <b>tetap wajib</b> dilakukan sendiri oleh pemohon — tidak bisa diwakilkan.</div>`
  },

  // ── DOKUMEN TIDAK LENGKAP ──────────────────────────────
  {
    id: 'dokumen_tidak_lengkap',
    keywords: 'ktp hilang buat paspor tanpa ktp kk hilang buat paspor akta hilang buat paspor dokumen tidak lengkap syarat kurang tidak punya ktp belum punya akta tidak punya kk bagaimana urus paspor jika ktp hilang dokumen persyaratan kurang',
    answer: `<b>📄 Dokumen Persyaratan Tidak Lengkap:</b><br><br>
<b>KTP hilang/belum ada:</b><br>
<ul>
  <li>Urus ke <b>Dukcapil</b> setempat untuk cetak KTP baru</li>
  <li>Bisa gunakan <b>Surat Keterangan Kependudukan</b> sementara dari Dukcapil</li>
</ul>
<b>KK/Akta hilang:</b><br>
<ul>
  <li>Minta duplikat ke Dukcapil dengan <b>surat laporan kehilangan dari polisi</b></li>
</ul>
<b>Data antar dokumen berbeda:</b><br>
<ul>
  <li>Minta <b>Surat Keterangan dari Dukcapil</b> yang menerangkan kesamaan identitas</li>
</ul>
<div class="highlight">💡 Semua dokumen kependudukan harus beres di <b>Dukcapil</b> dulu sebelum mengurus paspor.</div>`
  },

  // ── WNI DI LUAR NEGERI ─────────────────────────────────
  {
    id: 'wni_luar_negeri',
    keywords: 'urus paspor di luar negeri paspor habis di luar negeri perpanjang paspor di luar negeri wni di luar negeri paspor expired di luar negeri kbri kjri kedutaan konsulat urus paspor waktu di luar negeri paspor mati waktu di luar',
    answer: `<b>🌐 Urus Paspor saat di Luar Negeri:</b><br><br>
WNI yang berada di luar negeri mengurus paspor melalui:<br><br>
<ul>
  <li><b>KBRI</b> (Kedutaan Besar RI) di ibu kota negara setempat</li>
  <li><b>KJRI</b> (Konsulat Jenderal RI) di kota-kota besar</li>
</ul>
Syarat dokumen umumnya sama, namun diproses oleh <b>perwakilan RI di luar negeri</b> — bukan kantor imigrasi di Indonesia.<br><br>
<div class="highlight">🔗 Cari KBRI/KJRI terdekat di <a href="https://kemlu.go.id" target="_blank">kemlu.go.id</a></div>`
  },

  // ── PASPOR PENGANTIN BARU ──────────────────────────────
  {
    id: 'pengantin_baru',
    keywords: 'paspor pengantin baru honeymoon bulan madu paspor beda status baru menikah paspor sebelum nikah ganti status paspor setelah nikah paspor masih nama gadis update status pernikahan paspor baru nikah buat paspor mau nikah',
    answer: `<b>💍 Paspor untuk Pengantin Baru / Bulan Madu:</b><br><br>
Paspor <b>tidak harus segera diperbarui</b> setelah menikah. Paspor lama masih berlaku sampai habis masa berlakunya.<br><br>
<b>Namun perlu diperbarui jika:</b><br>
<ul>
  <li>Anda <b>mengganti nama</b> setelah menikah (nama di paspor harus sama dengan KTP)</li>
  <li>Masa berlaku paspor <b>kurang dari 6 bulan</b> sebelum keberangkatan</li>
</ul>
<b>Untuk honeymoon ke luar negeri:</b><br>
<ul>
  <li>Pastikan paspor masih berlaku minimal <b>6 bulan</b> dari tanggal berangkat</li>
  <li>Nama di paspor <b>tidak harus sama</b> antara suami dan istri</li>
</ul>
<div class="highlight">💡 Jika mengganti nama, urus dulu di Dukcapil → baru ganti paspor ke imigrasi.</div>`
  },

  // ── PASPOR UNTUK KERJA DI LUAR NEGERI ─────────────────
  {
    id: 'paspor_tki',
    keywords: 'paspor tki paspor tkw paspor pekerja luar negeri paspor buruh migran paspor pmi paspor kerja luar negeri paspor untuk bekerja di luar negeri paspor calon tki syarat paspor tki paspor pmi',
    answer: `<b>🏭 Paspor untuk Pekerja Migran Indonesia (PMI/TKI):</b><br><br>
Persyaratan sama dengan paspor biasa, namun ada tambahan:<br><br>
<ul>
  <li>Semua dokumen standar (KTP, KK, Akta Kelahiran)</li>
  <li>Surat rekomendasi dari <b>Dinas Tenaga Kerja</b> setempat (jika diminta)</li>
  <li>Paspor yang diterbitkan adalah <b>paspor biasa</b> — bukan paspor khusus TKI</li>
</ul>
<div class="highlight">⚠️ Hati-hati dengan calo atau agen tidak resmi. Urus paspor <b>langsung ke kantor imigrasi</b> — gratis tanpa biaya tambahan di luar PNBP resmi.</div>`
  },

  // ── PASPOR MAHASISWA / PELAJAR ─────────────────────────
  {
    id: 'paspor_mahasiswa',
    keywords: 'paspor mahasiswa paspor pelajar paspor student paspor untuk kuliah di luar negeri paspor beasiswa paspor exchange student paspor pertukaran pelajar visa pelajar paspor siswa kuliah luar negeri',
    answer: `<b>🎓 Paspor untuk Pelajar / Mahasiswa:</b><br><br>
Persyaratan <b>sama</b> dengan paspor dewasa biasa:<br><br>
<ul>
  <li>E-KTP asli (atau Kartu Pelajar + KK jika belum punya KTP)</li>
  <li>KK asli</li>
  <li>Akta Kelahiran / Ijazah (salah satu)</li>
</ul>
<b>Tips untuk pelajar yang akan kuliah di luar negeri:</b><br>
<ul>
  <li>Pilih <b>E-Paspor 10 tahun</b> agar tidak perlu ganti saat masih kuliah</li>
  <li>Urus paspor <b>minimal 3 bulan sebelum</b> jadwal keberangkatan</li>
  <li>Visa pelajar/mahasiswa diurus ke <b>Kedutaan negara tujuan</b></li>
</ul>
<div class="highlight">💡 Bawa surat keterangan sekolah/kampus jika ingin mengajukan layanan percepatan.</div>`
  },

  // ── PERPANJANG PASPOR YANG MASIH BERLAKU ──────────────
  {
    id: 'perpanjang_masih_berlaku',
    keywords: 'perpanjang paspor yang masih berlaku paspor belum habis boleh diperpanjang paspor masih laku tapi mau perpanjang ganti paspor sebelum habis boleh perpanjang sebelum expired paspor masih 1 tahun boleh perpanjang',
    answer: `<b>🔄 Perpanjang Paspor yang Masih Berlaku:</b><br><br>
<b>Boleh!</b> Paspor bisa diperpanjang (diganti) <b>kapan saja</b>, meski masa berlaku belum habis.<br><br>
<ul>
  <li>Tidak ada aturan minimal sisa berlaku sebelum bisa diperpanjang</li>
  <li>Prosesnya sama seperti perpanjangan biasa</li>
  <li>Paspor lama akan <b>dilubangi/dinonaktifkan</b> saat paspor baru diterbitkan</li>
</ul>
<b>Alasan umum perpanjang sebelum habis:</b><br>
<ul>
  <li>Paspor sudah <b>penuh cap/stempel</b></li>
  <li>Persiapan perjalanan ke negara yang mensyaratkan <b>minimal 6 bulan sisa berlaku</b></li>
  <li>Ada <b>perubahan data</b> (nama, dsb)</li>
</ul>
<div class="highlight">💡 Sisa masa berlaku paspor lama <b>tidak bisa ditambahkan</b> ke paspor baru.</div>`
  },

  // ── CARA BAYAR PNBP ────────────────────────────────────
  {
    id: 'cara_bayar',
    keywords: 'cara bayar paspor bayar pnbp paspor bayar di mana metode pembayaran paspor transfer bayar paspor tokopedia bayar paspor shopee bayar paspor bukalapak bayar paspor atm bayar paspor bank bayar paspor indomaret bayar paspor alfamart bayar paspor lewat apa bayar paspor online',
    answer: `<b>💳 Cara Pembayaran PNBP Paspor:</b><br><br>
<b>Channel Pembayaran yang Tersedia:</b><br>
<ul>
  <li>🏦 <b>Bank teller</b> (BNI, BRI, Mandiri, dll)</li>
  <li>🏧 <b>ATM</b> bank yang tertera di kode billing</li>
  <li>🛒 <b>Marketplace:</b> Tokopedia, Shopee, Bukalapak</li>
  <li>🏪 <b>Minimarket:</b> Indomaret, Alfamart</li>
  <li>📱 <b>Mobile Banking / Internet Banking</b></li>
</ul>
<b>Langkah bayar via M-Paspor:</b><br>
<ol>
  <li>Setelah booking antrian, aplikasi menampilkan <b>kode billing</b></li>
  <li>Bayar menggunakan salah satu channel di atas</li>
  <li>Batas waktu bayar biasanya <b>1–2 jam</b> setelah booking</li>
</ol>
<div class="highlight">⚠️ Pembayaran yang melewati batas waktu akan <b>otomatis dibatalkan</b> dan harus booking ulang.</div>`
  },

  // ── PASPOR SUDAH KADALUARSA ────────────────────────────
  {
    id: 'paspor_kadaluarsa',
    keywords: 'paspor sudah kadaluarsa paspor sudah mati paspor habis masa berlaku paspor expired paspor sudah tidak berlaku paspor mati lama paspor lama sekali sudah expired urus paspor yang sudah habis paspor tidak berlaku lagi',
    answer: `<b>📋 Paspor Sudah Habis Masa Berlaku:</b><br><br>
Paspor yang sudah kadaluarsa tetap bisa digunakan sebagai <b>dokumen pendukung</b> untuk membuat paspor baru.<br><br>
<b>Dokumen yang perlu disiapkan:</b><br>
<ul>
  <li>E-KTP asli</li>
  <li>KK asli</li>
  <li>Paspor lama yang sudah habis masa berlaku</li>
  <li>Dokumen pendukung lain (Akta/Ijazah) jika paspor terbitan sebelum 2009</li>
</ul>
<div class="highlight">💡 Meski paspor sudah kadaluarsa bertahun-tahun, tetap bawa paspor lama karena membantu mempermudah proses verifikasi data.</div>`
  },

];

// ════════════════════════════════════════════════════════
//  INISIALISASI FUSE.JS
// ════════════════════════════════════════════════════════
const fuse = new Fuse(KB, {
    keys: ['keywords'],
    threshold: 0.42,
    minMatchCharLength: 2,
    includeScore: true,
    ignoreLocation: true,
});

// ════════════════════════════════════════════════════════
//  STATE & UTILS
// ════════════════════════════════════════════════════════
let isTyping = false;
let currentChatId = localStorage.getItem('bimo_last_id') || Date.now().toString();

function getTime() {
    return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}
function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}
function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    if (sb.classList.contains('active')) closeSidebar();
    else openSidebar();
}
function openSidebar() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('sidebarOverlay').classList.add('show');
    document.getElementById('menuBtn').innerHTML = '✕';
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebarOverlay').classList.remove('show');
    document.getElementById('menuBtn').innerHTML = '☰';
}

// ════════════════════════════════════════════════════════
//  RENDER PESAN
// ════════════════════════════════════════════════════════
function appendMessage(role, html) {
    const container = document.getElementById('messages');
    const wc = document.getElementById('welcomeCard');
    if (wc) wc.remove();

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg ' + (role === 'user' ? 'user' : 'bot');

    const avatar = document.createElement('div');
    avatar.className = 'avatar ' + (role === 'user' ? 'user-av' : 'bot');
    avatar.innerHTML = role === 'user' ? '<i class="fas fa-user"></i>' : '🛂';

    const wrap = document.createElement('div');
    wrap.className = 'bubble-wrap';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerHTML = html;

    const time = document.createElement('div');
    time.className = 'msg-time';
    time.textContent = getTime();

    wrap.appendChild(bubble);
    wrap.appendChild(time);

    if (role === 'user') {
        msgDiv.appendChild(wrap);
        msgDiv.appendChild(avatar);
    } else {
        msgDiv.appendChild(avatar);
        msgDiv.appendChild(wrap);
    }

    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
    saveChat();
}

// ════════════════════════════════════════════════════════
//  MESIN PENCARI JAWABAN (Fuse.js fuzzy + multi-token)
// ════════════════════════════════════════════════════════
function findAnswer(userText) {
    const cleaned = userText.toLowerCase()
        .replace(/[?!.,;:]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    // Coba match seluruh kalimat dulu
    let results = fuse.search(cleaned);
    if (results.length && results[0].score <= 0.42) {
        return results[0].item.answer;
    }

    // Fallback: akumulasi skor per token
    const words = cleaned.split(' ').filter(w => w.length > 2);
    const scoreMap = {};
    for (const word of words) {
        const r = fuse.search(word);
        for (const item of r) {
            if (!scoreMap[item.item.id]) scoreMap[item.item.id] = 0;
            scoreMap[item.item.id] += (1 - item.score);
        }
    }
    const best = Object.entries(scoreMap).sort((a, b) => b[1] - a[1]);
    if (best.length && best[0][1] > 0.5) {
        const found = KB.find(k => k.id === best[0][0]);
        if (found) return found.answer;
    }

    // Tidak ditemukan
    return `Maaf, saya belum menemukan informasi yang tepat untuk pertanyaan tersebut. 🙏<br><br>
Coba tanyakan dengan kata kunci seperti:<br>
<ul>
  <li>📋 <b>"Syarat paspor baru"</b></li>
  <li>💳 <b>"Biaya paspor"</b></li>
  <li>📱 <b>"Cara pakai M-Paspor"</b></li>
  <li>🚨 <b>"Paspor hilang"</b></li>
</ul>
Atau hubungi kami langsung di <b>(0438) 21077</b>.`;
}
// ════════════════════════════════════════════════════════
//  TYPING INDICATOR
// ════════════════════════════════════════════════════════
function showTyping() {
    document.getElementById('typingWrap').classList.add('show');
    document.getElementById('messages').scrollTop = 99999;
}
function hideTyping() {
    document.getElementById('typingWrap').classList.remove('show');
}

// ════════════════════════════════════════════════════════
//  KIRIM PESAN
// ════════════════════════════════════════════════════════
async function sendMessage(overrideText) {
    const input = document.getElementById('userInput');
    const text = (overrideText || input.value).trim();
    if (!text || isTyping) return;

    input.value = '';
    input.style.height = 'auto';
    isTyping = true;
    document.getElementById('sendBtn').disabled = true;

    appendMessage('user', text);

    if (window.innerWidth <= 768 && !overrideText) {
        closeSidebar();
    }

    showTyping();
    rotateSuggestions();

    await new Promise(r => setTimeout(r, 500 + Math.random() * 500));

    hideTyping();
    appendMessage('bot', findAnswer(text));

    isTyping = false;
    document.getElementById('sendBtn').disabled = false;
    document.getElementById('userInput').focus();
}

function askTopic(q) { sendMessage(q); }

// ════════════════════════════════════════════════════════
//  SUGGESTIONS ROTATE
// ════════════════════════════════════════════════════════
const SUGS = [
    ['⏱️ Lama proses?', '👶 Paspor anak?', '⚡ Layanan percepatan?', '📍 Lokasi kantor?'],
    ['🌐 Beda kantor bisa?', '🔒 Paspor mau habis?', '📱 Download M-Paspor', '💳 Cara bayar Paspor?'],
    ['🚨 Lapor hilang ke mana?', '🕌 Paspor untuk umroh?', '🌍 Visa WNA?', '🔄 Paspor rusak?'],
    ['📋 Syarat lengkap?', '📆 Kuota kapan buka?', '⚡ Paspor 1 hari jadi?', '🏢 Jam kantor?'],
];
let sugIdx = 0;
function rotateSuggestions() {
    sugIdx = (sugIdx + 1) % SUGS.length;
    document.getElementById('suggestions').innerHTML =
        SUGS[sugIdx].map(s =>
            `<button class="sug-btn" onclick="askTopic('${s.replace(/['"<>&]/g,'')}')">${s}</button>`
        ).join('');
}

// ════════════════════════════════════════════════════════
//  RIWAYAT CHAT (localStorage)
// ════════════════════════════════════════════════════════
function saveChat() {
    const html = document.getElementById('messages').innerHTML;
    if (!html.trim()) return;
    let all = JSON.parse(localStorage.getItem('bimo_all_chats') || '{}');
    all[currentChatId] = {
        html,
        timestamp: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })
    };
    const keys = Object.keys(all);
    if (keys.length > 10) delete all[keys[0]];
    localStorage.setItem('bimo_all_chats', JSON.stringify(all));
    localStorage.setItem('bimo_last_id', currentChatId);
    renderChatList();
}

function renderChatList() {
    let all = JSON.parse(localStorage.getItem('bimo_all_chats') || '{}');
    const list = document.getElementById('chatHistoryList');
    if (!list) return;
    list.innerHTML = '';

    const ids = Object.keys(all).reverse();
    if (ids.length === 0) {
        list.innerHTML = '<div style="font-size:11px;color:rgba(255,255,255,0.25);padding:8px 16px;">Belum ada riwayat</div>';
        return;
    }

    ids.forEach(id => {
        const wrap = document.createElement('div');
        wrap.className = 'history-item';

        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.style.fontSize = '11px';
        btn.style.opacity = id === currentChatId ? '1' : '0.65';
        btn.style.margin = '0';
        btn.innerHTML = `<i class="fas fa-comment-alt"></i> ${all[id].timestamp}`;
        btn.onclick = () => {
            currentChatId = id;
            document.getElementById('messages').innerHTML = all[id].html;
            document.getElementById('messages').scrollTop = 99999;
            localStorage.setItem('bimo_last_id', id);
            renderChatList();
            if (window.innerWidth <= 768) closeSidebar();
        };

        // Tombol hapus per chat
        const delBtn = document.createElement('button');
        delBtn.className = 'del-chat-btn';
        delBtn.title = 'Hapus chat ini';
        delBtn.innerHTML = '<i class="fas fa-times"></i>';
        delBtn.onclick = (e) => {
            e.stopPropagation();
            deleteSingleChat(id);
        };

        wrap.appendChild(btn);
        wrap.appendChild(delBtn);
        list.appendChild(wrap);
    });
}

function deleteSingleChat(id) {
    let all = JSON.parse(localStorage.getItem('bimo_all_chats') || '{}');
    delete all[id];
    localStorage.setItem('bimo_all_chats', JSON.stringify(all));

    // Jika yang dihapus adalah chat aktif, buka chat terbaru atau welcome
    if (id === currentChatId) {
        const remaining = Object.keys(all);
        if (remaining.length > 0) {
            const lastId = remaining[remaining.length - 1];
            currentChatId = lastId;
            localStorage.setItem('bimo_last_id', lastId);
            document.getElementById('messages').innerHTML = all[lastId].html;
            document.getElementById('messages').scrollTop = 99999;
        } else {
            currentChatId = Date.now().toString();
            localStorage.removeItem('bimo_last_id');
            document.getElementById('messages').innerHTML = '';
            showWelcome();
        }
    }
    renderChatList();
}

function loadLastChat() {
    const lastId = localStorage.getItem('bimo_last_id');
    const all = JSON.parse(localStorage.getItem('bimo_all_chats') || '{}');
    if (lastId && all[lastId]) {
        currentChatId = lastId;
        document.getElementById('messages').innerHTML = all[lastId].html;
        document.getElementById('messages').scrollTop = 99999;
    } else {
        showWelcome();
    }
}

function newChat() {
    currentChatId = Date.now().toString();
    document.getElementById('messages').innerHTML = '';
    showWelcome();
    if (window.innerWidth <= 768) closeSidebar();
}

function showWelcome() {
    const container = document.getElementById('messages');
    const wc = document.createElement('div');
    wc.className = 'welcome-card'; wc.id = 'welcomeCard';
    wc.innerHTML = `
        <div style="font-size:40px;margin-bottom:10px;">🛂</div>
        <h2>Halo! Saya BIMO</h2>
        <p>Bot Informasi Imigrasi Bitung siap membantu Anda 24 jam seputar paspor, visa, dan layanan keimigrasian.</p>
        <div class="quick-grid">
            <button class="quick-btn" onclick="askTopic('syarat paspor baru')">🛂 Syarat paspor baru</button>
            <button class="quick-btn" onclick="askTopic('biaya paspor')">💳 Biaya paspor</button>
            <button class="quick-btn" onclick="askTopic('cara pakai mpaspor daftar online')">📱 Cara pakai M-Paspor</button>
            <button class="quick-btn" onclick="askTopic('paspor hilang')">🚨 Paspor hilang</button>
        </div>`;
    container.appendChild(wc);
}

function clearAllHistory() {
    if (!confirm('Hapus semua riwayat chat?')) return;
    localStorage.removeItem('bimo_all_chats');
    localStorage.removeItem('bimo_last_id');
    currentChatId = Date.now().toString();
    document.getElementById('messages').innerHTML = '';
    renderChatList();
    showWelcome();
}

// ── START ──
window.addEventListener('load', () => {
    renderChatList();
    loadLastChat();
});