import { getFeaturedEvents } from "../dummy-data";
import EventList from "../Components/EventList";
import EventSearch from "../Components/EventSearch";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={featuredEvents} />
    </div>
  );
}
