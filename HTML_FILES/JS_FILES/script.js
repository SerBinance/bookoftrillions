document.addEventListener('DOMContentLoaded', function () {
  // Reduced motion respect
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function setMotion(e) {
    document.querySelectorAll('.coin, .book-glow').forEach(el => {
      el.style.animationPlayState = e.matches ? 'paused' : 'running';
    });
  }
  mq.addEventListener ? mq.addEventListener('change', setMotion) : mq.addListener(setMotion);
  setMotion(mq);
});
