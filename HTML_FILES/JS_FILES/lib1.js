// cards
const cards = [
  {
    title: "Stablecoins 101",
    sub: "Blog by CHAINALYSIS",
    href: "https://www.chainalysis.com/blog/stablecoins-most-popular-asset",
    img: "images/blue_book.png"
  },
  {
    title: "A beginner's guide on how to buy stablecoins",
    sub: "𝕏 post by BINANCE",
    href: "https://x.com/binance/status/1887622585828983027",
    img: "images/blue_book.png"
  },
  {
    title: "Stablecoins: Definition and Types",
    sub: "Article by INVESTOPEDIA",
    href: "https://www.investopedia.com/terms/s/stablecoin.asp",
    img: "images/blue_book.png"
  },
  {
    title: "Stablecoins, Explained in 4mins",
    sub: "Youtube video by BINANCE",
    href: "https://youtu.be/vx_JyxuV1DE?si=wVOT4vwIJMtXKxwY",
    img: "images/blue_book.png"
  },
  {
    title: "What are Stablecoins?",
    sub: "Blog by TOKENMETRICS",
    href: "https://www.tokenmetrics.com/blog/stablecoins",
    img: "images/blue_book.png"
  },
  {
    title: "A Beginner's Guide To Stablecoins",
    sub: " Blog by BITWAVE",
    href: "https://www.bitwave.io/blog/what-are-stablecoins",
    img: "images/blue_book.png"
  },
  {
    title: "TD:RL on stablecoins",
    sub: "Article by NOTES",
    href: "https://notes.mtb.xyz/p/stablecoins-1000-words",
    img: "images/blue_book.png"
  },
  {
    title: "A guide to stablecoins",
    sub: "Article by a16zcrypto",
    href: "https://a16zcrypto.com/posts/article/stablecoin-guide-what-why-how/",
    img: "images/blue_book.png"
  },
  {
    title: "Understanding yield & Non yield bearing stablecoins",
    sub: "𝕏 post by NEMI",
    href: "https://x.com/nemi_0x/status/1897677957298356571?s=46",
    img: "images/blue_book.png"
  },
  {
    title: "How to buy stablecoins",
    sub: "Youtube Video by CRYPTOBASICS",
    href: "https://youtu.be/KIxhyYb4cpk?si=C6XB8QJKMAILRflL",
    img: "images/blue_book.png"
  },
  {
    title: "USDC and USDT explainer in 5mins",
    sub: "Blog by BVNK",
    href: "https://www.bvnk.com/blog/usdc-vs-usdt",
    img: "images/blue_book.png"
  },
  {
    title: "The Stablecoin market",
    sub: "Youtube Video by Eye of Crypto",
    href: "https://youtu.be/5Fb6Z4sLKWQ?si=ZF_Db2YFHIPFFNWx",
    img: "images/blue_book.png"
  },
  {
    title: "Understanding cross border payments",
    sub: "Blog Post by TEJUADEYINKA",
    href: "https://tejuadeyinka.medium.com/on-stablecoins-and-cross-border-payments-c9dda1c32e2e",
    img: "images/blue_book.png"
  },
  {
    title: "Benefits of stablecoins to users",
    sub: "Article by AV.SC",
    href: "https://av.sc.com/corp-en/nr/content/docs/sc-stablecoins-the-first-killer-app.pdf",
    img: "images/blue_book.png"
  },
  {
    title: "How different types of stablecoins work",
    sub: "Article by DEATHEREUM",
    href: "https://deathereum.substack.com/p/chasing-stability-a-stablecoin-deepdive",
    img: "images/blue_book.png"
  },
  {
    title: "How businesses can benefit from stablecoins",
    sub: "Article by FITPO",
    href: "https://www.fipto.com/articles/how-businesses-can-benefit-from-stablecoins-in-2024",
    img: "images/blue_book.png"
  },
  {
    title: "The crux of stablecoin utility",
    sub: "Article by JOSH",
    href: "https://medium.com/letters-from-the-savannah/getting-to-the-crux-of-stablecoin-utility-7e53fea29286",
    img: "images/blue_book.png"
  },
  {
    title: "Investors' Risk Awareness Increases As Stablecoins Gather Momentum",
    sub: "Article by SPGLOBAL",
    href: "https://www.spglobal.com/ratings/en/research/articles/250130-investors-risk-awareness-increases-as-stablecoins-gather-momentum-13381854",
    img: "images/blue_book.png"
  },
  {
    title: "How to buy, sell and store stablecoins",
    sub: "Blog by MURALPAY",
    href: "https://www.muralpay.com/blog/stablecoins-for-business-how-to-get-started",
    img: "images/blue_book.png"
  },
  {
    title: "Blockchain vs traditional payments",
    sub: "Blog by PRIVY",
    href: "https://privy.io/blog/onchain-payment",
    img: "images/blue_book.png"
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



