
/* ============ DATA PROYEK ============
   c = tiga warna tema proyek. Ganti di sini kalau mau menyesuaikan. */
const PROJECTS = [
  {
    name: 'Kulkasku', sub: 'Pengingat sayur & buah sebelum layu', kind: 'Mobile · Web',
    demo: 'https://mitafbr.github.io/kulkasku/',
    apk: 'https://github.com/mitafbr/kulkasku/releases/download/v1.0.5/app-release.apk',
    code: 'https://github.com/mitafbr/kulkasku',
    c: ['#9fe0a6', '#ffb27a', '#dff5d2'],
    desc: 'Sayur di kulkas sering ketahuan layu pas udah telat? Kulkasku menghitung tanggal layunya dari tanggal beli dan suhu kulkas, lalu mengingatkan sehari sebelumnya. Isinya tampil di kulkas dua pintu yang bisa dibuka, ditemani maskot Mumu. Tugas akhir Bootcamp BTNG 2026 Divisi Mobile.',
    tags: ['Flutter', 'Dart', 'Supabase', 'REST API', 'Android']
  },
  {
    name: 'AREAKU', sub: 'Radar usaha lokal di sekitarku', kind: 'Web · Mobile',
    status: 'Sedang dikembangkan',
    demo: '',   // link website yang sudah online, contoh: 'https://mitafbr.github.io/areaku/'
    code: '',   // link repo GitHub, contoh: 'https://github.com/mitafbr/areaku'
    c: ['#8fe3c8', '#ff9d8a', '#9cc5a1'],
    desc: 'Pernah mencari gerobak langganan tapi ternyata sudah pindah? AREAKU hadir untuk itu: peta UMKM yang berpindah-pindah, mulai dari gerobak keliling, PKL, sampai pasar mingguan. Penjual juga bisa menandai lapaknya sendiri.',
    tags: ['Leaflet', 'OpenStreetMap', 'Flutter', 'Supabase']
  },
  {
    name: 'RODAKES', sub: 'Rotasi Optimal Distribusi Alat Kesehatan', kind: 'Web · Mobile',
    status: 'Repo privat',
    demo: '',   // link website yang sudah online, contoh: 'https://mitafbr.github.io/areaku/'
    code: '',   // link repo GitHub, contoh: 'https://github.com/mitafbr/areaku'
    c: ['#6cb8ff', '#6fe0b0', '#b9dcff'],
    desc: 'Alat kesehatan tidak selalu harus dibeli, kok. RODAKES mempertemukan yang butuh dengan komunitas yang punya, lewat model subsidi silang. Lengkap dengan landing page, area peminjam, dan dashboard admin.',
    tags: ['Flutter', 'HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'GeoMedik', sub: 'Pemetaan layanan kesehatan', kind: 'UI/UX',
    status: 'Desain UI/UX',
    demo: '',   // link website yang sudah online, contoh: 'https://mitafbr.github.io/areaku/'
    code: '',   // link repo GitHub, contoh: 'https://github.com/mitafbr/areaku'
    c: ['#dcebff', '#4d9bff', '#9cc4ff'],
    desc: 'Layanan kesehatan paling dibutuhkan di mana? GeoMedik menjawabnya lewat peta dan skor urgensi berbasis AI. Di proyek untuk kompetisi CODE 6.0 ini, bagianku adalah desain UI/UX: halaman beranda, peta, masuk, dan daftar.',
    tags: ['Figma', 'UI/UX', 'Glassmorphism']
  },
  {
    name: 'KT', sub: 'Web Karang Taruna Sriti 02', kind: 'Web',
    status: 'Sedang dikembangkan',
    demo: '',   // link website yang sudah online, contoh: 'https://mitafbr.github.io/areaku/'
    code: '',   // link repo GitHub, contoh: 'https://github.com/mitafbr/areaku'
    c: ['#a9d8ff', '#5b8dee', '#dff1ff'],
    desc: 'Karang taruna juga boleh go digital. Tugas, absensi foto, kas, dan kalender kegiatan ada di satu tempat, dengan empat peran: admin, pengurus, anggota, dan pengunjung.',
    tags: ['React', 'Supabase', 'Glassmorphism']
  },
  {
    name: 'LANGKAH AMAN', sub: 'Tongkat pintar tunanetra', kind: 'IoT · Web',
    status: 'Segera online',
    demo: '',   // link website yang sudah online, contoh: 'https://mitafbr.github.io/areaku/'
    code: '',   // link repo GitHub, contoh: 'https://github.com/mitafbr/areaku'
    c: ['#ffd166', '#4fd1c5', '#ffe9b0'],
    desc: 'Tongkat yang selalu siaga. Sensor ultrasonik mendeteksi halangan, GPS mengirim lokasi ke dashboard web, dan kontak darurat langsung dikabari lewat bot Telegram.',
    tags: ['NodeMCU ESP8266', 'Sensor Ultrasonik', 'GPS', 'Supabase', 'Telegram Bot']
  },
  {
    name: 'SI-PEKA', sub: 'Tempat sampah pintar', kind: 'IoT',
    status: 'Segera online',
    demo: '',   // link website yang sudah online
    code: '',   // link repo GitHub
    c: ['#9be37a', '#ffb347', '#d3f5c4'],
    desc: 'Tempat sampah yang bisa lapor sendiri. Sensor memantau seberapa penuh isinya dan kualitas udara di sekitarnya, lalu mengirim notifikasi ke Telegram. Proyek kelompok mata kuliah IoT.',
    tags: ['NodeMCU ESP8266', 'HC-SR04', 'MQ-135', 'Supabase', 'Telegram Bot']
  },
  {
    name: 'SAVIOR', sub: 'Smart Ambulance and Vital Incident Optimization Response', kind: 'Web · Proyek tim',
    demo: 'https://nawfdev.github.io/savior-semarang/',   // link website yang sudah online, contoh: 'https://mitafbr.github.io/areaku/'
    code: '',   // link repo GitHub, contoh: 'https://github.com/mitafbr/areaku'
    c: ['#ffffff', '#ff6b6b', '#ffb4a8'],
    desc: 'Laporan fiktif itu red flag untuk layanan darurat. SAVIOR memvalidasi laporan 112 Kota Semarang dengan bukti foto, GPS, dan metadata, lengkap dengan dashboard terpisah untuk tiap peran. Proyek tim untuk GEMASTIK XIX 2026 Divisi Kota Cerdas.',
    tags: ['Web', 'Figma', 'Riset']
  },
  {
    name: 'Teach SKL', sub: 'Portal akademik digital', kind: 'Web · UI/UX',
    demo: 'https://skl.nawf.dev/',
    code: '',
    c: ['#8fd0ea', '#ffffff', '#bfe6f5'],
    desc: 'Belajar jadi lebih rapi kalau semuanya ada di satu portal. Teach SKL adalah portal akademik digital yang membawa pulang dua penghargaan di HI-TECHNOLOGY 2026: Terfavorit dan Top Finalis.',
    tags: ['Figma', 'UI/UX', 'Web']
  },
  {
    name: 'Gesture Voice', sub: 'Perkenalan lewat gerakan tangan', kind: 'Web · Computer Vision',
    status: 'Segera online',
    demo: '',
    code: '',
    c: ['#3fd0bd', '#ffe08a', '#a7efe4'],
    desc: 'Kenalan tanpa mengetik. Kamera membaca jumlah jari yang diangkat, lalu halaman merespons dengan teks dan suara. Semuanya berjalan langsung di browser.',
    tags: ['JavaScript', 'Hand Tracking', 'Text to Speech']
  }
];

/* ============ GANTI TEMA ============ */
const root = document.documentElement;
const plist = document.getElementById('plist');
const info = document.getElementById('info');
let current = 0, auto = true, timer;

function show(i, byUser) {
  current = (i + PROJECTS.length) % PROJECTS.length;
  const p = PROJECTS[current];
  ['--a1', '--a2', '--a3'].forEach((v, k) => root.style.setProperty(v, p.c[k]));
  const links = (p.demo ? `<a class="btn primary" href="${p.demo}" target="_blank" rel="noopener">Buka website ↗</a>` : '')
    + (p.apk ? `<a class="btn" href="${p.apk}" rel="noopener">Unduh APK ↓</a>` : '')
    + (p.code ? `<a class="btn" href="${p.code}" target="_blank" rel="noopener">Lihat kode ↗</a>` : '')
    + (p.status ? `<span class="soon">${p.status}</span>` : '')
    || '<span class="soon">Link menyusul</span>';
  info.innerHTML = `<div class="fade">
      <div class="idx">${String(current + 1).padStart(2, '0')}</div>
      <span class="kind">${p.kind}</span>
      <h3>${p.name}</h3>
      <div class="sub">${p.sub}</div>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="links">${links}</div>
      <div class="stage-nav">
        <span></span>
        <div class="arrows"><button id="prev" aria-label="Proyek sebelumnya">‹</button><button id="next" aria-label="Proyek berikutnya">›</button></div>
      </div></div>`;
  document.getElementById('prev').onclick = () => step(-1, true);
  document.getElementById('next').onclick = () => step(1, true);
  plist.querySelectorAll('.pbtn').forEach((b, k) => b.classList.toggle('active', k === current));
  if (byUser) { auto = false; clearInterval(timer); }
}

PROJECTS.forEach((p, i) => {
  const b = document.createElement('button');
  b.className = 'pbtn';
  b.innerHTML = `<i style="background:${p.c[0]};color:${p.c[0]}"></i><span><b>${p.name}</b><small>${p.kind}</small></span>`;
  b.onclick = () => show(i, true);
  plist.appendChild(b);
});

/* ============ FILTER KATEGORI (chip + ubin di dekat planet) ============ */
const FILTERS = ['Semua', 'Web', 'Mobile', 'IoT', 'UI/UX'];
let filter = 'semua';
const cocok = i => filter === 'semua' || PROJECTS[i].kind.toLowerCase().includes(filter);
function step(dir, byUser) {
  let j = current;
  do { j = (j + dir + PROJECTS.length) % PROJECTS.length; } while (!cocok(j) && j !== current);
  show(j, byUser);
}
const fbox = document.getElementById('filters');
function setFilter(f) {
  filter = f.toLowerCase();
  plist.querySelectorAll('.pbtn').forEach((b, i) => b.style.display = cocok(i) ? '' : 'none');
  fbox.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.textContent.toLowerCase() === filter));
  document.querySelectorAll('#art .tile').forEach(t => t.classList.toggle('on', t.textContent.trim().toLowerCase() === filter));
  if (!cocok(current)) show(PROJECTS.findIndex((_, i) => cocok(i)), true);
}
FILTERS.forEach(f => {
  const c = document.createElement('button');
  c.className = 'chip' + (f === 'Semua' ? ' active' : ''); c.textContent = f;
  c.onclick = () => setFilter(f);
  fbox.appendChild(c);
});
document.querySelectorAll('#art .tile').forEach(t => {
  t.setAttribute('role', 'button'); t.tabIndex = 0;
  const go = () => { setFilter(t.textContent.trim()); auto = false; document.getElementById('proyek').scrollIntoView({ behavior: 'smooth' }); };
  t.addEventListener('click', go);
  t.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
});
show(0);
timer = setInterval(() => { if (auto) step(1); }, 6000);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') step(1, true);
  if (e.key === 'ArrowLeft') step(-1, true);
});

