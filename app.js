/* ============================================
   PESONA BALI — app.js
   Handles: Navbar, Scroll Reveal, Wilayah,
            Budaya/Alam Cards, Modal, Gamelan
   ============================================ */

'use strict';

/* =========================================
   DATA
   ========================================= */

const wilayahData = {
  denpasar: {
    emoji: '🏙️',
    name: 'Denpasar',
    type: 'Ibu Kota Provinsi Bali',
    desc: 'Denpasar adalah ibu kota sekaligus kota terbesar di Bali. Sebagai pusat pemerintahan, pendidikan, dan perekonomian Bali, Denpasar memiliki perpaduan unik antara modernitas dan tradisi Hindu-Bali yang kuat. Rumah bagi Pura Jagatnatha dan Museum Bali yang ikonik.',
    facts: [
      ['🌆', 'Pusat perdagangan dan bisnis Bali'],
      ['🎭', 'Festival Seni Bali tahunan'],
      ['🏛️', 'Museum Bali & Pura Jagatnatha'],
    ],
    pancasila: 'Sebagai ibu kota, Denpasar mencerminkan <strong>Sila ke-3 (Persatuan Indonesia)</strong> — menjadi pusat integrasi berbagai suku bangsa yang datang ke Bali dengan tetap menjaga identitas budaya lokal.',
  },
  badung: {
    emoji: '🏖️',
    name: 'Kabupaten Badung',
    type: 'Pusat Pariwisata Internasional',
    desc: 'Badung adalah jantung pariwisata Bali, mencakup kawasan Kuta, Seminyak, Nusa Dua, dan Canggu. Tempat Pura Uluwatu yang megah berdiri di tebing karang, menjadi simbol keagungan budaya Bali di hadapan Samudra Hindia.',
    facts: [
      ['🌊', 'Pantai Kuta, Seminyak, Nusa Dua'],
      ['🏛️', 'Pura Uluwatu di tebing 97m'],
      ['✈️', 'Bandara Internasional Ngurah Rai'],
    ],
    pancasila: 'Badung yang menjadi gerbang dunia bagi Bali mengamalkan <strong>Sila ke-2 (Kemanusiaan yang Adil dan Beradab)</strong> — menyambut tamu dari seluruh penjuru dunia dengan keramahan dan penghormatan universal.',
  },
  gianyar: {
    emoji: '🎨',
    name: 'Kabupaten Gianyar',
    type: 'Pusat Seni & Budaya Bali',
    desc: 'Gianyar adalah pusat seni dan kerajinan Bali. Di sinilah Ubud berada — surga seniman, pengrajin, dan penari. Sawah terasering Tegalalang dan Desa Mas yang terkenal dengan ukiran kayu menjadi magnet wisatawan dari seluruh dunia.',
    facts: [
      ['🎭', 'Ubud — pusat seni dan budaya'],
      ['🌾', 'Sawah terasering Tegalalang'],
      ['🖼️', 'Ratusan galeri seni & pengrajin'],
    ],
    pancasila: 'Gianyar membuktikan <strong>Sila ke-4 (Kerakyatan yang Dipimpin Hikmat)</strong> — sistem desa adat (desa pakraman) yang demokratis dan musyawarah sebagai landasan pengambilan keputusan komunitas.',
  },
  tabanan: {
    emoji: '🌾',
    name: 'Kabupaten Tabanan',
    type: 'Lumbung Padi Bali',
    desc: 'Tabanan dikenal sebagai lumbung padi Bali dengan sistem irigasi tradisional Subak yang telah menjadi Warisan Budaya UNESCO sejak 2012. Desa Jatiluwih dengan panorama sawah terasering seluas 617 hektar menjadi ikon Bali abadi.',
    facts: [
      ['🌾', 'Jatiluwih — Warisan UNESCO'],
      ['💧', 'Sistem Subak — irigasi tradisional'],
      ['🐢', 'Pura Tanah Lot di tepi laut'],
    ],
    pancasila: 'Sistem Subak di Tabanan adalah wujud nyata <strong>Sila ke-5 (Keadilan Sosial)</strong> — pengelolaan air bersama yang adil, gotong royong, dan merata tanpa memandang status sosial petani.',
  },
  buleleng: {
    emoji: '⚓',
    name: 'Kabupaten Buleleng',
    type: 'Gerbang Bali Utara',
    desc: 'Buleleng dengan ibu kota Singaraja adalah kota terbesar kedua di Bali sekaligus pusat sejarah dan pendidikan. Dulu menjadi ibu kota Bali di era kolonial Belanda, kini terkenal dengan pantai Lovina dan lumba-lumba liarnya.',
    facts: [
      ['🐬', 'Pantai Lovina & lumba-lumba liar'],
      ['📚', 'Pusat pendidikan & perpustakaan Bali'],
      ['🏝️', 'Pura Pulaki tepi laut utara'],
    ],
    pancasila: 'Buleleng sebagai pusat pendidikan Bali mewujudkan <strong>Sila ke-2 (Kemanusiaan)</strong> — investasi pada kecerdasan dan kualitas hidup masyarakat sebagai pondasi bangsa yang bermartabat.',
  },
  karangasem: {
    emoji: '🌋',
    name: 'Kabupaten Karangasem',
    type: 'Negeri di Kaki Gunung Agung',
    desc: 'Karangasem adalah kawasan paling spiritual dan mistis di Bali, berdiri di kaki Gunung Agung — gunung tertinggi dan paling suci di Bali. Di sini terdapat Pura Besakih, "Ibu dari Segala Pura," serta istana air Tirta Gangga.',
    facts: [
      ['🏔️', 'Gunung Agung (3.142m) — gunung suci Bali'],
      ['🛕', 'Pura Besakih — ibu semua pura Bali'],
      ['💧', 'Taman Air Tirta Gangga'],
    ],
    pancasila: 'Karangasem dengan Pura Besakihnya merepresentasikan <strong>Sila ke-1 (Ketuhanan)</strong> — ketaatan spiritual yang mendalam dan penghormatan terhadap Sang Pencipta sebagai pondasi kehidupan masyarakat Bali.',
  },
  klungkung: {
    emoji: '👑',
    name: 'Kabupaten Klungkung',
    type: 'Pusat Kerajaan Bali Kuno',
    desc: 'Klungkung (dahulu Smarapura) adalah pusat kerajaan Bali kuno dan kota paling bersejarah di Bali. Istana Kertha Gosa dengan langit-langit berisi lukisan wayang Kamasan menjadi saksi bisu kejayaan kerajaan Hindu-Bali. Nusa Penida termasuk dalam wilayah ini.',
    facts: [
      ['🏛️', 'Kertha Gosa — istana pengadilan kuno'],
      ['🖼️', 'Lukisan wayang Kamasan legendaris'],
      ['🏝️', 'Nusa Penida, Nusa Lembongan'],
    ],
    pancasila: 'Klungkung dengan sistem peradilan Kertha Gosa mencerminkan <strong>Sila ke-4 (Kerakyatan)</strong> — pemerintahan yang bijaksana berdasarkan musyawarah dan keadilan yang berlaku bagi semua golongan.',
  },
  bangli: {
    emoji: '🌿',
    name: 'Kabupaten Bangli',
    type: 'Paru-Paru Bali',
    desc: 'Bangli adalah satu-satunya kabupaten di Bali yang tidak memiliki pantai, namun memiliki kekayaan alam pegunungan yang luar biasa. Kaldera Gunung Batur dengan danau biru yang indah menjadi daya tarik utama, bersama Desa Trunyan dengan tradisi pemakaman uniknya.',
    facts: [
      ['🌋', 'Gunung Batur & Danau Batur'],
      ['☕', 'Kintamani — kopi arabika premium'],
      ['💀', 'Tradisi unik pemakaman Trunyan'],
    ],
    pancasila: 'Desa Trunyan di Bangli dengan tradisi pemakaman yang berbeda mengajarkan <strong>Sila ke-3 (Persatuan)</strong> — dalam kebhinekaan tradisi adat, tetap hidup rukun dan saling menghormati perbedaan.',
  },
  jembrana: {
    emoji: '🌊',
    name: 'Kabupaten Jembrana',
    type: 'Gerbang Bali Barat',
    desc: 'Jembrana adalah pintu masuk Bali dari Pulau Jawa, sebuah kabupaten yang kaya dengan kesenian unik bernama Makepung (lomba kerbau) dan Jegog (gamelan dari bambu). Dikenal sebagai kawasan yang harmonis antara umat Hindu dan Muslim sejak berabad-abad lalu.',
    facts: [
      ['🐃', 'Makepung — lomba kerbau tradisional'],
      ['🎵', 'Jegog — gamelan bambu raksasa'],
      ['🕌', 'Harmoni Hindu-Islam yang damai'],
    ],
    pancasila: 'Jembrana adalah contoh hidup <strong>Sila ke-1 (Ketuhanan) & Sila ke-3 (Persatuan)</strong> — kerukunan antar umat beragama Hindu dan Islam yang berlangsung secara damai dan gotong royong selama ratusan tahun.',
  },
};

