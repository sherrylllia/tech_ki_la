// ── DATA ──
const articles = [
  {
    category: '未來趨勢',
    catClass: 'cat-future',
    catLabel: '未來趨勢',
    title: 'IBM的相容系統策略，如何使得 Wintel 成為PC時代的辦公室標準？',
    excerpt: '從軍用大型主機到你桌上的電腦，這段歷史比你想的更戲劇化——IBM一手搭建了現代辦公室，卻親手把王座拱手相讓。',
    author: '全組',
    date: '2026.04',
    read: '15 分鐘',
    tabs: [
      {
        label: '引言',
        body: `
          <p>你是否有這樣的經驗？</p>
          <p>每年開學季，除了文具，連電腦都在開學促銷，現在是人手一台電腦、無紙化暢行的時代；疫情期間更是如此，學生買新電腦上網課，老師買新電腦教課，電腦賣得比平常更多，一度成為當時的熱賣商品。</p>
          <p>而在選購電腦之前，你是否有這樣的經驗？當你打開論壇，查詢要買哪個型號、品牌的電腦，看到分成兩派的人在爭論誰比較優、誰比較值得買，每個人從不同的角度，各自擁護自己的陣營，也會有人用功能做區分：製圖、剪片的用Mac，寫程式、跑統計用Windows⋯⋯</p>
          <p>買了之後，你是否有這樣的經驗？同事或同學透過電子郵件、通訊軟體，傳來要修改的專案、報告，你點開那個結尾是 .ppt 或 .word 的檔案，就算不同人，不同時，可以透過同一個軟體，看到、編輯同一份檔案。</p>
          <p>而你曾想過這一切的起源嗎？</p>
          <p>《Tech 起啦》將會透過三則報導，從歷史、生活、社會等層面，結合 Deep Blue 之父許峰雄博士及多位不同年齡層的使用者的訪談，探討 PC 時代的演進及影響。</p>
        `
      },
      {
        label: '科技過去不是這樣想的那樣',
        body: `
          <div class="article-video">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/請替換成你的影片ID" frameborder="0" allowfullscreen></iframe>
          </div>
          <p>在今日，當我們談論「電腦（Computer）」時，腦中浮現的是輕薄的筆電或手機。但在 80 年前，如果你在 NASA 喊一聲：「Computer，過來一下！」走過來的會是一位拿著鉛筆與計算表的女性。</p>
          <p>這是一段關於權力、速度與「意外」的歷史。我們將帶領讀者看穿科技發展的迷霧：看藍色巨人 IBM 如何靠著一場豪賭定義了辦公室，卻又如何在那場名為「開放」的遊戲中，親手交出了王座。</p>
          <h3 class="article-h3">壹、鋼鐵巨獸的誕生：從戰場到機房</h3>
          <p>在 1940 年代，運算力是國防機密。為了算出精準的彈道數據，美國軍方資助研發 ENIAC。這台佔地 50 坪、重達 30 噸的怪物，原本是為了二戰而生，卻因完工太晚，轉身成了冷戰時期模擬氫彈數據的戰略工具。</p>
          <p>然而，這股暴力的運算力並未在實驗室止步。1950 年代，UNIVAC I 成功預測美國大選，震撼商界。企業老闆們驚覺：如果電腦能算核武，那算薪資、保險單肯定也是小菜一碟。這時，辦公設備的霸主 IBM 登場了。</p>
          <div class="article-quote">「沒人會因為買了 IBM 的產品而被開除。」</div>
          <p>為什麼企業敢把身家性命交給 IBM？這得回溯到 1930 年代的打孔機與 1960 年代的 Selectric 打字機。IBM 代表的是穩定、高品質與專業。1964 年，IBM 砸下 50 億美金（比曼哈頓計畫還貴！）推出 System/360，首創「電腦家族」概念，讓企業買電腦不再是「一次性賭博」，而是一項可持續升級的長期資產。</p>
          <h3 class="article-h3">貳、實驗室的遺珠與車庫的星火</h3>
          <p>當 IBM 統治著冷氣房裡的大型主機時，矽谷的另一頭正悶燒著革命。1973 年，施樂（Xerox）研發出了 Xerox Alto，它擁有超前的圖形介面（GUI）與滑鼠。遺憾的是，施樂高層並未意識到這項發明的商業價值，大方地讓賈伯斯與微軟「參考」了這項發明。</p>
          <h3 class="article-h3">參、1981：一場名為「開放」的豪賭</h3>
          <p>到了 1980 年代，Apple II 的走紅讓 IBM 感到威脅。為了搶時間，IBM 決定不再「全部自己做」，啟動了快速外包的「象棋計畫」。1981 年，IBM PC（型號 5150）橫空出世。為了建立生態系，IBM 做了一個大膽到近乎瘋狂的決定：開放架構。</p>
          <div class="article-quote">「IBM 其實是被逼著推出開放系統，因為當初決定用經銷商來賣，為了快，只好捨棄自己的晶片。」<br><span style="font-size:0.85rem;opacity:0.7">—— 許峰雄博士於《Tech 起啦》訪談</span></div>
          <p>為什麼大家非買 IBM PC 不可？答案是 Killer App。在辦公室，如果你想生存，你就得跑動 Lotus 1-2-3 試算表軟體，讓電腦從「遊戲機」正式轉型為「辦公室標準」。</p>
          <h3 class="article-h3">肆、逆襲與權力移轉：Wintel 的加冕</h3>
          <div class="article-infobox">
            <div class="infobox-title">📦 知識小百科</div>
            <p><strong>BIOS</strong>（Basic Input/Output System）：電腦啟動時跑的第一個程式，是硬體與作業系統之間的「翻譯官」。IBM 的 BIOS 是唯一自行編寫的核心，也是防止他人抄襲的技術門檻。</p>
            <p style="margin-top:0.75rem"><strong>逆向工程（Reverse Engineering）</strong>：在沒有設計圖的情況下，透過觀察產品運作方式，反向推導其構造。Compaq 採取「潔淨室」策略，重新編寫功能完全相同但代碼原創的 BIOS，在法律上打破了 IBM 的技術壟斷。</p>
          </div>
          <p>既然規格是公開的，其他廠商開始逆向工程，相容機大量出現。IBM 驚訝地發現：品牌不再是重點，重點是那台機器能不能跑 Windows。到了 1989 年，微軟已主導了軟體市場。IBM 鋪好了通往現代辦公室的高速公路，卻沒想到微軟（Windows）與 Intel（晶片）變成了路上的收費站。這對 Wintel 聯盟統治了接下來三十年的桌面。IBM 則在 2004 年將 PC 部門賣給聯想，優雅地轉身回歸雲端與服務。</p>
          <p>科技不是我們所想的那樣。它有時是軍事競賽的產物，有時是法律漏洞的奇蹟。而我們，正站在這群巨人留下的廢墟與豐碑之上，敲擊著屬於 2026 年的鍵盤。</p>
        `
      },
      {
        label: '科技如何進入生活？',
        body: `
          <h3 class="article-h3">▌PC 改變了什麼？又帶走了什麼？</h3>
          <div class="article-table-wrap">
            <table class="article-table">
              <thead>
                <tr><th>科技工具</th><th>過去</th><th>現在</th></tr>
              </thead>
              <tbody>
                <tr><td>進入門檻</td><td>技術、價錢高</td><td>技術、價錢低</td></tr>
                <tr><td>生活角色</td><td>工具</td><td>必需品</td></tr>
                <tr><td>生態系統</td><td>封閉單一</td><td>豐富多元</td></tr>
                <tr><td>變動速度</td><td>線性成長</td><td>指數形成長</td></tr>
              </tbody>
            </table>
            <p class="table-caption">▲科技工具在過去和現在從進入門檻、生活角色、生態系統和變動速度的變化比較</p>
          </div>
          <p>從大型電腦到 PC 的出現，科技不只是變得更小、更方便，其實也慢慢改變了我們和科技的關係。以前，電腦價格高、操作複雜，大多只出現在公司或學校，被當成一種專門的計算工具，離日常生活其實有點距離。</p>
          <p>但 PC 普及之後，電腦開始進入每個人的生活。我們不只是「會用」，而是幾乎離不開它，科技從一個可以選擇的工具，變成一種理所當然的存在。</p>
          <h3 class="article-h3">▌你以為你選擇了 PC，其實是 PC 選擇了你</h3>
          <p>為了調查大眾選擇品牌時的考量，我們分別找了長輩與年輕人兩組代表，探討選擇品牌的偏好，而我們發現——多數人的選擇，來自於對主流社會的順應。</p>
          <div class="article-quote">「當時的第一台電腦是 MAC 公司機」<br>「當時為了寫作業、打報告，只好買一台文書型電腦」<br>「系統相容性高，學校所需程式都支援 Windows 系統」</div>
          <p>當客戶使用的軟體是 Excel、老闆需要看 PPT、學校作業只和 Windows 相容，我們便不得不追隨主流的腳步。顯示多數消費者比起考慮規格、效能，更看重系統與周遭環境的相容性——所以是我們選擇品牌，還是品牌注定走向我們？</p>
          <div class="article-quote">「那個時代大家都這樣自己組」<br>「CJSCOPE 可客制化，可以依照自己的需求調整硬體配備」</div>
          <h3 class="article-h3">▌是人類馴服科技，還是科技馴服人類？</h3>
          <p>或許很難說，到底是人類在使用科技，還是科技正在慢慢改變我們。從小學用平台交作業，到長輩為了跟上社會學習數位工具，科技早就不只是選擇，而變成一種「不會就不行」的條件。</p>
          <p>我們把鬧鐘、地圖、相機，甚至健康與日記都交給手機，也慢慢不再記路、不再記時間。當導航出錯或 AI 判斷失準時，我們往往先懷疑系統，而不是自己。好像在不知不覺中，我們不只外包了能力，也交出了一部分的判斷。</p>
          <p>當科技讓一切變得理所當然，我們還會思考，有沒有其他可能性嗎？</p>
        `
      },
      {
        label: '科技與社會',
        body: `
          <h3 class="article-h3">▌開放 vs 封閉系統比較</h3>
          <div class="article-table-wrap">
            <table class="article-table">
              <thead>
                <tr><th>比較層面</th><th>開放系統（IBM / Wintel）</th><th>封閉系統（Apple Macintosh）</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>技術選擇</td>
                  <td>模組化與標準化；硬體零件可跨品牌替換，軟硬體分離，強調相容性。</td>
                  <td>垂直整合；軟硬體高度優化，追求更好的使用者體驗與硬體效能。</td>
                </tr>
                <tr>
                  <td>商業模式</td>
                  <td>規模經濟；微軟賣作業系統授權，Intel 賣晶片。IBM 雖啟動此模式，卻失去控制權。</td>
                  <td>利潤導向；透過銷售高毛利的硬體設備獲利，並希望建立護城河。</td>
                </tr>
                <tr>
                  <td>消費市場</td>
                  <td>多樣性與價格競爭；提供從廉價到高階的各種選擇，能快速擴大市佔。</td>
                  <td>品牌忠誠；針對高階商務與追求個人設計的特定客群。</td>
                </tr>
              </tbody>
            </table>
            <p class="table-caption">▲開放系統與封閉系統在技術選擇、商業模式、消費市場上的差異比較</p>
          </div>
          <h3 class="article-h3">▌開放與封閉的結果</h3>
          <p>這場技術路線的競爭，不僅僅影響了產業格局。IBM 的開放系統透過相容架構吸引大量廠商參與，使個人電腦得以快速迭代、降低成本並擴大市場。在 Microsoft 與 Intel 的配合下，Wintel 成為主流標準，電腦迅速進入辦公室與日常生活。</p>
          <p>相較之下，採取封閉策略的 Apple，雖未在個人電腦市場初期取得主導地位，卻透過高度整合的生態系與穩定體驗，建立強烈品牌認同。歷史也為現代科技平台提供啟示：核心技術才是關鍵——IBM 雖擁有 PC 品牌，但核心價值被微軟與 Intel 掌握。</p>
          <div class="article-quote">「現在來講 PC 已經沒有很大了，過去影響的大，但現在重要的技術都不是在 PC。現在的科技影響都是擺在 AI 上面。」<br><span style="font-size:0.85rem;opacity:0.7">—— 許峰雄博士</span></div>
          <h3 class="article-h3">▌今天與未來</h3>
          <p>開放與封閉的競爭仍持續重演：Android 與 iOS、AI 的開源與封閉模型之爭。Android 以開放架構取得較高市佔，iOS 則以封閉生態創造高利潤；AI 領域中，封閉模型門檻低但成本高，開源模型則相反。</p>
          <p>至於未來趨勢，可能走向混合模式。為提升 AI 效能，原本開放的企業也開始自研晶片（如 Google、Amazon）；同時，雲端運算也降低使用者對單一系統的依賴。</p>
          <div class="article-quote">「開放系統和封閉系統有不同的問題。iOS 想要解決所有問題，這限制了 Apple 的市場大小。但 iPhone 拿了很高的 profit。所以看公司怎麼做，好壞很難講，as a consumer 喜歡開放系統，但不是所有的 consumer 都喜歡。」<br><span style="font-size:0.85rem;opacity:0.7">—— 許峰雄博士</span></div>
          <h3 class="article-h3">結論</h3>
          <p>也許沒有絕對的對立。縱觀整個相容系統的發展歷史，一開始的封閉和後來選擇的開放，似乎是整個產業、科技發展在推動。從 IBM 的角度來看，如許博士所說，開放是必不得已的決定，不是為了與同業作對，而是在這個快速發展的世界裡，想取得先機。</p>
          <p>回望這段歷史，「獲勝」的關鍵並不是選擇哪一個陣營。就好像歷史學中的「分久必合，合久必分」，科技發展在過去和未來並沒有太大的區別，一切都還是會重演，未來可能會變成開放和封閉互相合作的局面。</p>
        `
      }
    ]
  }
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

  document.getElementById('modalCategory').innerHTML =
    `<span class="card-category ${a.catClass}">${a.catLabel}</span>`;
  document.getElementById('modalTitle').textContent = a.title;

  if (a.tabs) {
    document.getElementById('modalMeta').innerHTML = `
      <div class="modal-meta-row">
        <span>✍️ ${a.author}</span><span>📅 ${a.date}</span><span>⏱ 閱讀約 ${a.read}</span>
      </div>
    `;
    document.getElementById('modalBody').innerHTML =
      `<div class="article-tabs">
        ${a.tabs.map((t, i) => `<button class="tab-btn" onclick="jumpToSection(${i})">${t.label}</button>`).join('')}
      </div>` +
      a.tabs.map((t, i) => `
        <div id="article-section-${i}" class="article-section">
          <h2 class="article-section-title">${t.label}</h2>
          ${t.body}
        </div>
        ${i < a.tabs.length - 1 ? '<hr class="article-divider">' : ''}
      `).join('');
  } else {
    document.getElementById('modalMeta').innerHTML =
      `<div class="modal-meta-row"><span>✍️ ${a.author}</span><span>📅 ${a.date}</span><span>⏱ 閱讀約 ${a.read}</span></div>`;
    document.getElementById('modalBody').innerHTML = `<div class="article-section">${a.body}</div>`;
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.jumpToSection = function(i) {
  const target = document.getElementById(`article-section-${i}`);
  const scrollEl = document.querySelector('.modal-scroll');
  if (target && scrollEl) {
    scrollEl.scrollTo({ top: target.offsetTop - 270, behavior: 'smooth' });
  }
};

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