/* ============ PANGGUNG: miring 3D mengikuti kursor ============ */
const stage = document.getElementById('stage');
stage.addEventListener('mousemove', e => {
  const r = stage.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
  stage.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
});
stage.addEventListener('mouseleave', () => stage.style.transform = '');

/* ============ TEKS MENGETIK ============ */
const words = ['web app.', 'aplikasi mobile.', 'perangkat IoT.', 'desain yang nyaman.'];
const typed = document.getElementById('typed');
let w = 0, ch = 0, del = false;
(function type() {
  const word = words[w];
  typed.textContent = word.slice(0, ch);
  let wait = del ? 45 : 95;
  if (!del && ch === word.length) { del = true; wait = 1500; }
  else if (del && ch === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
  else ch += del ? -1 : 1;
  setTimeout(type, wait);
})();

/* ============ MUNCUL SAAT DI-SCROLL + ANGKA NAIK ============ */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('[data-count]').forEach(el => {
  const end = +el.dataset.count; let n = 0;
  const t = setInterval(() => { el.textContent = ++n; if (n >= end) clearInterval(t); }, 220);
});

/* ============ GLOW KURSOR ============ */
const glow = document.getElementById('glow');
let gx = 0, gy = 0, mx = -999, my = -999;
const tiles = document.querySelectorAll('#art [data-d]');
window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY; glow.style.opacity = 1;
  const px = mx / innerWidth - 0.5, py = my / innerHeight - 0.5;
  tiles.forEach(t => t.style.translate = `${px * t.dataset.d}px ${py * t.dataset.d}px`);
  planet.style.translate = `${px * -34}px ${py * -34}px`;
  const g = e.target.closest && e.target.closest('.glass');
  if (g) { const r = g.getBoundingClientRect(); g.style.setProperty('--mx', (mx - r.left) + 'px'); g.style.setProperty('--my', (my - r.top) + 'px'); }
});

