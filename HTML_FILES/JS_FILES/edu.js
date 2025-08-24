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
