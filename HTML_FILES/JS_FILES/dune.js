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

/* ======= WIRE MOBILE SEARCH TOO ======= */
const inputDesktop = document.getElementById('searchInput');
const inputMobile  = document.getElementById('searchInputMobile');

// reuse your existing debounce/runFilter from earlier in edu.js
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

  // keep values in sync (optional but neat)
  if (inputDesktop && inputMobile) {
    const sync = (from, to) => from.addEventListener('input', () => { to.value = from.value; });
    sync(inputDesktop, inputMobile);
    sync(inputMobile, inputDesktop);
  }
}


