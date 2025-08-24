// cards
const cards = [
  {
    title: "Wyoming Just Launched the First State-Backed Stablecoin",
    sub:  "Article by CCN",
    href: "https://www.ccn.com/education/crypto/wyoming-frnt-state-stablecoin-visa-explained",
    img: "images/green_book.png"
  },
  {
    title: "Leading blockchain protocols for stablecoins",
    sub: "Blog by SQUADS",
    href: "https://squads.so/blog/solana-base-stablecoin-payments",
    img: "images/green_book.png"
  },
  {
    title: "Global regulation overview by PWC",
    sub: "Article by PWC",
    href: "https://legal.pwc.de/en/services/pwc-legals-eu-regulatory-compliance-operations/pwcs-global-crypto-regulation-report",
    img: "images/green_book.png"
  },
  {
    title: "State of stablecoins",
    sub: "Report by DUNE",
    href: "https://dune.com/stablecoin-download",
    img: "images/green_book.png"
  },
  {
    title: "Stablecoins Payment landscape",
    sub: "Article by HANDICK",
    href: "https://medium.com/@HadickM/stablecoin-payments-who-actually-wins-ebd72a1cc8b3",
    img: "images/green_book.png"
  },
  {
    title: "Stablecoin regulation and the singleness of money",
    sub: "News by KCL.NEWS",
    href: "https://www.kcl.ac.uk/news/stablecoin-regulation-and-the-singleness-of-money",
    img: "images/green_book.png"
  },
  {
    title: "Understanding US regulations on stablecoins",
    sub: "Blog by BITWAVE",
    href: "https://www.bitwave.io/blog/sab-122-a-new-dawn-for-banks-and-digital-assets",
    img: "images/green_book.png"
  },
  {
    title: "Understanding European Crypto Assets Regulation",
    sub: "Article by AMICERTIFICATION",
    href: "https://amlcertification.com/understanding-european-crypto-assets-regulation-mica/",
    img: "images/green_book.png"
  },
  {
    title: "Europes MICA Regime: Crypto Payments",
    sub: "Blog Post by BVNK",
    href: "https://www.bvnk.com/blog/europes-mica-regime-crypto-payments",
    img: "images/green_book.png"
  },
  {
    title: "The impact of stablecoins on Demand for Government debt",
    sub: "Report by WARPCAST",
    href: "https://warpcast.com/fehrsam/0x902d2105",
    img: "images/green_book.png"
  },
  {
    title: "Stablecoins are helping create a buyer of second-to-last resort for US Treasurys",
    sub: "Article by KUNLE",
    href: "https://writing.kunle.app/p/stablecoins-are-helping-create-a",
    img: "images/green_book.png"
  },
  {
    title: "Emerging technologies & innovations in stablecoins",
    sub: "Blog by BITWAVE",
    href: "https://www.bitwave.io/blog/top-takeaways-from-on-chain-b2b-payments-day-eth-denver",
    img: "images/green_book.png"
  },
  {
    title: "Cross-border payments: state of the market",
    sub: "Blog by FLAGSIP",
    href: "https://insights.flagshipadvisorypartners.com/x-border-payments-state-of-the-market-2024",
    img: "images/green_book.png"
  },
  {
    title: "Financial services",
    sub: "Report by MCKINSEY",
    href: "https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-in-2024-simpler-interfaces-complex-reality#/",
    img: "images/green_book.png"
  },
  {
    title: "Roundups podcast of news and interviews with industry leaders",
    sub: "Podcast by STABLEDASH",
    href: "https://open.spotify.com/show/3LBTjfkpE0RsRxD8M54SLY",
    img: "images/green_book.png"
  },
  {
    title: "Insightful Interview with founders in stablecoins niche",
    sub: "Podcast by FINTECH BRAINFORD & DUX MEDIA",
    href: "https://open.spotify.com/show/5L1PJLiEgPDno2F11M4Fnk",
    img: "images/green_book.png"
  },
  {
    title: "Considerations of emerging market central banks",
    sub: "Article by FRONTIERFINTECH",
    href: "https://frontierfintech.substack.com/p/72-stablecoins-revisited-the-factors",
    img: "images/green_book.png"
  },
  {
    title: "Keeping tracks of regulatory developments",
    sub: "Blog by GDF",
    href: "https://www.gdf.io/resource/regulator-consultations-responses/",
    img: "images/green_book.png"
  },
  {
    title: "Why you need a stablecoin strategy",
    sub: "Blog by FINTECH BRAINFORD",
    href: "https://www.fintechbrainfood.com/p/what-s-your-stablecoin-strategy",
    img: "images/green_book.png"
  },
  {
    title: "B2B Payments",
    sub: "News by PYMNTS",
    href: "https://www.pymnts.com/news/b2b-payments/2025/what-a-b2b-stablecoin-strategy-looks-like/",
    img: "images/green_book.png"
  },
];

