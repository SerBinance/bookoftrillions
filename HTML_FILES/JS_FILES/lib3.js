// cards
const cards = [
  {
    title: "Plasma Solution to Stablecoins Issues",
    sub: "𝕏 post by POSH",
    href: "https://x.com/Poshthehussla/status/1929926980591325316",
    img: "images/homepage_book.png"
  },
  {
    title: "Making Sense of PlasmaBFT",
    sub: "𝕏 post by ERIC",
    href: "https://x.com/ugbuericsam/status/1947965161765056779",
    img: "images/homepage_book.png"
  },
  {
    title: "Where Money Flows",
    sub: "Article by PlasmaFDN",
    href: "https://plasma.beehiiv.com/p/where-money-moves-edition-10",
    img: "images/homepage_book.png"
  },
  {
    title: "What is Plasma",
    sub: "Blog by BLOCMATES",
    href: "https://www.blocmates.com/articles/what-is-plasma-chain",
    img: "images/homepage_book.png"
  },
  {
    title: "Zaheer POV on plasma sales",
    sub: "News Report by SPLITCAPITAL",
    href: "https://x.com/SplitCapital/status/1949828558202785936?t=XBjyDQ4z_V5JXi58Kg8HAA&s=19",
    img: "images/homepage_book.png"
  },
  {
    title: "Why stablecoins need their own infrastructure layer",
    sub: "𝕏 post by BULLISH BUNT",
    href: "https://x.com/bullish_bunt/status/1934208887013478400",
    img: "images/homepage_book.png"
  },
  {
    title: "Zero Fee Chain",
    sub: "Article by SMOOTH",
    href: "https://console.pluid.com/article/plasma-the-zero-fee-chain-built-for-global-payments-ivdciie8vu",
    img: "images/homepage_book.png"
  },
  {
    title: "Biggest Opportunity in 2025",
    sub: "Youtube video by DEGEN INVESTOR",
    href: "https://youtu.be/da5J8UQ2Jdk?si=Km1L5iYzY8BKLBoA",
    img: "images/homepage_book.png"
  },
  {
    title: "Partnerships",
    sub: "News by PlasmaFDN",
    href: "https://x.com/PlasmaFDN/status/1953456721306820664",
    img: "images/homepage_book.png"
  },
  {
    title: "Stablecoins & Plasma",
    sub: "Article by PlasmaFDN",
    href: "https://www.plasma.to/insights/capturing-the-trillion-dollar-opportunity",
    img: "images/homepage_book.png"
  },
  {
    title: "Current state of Plasma",
    sub: "Blog by OLUWAPELUMI",
    href: "https://cryptoslate.com/plasma-raises-500-million-partners-with-aave-to-transform-stablecoin-market/",
    img: "images/homepage_book.png"
  },
  {
    title: "Plasma Africa and Channel",
    sub: "News Report by SplitCapital",
    href: "https://x.com/PlasmaAfric/status/1954976629572374757",
    img: "images/homepage_book.png"
  },
  {
    title: "How plasma addresses this Stablecoin losses",
    sub: "𝕏 post by CDIII",
    href: "https://x.com/CDIIIcrypto/status/1953828680645726431",
    img: "images/homepage_book.png"
  },
  {
    title: "Plasma ELI5",
    sub: "𝕏 post by NAIROLF",
    href: "https://x.com/0xNairolf/status/1928418982010216668",
    img: "images/homepage_book.png"
  },
  {
    title: "Plasma token (XPL) current state",
    sub: "Youtube video by ANONIMOUS TRADE",
    href: "https://youtu.be/Am5zhWMLA6s?si=ohuxRHmSdxvz87YR",
    img: "images/homepage_book.png"
  },
  {
    title: "Explaining Plasma with Visuals",
    sub: "TikTok Video by PHEN",
    href: "https://vt.tiktok.com/ZSHsoPuJHPu2u-nZeED/",
    img: "images/homepage_book.png"
  },
  {
    title: "The current state of stablecoins and plasmas role",
    sub: "TikTok Video by STABLECOIN UPDATES",
    href: "https://vt.tiktok.com/ZSHsoPgshLbJ7-oIDQN/",
    img: "images/homepage_book.png"
  },
  {
    title: "Plasma partnership with pendle",
    sub: "𝕏 post by MIRRA",
    href: "https://x.com/6mirra6/status/1955339144638476684",
    img: "images/homepage_book.png"
  },
  {
    title: "Plasma partnership with OAK",
    sub: "𝕏 post by OAKRESEARCH",
    href: "https://x.com/OAK_Res_EN/status/1956382512395046993",
    img: "images/homepage_book.png"
  },
  {
    title: "Stablecoin recap",
    sub: "𝕏 post by IDARA",
    href: "https://x.com/idaratbn/status/1944802990507930095",
    img: "images/homepage_book.png"
  }
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



