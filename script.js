// ── DATA ──
const articles = [
  // {
  //   category: 'AI',
  //   catClass: 'cat-ai',
  //   catLabel: '人工智慧',
  //   title: '你的手機比你更了解你？聊聊 AI 推薦演算法',
  //   excerpt: '為什麼 YouTube 總是能推你想看的影片？背後那個「猜心術」，其實是一套有趣的數學邏輯。',
  //   author: '小明',
  //   date: '2025.05',
  //   read: '5 分鐘',
  //   body: '<p>你有沒有這種經驗：只是在 YouTube 上看了一部貓咪影片，結果接下來三小時全在看貓？這不是巧合，而是「推薦演算法」在背後悄悄發揮作用。</p><p>簡單來說，推薦演算法就是一個「猜你喜歡」的程式。它會記錄你看過什麼、停留了多久、有沒有按讚，然後把這些資料和「跟你類似的人」的行為做比對，找出你最可能喜歡的內容推給你。</p><p>這聽起來很聰明，但也有讓人擔心的地方。當演算法只推你「喜歡的」，你可能就很難接觸到不同觀點，形成所謂的「同溫層」。所以，偶爾手動搜尋一下你平常不太看的主題，對自己也是一種訓練喔！</p>'
  // },
  {
    category: '生活科技',
    catClass: 'cat-life',
    catLabel: '生活科技',
    title: 'QR Code 是怎麼運作的？一格格黑白方塊的秘密',
    excerpt: '掃一下就跳出網址，那些密密麻麻的黑白方塊到底在說什麼？其實你已經看懂一半了！',
    author: '阿好',
    date: '2025.05',
    read: '4 分鐘',
    body: '<p>QR Code 看起來像是亂碼，但它其實是一種「視覺化的文字」。每一個黑色方塊代表一個 1，白色方塊代表一個 0，合在一起就能組成任何資訊，比如網址、電話號碼，或者超商的結帳資料。</p><p>它的設計非常聰明：即使有部分被污損或遮住，QR Code 還是能被正確讀取，因為它內建了「備份資訊」。這個特性叫做「錯誤更正」，是工程師刻意設計進去的保險機制。</p><p>下次掃 QR Code 的時候，不妨想想：你手機的相機在零點幾秒內完成了多少運算，才讓你順利跳轉到那個頁面。</p>'
  },
  // {
  //   category: '未來趨勢',
  //   catClass: 'cat-future',
  //   catLabel: '未來趨勢',
  //   title: '電動車只是開頭，下一步是「會思考的車」',
  //   excerpt: '自動駕駛距離我們還有多遠？從輔助駕駛到完全自駕，這條路比你想的更有趣也更複雜。',
  //   author: '小明',
  //   date: '2025.04',
  //   read: '6 分鐘',
  //   body: '<p>特斯拉、BYD……電動車已經越來越常見。但你知道嗎？車子「會開車」這件事，才是真正改變世界的技術。</p><p>自動駕駛目前被分成五個等級，從「輔助駕駛」（像是車道維持）到「完全自動」（司機可以在車上睡覺）。目前市面上大多數車子只在等級二，離真正的自動駕駛還有一段距離。</p><p>最大的挑戰不是技術，而是「邊緣案例」——那些很罕見但很危險的情況，比如突然衝出來的小朋友、或者不按牌理出牌的摩托車。讓 AI 學會處理這些，才是工程師最頭痛的問題。</p>'
  // },
  // {
  //   category: '數據',
  //   catClass: 'cat-data',
  //   catLabel: '數據',
  //   title: '大數據不大，小資料才嚇人',
  //   excerpt: '每天你製造了多少數據？從早上解鎖手機開始，你的每一個動作都在悄悄被記錄。',
  //   author: '阿好',
  //   date: '2025.04',
  //   read: '5 分鐘',
  //   body: '<p>「大數據」這個詞聽起來很遙遠，好像只有大公司才需要管。但其實，你每天都在產生數據——解鎖手機的時間、走了幾步、點了什麼外送，這些加起來就是屬於你的「小數據」。</p><p>這些數據被收集、分析之後，可以用來改善服務，比如外送平台預測你今晚會點什麼。但也引發了隱私問題：你知道你的數據被拿去做什麼了嗎？</p><p>了解自己的數據足跡，是數位時代的基本素養。不需要成為工程師，只需要知道「設定 → 隱私」在哪裡就夠了。</p>'
  // },
  // {
  //   category: '裝置',
  //   catClass: 'cat-device',
  //   catLabel: '裝置',
  //   title: '耳機降噪是怎麼辦到的？用「聲音消滅聲音」',
  //   excerpt: '戴上耳機，世界瞬間安靜。這個神奇的魔法叫做主動降噪，原理比你想的還要直覺。',
  //   author: '志偉',
  //   date: '2025.03',
  //   read: '4 分鐘',
  //   body: '<p>主動降噪耳機（ANC）的原理，說穿了就是「用聲音對抗聲音」。耳機裡有個小麥克風，會偵測外面的噪音，然後立刻產生一個「反向」的聲波，兩個聲波相遇之後就互相抵消，讓你聽不到外面的聲音。</p><p>這個技術叫做「反相消除」，物理課有學過——兩個波形相同但方向相反的聲波，加在一起就等於零。</p><p>當然，這個過程需要在毫秒之內完成，所以耳機裡其實有一顆小小的處理器在快速運算。下次戴上 ANC 耳機的時候，你其實是在享受一場即時的物理實驗。</p>'
  // },
  // {
  //   category: 'AI',
  //   catClass: 'cat-ai',
  //   catLabel: '人工智慧',
  //   title: 'ChatGPT 答錯了？聊聊 AI 的「幻覺」問題',
  //   excerpt: 'AI 有時候會一本正經地說謊。這不是它故意的，而是它的運作方式決定的——讓我們來弄清楚為什麼。',
  //   author: '志偉',
  //   date: '2025.03',
  //   read: '5 分鐘',
  //   body: '<p>你可能聽說過 ChatGPT 「一本正經地胡說八道」。這個現象有個專有名詞叫做「幻覺」（Hallucination），指的是 AI 產生了看起來合理、但實際上是錯的內容。</p><p>為什麼會這樣？因為 AI 語言模型的本質，是「預測下一個字最可能是什麼」。它不是在查資料，而是在根據訓練資料猜測「這個句子接下來應該怎麼說」。所以當它不確定的時候，它不會說「我不知道」，而是繼續猜——有時猜錯了，還猜得很有自信。</p><p>所以使用 AI 的正確心態是：把它當成一個很快很博學的助手，但重要的事情還是要自己查清楚。</p>'
  // }
];