/* klik planet: ganti tema ke proyek berikutnya + gelombang + ledakan bintang */
const planet = document.querySelector('.planet'), orb = document.querySelector('.orb');
orb.addEventListener('click', () => {
  step(1, true);
  orb.classList.remove('pop'); void orb.offsetWidth; orb.classList.add('pop');
  const w = document.createElement('div'); w.className = 'wave'; planet.appendChild(w); setTimeout(() => w.remove(), 900);
});

/* kartu miring 3D mengikuti kursor */
document.querySelectorAll('.skills > div, .win, .cert, .about > div').forEach(el => {
  el.classList.add('tiltable');
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-4px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});

/* sertifikat: klik untuk memperbesar */
const lb = document.getElementById('lightbox');
document.querySelectorAll('.cert').forEach(c => c.addEventListener('click', () => { lb.querySelector('img').src = c.querySelector('img').src; lb.classList.add('open'); }));
lb.addEventListener('click', () => lb.classList.remove('open'));
addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

/* garis progres scroll */
const bar = document.getElementById('bar');
addEventListener('scroll', () => bar.style.transform = `scaleX(${scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`, { passive: true });
(function follow() {
  gx += (mx - gx) * 0.12; gy += (my - gy) * 0.12;
  glow.style.transform = `translate(${gx}px, ${gy}px)`;
  requestAnimationFrame(follow);
})();

