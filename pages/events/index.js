import EventList from "../../Components/EventList";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../Components/EventSearch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventItems from "../../Components/EventItems";

function index() {
  const event = getAllEvents();

  const router = useRouter();
  const [events, setEvents] = useState();

  // useEffect(() => {
  //   fetch("https://events-app-f51ec-default-rtdb.firebaseio.com/events.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const eventData = [];
  //       for (let key in data) {
  //         eventData.push({
  //           id: key,
  //           title: data[key].title,
  //           location: data[key].location,
  //           description: data[key].description,
  //           image: data[key].image,
  //         });
  //       }
  //       setEvents(eventData);
  //     });
  // }, []);

  const handleChange = (month, year) => {
    const yearAndMonth = `/events/${month}/${year}`;
    router.push(yearAndMonth);
  };
  return (
    <div>
      <EventSearch onSubmit={handleChange} />
      <EventList items={event} />
    </div>
  );
}

export default index;
