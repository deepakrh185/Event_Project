import EventList from "../../Components/EventList";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../Components/EventSearch"
import {useRouter} from "next/router"

function index() {
  const events = getAllEvents();
  const router = useRouter();

  const handleChange = (month, year) => {
    const yearAndMonth = `/events/${month}/${year}`;
    router.push(yearAndMonth);
  };
  return (
    <div>
      <EventSearch onSubmit={handleChange} />
      <EventList items={events} />
    </div>
  );
}

export default index;
