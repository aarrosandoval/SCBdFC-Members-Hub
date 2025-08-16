document.addEventListener("DOMContentLoaded", () => {
  fetch('results.json')
    .then(res => res.json())
    .then(results => {
      const div = document.getElementById('results');
      results.forEach(r => {
        const p = document.createElement('p');
        p.textContent = `${r.date} — ${r.dog} won ${r.award} at ${r.show} (Owner: ${r.owner})`;
        div.appendChild(p);
      });
    });
});