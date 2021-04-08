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
