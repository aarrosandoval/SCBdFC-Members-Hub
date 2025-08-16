document.addEventListener("DOMContentLoaded", () => {
  fetch('events.json')
    .then(res => res.json())
    .then(events => {
      const sec = document.getElementById('upcoming');
      if (sec) {
        sec.innerHTML = "<h2>Upcoming Events</h2>";
        events.forEach(e => {
          const p = document.createElement('p');
          p.textContent = `${e.date} — ${e.title} @ ${e.location}`;
          sec.appendChild(p);
        });
      }
    });

  fetch('deadlines.json')
    .then(res => res.json())
    .then(deadlines => {
      const sec = document.getElementById('deadlines');
      if (sec) {
        sec.innerHTML = "<h2>Entry Deadlines</h2>";
        deadlines.forEach(d => {
          const p = document.createElement('p');
          p.textContent = `${d.show}: ${d.deadline}`;
          sec.appendChild(p);
        });
      }
    });
});