/* ============ PITA TEKNOLOGI + TOMBOL MAGNET ============ */
const techs = ['Flutter', 'React', 'Supabase', 'Figma', 'Dart', 'TailwindCSS', 'ESP8266', 'JavaScript', 'PostgreSQL', 'Leaflet', 'PHP', 'Node.js'];
document.getElementById('track').innerHTML = techs.map(t => `<span>${t}</span><i>✦</i>`).join('').repeat(2);
document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('mousemove', e => {
    const r = b.getBoundingClientRect();
    b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
  });
  b.addEventListener('mouseleave', () => b.style.translate = '');
});

/* ============ LANGIT GALAKSI: bintang berkelip, paralaks, bintang jatuh ============ */
const cv = document.getElementById('particles'), cx = cv.getContext('2d');
let W, H, stars = [], shoots = [], sparks = [];
let lastTrail = 0;
addEventListener('pointermove', e => {
  const now = performance.now(); if (now - lastTrail < 28) return; lastTrail = now;
  sparks.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - .5) * .8, vy: (Math.random() - .5) * .8 + .3, life: 0, sp: 0.03, r: 1 + Math.random() * 1.6 });
});
addEventListener('pointerdown', e => {
  for (let i = 0; i < 28; i++) { const a = Math.random() * 6.283, v = 1.5 + Math.random() * 4.5;
    sparks.push({ x: e.clientX, y: e.clientY, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0, sp: 0.018 + Math.random() * 0.012, r: 1 + Math.random() * 2.2 }); }
});
function resize() {
  W = cv.width = innerWidth; H = cv.height = innerHeight;
  const n = Math.min(260, Math.floor(W * H / 5200));
  stars = Array.from({ length: n }, () => {
    const depth = Math.random();               // 0 jauh, 1 dekat
    return { x: Math.random() * W, y: Math.random() * H, r: 0.3 + depth * 1.5, depth, ph: Math.random() * 6.28, sp: 0.6 + Math.random() * 1.8, tint: Math.random() < 0.18 };
  });
}
resize(); addEventListener('resize', resize);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let nextShoot = 1500;
function draw(t) {
  cx.clearRect(0, 0, W, H);
  const col = PROJECTS[current].c[0];
  const px = (mx > 0 ? mx / W - 0.5 : 0), py = (my > 0 ? my / H - 0.5 : 0), sc = scrollY;
  for (const s of stars) {
    let x = s.x - px * s.depth * 46, y = s.y - py * s.depth * 46 - sc * s.depth * 0.18;
    y = ((y % H) + H) % H; x = ((x % W) + W) % W;
    cx.globalAlpha = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t / 1000 * s.sp + s.ph)) * (0.4 + s.depth * 0.6);
    cx.fillStyle = s.tint ? col : '#ffffff';
    cx.beginPath(); cx.arc(x, y, s.r, 0, 6.283); cx.fill();
    if (mx > 0) { const d = Math.hypot(x - mx, y - my); if (d < 150) { const al = cx.globalAlpha; cx.globalAlpha = (1 - d / 150) * 0.5; cx.strokeStyle = col; cx.lineWidth = 0.7; cx.beginPath(); cx.moveTo(x, y); cx.lineTo(mx, my); cx.stroke(); cx.globalAlpha = al; } }
    if (s.depth > 0.93) { cx.globalAlpha *= 0.25; cx.beginPath(); cx.arc(x, y, s.r * 3.2, 0, 6.283); cx.fill(); }
  }
  if (t > nextShoot) {
    shoots.push({ x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, life: 0 });
    nextShoot = t + 2600 + Math.random() * 4200;
  }
  shoots = shoots.filter(s => s.life < 1);
  for (const s of shoots) {
    s.life += 0.02;
    const hx = s.x - s.life * 420, hy = s.y + s.life * 210;
    const g = cx.createLinearGradient(hx, hy, hx + 130, hy - 65);
    g.addColorStop(0, '#ffffff'); g.addColorStop(1, 'rgba(255,255,255,0)');
    cx.globalAlpha = Math.sin(s.life * Math.PI); cx.strokeStyle = g; cx.lineWidth = 1.6;
    cx.beginPath(); cx.moveTo(hx, hy); cx.lineTo(hx + 130, hy - 65); cx.stroke();
  }
  const col2 = PROJECTS[current].c[1];
  sparks = sparks.filter(p => p.life < 1);
  if (sparks.length > 400) sparks.splice(0, sparks.length - 400);
  for (const p of sparks) {
    p.life += p.sp; p.x += p.vx; p.y += p.vy; p.vx *= 0.97; p.vy *= 0.97;
    cx.globalAlpha = 1 - p.life; cx.fillStyle = Math.random() < 0.5 ? col : col2;
    cx.beginPath(); cx.arc(p.x, p.y, p.r * (1 - p.life * 0.6), 0, 6.283); cx.fill();
  }
  if (!reduce) requestAnimationFrame(draw);
}
draw(0);