// render cards
function renderCards(list) {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const html = list.map(({ title, sub, href, img }) => {
    const isExternal = /^https?:\/\//i.test(href);
    const extra = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `
      <a href="${href}"${extra}>
        <div class="card">
          <img class="thumb" src="${img}" alt="${title}">
          <div class="meta">
            <h3 class="title">${title}</h3>
            <p class="sub">${sub}</p>
          </div>
        </div>
      </a>
    `;
  }).join('');

  grid.innerHTML = html;
}

renderCards(cards);

// search bar filter
const input = document.getElementById('searchInput');
const empty = document.getElementById('empty');

// debounce helper
function debounce(fn, delay = 120) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

function runFilter() {
  const q = (input?.value || '').trim().toLowerCase();
  const rows = Array.from(document.querySelectorAll('#grid > a'));
  let shown = 0;

  rows.forEach(a => {
    const text = a.textContent.toLowerCase();
    const match = !q || text.includes(q);
    a.classList.toggle('hide', !match);
    if (match) shown++;
  });

  if (empty) empty.classList.toggle('show', shown === 0);
}

const onInput = debounce(runFilter, 100);
if (input) {
  input.addEventListener('input', onInput);

  // ESC clears
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      runFilter();
      input.blur();
    }
  });
}

// Initial filter pass
runFilter();

/* ======= HAMBURGER DROPDOWN ======= */
const toggleBtn = document.querySelector('.menu-toggle');
const panel = document.getElementById('menu-panel');

if (toggleBtn && panel) {
  const closePanel = () => {
    panel.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  };
  const openPanel = () => {
    panel.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.contains('open') ? closePanel() : openPanel();
  });

  // Click outside closes
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
      closePanel();
    }
  });

  // ESC closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
  });
}


const inputDesktop = document.getElementById('searchInput');
const inputMobile  = document.getElementById('searchInputMobile');


if (typeof debounce === 'function' && typeof runFilter === 'function') {
  if (inputMobile) {
    const onInputMobile = debounce(runFilter, 100);
    inputMobile.addEventListener('input', onInputMobile);
    inputMobile.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        inputMobile.value = '';
        runFilter();
        inputMobile.blur();
      }
    });
  }

  
  if (inputDesktop && inputMobile) {
    const sync = (from, to) => from.addEventListener('input', () => { to.value = from.value; });
    sync(inputDesktop, inputMobile);
    sync(inputMobile, inputDesktop);
  }
}


const levelBtn = document.querySelector('.nav-dropdown .has-caret');
const levelPanel = document.querySelector('.nav-dropdown .dropdown-panel');

if (levelBtn && levelPanel) {
  levelBtn.addEventListener('focus', () => levelBtn.setAttribute('aria-expanded', 'true'));
  levelBtn.addEventListener('blur',  () => levelBtn.setAttribute('aria-expanded', 'false'));
  levelBtn.addEventListener('mouseenter', () => levelBtn.setAttribute('aria-expanded', 'true'));
  levelBtn.addEventListener('mouseleave', () => levelBtn.setAttribute('aria-expanded', 'false'));
}



