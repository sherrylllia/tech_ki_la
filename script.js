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
          <div class="article-infobox">
            <div class="infobox-title">🎙️ 本篇文章受訪專家小百科</div>
            <div style="display:flex; gap:1rem; align-items:flex-start; margin-top:0.5rem">
              <img src="CB.jpg" style="width:80px; height:80px; border-radius:50%; object-fit:cover; flex-shrink:0;">
              <div>
                <p><strong>許峰雄博士</strong>，綽號：Crazy Bird, CB。台裔美國人，電腦科學家。</p>
                <p style="margin-top:0.5rem">許博士開發超級電腦深思，首次擊敗西洋棋大師本特．拉爾森。他也是深藍（Deep Blue）的創造者及主要設計者，於 1997 年 5 月 11 日擊敗西洋棋王卡斯帕羅夫。</p>
              </div>
            </div>
          </div>
        `
      },
      {
        label: '科技過去不是這樣的',
        body: `
          <div class="article-video">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/6FoWxyJfF2I" frameborder="0" allowfullscreen></iframe>
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
          <div class="article-quote">「PC 時代已過，AI才是現在的重心。PC在過去曾經是最重要的科技平台，影響力很大。但現在 PC 已經不再是主角了，真正重要的技術創新都不在這裡發生。現在整個科技界的目光和資源，都集中在 AI 上面——AI 才是這個時代最關鍵的技術浪潮。」<br><span style="font-size:0.85rem;opacity:0.7">—— 許峰雄博士</span></div>
          <h3 class="article-h3">▌今天與未來</h3>
          <p>開放與封閉的競爭仍持續重演：Android 與 iOS、AI 的開源與封閉模型之爭。Android 以開放架構取得較高市佔，iOS 則以封閉生態創造高利潤；AI 領域中，封閉模型門檻低但成本高，開源模型則相反。</p>
          <p>至於未來趨勢，可能走向混合模式。為提升 AI 效能，原本開放的企業也開始自研晶片（如 Google、Amazon）；同時，雲端運算也降低使用者對單一系統的依賴。</p>
          <div class="article-quote">「開放 vs 封閉系統各有取捨。Apple（iOS）走的是封閉系統路線，想要把所有體驗都掌控在自己手裡。這樣做的代價是市場規模受限——不是所有人都買單。但好處是利潤極高。所以這沒有標準答案：從商業角度來看，Apple 的策略很成功；但從消費者角度來看，開放系統（如 Android）給了更多自由，雖然不是每個人都在乎這件事。」<br><span style="font-size:0.85rem;opacity:0.7">—— 許峰雄博士</span></div>
        `
      },
      {
        label: '結論',
        body: `
          <p>也許沒有絕對的對立。縱觀整個相容系統的發展歷史，一開始的封閉和後來選擇的開放，似乎是整個產業、科技發展在推動。從 IBM 的角度來看，如許博士所說，開放是必不得已的決定，不是為了與同業作對，而是在這個快速發展的世界裡，想取得先機。</p>
          <p>回望這段歷史，「獲勝」的關鍵並不是選擇哪一個陣營。就好像歷史學中的「分久必合，合久必分」，科技發展在過去和未來並沒有太大的區別，一切都還是會重演，未來可能會變成開放和封閉互相合作的局面。</p>
          <h3 class="article-h3">附錄一：AI 工具使用說明</h3>
          <div class="article-table-wrap">
            <table class="article-table">
              <thead>
                <tr><th>項目</th><th>用途</th><th>AI 工具</th></tr>
              </thead>
              <tbody>
                <tr><td>報導企劃</td><td>調整架構</td><td>ChatGPT</td></tr>
                <tr><td style="border-bottom:none">文字報導</td><td>整理資料</td><td>ChatGPT / Gemini</td></tr>
                <tr><td style="border-top:none; border-bottom"></td><td>潤飾文字</td><td>ChatGPT</td></tr>
                <tr><td style="border-bottom:none">影音報導</td><td>調整講稿架構</td><td>Claude AI</td></tr>
                <tr><td style="border-top:none; border-bottom"></td><td>生成圖片</td><td>ChatGPT</td></tr>
                <tr><td>網站</td><td>生成架構</td><td>Claude Code</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="article-h3">附錄二：參考資料</h3>
          <div style="display:flex; flex-direction:column; gap:0.75rem; margin-top:1rem;">

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">人類計算員歷史</div>
              <a href="https://www.nasa.gov/centers-and-facilities/jpl/when-computers-were-human/" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none;">When Computers Were Human</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">ENIAC 與彈道分析</div>
              <a href="https://ahf.nuclearmuseum.org/ahf/history/computing-and-manhattan-project/" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">Computing and the Manhattan Project</a>
              <a href="https://ahf.nuclearmuseum.org/ahf/history/manhattan-project/" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">The Manhattan Project</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">IBM 打孔機</div>
              <a href="https://www.ibm.com/history/social-security-act" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none;">The birth of Social Security</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">IBM 打字機</div>
              <a href="https://www.ibm.com/history/selectric" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">The IBM Selectric</a>
              <a href="https://www.ibm.com/history/system-360" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">The IBM System/360</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">IBM PC</div>
              <a href="https://www.ibm.com/history/personal-computer" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">IBM PC</a>
              <a href="https://archive.org/details/bitsavers_ibmpcpc602renceAug81_17295874" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">IBM PC 技術參考手冊（1981 年 8 月版）</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">Compaq 逆向工程</div>
              <a href="https://www.amazon.com/Open-Compaq-Domination-Helped-Computing-ebook/dp/B00DTEZ56I" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">Compaq 創辦人回憶錄</a>
              <a href="https://www.ntari.org/post/how-clean-room-reverse-engineering-built-the-modern-tech-industry" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">How Clean Room Reverse Engineering Built the Modern Tech Industry</a>
              <a href="https://www.pcmag.com/encyclopedia/term/clean-room-technique" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">Clean room technique</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">Altair 8800</div>
              <a href="https://americanhistory.si.edu/collections/object/nmah_334396" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">Altair 8800</a>
              <a href="https://www.worldradiohistory.com/Archive-Poptronics/70s/1975/Poptronics-1975-01.pdf" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">《大眾電子》雜誌對於這個 DIY 套件的報導</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">Xerox PARC</div>
              <a href="https://www.computerhistory.org/revolution/input-output/14/348" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">Xerox PARC</a>
              <a href="https://medium.com/%E5%AD%B8%E8%A1%93%E8%AA%AA%E6%9B%B8%E4%BA%BA/%E5%85%A8%E9%8C%84-parc-%E8%A6%96%E7%AA%97-%E6%BB%91%E9%BC%A0-%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-%E8%83%8C%E5%BE%8C%E7%9A%84%E8%8B%B1%E9%9B%84%E4%BA%BA%E7%89%A9%E8%AA%95%E7%94%9F%E5%9C%B0-5539508256f6" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">施樂的視窗、滑鼠、物件導向</a>
            </div>

            <div style="border-left:3px solid var(--accent); padding:0.6rem 1rem; background:var(--tag-bg); border-radius:0 8px 8px 0;">
              <div style="font-size:0.75rem; color:var(--ink-light); margin-bottom:0.25rem;">IBM PC 部門出售</div>
              <a href="https://dankpads.com/uncategorized/thinkpad-history-chapter-1-ibm-pc/" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block;">ThinkPad History Chapter 1 – IBM PC</a>
              <a href="https://www.ithome.com.tw/news/27034" target="_blank" style="font-size:0.88rem; color:var(--accent2); text-decoration:none; display:block; margin-top:0.25rem;">聯想 17.5 億美元買 IBM PC 部門</a>
            </div>

          </div>
        `
      }
    ]
  }
  ,
  {
    category: '社群科技',
    catClass: 'cat-social',
    catLabel: '社群科技',
    title: '如何創造一個更好的網路社群環境？',
    excerpt: '演算法、品味文化、FOMO、網紅經濟⋯⋯我們同時是受害者也是加害者。這是一場關於數位生活的深度對話。',
    author: '全組',
    date: '2026.04',
    read: '10 分鐘',
    igProfile: {
      username: 'tech.qila',
      bio: 'Tech 起拉 是一個由政大廣告系學生組成的科技科普專欄，我們相信科技知識不應該只屬於工程師。無論你是文組、商科、還是對科技完全陌生，我們都想讓你讀完之後說：「原來如此！」我們的文章風格輕鬆、比喻直白，盡量少用術語，多用生活例子。科技很有趣，我們只是想讓更多人發現這件事。',
      posts: [
        { id: 1, title: '演算法科普：從花拉子米到同溫層', author: '劉佳琪', images: ['project2/演算法科普/演算法科普-1.png', 'project2/演算法科普/演算法科普-2.png', 'project2/演算法科普/演算法科普-3.png', 'project2/演算法科普/演算法科普-4.png'], 
          caption: `

          考古詞源
          「演算法」（Algorithm）這個詞並非來自英文，而是源自 9 世紀波斯數學家花拉子米（al-Khwarizmi）的名字。當時，這指的是「使用阿拉伯數字進行算術的規則」。
          演算法最初的目的，是為了讓複雜的數學計算變得「有跡可循」，讓每個人只要跟著步驟走，都能得到正確答案。
          
          學術定義
          「演算法（algorithm）」在韋氏辭典的定義是「在有限步驟內解決數學問題的程序」；在計算機科學領域上，演算法是一個計算的具體步驟，常用於計算、資料處理和自動推理。
          聽起來相當複雜，簡單來說，演算法就是一組「解決問題的方法」，它可以是利用文字敘述、流程圖或虛擬碼的方式來表示解決問題的步驟。
          當代巨擘高德納（Donald Knuth）則在《電腦程式設計藝術》中定義了一套合格的演算法需具備以下五大特徵：
          
          1. 輸入 (Input)：演算法必須有零個或多個外部提供原始資料
          2. 輸出 (Output)：演算法必須至少產生一個結果，且與輸入有特定關係。不可以白忙一場
          3. 明確性 (Definiteness)：每個步驟都必須無歧義
          4. 有限性 (Finiteness)：演算法必須在有限的步驟內結束，不能陷入永無止盡的死循環。
          5. 有效性 (Effectiveness)：每個步驟都必須足夠基礎，理論上用紙筆就能手動完成，而非虛無飄渺的指令。
          
          當代應用
          到了今天，當我們在手機螢幕前抱怨「演算法推給我奇怪的東西」時，我們談論的已不再是單純的數學指令，而是「推薦系統」。
          演算法從計算數字的工具，變成了過濾世界的守門人。它透過分析使用者的點擊、停留時間與社交關係，決定人們今天該看見什麼資訊。
          這就是所謂的「演算法治理」。這套邏輯不再只是追求算得快，而是在追求「留存率」與「商業價值」。它形塑了我們的同溫層，也重構了數位時代的權力結構。` },

        { id: 2, title: '你的版面是誰決定的？', author: '中井穗月', images: ['project2/你的版面是誰決定的？/版面-1.png', 'project2/你的版面是誰決定的？/版面-2.png', 'project2/你的版面是誰決定的？/版面-3.png', 'project2/你的版面是誰決定的？/版面-4.png'], 
          caption: `
          某天你隨手滑了一支貓咪影片，結果接下來整個版面全變成貓，或是你跟朋友聊到某個品牌，個天廣告就出現了。你以為這是巧合？不，這是設計出來的結果。你的每一個動作都在告訴平台你是誰。

          ▌平台比你更了解你

                你以為你只是「在滑手機」，但平台看到的遠不止這樣。你在一則貼文上停留了幾秒、有沒有滑過去、看到一般就關掉。這些「沈默的行為」，全部都被記錄下來。
          不只是你主動做的事，連你「沒有做」的事葉酸。一則你看了但沒按讚的貼文、一個你瀏覽但沒有追蹤的帳號，都是資料。演算法持續收集用戶行為數據，用以推測你最有可能為哪些內容按讚、留言、珍藏或花時間觀看。時間一長，平台對你的了解，可能比你自己還要精準。
          這不是恐嚇，而是這套系統設計的初衷。蒐集愈多，推薦越準，你就待得越久。


          ▌廣告才是真正的產品

                這裡有一件事值得想清楚：你是用這些平台不需要付費，但平台每年仍然賺進數千億美元。錢從哪裡來？答案是廣告主。Meta的商業模式以廣告業務為核心，廣告收入在2024年達到約1606億美元，佔總營收的 96%以上。這個數字背後有一個關鍵邏輯：你不是平台的客戶，你是平台的產品。真正的客戶是哪些付錢買廣告版位的品牌和企業。而廣告主買的是你的注意力，你在平台上停留的每一分鐘。所以平台的目標，從來不是「讓你找到想看的東西」，而是「讓你待越久」。這兩件事聽起來很像，但動機完全不同。一個以你為中心，一個以廣告主為中心。


          ▌平台設計演算法時在意的是什麼？

                各大平台從來不會完整公開自己的演算法，但從官方偶爾釋出的說明以及外部研究者的測試，我們還是能拼湊出一些輪廓。而是各大平台之間，有著驚人的共同點。Instagram、Facebook、X，都曾經是按時間順序排列貼文的。Instagram在2016年導入演算法之前，貼文以發布時間依序排列；Twitter也是同年開始，改由演算法根據用戶興趣優先顯示內容。這個改變，幾乎是在同一個時間點、以同樣的理由發生的，「讓你不錯過重要的東西」。但真正的驅動力，其實是讓你停留更久。

          那這些平台具體重視什麼指標？從各平台已知的資訊來看，大致可以歸納出幾個共同點

          互動反應是最核心的訊號。按讚、留言、分享，在每個平台都是內容能否被推送的關鍵。X公開的演算法程式碼顯示，用戶點擊「愛心」對觸及率的提升效果是回覆的30倍，轉推則是20倍。Facebook和Instagram雖然沒有公開完整程式碼，但邏輯相近，Instagram負責人Adam Mosseri在2025年確認，決定內容分發的三大核心指標是：觀看時間、私訊分享、以及觸及按讚率。

          停留時間是另一個所有平台都高度重視的指標。你在一則內容上盯著看了多久，比你有沒有按讚更能說明你對它的興趣。IG計算用戶在貼文和Reels上的停留時間，停留越長，內容獲得推薦的機率越高。這對已追蹤和未追蹤的用戶都同樣適用。

          時效性也是共同考量。雖然演算法排序早已不是單純的時間軸，但X的演算法顯示，貼文的分數會隨時間遞減，每六小時就減半一次。發文時機仍然影響著內容能見度。

          社群平台重視的都不是「這則內容對你有沒有意義」，而是「這則內容有沒有讓你產生反應」，你停留了多久、你有沒有按讚、你有沒有忍不住轉發出去。` },
      
        { id: 3, title: '都不揪？社群時代的焦焦原來是我', author: '章安澈', images: ['project2/社群時代焦焦/社群時代焦焦-1.jpg', 'project2/社群時代焦焦/社群時代焦焦-2.jpg', 'project2/社群時代焦焦/社群時代焦焦-3.jpg', 'project2/社群時代焦焦/社群時代焦焦-4.jpg'], 
          caption: `
          深夜，躺在床上滑手機，想說最後看一輪社群軟體就睡，點開好友動態，看到誰又出國旅遊，發了很多美食、美景照，誰與三五好友去唱KTV，誰和誰去看當紅的院線片⋯⋯轉頭點開reels，看到網紅發XX國美食推薦、素人與一群朋友去露營⋯⋯滑到最後，什麼都沒有得到，反而感到有些失落，為什麼自己不在對方的鏡頭裡？不在限時動態的標注裡？不在短影音的其中一幀？為什麼朋友去玩沒揪？為什麼自己忙了一整天，別人的一天看起來比自己好太多？

          以上的狀況是中了社群媒體的毒——FOMO、身份展演和比較心理的負面循環。這樣社群對人心靈的負面影響早就不是假議題，近期，美國一位20歲的女子，因為從小社群成癮帶來的身心問題，控告Meta和Google，並且獲判600萬美元的賠償（約1.9億元新台幣），這是世界第一起社群成癮影響身心勝訴的案例。

          首先，什麼是FOMO？
          FOMO，Fear Of Missing Out，擔心自己落後他人、被邊緣化和錯過重要資訊的焦慮症狀，根據兒福連盟2022的調查，83.1％的兒童及青少年有FOMO的癥狀，但不只是兒童和青少年，當代年輕人、社群重度使用者都難以逃過這樣「愛看又焦慮」的情況，舉成為流行語的「不揪喔」為例，在邀約時害怕被忘記已是「人之常情」。

          身份展演又是如何？
          身份展演源於高夫曼的《劇場理論》，他認為日常生活是一個巨大的舞台，每個人作為「演員」面對不同的場景、人物進行「自我呈現」，透過特定的言行和裝扮來扮演不同的社會角色。社群軟體就像是數位名片，會成為認識新的人的媒介，藉由發布的貼文、限時動態、內文等內容來進一步瞭解這個人的方方面面。因此，社群上的「我」不再只是真的我，而是我想傳達給他人的最好的那一面。為了被看到理想的「我」，可能會在各個方面都「暗藏心機」，舉凡精修照片、構圖、濾鏡，發文的時間，重中之重，只發佈看起來「正面」的內容。（像是遇到爛人爛事一定會發在小帳，絕對不會在大帳罵人）

          比較心理是這樣
          心理學家利昂・費斯廷格認為在非客觀的情況下，人們利用他人作為比較的基準，定義自我。在社群媒體的環境中，人們在他人的展現中衡量自己的位置，「為什麼XXX現在可以出國我還在這裡」、「他為什麼每天都可以過得這麼充實」、「別人有的我也要有」⋯⋯這些「羨慕嫉妒」的情緒充斥在不斷與他人的比較之中，甚至在社群媒體從社交導向轉變成演算法推薦的陌生內容後，比較心理造成的焦慮更為嚴重，比較的對象擴大，不只是朋友，還有自媒體創作者、陌生人；比較的內容失真，這些看似充實、完美的日常是精心打造的；比較的時間變長，只要一直滑動社群，比較心理就會一直存在。

          越滑越焦慮的負面循環
          當我們打開社群平台，害怕自己錯過，所以會持續瀏覽；為了在他人面前擁有好的形象，所以會進行身份展演；看到他人的動態時會比較，比較又會造成焦慮，不一定是這樣的順序，但FOMO、身份展演和比較心理會在使用社群的不同時候反覆發生、互相影響。平台更加強了這個惡性循環，演算法推薦互動性高（按讚、留言數多、停留時間長）的內容，有即時壓力的限時動態功能，誰看過、誰按讚的後台機制，從功能上加深人們對社群平台的依賴，卻又從這些內容獲得焦慮。
          當社交失去互動的本質，只在乎是否光鮮亮麗、理想且完美的表象，而在看不到的螢幕前，因為他人的展現，沒有盡頭的比較，害怕自己落後，不如他人，這個循環裡，我們不單是承受焦慮的受害人，也是製造焦慮的加害者。` },
          
        { id: 4, title: '數位環境的共犯結構：我們同時是受害者也是加害者！', author: '楊雯茹', images: ['project2/數位共犯/共犯1.png', 'project2/數位共犯/共犯2.png', 'project2/數位共犯/共犯3.png'], 
          caption: `
          引言
          了解完演算法的背後機制與設計邏輯後，你是否覺得發明演算法的平台是個罪大惡極的商人？

          網路上討論演算法的文章、報導早就不是冷議題，但在過往的討論中，大多聚焦於檢討演算法的設計是如何影響使用者並造成網路效應，像是同溫層效應，或是其衍伸出來的社會議題，如自我展演、社群焦慮等等。

          但如果我們從另一個方向思考呢？有沒有可能我們在某些時候，也成為滋養平台的加害者呢？

          你一定在自己或身邊的人身上經歷過以下幾種情境

          你一邊嫌新聞標題越來越誇張，卻總是先點開最聳動的那則。
          你一邊覺得短影音很浪費時間，卻總是在「再看一個」之後又滑了半小時。
          你一邊知道某些內容會讓自己焦慮，卻還是忍不住一直看。

          我們不只是網路環境的使用者、演算法的受害者，同時也是環境的加害者
          你發現了嗎？當我們享受平台的便利與刺激時，明明我們深知那些內容是低價值的，但還是忍不住停留或點擊，但對演算法而言，他無法分辨是非與道德，所以當使用者為了這些內容停留時，他只會接受到正面訊號，認定這是一篇內容好、反應佳的文章，進而推播給更多類似的用戶，造成劣質訊息的傳遞。

          我們太習慣把責任推給平台、環境，因為這麼做會讓我們不用對自己的行為負責，我們是無辜的受害者，他們是萬劫不復的壞蛋，整件事看起來也更安心，但事實是，身為使用者，對於現在渾沌的網路環境，我們有無法推託的責任。

          所以，換個角度來看，在演算法的馴化與操控下，我們不僅僅是網路環境的受害者，很多時候，也是助長滋養演算法的加害者，這由此形成所謂的「共犯結構」，也是我們這次想討論的主題。

          ▌你和什麼內容互動，代表著你默許甚麼存在

          從 21 世紀平台問世初期，各種功能尚未齊全，當時就存在 Views 和 Click 的概念，希望藉此收集使用者足跡。到了社群媒體時代，使用者介面發展得更齊全、市場競爭變得更激烈，逐漸發展出 Engagement 的概念，他們希望使用者不只是用他們的產品，還要和上面的內容互動、產生影響。而隨著平台使用者越來越多，演算法愈發成熟，Engagement 就成為排序內容的重要標準，除了上述的指標，也新增了其他蒐集數據的指標像是「表情符號」、「停留時間」、「跳轉次數」等等。

          乍聽之下，演算法像是為了提供更好的內容而設計，然後近年來多篇國外報導卻指出，社群媒體意識到「憤怒」能帶來高度參與與使用，便以此作為設計平台的初衷，也就是說，這些平台和內容被設計來惹惱使用者，由此，他們才會花更多心力與精神在平台之上，而這也就是「注意力經濟（ Attention Economy）」的由來，甚至開始有學者稱之為「憤怒經濟（ Outrage Economy）」。

          也因此，社群媒體變得不再是為了社群而生，而是為了注意力而生，我們不再是追求社交與連結，反而是追求短時間的刺激與多巴胺。

          也就是說，即便我們清楚知道某些內容是低價值、無營養的，但大腦和感官仍然會被這些內容控制，使我們無止盡得投入，無止盡的參與演算法的計算，成為訓練演算法的其中一員。因此當我們選擇忽視演訴法的操控，對那些低品質的內容停留、低頭，無形之中只會滋養平台暴力，默許演算法對網路環境的主宰。

          說到這裡，你是否也覺得有點沮喪？似乎人類只能檢討自己意志力、控制力不足，就像巴夫洛夫的狗一樣，只要聽到鈴鐺聲，就無法控制地流下口水。

          但其實這一切並不向想像中簡單，其實演算法背後存在許多底層的心理機制，這解釋了為什麼我們會進入這個共犯結構並深受其中，想要逃離卻無法自拔。
          共犯結構到底是怎麼形成的？平台如何制約操控我們？
          所以這個憤怒的循環，是怎麼形塑我們的網路環境？我們是如何在無形之中與平台互動？把自己的注意力和主權拱手讓人的？或許不能怪我們，因為平台正式運用了以下幾個理論，制約使用者的心理狀態。

          ▌負面偏誤理論

          所謂負面偏誤，是指人類天生會比起正面訊息，更容易注意、記住，甚至放大負面訊息。換句話說，危險、衝突、威脅、八卦，對大腦來說本來就比平靜、理性、溫和的內容更有吸引力。這不是因為我們特別喜歡負面，而是人類從演化開始，就被訓練成要先注意那些可能產生威脅的事務。 

          所以在社群媒體上，比起一篇冷靜、理性的股票分析文章，另一篇腥羶色、聳動、圖文並茂的花篇新聞更容易受到關注，人類受到最原始的本能所驅使，過度關注那些情緒化、充滿負面與出童的內容，久而久之讓平台學習到，這些內容會讓使用者停留更久、黏著更久，於是推播更多、擴散更多，負面訊息也因此被不斷放大。 

          問題是，我們明明知道這些內容會讓自己更焦慮、更憤怒，卻還是一次次停下來。這也提醒我們，網路環境之所以越來越偏向極端，未必只是平台故意把世界變得糟糕，而是人的注意力本來就更容易被糟糕的事吸走。 


          ▌沉默螺旋理論

          沉默螺旋理論指的是，當一個人發現自己的想法不符合主流時，往往會因為害怕被孤立、被攻擊，而選擇不說話。 同意的理論也適用時社群媒體，平台上的多數意見很多時候不一定是真的多數，而是比較敢講、比較常被看見的那一方，這也因此容易發生於政治操作上。 

          放到社群媒體上，這個現象會更明顯，因為演算法會優先放大互動高、情緒強、立場鮮明的內容。
          例如在某些公共議題底下，最容易浮上來的常常不是最完整、最細緻的討論，而是最極端、最直接、最容易引戰的意見。當你看到留言區幾乎都在罵，或某一種立場被大量按讚時，就算你心裡不完全同意，也會開始懷疑自己是不是不該開口。 
          這也是社群媒體很危險的地方，它讓人誤以為「被看見的」就是「被多數認同的」，當理性總是輸給聲量，平台表面上看起來很自由，實際上卻可能讓更多人選擇沉默。
          我們除了被操控，還有其他可能嗎？
          ▌視而不見就是一種默許
          所以談到這裡，你會發現，當使用者對於平台暴力的停留、互動、不作為，都極有可能對平台釋出正面的訊號，進而推廣給更多類似的用戶，所以換句話說，視而不見就是一種對演算法暴力的默許，我們就被動地成為共犯結構下的一員。

          ▌重點不再於戒斷使用，而是奪回主權

          讀到這裡你可能和我一樣，打從心底感到深深的無力感，認為平台操控的權利早已大過我們的想像，使用者似乎手無縛雞之力，甚至認為反抗演算法沒有任何勝算和意義。

          但綜觀未來的發展，AI 的發展讓權力集中化於平台與資方，即便我們再怎麼戒斷使用，也無法遠離受到平台和資方的操控，既然平台的手段千變萬化，身為使用者，值得探討的問題就從「如何擺脫演算法的操控？」轉變成「為何我們該重視演算法所產生的暴力？」，才能讓我們無時無刻不保持警戒與批判思維，看待社群媒體上所有推播的內容，在使用的過程中，思辨自己是訓練演算法的數據之一，還是利用演算法達成目的的使用者。

          最後想引用《娛樂至死》中的一段名言

          『歐威爾害怕禁書，赫胥黎害怕沒有理由可禁書，因為再沒有人想讀書。歐威爾擔心有人奪走我們知的權力，赫胥黎害怕有人給得太多，讓我們變得消極、自大。歐威爾擔心真理被隱瞞，赫胥黎害怕我們會造就膚淺文化，滿腦子遲滯、糜爛和愚痴的念頭 』

          最後，再次重申本篇報導的重點，不再於警示讀者遠離演算法，而是在剖析本議題時，提供讀者不同於傳統的視角，看見網路環境中的共犯結構，並進一步解釋演算法是如何操控心智，目的在於反思社群媒體的時代下，誰更應該為網路環境負責？以及身為使用者該秉持什麼思維與態度面對這個結構。` },

        { id: 5, title: '網紅經濟：創作者的自由還是新型剝削？', author: '梁軒綾', images: ['project2/網紅經濟/網紅經濟-1.png', 'project2/網紅經濟/網紅經濟-2.png', 'project2/網紅經濟/網紅經濟-3.png', 'project2/網紅經濟/網紅經濟-4.png', 'project2/網紅經濟/網紅經濟-5.png'], 
          caption: `
          為什麼我們會覺得某個網紅「很真實」？
          他們分享早餐、記錄崩潰、推薦產品，感覺就像一個你認識的朋友，但這個「朋友」，同時也是一個商業個體。
          我們活在一個「人人都能當創作者」的時代。社群平台告訴我們：只要夠真實、夠努力、夠有特色，你就能靠內容養活自己。這個故事很迷人，迷人到很多人在意識到之前，已經把整個生活都押了進去。
          但這個「自由」，真的是自由嗎？
          還是說，我們只是在一個規則由別人制定的遊戲裡，以為自己是玩家，卻其實更像是棋子？
          過去，想進媒體、想做廣告，需要學歷、需要人脈、需要資本。但現在不一樣了，一支手機、一個帳號，你就可以開始。沒有面試、沒有主管、沒有人告訴你「這個不行」。
          這件事本身是真實的革命。它讓素人有機會觸及全球受眾，讓小眾聲音被聽見，也帶動了整條產業鏈的誕生：剪輯師、經紀公司、品牌合作、內容策略師，全部因為「個人創作者」這個角色的崛起而存在。
          廣告預算從電視、報紙流向了真實的人。創作者能自己選題、選品牌、選受眾。這在十年前，幾乎是不可能的事。
          但光鮮的另一面，是很多人沒說出口的那些。
          創作者在平台上累積的粉絲、數據、影響力，其實都不屬於他們。演算法隨時可以改變規則，觸及率可以無故腰斬，帳號可以在沒有任何解釋的情況下消失。創作者只是在別人蓋的地基上建房子，而那個地基的主人，隨時可以決定要不要收回去。
          更深的問題，是生活和工作的邊界消失了。旅行是素材、吃飯是素材、情緒崩潰也可以是素材。當「做自己」必須同時服務於漲粉目標，還真的在做自己嗎？
          而那些成功的故事：百萬訂閱、品牌合作、被動收入，它們是真實存在的，但它們也遮住了更大的沉默。更多人是日更一年、觀看數停在三位數、然後在某個深夜默默關掉後台不想再看。這個產業從來沒有告訴你這件事。
          所以，網紅經濟到底是自由還是剝削？
          這個問題本身就是一個陷阱。
          它同時是兩者，差別只在於你站在哪個位置。對頭部創作者來說是自由，對更多默默耕耘的人來說，更接近一種慢慢被消耗的過程。
          要讓這個生態變得更健康，其實三個角色都跑不掉：
          創作者需要對自己發出去的內容負責：業配要透明、推薦要誠實，影響力不是拿來隨便用的。
          平台需要承認自己不只是「中立的技術」：當演算法決定誰被看見、誰被消音，這就已經是一種選擇，而做出選擇的人就必須承擔後果。
          受眾也需要練習不那麼輕易相信：不是變得憤世嫉俗，而是在按下追蹤或購買之前，多問一句：這是真實的分享，還是設計過的說服？
          但，光靠個人覺醒是不夠的。當整個系統的誘因都指向同一個方向，要求每個人靠自覺去對抗，其實是一種很不公平的期待。
          不只是意願，還需要結構演變。` },

        { id: 6, title: '定義演變：從人際連結到內容競技場', author: '中井穗月', images: ['project2/社群演變/演變-1.png', 'project2/社群演變/演變-2.png', 'project2/社群演變/演變-3.png', 'project2/社群演變/演變-4.png', 'project2/社群演變/演變-5.png'], 
          caption: `
          為什麼我們會覺得某個網紅「很真實」？
          他們分享早餐、記錄崩潰、推薦產品，感覺就像一個你認識的朋友，但這個「朋友」，同時也是一個商業個體。
          我們活在一個「人人都能當創作者」的時代。社群平台告訴我們：只要夠真實、夠努力、夠有特色，你就能靠內容養活自己。這個故事很迷人，迷人到很多人在意識到之前，已經把整個生活都押了進去。
          但這個「自由」，真的是自由嗎？
          還是說，我們只是在一個規則由別人制定的遊戲裡，以為自己是玩家，卻其實更像是棋子？
          過去，想進媒體、想做廣告，需要學歷、需要人脈、需要資本。但現在不一樣了，一支手機、一個帳號，你就可以開始。沒有面試、沒有主管、沒有人告訴你「這個不行」。
          這件事本身是真實的革命。它讓素人有機會觸及全球受眾，讓小眾聲音被聽見，也帶動了整條產業鏈的誕生：剪輯師、經紀公司、品牌合作、內容策略師，全部因為「個人創作者」這個角色的崛起而存在。
          廣告預算從電視、報紙流向了真實的人。創作者能自己選題、選品牌、選受眾。這在十年前，幾乎是不可能的事。
          但光鮮的另一面，是很多人沒說出口的那些。
          創作者在平台上累積的粉絲、數據、影響力，其實都不屬於他們。演算法隨時可以改變規則，觸及率可以無故腰斬，帳號可以在沒有任何解釋的情況下消失。創作者只是在別人蓋的地基上建房子，而那個地基的主人，隨時可以決定要不要收回去。
          更深的問題，是生活和工作的邊界消失了。旅行是素材、吃飯是素材、情緒崩潰也可以是素材。當「做自己」必須同時服務於漲粉目標，還真的在做自己嗎？
          而那些成功的故事：百萬訂閱、品牌合作、被動收入，它們是真實存在的，但它們也遮住了更大的沉默。更多人是日更一年、觀看數停在三位數、然後在某個深夜默默關掉後台不想再看。這個產業從來沒有告訴你這件事。
          所以，網紅經濟到底是自由還是剝削？
          這個問題本身就是一個陷阱。
          它同時是兩者，差別只在於你站在哪個位置。對頭部創作者來說是自由，對更多默默耕耘的人來說，更接近一種慢慢被消耗的過程。
          要讓這個生態變得更健康，其實三個角色都跑不掉：
          創作者需要對自己發出去的內容負責：業配要透明、推薦要誠實，影響力不是拿來隨便用的。
          平台需要承認自己不只是「中立的技術」：當演算法決定誰被看見、誰被消音，這就已經是一種選擇，而做出選擇的人就必須承擔後果。
          受眾也需要練習不那麼輕易相信：不是變得憤世嫉俗，而是在按下追蹤或購買之前，多問一句：這是真實的分享，還是設計過的說服？
          但，光靠個人覺醒是不夠的。當整個系統的誘因都指向同一個方向，要求每個人靠自覺去對抗，其實是一種很不公平的期待。
          不只是意願，還需要結構演變。` },

        { id: 7, title: '數據壟斷下的鄉愁：演算法如何「取消」我們的未來？', author: '劉佳琪', images: ['project2/演算法與品味文化/演算法與品味-1.png', 'project2/演算法與品味文化/演算法與品味-2.png', 'project2/演算法與品味文化/演算法與品味-3.png', 'project2/演算法與品味文化/演算法與品味-4.png', 'project2/演算法與品味文化/演算法與品味-5.png', 'project2/演算法與品味文化/演算法與品味-6.png', 'project2/演算法與品味文化/演算法與品味-7.png'], 
          caption: `
          在社群媒體時代，我們常以為某種風格的復興，無論是Y2K穿搭還是CCD底片感，是個人審美的選擇或流行的輪迴。然而，這些集體性的「懷舊復刻」實則可能不是偶然，而是監控資本主義（Surveillance Capitalism）驅動下的文化停滯，一種精密的演算法治理。
          為什麼演算法如此熱衷於推動「過去」？根據2014年《消費研究期刊》（Journal of Consumer Research）的研究《懷舊削弱了對金錢的慾望》，心理學與消費行為之間存在著微妙的聯動。懷舊（Nostalgia）能增加個體的「社會連結感」。當人們感到孤獨或不安時，懷舊能提供強大的心理支持。同時，研究指出，懷舊會降低人們對金錢的握持感（Grip on money）。當社會連結感被滿足，金錢作為安全感替代品的功能便會弱化，使消費者更願意支付高價或進行非理性消費。
          平台利用這些情緒缺口，大規模餵養已被數據證實成功的「過去符號」。這讓懷舊成了一種極其高效且廉價的「情緒貨幣」，用以換取用戶的停留時間與消費意願。
          英國文化評論家Mark Fisher曾提出「未來的緩慢取消」（The Slow Cancellation of the Future）的概念。他認為當代文化陷入了一種現實主義的僵局：一切都必須以「可預測的利潤」為導向。演算法的核心是「預測」，而預測最穩定的依據就是過去。對於資本方而言，開發全新的審美風格風險極高，因為數據庫中沒有它的成功紀錄。而「復古」是經過市場驗證的安全牌。演算法會優先推播長得像熱門作品的內容，創作者為了在商業邏輯中生存，只能在舊有符號中進行微小修整。
          這種商業與科技的共謀關係使演算法成了文化的守門人，它排斥無法被分類、無法被數據預測的「突變」。我們看到的並非文化進步，而是在資本邏輯下，對過去輝煌片段的無盡翻拍與重新剪輯。
          或許有人會質疑：「難道不能單純是因為 Y2K 好看嗎？」不可否認，個體的審美可能源於自發的喜愛，但「規模化」卻是由演算法決定的。當平台監測到某種復古符號能提高黏著度，它便會利用數據優勢，將這種微小的流行轉化為一場無處不在的審美霸權。
          這種「審美的避險」追求的是可量化的確定性，卻在無形中壓縮了創新風格的生存空間。當未知等於虧損，所有具備風險的「未來想像」都會被稀釋成安全的、可獲利的復刻產品。

          結論：
          在演算法與商業共謀的治理體制下，我們以為自己在透過復古風格表達獨特的主體性，實際上卻被鎖死在演算法佈置的數據繭房中。當社會集體失去了創造嶄新風格的勇氣，轉而不斷消費被重新包裝的鄉愁時，我們正逐漸喪失創造新未來的能力。
          我們的品味，已成為維持平台運作的環節，而非真正自由意志的展現。 如果我們習慣了在過去的灰燼中尋找溫暖，那麼就真正失去想像和創造未來的能力。` },
        
        { id: 8, title: '如何創造一個更好的網路社群環境？', author: '章安澈', images: ['project2/結論-訪談/結論訪談-1.jpg', 'project2/結論-訪談/結論訪談-2.jpg', 'project2/結論-訪談/結論訪談-3.jpg'], 
          caption: `
          《Tech起啦》透過多元的視角，探討網路社群不同的面向，並從每個面向重新審思如何打造更好的網路社群環境。編輯室本次採訪《數位時代》的創辦人王志仁先生，帶領我們從業界的角度來看現今的大環境。

          在「數位共犯」中，我們看見人人都是網路環境中的加害者，「視而不見也是一種默許」，並非要完全戒斷不使用網路，而是要帶著批判思考的心態去面對社群媒體，更有意識地使用它；有句話說「時尚是一個輪迴」，現在Y2K、CCD又流行了起來，但「數據壟斷的鄉愁」告訴我們流行的背後有演算法在推波助瀾，我們以為透過復古的風格體現自己的主體性，實際上是被演算法剝奪了創造未來的可能性；我們看見了「社群演變」，社群從前是人和人相遇的廣場，而現今變成內容的競技場，我們也從主角變成觀眾；在這個人人都能自媒體的時代，「網紅經濟」是一把雙面刃，承載無限的自由，卻在某些層面上變成剝削，要改變不能只有單一個體的意願，還需要整體結構；每天接受極大資訊量的我們，卻也在夜深人靜的時候，成為「社群時代的焦焦」，要焦慮的太多，怕跟不上、怕不如他人、怕自己不夠完美⋯⋯

          社群媒體快速地帶給我們天文數字般的內容，卻也從不同的角度，有形的、無形的、有意識的、無意識的影響著我們，有些人會說要期待大環境改變還不如自己改變，但我們認為，自己改變或許是改變大環境的開始，我們對於演算法推薦的內容多一份小心，注意他是否直接或間接的控制我們獨立思考的能力，是否帶給我們不需要承受的壓力，並且懷抱著這份小心，在看到這些內容的時候，不要選擇漠視，也不要助長這些內容或風氣，在這個網路社群世界裡當一個完整的、獨立的個體，而不是默默吞下一切的旁觀者。

          現在，我們把尺度拉遠，看看專家王志仁先生怎麼看整個大環境。
          現在是「碎片化」、「一對一」的時代，以往媒體是一對多，現在演算法能分析你的喜好，像是Netflix和抖音，會根據過往的習慣推播內容，導致每個人看到的不一樣。這會產生「資訊繭（Information Bubble），讓人覺得這個世界很大，但其實還是被包在繭中，只看到想看到的，這對要了解真實世界是有害的，所以要打破這層繭，多參加實體活動、接觸不同管道。

          我們也詢問現在網路媒體怎麼在流量導向的世界生存，是否訂閱制能成為解方，王志仁認為要維持高品質的內容，就需要完整的編採團隊，台灣有媒體實施訂閱制（報導者和天下），但無法用訂閱收入支撐整個團隊，因為讀者會下意識認為網路上的內容應該會是免費。媒體必須維持高品質內容來吸引讀者，但不能指望靠讀者在線上付費來支撐公司，而是把他的關注跟信任轉化為其他變現方式，例如：策展、活動、課程。以《數位時代》為例，一年舉辦超過100場活動，包含 30 人的小聚會到 300 人的論壇，這些非傳統項目現在佔《數位時代》的收入約 70%，傳統廣告不到 30%。` },
                  
        { id: 9, title: 'AI 使用紀錄', author: '全組', images: ['project2/AI.png'], caption: '內文待補充' }
      ]
    }
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

  // IG Profile 類型
  if (a.igProfile) {
    document.getElementById('modalTabBar').innerHTML = '';
    document.getElementById('modalTabBar').classList.remove('has-tabs');
    document.getElementById('modalMeta').innerHTML = '';
    document.getElementById('modalBody').innerHTML = renderIgProfile(a);
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    return;
  }

  if (a.tabs) {
    document.getElementById('modalMeta').innerHTML = '';
    document.getElementById('modalTabBar').innerHTML =
      a.tabs.map((t, i) => `<button class="tab-btn" onclick="jumpToSection(${i})">${t.label}</button>`).join('');
    document.getElementById('modalTabBar').classList.add('has-tabs');
    document.getElementById('modalBody').innerHTML =
      a.tabs.map((t, i) => `
        <div id="article-section-${i}" class="article-section">
          <h2 class="article-section-title">${t.label}</h2>
          ${t.body}
        </div>
        ${i < a.tabs.length - 1 ? '<hr class="article-divider">' : ''}
      `).join('');
  } else {
    document.getElementById('modalTabBar').innerHTML = '';
    document.getElementById('modalTabBar').classList.remove('has-tabs');
    document.getElementById('modalMeta').innerHTML =
      `<div class="modal-meta-row"><span>✍️ ${a.author}</span><span>📅 ${a.date}</span><span>⏱ 閱讀約 ${a.read}</span></div>`;
    document.getElementById('modalBody').innerHTML = `<div class="article-section">${a.body}</div>`;
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── IG PROFILE ──
function renderIgProfile(a) {
  const ig = a.igProfile;
  const gridItems = ig.posts.map((post, i) => {
    const hasImg = post.images && post.images.length > 0;
    return `
      <div class="ig-grid-item" onclick="openIgPost(${articles.indexOf(a)}, ${i})">
        ${hasImg
          ? `<img src="${post.images[0]}" alt="${post.title}">`
          : `<div class="ig-grid-placeholder">
               <span class="ig-grid-num">${String(i + 1).padStart(2, '0')}</span>
               <span>${post.title}</span>
             </div>`
        }
      </div>
    `;
  }).join('');

  return `
    <div class="ig-profile-header">
      <div class="ig-avatar">📱</div>
      <div class="ig-profile-info">
        <div class="ig-username">${ig.username}</div>
        <div class="ig-display-name">Tech 起拉</div>
        <div class="ig-stats">
          <div class="ig-stat"><strong>${ig.posts.length}</strong><span>篇貼文</span></div>
          <div class="ig-stat"><strong>312</strong><span>位粉絲</span></div>
          <div class="ig-stat"><strong>128</strong><span>追蹤中</span></div>
        </div>
        <div class="ig-bio">${ig.bio}</div>
      </div>
    </div>
    <div class="ig-grid-tabs">
      <div class="ig-grid-tab active">⊞</div>
    </div>
    <div class="ig-grid">${gridItems}</div>
    <div class="ig-post-overlay" id="igPostOverlay" onclick="closeIgPostOnOverlay(event)">
      <div class="ig-post" id="igPostContent"></div>
    </div>
  `;
}

window.openIgPost = function(articleIndex, postIndex) {
  const post = articles[articleIndex].igProfile.posts[postIndex];
  let currentSlide = 0;
  const total = post.images && post.images.length > 0 ? post.images.length : 1;

  function renderPost() {
    const slides = total === 1 && (!post.images || post.images.length === 0)
      ? `<div class="ig-post-img-slide">圖片待補充</div>`
      : post.images.map(src => `<div class="ig-post-img-slide"><img src="${src}" alt=""></div>`).join('');

    const dots = total > 1
      ? `<div class="ig-post-dots">${Array.from({length: total}, (_, i) =>
          `<div class="ig-post-dot ${i === currentSlide ? 'active' : ''}" onclick="goIgSlide(${i})"></div>`
        ).join('')}</div>` : '';

    const navBtns = total > 1 ? `
      <button class="ig-post-nav prev" onclick="prevIgSlide()">‹</button>
      <button class="ig-post-nav next" onclick="nextIgSlide()">›</button>
    ` : '';

    document.getElementById('igPostContent').innerHTML = `
      <div class="ig-post-images">
        <div class="ig-post-img-track" id="igImgTrack" style="transform:translateX(-${currentSlide * 100}%)">
          ${slides}
        </div>
        ${navBtns}
        ${dots}
      </div>
      <div class="ig-post-content">
        <div class="ig-post-header">
          <div class="ig-post-user">
            <div class="ig-post-avatar">TQ</div>
            <div class="ig-post-username">tech.kila</div>
          </div>
          <button class="ig-post-close" onclick="closeIgPost()">✕</button>
        </div>
        <div class="ig-post-body">
          <div class="ig-post-title">${post.title}</div>
          <div class="ig-post-author">✍️ ${post.author}</div>
          <div class="ig-post-caption">${post.caption}</div>
        </div>
      </div>
    `;
    document.getElementById('igPostOverlay').classList.add('open');
  }

  window.prevIgSlide = function() { currentSlide = Math.max(0, currentSlide - 1); renderPost(); };
  window.nextIgSlide = function() { currentSlide = Math.min(total - 1, currentSlide + 1); renderPost(); };
  window.goIgSlide = function(i) { currentSlide = i; renderPost(); };

  renderPost();
};

window.closeIgPost = function() {
  const overlay = document.getElementById('igPostOverlay');
  if (overlay) overlay.classList.remove('open');
};

window.closeIgPostOnOverlay = function(e) {
  if (e.target === document.getElementById('igPostOverlay')) closeIgPost();
};

window.jumpToSection = function(i) {
  const target = document.getElementById(`article-section-${i}`);
  const scrollEl = document.querySelector('.modal-scroll');
  if (target && scrollEl) {
    scrollEl.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
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