const budayaData = [
  {
    emoji: '💃',
    title: 'Tari Kecak',
    desc: 'Tarian kolosal yang dibawakan oleh puluhan penari laki-laki dengan suara "cak" ritmis. Menggambarkan kisah Ramayana dan diakui sebagai salah satu pertunjukan seni paling spektakuler di Asia.',
    category: 'seni',
    trivia: '🎭 Trivia: Tari Kecak tidak menggunakan alat musik — puluhan suara "cak" dari penari itulah yang menjadi orkestra hidup yang hipnotis.',
    pancasila: '🇮🇩 Sila ke-3: Persatuan Indonesia — puluhan penari yang bergerak selaras menjadi simbol kuat persatuan dalam perbedaan demi menghasilkan karya agung.',
  },
  {
    emoji: '🎭',
    title: 'Tari Barong',
    desc: 'Tarian sakral yang menggambarkan pertarungan abadi antara kebaikan (Barong) dan kejahatan (Rangda). Ini bukan sekadar hiburan, tapi upacara ritual yang dianggap suci dan protektif bagi komunitas.',
    category: 'seni',
    trivia: '🦁 Trivia: Kostum Barong dikeramatkan dan hanya boleh ditarikan oleh penari yang sudah menjalani ritual penyucian khusus di pura.',
    pancasila: '🇮🇩 Sila ke-1: Ketuhanan — Tari Barong adalah doa berbentuk seni yang memperkuat keyakinan akan kuasa Ilahi dalam melindungi manusia dari kejahatan.',
  },
  {
    emoji: '🌸',
    title: 'Upacara Ngaben',
    desc: 'Upacara kremasi yang dipercaya membebaskan jiwa dari ikatan duniawi agar dapat menuju alam berikutnya. Uniknya, Ngaben bukan upacara duka, melainkan perayaan penuh warna dan gamelan yang meriah.',
    category: 'tradisi',
    trivia: '🔥 Trivia: Keluarga yang ditinggalkan tidak boleh menangis saat Ngaben agar tidak menghalangi perjalanan roh menuju reinkarnasi berikutnya.',
    pancasila: '🇮🇩 Sila ke-2: Kemanusiaan — Ngaben membuktikan bahwa memuliakan manusia tidak berhenti pada saat hidup, tapi berlanjut hingga perjalanan jiwa menuju keabadian.',
  },
  {
    emoji: '🌺',
    title: 'Canang Sari',
    desc: 'Persembahan harian berupa anyaman daun kelapa berisi bunga warna-warni, dupa, dan perlambang keempat penjuru mata angin. Setiap pagi, jutaan canang sari dipersembahkan oleh warga Bali sebagai ungkapan syukur.',
    category: 'tradisi',
    trivia: '🌼 Trivia: Membuat canang sari adalah seni tersendiri yang diwariskan dari ibu ke anak perempuan. Setiap warna bunga memiliki makna spiritual yang berbeda.',
    pancasila: '🇮🇩 Sila ke-1: Ketuhanan — Canang sari adalah manifestasi rasa syukur sehari-hari yang menjaga spiritualitas tetap hadir dalam ritme kehidupan modern.',
  },
  {
    emoji: '🍗',
    title: 'Babi Guling',
    desc: 'Kuliner sakral dan ikonik Bali — babi utuh yang dipanggang sambil diputar di atas bara api selama berjam-jam dengan bumbu rempah Bali yang khas. Hidangan wajib dalam setiap upacara adat.',
    category: 'kuliner',
    trivia: '🔥 Trivia: Proses memanggang babi guling membutuhkan waktu 3-4 jam dengan api konstan, dan bumbu rahasianya bisa berbeda-beda di setiap keluarga.',
    pancasila: '🇮🇩 Sila ke-3: Persatuan — Babi guling selalu hadir dalam perayaan komunal, menjadi simbol kebersamaan dan gotong royong masyarakat Bali.',
  },
  {
    emoji: '🌶️',
    title: 'Sate Lilit',
    desc: 'Sate khas Bali yang berbeda — daging cincang bercampur parutan kelapa dan rempah Bali yang dililitkan pada batang serai atau bambu, kemudian dibakar di atas bara. Aromanya menggugah selera.',
    category: 'kuliner',
    trivia: '🌿 Trivia: Batang serai yang digunakan sebagai tusuk sate bukan hanya fungsi, tapi juga menambah aroma wangi khas pada sate saat dibakar.',
    pancasila: '🇮🇩 Sila ke-5: Keadilan Sosial — Sate lilit tersedia di warung kaki lima hingga restoran mewah, kuliner yang demokratis dan bisa dinikmati semua kalangan.',
  },
  {
    emoji: '☕',
    title: 'Kopi Bali Kintamani',
    desc: 'Kopi arabika premium yang tumbuh di ketinggian 1.500m dataran tinggi Kintamani. Diproses secara organik dengan metode tradisional oleh petani lokal, menghasilkan cita rasa fruity dan bersih yang khas.',
    category: 'kuliner',
    trivia: '🌱 Trivia: Kopi Kintamani adalah salah satu kopi bersertifikat organik pertama di Indonesia dan diakui sebagai Geographic Indication oleh Uni Eropa.',
    pancasila: '🇮🇩 Sila ke-5: Keadilan Sosial — Sistem koperasi petani kopi di Kintamani memastikan hasil bumi dapat mensejahterakan seluruh komunitas secara merata.',
  },
  {
    emoji: '🏛️',
    title: 'Arsitektur Pura',
    desc: 'Pura Bali dibangun berdasarkan konsep Tri Mandala — tiga zona suci yang semakin sakral ke arah dalam. Gerbang kembar (Candi Bentar) adalah elemen khas yang melambangkan dualitas alam semesta.',
    category: 'arsitektur',
    trivia: '🧱 Trivia: Setiap pura Bali selalu menghadap ke arah gunung (kaja) yang dipercaya sebagai tempat bersemayamnya para dewa — khususnya Gunung Agung.',
    pancasila: '🇮🇩 Sila ke-1: Ketuhanan — Arsitektur pura yang kompleks mencerminkan kedalaman spiritual dan dedikasi masyarakat Bali dalam memuliakan tempat ibadah.',
  },
  {
    emoji: '🏠',
    title: 'Rumah Adat Bali',
    desc: 'Kompleks rumah tradisional Bali (pekarangan) selalu memiliki sanggah (pura keluarga) di sudut kaja-kangin. Tata letak rumah mengikuti konsep Asta Kosala Kosali — ilmu arsitektur tradisional Bali.',
    category: 'arsitektur',
    trivia: '🧭 Trivia: Orientasi rumah adat Bali selalu mempertimbangkan arah gunung (kaja) dan laut (kelod) sebagai kompas spiritual yang memandu tata ruang kehidupan.',
    pancasila: '🇮🇩 Sila ke-4: Kerakyatan — Pembangunan rumah adat Bali melibatkan seluruh komunitas melalui gotong royong (ngoopin) yang mencerminkan nilai musyawarah mufakat.',
  },
];