const team = [
  { name: '章安澈', role: '主編', initial: '安' },
  { name: '楊雯茹', role: '敘事．資訊編輯', initial: '雯' },
  { name: '劉佳琪', role: '敘事．資訊編輯', initial: '佳' },
  { name: '中井穗月', role: '視覺．AI', initial: '穗' },
  { name: '梁軒綾', role: '視覺．AI．網站', initial: '軒' },
];

// ── STATE ──
let currentTag = '全部';
let searchQuery = '';
let currentArticleIndex = null;

// ── RENDER ──
function renderArticles() {
  const grid = document.getElementById('articlesGrid');
  let filtered = articles.filter(a => {
    const matchTag = currentTag === '全部' || a.category === currentTag;
    const matchSearch = a.title.includes(searchQuery) || a.excerpt.includes(searchQuery) || a.catLabel.includes(searchQuery);
    return matchTag && matchSearch;
  });

  document.getElementById('article-count').textContent = filtered.length + ' 篇';

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="emoji">🔍</div><p>找不到「${searchQuery}」相關的文章</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((a, i) => `
    <div class="article-card fade-in" style="animation-delay:${i * 0.07}s" onclick="openModal(${articles.indexOf(a)})">
      <span class="card-category ${a.catClass}">${a.catLabel}</span>
      <div class="card-title">${a.title}</div>
      <div class="card-excerpt">${a.excerpt}</div>
      <div class="card-footer">
        <span class="card-author">${a.author}</span>
        <span class="card-read">⏱ ${a.read}</span>
      </div>
    </div>
  `).join('');
}

function renderTeam() {
  document.getElementById('teamGrid').innerHTML = team.map(m => `
    <div class="team-card">
      <div class="team-avatar">${m.initial}</div>
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.role}</div>
    </div>
  `).join('');
}

// ── FILTERS ──
function filterCategory(cat, btn) {
  currentTag = cat === 'all' ? '全部' : cat;
  renderArticles();
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tag-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.includes(currentTag) || (currentTag === '全部' && b.textContent === '全部'));
  });
}

function filterTag(tag, btn) {
  currentTag = tag;
  renderArticles();
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function handleSearch() {
  searchQuery = document.getElementById('searchInput').value.trim();
  renderArticles();
}

// ── MODAL ──
function openModal(index) {
  const a = articles[index];
  currentArticleIndex = index;
  document.getElementById('modalCategory').innerHTML = `<span class="card-category ${a.catClass}">${a.catLabel}</span>`;
  document.getElementById('modalTitle').textContent = a.title;
  document.getElementById('modalMeta').innerHTML = `<span>✍️ ${a.author}</span><span>📅 ${a.date}</span><span>⏱ 閱讀約 ${a.read}</span>`;
  document.getElementById('modalBody').innerHTML = a.body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ── SCROLL ──
function scrollToAbout() {
  document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── KEYBOARD ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── INIT ──
renderArticles();
renderTeam();
