// ════════════════════════════════════════════════════════
//  BIMO — Bot Informasi Imigrasi Bitung
//  script.js
// ════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
//  DATABASE PENGETAHUAN BIMO
// ════════════════════════════════════════════════════════
const KB = [
  {
    id: 'salam',
    keywords: 'halo hai hello hi selamat pagi siang sore malam apa kabar perkenalan',
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
  {
    id: 'paspor_baru',
    keywords: 'syarat paspor baru pertama kali buat bikin dokumen persyaratan ketentuan permohonan',
    answer: `<b>🛂 Syarat Pembuatan Paspor Baru:</b><br><br>
<b>Dokumen Wajib (Asli):</b><br>
<ul>
  <li>E-KTP asli</li>
  <li>Kartu Keluarga (KK) asli</li>
  <li>Salah satu dokumen pendukung: <b>Akta Kelahiran</b> atau <b>Ijazah</b> atau <b>Buku Nikah</b></li>
</ul>
<b>Catatan Penting:</b><br>
<ul>
  <li>Semua dokumen dibawa asli</li>
  <li>Wajib daftar antrian via aplikasi <b>M-Paspor</b> sebelum datang</li>
  <li>Proses normal: <b>3–4 hari kerja</b> setelah perekaman biometrik</li>
</ul>
<div class="highlight">💡 Pastikan data di KTP, KK, dan dokumen pendukung sesuai. Perbedaan nama atau tanggal lahir perlu surat keterangan dari Dukcapil.</div>`
  },
  {
    id: 'perpanjang',
    keywords: 'perpanjang perpanjangan renew paspor lama habis kadaluarsa mati expired ganti baru penggantian',
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
  {
    id: 'biaya',
    keywords: 'biaya harga pnbp bayar tarif ongkos berapa biayanya pembayaran biaya paspor harga paspor',
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
  {
    id: 'hilang_rusak',
    keywords: 'paspor hilang rusak basah terbakar hancur tercecer kehilangan robek lecek',
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
  {
    id: 'mpaspor',
    keywords: 'mpaspor m-paspor aplikasi daftar online antrian booking jadwal download app android ios',
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
  {
    id: 'paspor_anak',
    keywords: 'paspor anak bawah umur minor bayi balita lahir anak-anak remaja kecil',
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
  {
    id: 'epaspor',
    keywords: 'epaspor e-paspor paspor elektronik chip rfid autogate biometrik keunggulan manfaat beda berbeda',
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
  {
    id: 'jam_operasional',
    keywords: 'jam buka tutup operasional kantor hari layanan waktu jadwal kuota senin jumat sabtu minggu',
    answer: `<b>🕐 Jam Operasional Kantor Imigrasi Bitung:</b><br><br>
<ul>
  <li><b>Senin – Kamis:</b> 08.00 – 16.00 WITA</li>
  <li><b>Jumat:</b> 08.00 – 16.30 WITA</li>
  <li><b>Istirahat:</b> 12.00 – 13.00 WITA (Jumat: 11.30 – 13.15)</li>
  <li><b>Sabtu &amp; Minggu:</b> Tutup</li>
</ul>
<div class="highlight">📆 Kuota M-Paspor biasanya dibuka tiap <b>Jumat sore</b> atau <b>Senin pagi</b>. Pantau terus aplikasi M-Paspor!</div>`
  },
  {
    id: 'lama_proses',
    keywords: 'berapa lama selesai jadi proses waktu ambil pengambilan estimasi cepat durasi hari kerja',
    answer: `<b>⏱️ Estimasi Waktu Proses Paspor:</b><br><br>
<ul>
  <li><b>Layanan Normal:</b> 3–4 hari kerja setelah perekaman biometrik</li>
  <li><b>Layanan Percepatan:</b> 1 hari kerja (selesai hari yang sama jika daftar sebelum pukul 10.00)</li>
</ul>
<div class="highlight">📲 Anda akan dihubungi via SMS/WhatsApp saat paspor sudah siap diambil.</div>`
  },
  {
    id: 'lokasi',
    keywords: 'alamat lokasi kantor dimana letak tempatnya imigrasi bitung posisi peta maps google',
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
  {
    id: 'percepatan',
    keywords: 'percepatan cepat kilat satu hari 1 hari express prioritas urgent mendesak darurat segera',
    answer: `<b>⚡ Layanan Percepatan Paspor (1 Hari Jadi):</b><br><br>
<ul>
  <li>Paspor selesai <b>di hari yang sama</b></li>
  <li>Biaya tambahan: <b>+ Rp 1.000.000</b> (di luar biaya PNBP buku paspor)</li>
  <li>Pendaftaran maksimal pukul <b>10.00 pagi</b></li>
  <li>Pembayaran langsung di kasir kantor imigrasi</li>
</ul>
<div class="highlight">⚠️ Layanan percepatan <b>tidak bisa</b> dipesan via M-Paspor — harus datang langsung ke kantor.</div>`
  },
  {
    id: 'umroh_haji',
    keywords: 'umroh haji ibadah arab saudi religi perjalanan rohani madinah mekkah ziarah',
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
  {
    id: 'wna_itas',
    keywords: 'wna orang asing itas itap izin tinggal sementara tetap vitas visa tinggal',
    answer: `<b>🌐 Izin Tinggal untuk WNA (Warga Negara Asing):</b><br><br>
<b>Jenis Izin Tinggal:</b><br>
<ul>
  <li><b>VITAS</b> — Visa Tinggal Terbatas (diajukan di KBRI/KJRI luar negeri)</li>
  <li><b>ITAS</b> — Izin Tinggal Terbatas (berlaku 1–2 tahun, bisa diperpanjang)</li>
  <li><b>ITAP</b> — Izin Tinggal Tetap (untuk WNA yang sudah lama tinggal di Indonesia)</li>
</ul>
<div class="highlight">📋 Untuk persyaratan lengkap ITAS/ITAP, hubungi kantor kami di <b>(0438) 21077</b> atau kunjungi <a href="https://bitung.imigrasi.go.id" target="_blank">bitung.imigrasi.go.id</a></div>`
  },
  {
    id: 'visa',
    keywords: 'visa kunjungan wisata turis liburan bisnis kerja pelajar mahasiswa voa on arrival',
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
  {
    id: 'beda_kantor',
    keywords: 'beda kantor lain berbeda kota luar kota domisili lain daerah pindah',
    answer: `<b>📍 Perpanjang Paspor di Kantor Berbeda:</b><br><br>
Mulai tahun 2023, perpanjangan paspor <b>bisa dilakukan di kantor imigrasi mana saja</b> di seluruh Indonesia — tidak harus di kantor sesuai domisili KTP.<br><br>
<ul>
  <li>Cukup daftar antrian via <b>M-Paspor</b> ke kantor tujuan</li>
  <li>Syarat dokumen tetap sama</li>
  <li>Berlaku untuk perpanjangan maupun penggantian</li>
</ul>
<div class="highlight">💡 Namun untuk kemudahan verifikasi, disarankan tetap mengurus di kantor sesuai domisili KTP.</div>`
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
let currentChatId = Date.now().toString();
let currentMessages = []; // buffer [{role, html, time, text?}]

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
//  localStorage helpers (aman dari error)
// ════════════════════════════════════════════════════════
function lsGet(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
}
function lsSet(key, val) {
    try { localStorage.setItem(key, val); return true; } catch(e) { return false; }
}
function lsRemove(key) {
    try { localStorage.removeItem(key); } catch(e) {}
}
function getAllChats() {
    try { return JSON.parse(lsGet('bimo_all_chats') || '{}'); } catch(e) { return {}; }
}
function setAllChats(obj) {
    lsSet('bimo_all_chats', JSON.stringify(obj));
}

// ════════════════════════════════════════════════════════
//  RENDER PESAN
// ════════════════════════════════════════════════════════
function renderMessageToDom(role, html, time) {
    const container = document.getElementById('messages');

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

    const timeEl = document.createElement('div');
    timeEl.className = 'msg-time';
    timeEl.textContent = time || getTime();

    wrap.appendChild(bubble);
    wrap.appendChild(timeEl);

    if (role === 'user') {
        msgDiv.appendChild(wrap);
        msgDiv.appendChild(avatar);
    } else {
        msgDiv.appendChild(avatar);
        msgDiv.appendChild(wrap);
    }

    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function appendMessage(role, html) {
    const wc = document.getElementById('welcomeCard');
    if (wc) wc.remove();

    const time = getTime();
    const entry = { role, html, time };
    if (role === 'user') {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        entry.text = tmp.textContent || html;
    }
    currentMessages.push(entry);

    renderMessageToDom(role, html, time);
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

    let results = fuse.search(cleaned);
    if (results.length && results[0].score <= 0.42) {
        return results[0].item.answer;
    }

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
    ['🌐 Beda kantor bisa?', '🔒 Paspor mau habis?', '📱 Download M-Paspor', '💳 Cara bayar PNBP?'],
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
//  RIWAYAT CHAT (localStorage) — simpan JSON, bukan HTML
// ════════════════════════════════════════════════════════
function saveChat() {
    if (currentMessages.length === 0) return;

    let all = getAllChats();
    const existing = all[currentChatId];

    const firstUser = currentMessages.find(m => m.role === 'user');
    const title = firstUser
        ? firstUser.text.substring(0, 30) + (firstUser.text.length > 30 ? '…' : '')
        : 'Chat';

    all[currentChatId] = {
        messages: currentMessages,
        title,
        timestamp: existing
            ? existing.timestamp
            : new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })
    };

    const keys = Object.keys(all);
    if (keys.length > 10) delete all[keys[0]];

    setAllChats(all);
    lsSet('bimo_last_id', currentChatId);
    renderChatList();
}

function renderChatList() {
    const all = getAllChats();
    const list = document.getElementById('chatHistoryList');
    if (!list) return;

    list.innerHTML = '';
    const ids = Object.keys(all).reverse();

    if (ids.length === 0) {
        list.innerHTML = '<div style="font-size:11px;color:rgba(255,255,255,0.25);padding:8px 16px;">Belum ada riwayat</div>';
        return;
    }

    for (const id of ids) {
        const item = all[id];
        const div = document.createElement('div');
        div.className = 'history-item';

        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.style.cssText = 'width:auto;flex:1;margin:0;font-size:11px;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
        btn.style.opacity = id === currentChatId ? '1' : '0.65';
        if (id === currentChatId) btn.style.background = 'rgba(184,137,42,0.1)';
        btn.title = item.title || item.timestamp;
        btn.innerHTML = `<i class="fas fa-comment-alt"></i> ${item.title || item.timestamp}`;
        btn.onclick = (function(chatId) {
            return function() { loadChat(chatId); };
        })(id);

        const delBtn = document.createElement('button');
        delBtn.className = 'del-chat-btn';
        delBtn.title = 'Hapus chat ini';
        delBtn.innerHTML = '<i class="fas fa-times"></i>';
        delBtn.onclick = (function(chatId) {
            return function(e) { e.stopPropagation(); deleteSingleChat(chatId); };
        })(id);

        div.appendChild(btn);
        div.appendChild(delBtn);
        list.appendChild(div);
    }
}

function loadChat(chatId) {
    const all = getAllChats();
    const chat = all[chatId];
    if (!chat) return;

    currentChatId = chatId;
    currentMessages = chat.messages || [];
    lsSet('bimo_last_id', chatId);

    const container = document.getElementById('messages');
    container.innerHTML = '';

    for (const m of currentMessages) {
        renderMessageToDom(m.role, m.html, m.time);
    }

    container.scrollTop = container.scrollHeight;
    renderChatList();
    if (window.innerWidth <= 768) closeSidebar();
}

function deleteSingleChat(id) {
    let all = getAllChats();
    delete all[id];
    setAllChats(all);

    if (id === currentChatId) {
        const remaining = Object.keys(all);
        if (remaining.length > 0) {
            loadChat(remaining[remaining.length - 1]);
        } else {
            startNewChat();
        }
    }
    renderChatList();
}

function loadLastChat() {
    const lastId = lsGet('bimo_last_id');
    const all = getAllChats();
    if (lastId && all[lastId] && all[lastId].messages && all[lastId].messages.length > 0) {
        loadChat(lastId);
    } else {
        startNewChat();
    }
}

function startNewChat() {
    currentChatId = Date.now().toString();
    currentMessages = [];
    lsRemove('bimo_last_id');
    showWelcome();
}

function newChat() {
    startNewChat();
    if (window.innerWidth <= 768) closeSidebar();
}

function showWelcome() {
    const container = document.getElementById('messages');
    container.innerHTML = '';
    const wc = document.createElement('div');
    wc.className = 'welcome-card';
    wc.id = 'welcomeCard';
    wc.innerHTML = `
        <div style="font-size:40px;margin-bottom:10px;">🛂</div>
        <h2>Halo! Saya BIMO</h2>
        <p>Bot Informasi Imigrasi Bitung siap membantu Anda 24 jam seputar paspor, visa, dan layanan keimigrasian.</p>
        <div class="quick-grid">
            <button class="quick-btn" onclick="askTopic('syarat paspor baru')">🛂 Syarat paspor baru</button>
            <button class="quick-btn" onclick="askTopic('biaya paspor pnbp')">💳 Biaya paspor</button>
            <button class="quick-btn" onclick="askTopic('cara pakai mpaspor daftar online')">📱 Cara pakai M-Paspor</button>
            <button class="quick-btn" onclick="askTopic('paspor hilang')">🚨 Paspor hilang</button>
        </div>`;
    container.appendChild(wc);
}

function clearAllHistory() {
    if (!confirm('Hapus semua riwayat chat?')) return;
    lsRemove('bimo_all_chats');
    lsRemove('bimo_last_id');
    startNewChat();
    renderChatList();
}

// ── START ──
window.addEventListener('load', () => {
    renderChatList();
    loadLastChat();
});