const alamData = [
  {
    emoji: '🌾',
    title: 'Tegalalang Rice Terraces',
    desc: 'Sawah terasering yang diukir dengan apik di lereng bukit Ubud menggunakan sistem irigasi Subak berusia ribuan tahun. Diakui UNESCO sebagai Lanskap Budaya Bali yang harus dilestarikan.',
    trivia: '💧 Trivia: Sistem irigasi Subak yang mengairi sawah terasering ini sudah digunakan sejak abad ke-11 dan dikendalikan secara komunal melalui "pura subak."',
    pancasila: '🇮🇩 Sila ke-5: Keadilan Sosial — Subak adalah sistem pengelolaan air yang adil dan demokratis, memastikan setiap petani mendapat bagian air yang setara tanpa memandang kekayaan.',
  },
  {
    emoji: '🏔️',
    title: 'Gunung Agung',
    desc: 'Gunung berapi tertinggi di Bali (3.142m) yang dianggap suci oleh masyarakat Hindu Bali. Pura Besakih berdiri megah di kaki gunung ini. Letusan terakhir pada 2017-2019 mengingatkan dunia akan kekuatan alam.',
    trivia: '🌋 Trivia: Masyarakat Bali percaya Gunung Agung adalah replika dari Gunung Meru — gunung kosmis tempat bersemayamnya para dewa dalam kepercayaan Hindu.',
    pancasila: '🇮🇩 Sila ke-1: Ketuhanan — Penghormatan masyarakat Bali terhadap Gunung Agung mencerminkan keyakinan bahwa alam adalah ciptaan suci yang harus dijaga dan dihormati.',
  },
  {
    emoji: '🌊',
    title: 'Pantai Nusa Dua',
    desc: 'Kawasan pantai premium di ujung selatan Bali dengan pasir putih bersih, air kristal biru toska, dan area resort bertaraf internasional. Sering menjadi lokasi konferensi internasional dan pertemuan G20.',
    trivia: '🏖️ Trivia: Nusa Dua direncanakan khusus oleh pemerintah pada 1970-an sebagai enclave pariwisata untuk melindungi budaya Bali dari tekanan turisme massal.',
    pancasila: '🇮🇩 Sila ke-2: Kemanusiaan — Pengelolaan pariwisata yang bijak di Nusa Dua memastikan bahwa keindahan alam dapat dinikmati tanpa merusak kehidupan dan budaya masyarakat lokal.',
  },
  {
    emoji: '🌋',
    title: 'Danau Batur & Gunung Batur',
    desc: 'Kaldera vulkanik yang memukau di Kintamani dengan danau biru berbentuk bulan sabit. Gunung Batur (1.717m) masih aktif dan menjadi tujuan trekking matahari terbit paling populer di Bali.',
    trivia: '🌅 Trivia: Trekking ke puncak Gunung Batur dimulai pukul 3-4 pagi agar bisa menyaksikan matahari terbit spektakuler yang menerangi kawah dan danau di bawahnya.',
    pancasila: '🇮🇩 Sila ke-3: Persatuan — Komunitas lokal Kintamani yang menjaga kelestarian kawasan Gunung Batur bersama-sama membuktikan bahwa perlindungan alam adalah tanggung jawab kolektif.',
  },
  {
    emoji: '🐢',
    title: 'Taman Nasional Bali Barat',
    desc: 'Satu-satunya taman nasional di Bali yang merupakan habitat terakhir burung Jalak Bali (Leucopsar rothschildi) — burung endemik Bali yang hampir punah dan menjadi lambang provinsi.',
    trivia: '🦜 Trivia: Pada tahun 1990-an, populasi Jalak Bali liar tersisa kurang dari 15 ekor. Berkat program konservasi intensif, kini jumlahnya berangsur pulih melebihi 100 ekor.',
    pancasila: '🇮🇩 Sila ke-5: Keadilan Sosial — Pelestarian Jalak Bali memastikan bahwa generasi mendatang juga berhak menikmati kekayaan hayati nusantara — keadilan lintas generasi.',
  },
  {
    emoji: '🏝️',
    title: 'Nusa Penida',
    desc: 'Pulau karang spektakuler di tenggara Bali dengan tebing dramatis, pantai tersembunyi, dan snorkeling dengan manta ray raksasa. Kelingking Beach dengan semenanjung berbentuk kepala T-Rex menjadi ikon Instagram global.',
    trivia: '🦈 Trivia: Perairan Nusa Penida adalah salah satu dari sedikit tempat di dunia di mana Anda bisa berenang bersama Manta Ray raksasa (Manta birostris) secara alami.',
    pancasila: '🇮🇩 Sila ke-3: Persatuan — Nusa Penida yang dulu terpinggirkan kini menjadi destinasi global, membuktikan bahwa pembangunan inklusif bisa mengangkat seluruh wilayah bersama-sama.',
  },
  {
    emoji: '🌿',
    title: 'Hutan Monyet Ubud',
    desc: 'Kawasan hutan suci seluas 12,5 hektar di jantung Ubud yang dihuni lebih dari 700 ekor kera ekor panjang (Macaca fascicularis). Tiga pura kuno berdiri di tengah-tengah hutan ini sejak abad ke-14.',
    trivia: '🐒 Trivia: Monyet-monyet di hutan Ubud dipercaya sebagai penjaga pura. Mereka tidak ditakuti, melainkan dianggap sebagai penghuni spiritual yang hidup berdampingan dengan manusia.',
    pancasila: '🇮🇩 Sila ke-2: Kemanusiaan — Cara masyarakat Bali memperlakukan hewan dan alam sebagai bagian dari ekosistem kehidupan mencerminkan nilai kemanusiaan yang menjunjung martabat semua makhluk hidup.',
  },
  {
    emoji: '💧',
    title: 'Pura Tirta Empul',
    desc: 'Pura suci dengan kolam pemandian air suci (petirthaan) yang telah digunakan untuk ritual penyucian sejak abad ke-10. Air dari mata air alami mengalir melalui 30 pancuran yang masing-masing memiliki nama dan fungsi ritual berbeda.',
    trivia: '🕊️ Trivia: Air di Tirta Empul dipercaya memiliki khasiat penyembuhan. Bahkan pemimpin dunia dari berbagai negara pernah datang untuk merasakan ritual melukat (penyucian diri) di sini.',
    pancasila: '🇮🇩 Sila ke-1: Ketuhanan — Ribuan orang dari seluruh penjuru Bali dan dunia datang ke Tirta Empul untuk memperbaharui jiwa, membuktikan bahwa pencarian spiritualitas adalah kebutuhan universal manusia.',
  },
];

