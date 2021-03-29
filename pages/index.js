import { getFeaturedEvents } from "../dummy-data";
import EventList from "../Components/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
