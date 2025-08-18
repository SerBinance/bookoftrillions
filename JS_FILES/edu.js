 const input = document.getElementById('searchInput');
 const cards = Array.from(document.querySelectorAll('.card'));
 const empty = document.getElementById('empty');

 function filter() {
   const q = input.value.trim().toLowerCase();
   let shown = 0;

    cards.forEach(card => {
      const text = (card.dataset.title || card.textContent).toLowerCase();
      const match = q === '' || text.includes(q);
      card.classList.toggle('hide', !match);
      if (match) shown++;
    });

    empty.classList.toggle('show', shown === 0);
  }

  input.addEventListener('input', filter);
  // Optional: allow ESC to clear search quickly
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      filter();
      input.blur();
    }
  });

  // initial state
  filter();