/* =========================================
   GAMELAN NOTES
   ========================================= */
const gamelanNotes = [
  { label: 'Ding', key: 'A', freq: 261.63 },  // C4 - Ding
  { label: 'Dong', key: 'S', freq: 293.66 },  // D4 - Dong
  { label: 'Deng', key: 'D', freq: 329.63 },  // E4 - Deng
  { label: 'Dung', key: 'F', freq: 349.23 },  // F4 - Dung
  { label: 'Dang', key: 'G', freq: 392.00 },  // G4 - Dang
  { label: 'Ding\'', key: 'H', freq: 440.00 }, // A4
  { label: 'Dong\'', key: 'J', freq: 493.88 }, // B4
  { label: 'Deng\'', key: 'K', freq: 523.25 }, // C5
];

const keyMap = {};
gamelanNotes.forEach((n, i) => { keyMap[n.key] = i; });

/* =========================================
   AUDIO CONTEXT
   ========================================= */
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

/**
 * Plays a metallic percussion sound resembling a gamelan key.
 * Uses two oscillators detuned slightly for that shimmery bronze quality.
 */
function playGamelanNote(freq, index) {
  const ctx = getAudioCtx();
  const now = ctx.currentTime;

  // Primary tone
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc1.type = 'triangle';
  osc2.type = 'sine';
  osc1.frequency.setValueAtTime(freq, now);
  osc2.frequency.setValueAtTime(freq * 2.756, now); // inharmonic partial for metallic feel

  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(freq * 1.5, now);
  filter.Q.setValueAtTime(3, now);

  gain.gain.setValueAtTime(0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

  osc1.connect(gain);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 2.5);
  osc2.stop(now + 2.5);

  // Animate bar
  animateBar(index);
}