/* ============ MUSIK & SUARA (dibuat langsung pakai Web Audio, tanpa file lagu) ============ */
(() => {
  const btn = document.getElementById('soundBtn');
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!btn || !AC) { if (btn) btn.style.display = 'none'; return; }
  let ctx, master, musicBus, sfxBus, wet, on = false, loopTimer, sparkleTimer, step = 0;

  function makeReverb(c) {
    const len = c.sampleRate * 3.2, buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    const cv = c.createConvolver(); cv.buffer = buf; return cv;
  }
  function init() {
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    const rev = makeReverb(ctx); wet = ctx.createGain(); wet.gain.value = .55; rev.connect(wet); wet.connect(master);
    musicBus = ctx.createGain(); musicBus.gain.value = .55; musicBus.connect(master); musicBus.connect(rev);
    sfxBus = ctx.createGain(); sfxBus.gain.value = .5; sfxBus.connect(master); sfxBus.connect(rev);
  }
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  /* pad lembut: tiap nada = 2 osilator sedikit fals + filter, naik-turun pelan */
  function pad(notes, t, dur) {
    notes.forEach(n => {
      const g = ctx.createGain(), f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = 900; f.Q.value = .4;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(.05, t + dur * .35);
      g.gain.linearRampToValueAtTime(0, t + dur * 1.05);
      [-5, 5].forEach(det => {
        const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = hz(n); o.detune.value = det;
        o.connect(f); o.start(t); o.stop(t + dur * 1.1);
      });
      f.connect(g); g.connect(musicBus);
    });
  }
  function bell(m, t, vol = .05, bus = musicBus) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = hz(m); o2.type = 'sine'; o2.frequency.value = hz(m) * 2.01;
    const g2 = ctx.createGain(); g2.gain.value = .25;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + 2.4);
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(bus);
    o.start(t); o2.start(t); o.stop(t + 2.5); o2.stop(t + 2.5);
  }

  /* progresi akor tenang ala luar angkasa */
  const CHORDS = [[48, 55, 59, 64], [45, 52, 55, 60, 64], [41, 48, 52, 57], [43, 50, 55, 57, 62]];
  const SCALE = [72, 74, 76, 79, 81, 84, 86, 88];
  const BAR = 7;
  function loop() {
    const t = ctx.currentTime + .05;
    pad(CHORDS[step % CHORDS.length], t, BAR);
    const bass = ctx.createOscillator(), bg = ctx.createGain();
    bass.type = 'sine'; bass.frequency.value = hz(CHORDS[step % CHORDS.length][0] - 12);
    bg.gain.setValueAtTime(0, t); bg.gain.linearRampToValueAtTime(.06, t + 1.5); bg.gain.linearRampToValueAtTime(0, t + BAR);
    bass.connect(bg); bg.connect(musicBus); bass.start(t); bass.stop(t + BAR + .1);
    step++;
  }
  function sparkle() {
    if (!on) return;
    if (Math.random() < .7) bell(SCALE[Math.floor(Math.random() * SCALE.length)], ctx.currentTime + .02, .035);
    sparkleTimer = setTimeout(sparkle, 900 + Math.random() * 2200);
  }

  /* efek suara */
  function blip(m = 84, vol = .06) {
    if (!on) return;
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(hz(m), t); o.frequency.exponentialRampToValueAtTime(hz(m + 7), t + .08);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + .18);
    o.connect(g); g.connect(sfxBus); o.start(t); o.stop(t + .2);
  }
  function chime(notes) {
    if (!on) return;
    notes.forEach((m, i) => bell(m, ctx.currentTime + i * .09, .07, sfxBus));
  }
  function whoosh() {
    if (!on) return;
    const t = ctx.currentTime, len = ctx.sampleRate * .9, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.Q.value = 1.2;
    f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(3200, t + .7);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.12, t + .25); g.gain.exponentialRampToValueAtTime(.0001, t + .9);
    src.connect(f); f.connect(g); g.connect(sfxBus); src.start(t);
    chime([79, 83, 86, 91]);
  }

  function setOn(v) {
    on = v;
    btn.classList.toggle('on', on); btn.classList.remove("sound-hint");
    btn.setAttribute('aria-pressed', on); btn.setAttribute('aria-label', on ? 'Matikan musik dan suara' : 'Nyalakan musik dan suara');
    btn.querySelector('.lbl').textContent = on ? 'Musik on' : 'Musik';
    try { localStorage.setItem('porto-sound', on ? '1' : '0'); } catch (e) {}
    if (on) {
      if (!ctx) init();
      ctx.resume();
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setTargetAtTime(.9, ctx.currentTime, .6);
      clearInterval(loopTimer); loop(); loopTimer = setInterval(loop, BAR * 1000);
      clearTimeout(sparkleTimer); sparkle();
      chime([76, 79, 84]);
    } else if (ctx) {
      master.gain.setTargetAtTime(0, ctx.currentTime, .25);
      clearInterval(loopTimer); clearTimeout(sparkleTimer);
    }
  }
  btn.addEventListener('click', e => { e.stopPropagation(); setOn(!on); });

  /* suara klik di tombol, link, proyek, ubin, sertifikat */
  document.addEventListener('click', e => {
    if (!on) return;
    if (e.target.closest('.orb')) return whoosh();
    if (e.target.closest('.pbtn, #prev, #next')) return chime([81, 88]);
    if (e.target.closest('a, button, .tile, .cert, .chip')) blip(e.target.closest('.btn.primary') ? 79 : 84);
  });
  /* hover halus di daftar proyek */
  document.addEventListener('pointerover', e => {
    const b = e.target.closest('.pbtn');
    if (on && b && !b.contains(e.relatedTarget)) blip(91, .02);
  });

  /* musik berhenti sementara saat tab ditinggal */
  document.addEventListener('visibilitychange', () => {
    if (!ctx || !on) return;
    document.hidden ? ctx.suspend() : ctx.resume();
  });

  /* kalau pengunjung sebelumnya menyalakan musik, nyala lagi di klik pertama (browser melarang autoplay) */
  let saved = '0';
  try { saved = localStorage.getItem('porto-sound') || '0'; } catch (e) {}
  if (saved === '1') {
    const first = ev => { if (ev.target.closest('#soundBtn')) return; setOn(true); };
    document.addEventListener('pointerdown', first, { once: true });
  }
})();
