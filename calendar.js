document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    fetch('events.json')
      .then(res => res.json())
      .then(events => {
        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          events: events.map(e => ({
            title: e.title,
            start: e.date,
            location: e.location
          }))
        });
        calendar.render();
      });
  }
});