// cards
const cards = [
  {
    title: "Trump Signs the GENIUS Act into Law",
    sub: "Article by WIKIPEDIA",
    href: "https://en..org/wiki/GENIUS_Act",
    img: "images/brown_book.png"
  },
  {
    title: "GENIUS Act: fact sheet",
    sub: "Article by WHITEHOUSE.GOV",
    href: "https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-signs-genius-act-into-law/",
    img: "images/brown_book.png"
  },
  {
    title: "Donald Trump’s “Crypto Bible” explained",
    sub: "Article by WIRED",
    href: "https://www.wired.com/story/donald-trumps-new-crypto-bible-is-everything-the-industry-ever-wanted/",
    img: "images/brown_book.png"
  },
  {
    title: "WEF breakdown: What the GENIUS Act means",
    sub: "Blog by WEFORUM",
    href: "https://www.weforum.org/stories/2025/07/stablecoin-regulation-genius-act/",
    img: "images/brown_book.png"
  },
  {
    title: "President Trump Signs Crypto Bill Exposing Consumers to Huge Financial Risks",
    sub: "News by NCLC",
    href: "https://www.nclc.org/president-trump-signs-crypto-bill-exposing-consumers-to-huge-financial-risks/",
    img: "images/brown_book.png"
  },
  {
    title: "ICIJ global take on “landmark crypto law”",
    sub: "Article by ICIJ",
    href: "https://www.icij.org/news/2025/07/landmark-cryptocurrency-legislation-passes-u-s-house-to-be-signed-into-law-by-president-trump/,
    img: "images/brown_book.png"
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



