import EventList from "../../Components/EventList";
import { getAllEvents } from "../../dummy-data";

function index() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default index;
