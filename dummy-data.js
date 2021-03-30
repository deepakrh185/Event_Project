const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2022-05-12",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Don't comment bad code - rewrite it",
    description:
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
    location: "F/1 National Plaza, AlkapuriVadodara Gujarat",
    date: "2021-01-11",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "There’s no test like production.",
    description:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon",
    location: "Trade Linkers 63 Nagdevi Cr Ln, Masjid Bunder (west)",
    date: "2020-10-22",
    image: "images/extrovert-event.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