function animateBar(index) {
  const bar = document.getElementById(`vbar${index}`);
  if (!bar) return;
  const height = 12 + Math.random() * 36;
  bar.style.height = height + 'px';
  bar.style.opacity = '1';
  setTimeout(() => {
    bar.style.height = '4px';
    bar.style.opacity = '0.4';
  }, 400);
}

/* =========================================
   DOM READY
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initWilayah();
  initBudayaCards();
  initAlamCards();
  initGamelan();
  initModal();
  initFilters();
});

/* =========================================
   NAVBAR
   ========================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
    });
  });

  // Active link on scroll
  function updateActiveLink() {
    const sections = ['beranda','tentang','wilayah','budaya','alam','gamelan'];
    let current = 'beranda';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }
}

/* =========================================
   SCROLL REVEAL
   ========================================= */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

/* =========================================
   WILAYAH
   ========================================= */
function initWilayah() {
  const items = document.querySelectorAll('.wilayah-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderWilayahDetail(item.dataset.wilayah);
    });
  });

  // Render initial
  renderWilayahDetail('denpasar');
}

function renderWilayahDetail(key) {
  const d = wilayahData[key];
  if (!d) return;

  document.getElementById('detailEmoji').textContent  = d.emoji;
  document.getElementById('detailName').textContent   = d.name;
  document.getElementById('detailType').textContent   = d.type;
  document.getElementById('detailDesc').textContent   = d.desc;
  document.getElementById('detailPancasila').innerHTML = d.pancasila;

  const factsEl = document.getElementById('detailFacts');
  factsEl.innerHTML = d.facts.map(([icon, text]) =>
    `<div class="dfact"><span>${icon}</span><span>${text}</span></div>`
  ).join('');

  // Animate card
  const card = document.getElementById('detailCard');
  card.style.opacity = '0';
  card.style.transform = 'translateX(12px)';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    card.style.opacity = '1';
    card.style.transform = 'none';
  });
}

/* =========================================
   BUDAYA CARDS
   ========================================= */
function initBudayaCards() {
  const grid = document.getElementById('budayaGrid');

  budayaData.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = item.category;
    card.dataset.index = i;
    card.setAttribute('data-reveal', '');
    card.innerHTML = `
      <div class="card-emoji">${item.emoji}</div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
      <span class="card-link">Selengkapnya →</span>
    `;
    card.addEventListener('click', () => openModal(item));
    grid.appendChild(card);
  });

  // Re-run reveal on newly added cards
  setTimeout(() => initScrollReveal(), 100);
}

/* =========================================
   ALAM CARDS
   ========================================= */
function initAlamCards() {
  const grid = document.getElementById('alamGrid');

  alamData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'alam-card';
    card.setAttribute('data-reveal', '');
    card.innerHTML = `
      <div class="card-emoji">${item.emoji}</div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
      <span class="card-link">Selengkapnya →</span>
    `;
    card.addEventListener('click', () => openModal(item));
    grid.appendChild(card);
  });

  setTimeout(() => initScrollReveal(), 100);
}

/* =========================================
   FILTER
   ========================================= */
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('#budayaGrid .card');

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}

