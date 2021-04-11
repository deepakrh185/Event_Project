export async function allEvents() {
  const response = await fetch(
    "https://events-app-f51ec-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const eventData = [];
  for (let key in data) {
    eventData.push({
      id: key,
      ...data[key],
    });
  }
  return eventData;
}

export async function getFeaturedEvents() {
  const events = await allEvents();
  return events.filter((event) => event.isFeatured);
}
export async function getEventById(id) {
  const events = await allEvents();
  return events.find((event) => event.id === id);
}
export async function getFilteredEvents(dateFilter) {
  const events = await allEvents();

  const { year, month } = dateFilter;

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