/* =========================================
   MODAL
   ========================================= */
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(item) {
  document.getElementById('modalEmoji').textContent = item.emoji;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalDesc').textContent  = item.desc;
  document.getElementById('modalTrivia').textContent = item.trivia || '';
  document.getElementById('modalPancasila').textContent = item.pancasila || '';

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* =========================================
   GAMELAN
   ========================================= */
function initGamelan() {
  const keysContainer = document.getElementById('gamelanKeys');

  gamelanNotes.forEach((note, i) => {
    const keyEl = document.createElement('div');
    keyEl.className = 'gamelan-key';
    keyEl.id = `gkey-${i}`;
    keyEl.innerHTML = `
      <div class="key-body">${note.label}</div>
      <span class="key-label">Key ${note.key}</span>
    `;

    keyEl.addEventListener('mousedown', () => triggerKey(i, note.freq));
    keyEl.addEventListener('touchstart', (e) => {
      e.preventDefault();
      triggerKey(i, note.freq);
    }, { passive: false });

    keysContainer.appendChild(keyEl);
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (key in keyMap && !e.repeat) {
      triggerKey(keyMap[key], gamelanNotes[keyMap[key]].freq);
    }
  });
}

function triggerKey(index, freq) {
  playGamelanNote(freq, index);

  const keyEl = document.getElementById(`gkey-${index}`);
  if (!keyEl) return;
  keyEl.classList.add('active');
  setTimeout(() => keyEl.classList.remove('active'), 180);
}

/* =========================================
   PETA INTERAKTIF
   ========================================= */
function initPeta() {
  const buttons = document.querySelectorAll('.marker-btn');
  const frame   = document.getElementById('petaFrame');
  const label   = document.getElementById('petaLabel');

  const labelMap = {
    'Denpasar'       : '📍 Denpasar — Ibu Kota Provinsi Bali',
    'Kuta - Badung'  : '🏖️ Kuta, Badung — Pusat Pariwisata Internasional',
    'Ubud - Gianyar' : '🎨 Ubud, Gianyar — Pusat Seni & Budaya Bali',
    'Singaraja - Buleleng': '⚓ Singaraja, Buleleng — Gerbang Bali Utara',
    'Karangasem'     : '🌋 Karangasem — Negeri di Kaki Gunung Agung',
    'Tabanan'        : '🌾 Tabanan — Lumbung Padi & Warisan UNESCO',
    'Jembrana'       : '🌊 Jembrana — Gerbang Bali Barat',
    'Bangli'         : '🌿 Bangli — Paru-Paru Bali & Kaldera Batur',
    'Klungkung'      : '👑 Klungkung — Pusat Kerajaan Bali Kuno',
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const lat   = btn.dataset.lat;
      const lng   = btn.dataset.lng;
      const zoom  = btn.dataset.zoom || 13;
      const lbl   = btn.dataset.label;

      // Update iframe src
      frame.src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed&hl=id`;

      // Update label with fade
      label.style.opacity = '0';
      setTimeout(() => {
        label.textContent = labelMap[lbl] || `📍 ${lbl}`;
        label.style.opacity = '1';
      }, 300);
    });
  });

  // Smooth label transition
  if (label) {
    label.style.transition = 'opacity 0.3s ease';
  }
}

/* =========================================
   EDUKASI TABS
   ========================================= */
function initEduTabs() {
  const tabs   = document.querySelectorAll('.edu-tab');
  const panels = document.querySelectorAll('.edu-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t   => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(`tab-${tab.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* =========================================
   QUIZ
   ========================================= */
const quizData = [
  {
    q: 'Apa julukan resmi Pulau Bali yang dikenal di seluruh dunia?',
    opts: ['Pulau Seribu Pura', 'Pulau Dewata', 'Pulau Naga', 'Pulau Surga'],
    ans: 1,
  },
  {
    q: 'Sistem irigasi tradisional Bali yang diakui UNESCO sebagai Warisan Budaya Dunia adalah?',
    opts: ['Sistem Gotong Royong', 'Sistem Subak', 'Sistem Banjar', 'Sistem Tri Hita Karana'],
    ans: 1,
  },
  {
    q: 'Pura terbesar dan paling suci di Bali yang disebut "Ibu dari Segala Pura" adalah?',
    opts: ['Pura Tanah Lot', 'Pura Uluwatu', 'Pura Besakih', 'Pura Tirta Empul'],
    ans: 2,
  },
  {
    q: 'Gunung tertinggi di Bali sekaligus gunung suci yang dihormati masyarakat Hindu Bali adalah?',
    opts: ['Gunung Batur', 'Gunung Agung', 'Gunung Batukaru', 'Gunung Merbuk'],
    ans: 1,
  },
  {
    q: 'Tarian Bali yang dibawakan puluhan penari dengan suara "cak" ritmis menggambarkan kisah Ramayana adalah?',
    opts: ['Tari Barong', 'Tari Pendet', 'Tari Legong', 'Tari Kecak'],
    ans: 3,
  },
  {
    q: 'Upacara kremasi dalam tradisi Hindu Bali yang dirayakan penuh suka cita disebut?',
    opts: ['Ngaben', 'Melasti', 'Nyepi', 'Galungan'],
    ans: 0,
  },
  {
    q: 'Sawah terasering ikonik di Gianyar yang menjadi simbol pertanian Bali adalah?',
    opts: ['Sawah Jatiluwih', 'Sawah Tegalalang', 'Sawah Munduk', 'Sawah Kintamani'],
    ans: 1,
  },
  {
    q: 'Kabupaten di Bali yang TIDAK memiliki garis pantai adalah?',
    opts: ['Tabanan', 'Karangasem', 'Bangli', 'Jembrana'],
    ans: 2,
  },
  {
    q: 'Hari Raya Nyepi di Bali memperingati pergantian tahun dalam kalender?',
    opts: ['Kalender Masehi', 'Kalender Hijriyah', 'Kalender Saka Bali', 'Kalender Jawa'],
    ans: 2,
  },
  {
    q: 'Kesenian gamelan bambu khas Kabupaten Jembrana disebut?',
    opts: ['Jegog', 'Gender Wayang', 'Angklung Bali', 'Gong Kebyar'],
    ans: 0,
  },
];

let currentQ = 0;
let score    = 0;
let answered = false;

function initQuiz() {
  renderQuestion();
}

function renderQuestion() {
  const q       = quizData[currentQ];
  const total   = quizData.length;
  const pct     = ((currentQ) / total) * 100;

  document.getElementById('qNum').textContent      = currentQ + 1;
  document.getElementById('qTotal').textContent    = total;
  document.getElementById('qScore').textContent    = score;
  document.getElementById('qProgress').style.width = pct + '%';
  document.getElementById('quizQuestion').textContent = q.q;

  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  answered = false;

  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(i));
    optContainer.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q    = quizData[currentQ];
  const opts = document.querySelectorAll('.quiz-opt');

  opts.forEach(o => o.disabled = true);
  opts[q.ans].classList.add('correct');

  if (index === q.ans) {
    score++;
    document.getElementById('qScore').textContent = score;
  } else {
    opts[index].classList.add('wrong');
  }

  // Advance after delay
  setTimeout(() => {
    currentQ++;
    if (currentQ < quizData.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  document.getElementById('quizCard').classList.add('hidden');
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');

  const total = quizData.length;
  const pct   = Math.round((score / total) * 100);

  document.getElementById('qProgress').style.width = '100%';

  let emoji, title, desc;
  if (pct >= 90) {
    emoji = '🏆'; title = 'Luar Biasa!'; desc = 'Kamu adalah ahli Bali sejati! Pengetahuanmu tentang Pulau Dewata sangat mengesankan.';
  } else if (pct >= 70) {
    emoji = '⭐'; title = 'Bagus Sekali!'; desc = 'Pengetahuanmu tentang Bali sudah sangat baik. Sedikit lagi menjadi pakar!';
  } else if (pct >= 50) {
    emoji = '👍'; title = 'Cukup Baik!'; desc = 'Kamu sudah tahu banyak tentang Bali. Pelajari lagi untuk nilai sempurna!';
  } else {
    emoji = '📚'; title = 'Terus Belajar!'; desc = 'Masih banyak hal menarik tentang Bali yang bisa kamu pelajari. Coba lagi!';
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultDesc').textContent  = desc;
  document.getElementById('resultScore').textContent = `${score} / ${total} (${pct}%)`;
}

function restartQuiz() {
  currentQ = 0;
  score    = 0;
  document.getElementById('quizCard').classList.remove('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  renderQuestion();
}

// Expose globally for onclick
window.restartQuiz = restartQuiz;

/* =========================================
   KAMUS BAHASA BALI
   ========================================= */
const kamusData = [
  { bali: 'Om Swastiastu',   indo: 'Salam pembuka / Semoga dalam keadaan baik',       contoh: 'Diucapkan saat bertemu orang Bali' },
  { bali: 'Suksma',          indo: 'Terima kasih',                                    contoh: '"Suksma pisan" = Terima kasih banyak' },
  { bali: 'Rahajeng',        indo: 'Selamat / Baik-baik',                             contoh: '"Rahajeng semeng" = Selamat pagi' },
  { bali: 'Kija',            indo: 'Ke mana / Di mana',                               contoh: '"Kija lunga?" = Mau ke mana?' },
  { bali: 'Lunga',           indo: 'Pergi / Berangkat',                               contoh: '"Tiang lunga ke peken" = Saya pergi ke pasar' },
  { bali: 'Peken',           indo: 'Pasar',                                           contoh: 'Tempat jual beli tradisional' },
  { bali: 'Gumi',            indo: 'Bumi / Tanah / Dunia',                            contoh: '"Gumi Bali" = Tanah Bali' },
  { bali: 'Dewa',            indo: 'Dewa / Tuhan',                                    contoh: 'Dewa Siwa, Dewa Brahma, Dewa Wisnu' },
  { bali: 'Pura',            indo: 'Tempat ibadah Hindu Bali',                        contoh: 'Pura Besakih, Pura Uluwatu' },
  { bali: 'Tri Hita Karana', indo: 'Tiga penyebab kebahagiaan',                       contoh: 'Palemahan, Pawongan, Parahyangan' },
  { bali: 'Ngaturang',       indo: 'Mempersembahkan / Memberikan',                    contoh: '"Ngaturang canang" = Mempersembahkan canang' },
  { bali: 'Banjar',          indo: 'Komunitas adat setingkat RT/RW',                  contoh: 'Unit sosial terkecil di Bali' },
  { bali: 'Kaja',            indo: 'Arah gunung / Utara (sakral)',                    contoh: 'Lawan kata "kelod" (laut)' },
  { bali: 'Kelod',           indo: 'Arah laut / Selatan',                             contoh: 'Arah yang kurang sakral' },
  { bali: 'Canang',          indo: 'Sesajen / Persembahan harian',                    contoh: 'Terbuat dari anyaman daun kelapa & bunga' },
  { bali: 'Melukat',         indo: 'Ritual penyucian diri dengan air suci',           contoh: 'Dilakukan di Pura Tirta Empul' },
  { bali: 'Nyepi',           indo: 'Hari Raya Tahun Baru Saka (Hari Kesunyian)',      contoh: 'Bali tutup total 24 jam' },
  { bali: 'Galungan',        indo: 'Hari Raya kemenangan dharma atas adharma',        contoh: 'Ditandai dengan penjor bambu' },
  { bali: 'Penjor',          indo: 'Bambu melengkung dihias sebagai persembahan',     contoh: 'Dipasang di depan rumah saat Galungan' },
  { bali: 'Ogoh-ogoh',       indo: 'Patung raksasa dari bambu simbol roh jahat',      contoh: 'Diarak dan dibakar malam sebelum Nyepi' },
];

function initKamus() {
  renderKamus(kamusData);

  document.getElementById('kamusSearch').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = kamusData.filter(k =>
      k.bali.toLowerCase().includes(keyword) ||
      k.indo.toLowerCase().includes(keyword)
    );
    renderKamus(filtered);
  });
}

function renderKamus(data) {
  const grid = document.getElementById('kamusGrid');
  if (!data.length) {
    grid.innerHTML = '<p style="color:rgba(247,243,236,0.4); font-size:0.9rem;">Kata tidak ditemukan.</p>';
    return;
  }
  grid.innerHTML = data.map(k => `
    <div class="kamus-card">
      <div class="kamus-bali">${k.bali}</div>
      <div class="kamus-indo">${k.indo}</div>
      ${k.contoh ? `<div class="kamus-contoh">💡 ${k.contoh}</div>` : ''}
    </div>
  `).join('');
}

/* =========================================
   KALENDER UPACARA ADAT
   ========================================= */
const kalenderData = [
  { bulan: 'Jan', nama: 'Hari Raya Nyepi', desc: 'Tahun Baru Saka — hari kesunyian total selama 24 jam. Seluruh Bali berhenti: tidak ada aktivitas, lampu, suara, hingga penerbangan.', sila: '🇮🇩 Sila ke-1: Ketuhanan' },
  { bulan: 'Feb', nama: 'Saraswati', desc: 'Hari raya ilmu pengetahuan — memuja Dewi Saraswati pelindung ilmu. Lontar dan buku-buku disakralkan, pelajar tidak boleh membaca hari itu.', sila: '🇮🇩 Sila ke-2: Kemanusiaan' },
  { bulan: 'Mar', nama: 'Pagerwesi', desc: 'Empat hari setelah Saraswati — hari membentengi diri dari hal-hal buruk dan menguatkan iman kepada Tuhan.', sila: '🇮🇩 Sila ke-1: Ketuhanan' },
  { bulan: 'Apr', nama: 'Melasti', desc: 'Ritual penyucian arca dan pratima pura ke laut atau sumber air suci. Ribuan umat berpakaian putih berjalan bersama ke pantai dalam prosesi sakral.', sila: '🇮🇩 Sila ke-3: Persatuan' },
  { bulan: 'Mei', nama: 'Tumpek Uduh', desc: 'Upacara menghormati tumbuh-tumbuhan dan pepohonan. Mencerminkan keselarasan manusia Bali dengan alam sebagai bagian dari Tri Hita Karana.', sila: '🇮🇩 Sila ke-5: Keadilan Sosial' },
  { bulan: 'Jun', nama: 'Galungan', desc: 'Hari raya kemenangan kebaikan (dharma) atas kejahatan (adharma). Seluruh Bali dipenuhi penjor bambu melengkung dan suasana perayaan meriah.', sila: '🇮🇩 Sila ke-1: Ketuhanan' },
  { bulan: 'Jul', nama: 'Kuningan', desc: 'Sepuluh hari setelah Galungan — hari terakhir para leluhur berkunjung ke bumi. Ditandai dengan sesajen kuning dan upacara pelepasan.', sila: '🇮🇩 Sila ke-2: Kemanusiaan' },
  { bulan: 'Agt', nama: 'Tumpek Landep', desc: 'Upacara memuja Dewa Pasupati untuk perlengkapan berbahan besi dan logam, termasuk kini juga kendaraan dan komputer.', sila: '🇮🇩 Sila ke-4: Kerakyatan' },
  { bulan: 'Sep', nama: 'Piodalan Pura', desc: 'Hari ulang tahun (odalan) setiap pura yang dirayakan setiap 210 hari (6 bulan Bali). Setiap desa memiliki jadwal piodalan yang berbeda.', sila: '🇮🇩 Sila ke-3: Persatuan' },
  { bulan: 'Okt', nama: 'Tumpek Wayang', desc: 'Hari suci wayang — menghormati seni pewayangan sebagai medium spiritual yang mengandung ajaran moral dan filsafat Hindu Bali.', sila: '🇮🇩 Sila ke-1: Ketuhanan' },
  { bulan: 'Nov', nama: 'Hari Raya Siwaratri', desc: 'Malam perenungan dan pemujaan Dewa Siwa — umat berjaga semalam suntuk, berpuasa, dan melakukan meditasi sebagai penyucian dosa.', sila: '🇮🇩 Sila ke-1: Ketuhanan' },
  { bulan: 'Des', nama: 'Ngaben Massal', desc: 'Kremasi massal yang dilakukan bersama-sama oleh satu desa atau banjar untuk meringankan biaya. Contoh nyata gotong royong budaya Bali.', sila: '🇮🇩 Sila ke-3: Persatuan' },
];

function initKalender() {
  const grid = document.getElementById('kalenderGrid');
  grid.innerHTML = kalenderData.map(k => `
    <div class="kalender-card">
      <div class="kalender-bulan">${k.bulan}</div>
      <div>
        <div class="kalender-nama">${k.nama}</div>
        <div class="kalender-desc">${k.desc}</div>
        <div class="kalender-sila">${k.sila}</div>
      </div>
    </div>
  `).join('');
}

/* =========================================
   INIT ALL NEW FEATURES
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  initPeta();
  initEduTabs();
  initQuiz();
  initKamus();
  initKalender();
});
