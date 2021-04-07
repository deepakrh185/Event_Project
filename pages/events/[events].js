import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";
import ErrorAlert from "../../Components/ui/error-alert/ErrorAlert";
import Button from "../../Components/ui/button";

function events() {
  const router = useRouter();
  const events = router.query.events;
  console.log(router);
  const event = getEventById(events);
  
  if (!event) {
    return (
      <>
        <ErrorAlert>No event found!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        title={event.title}
        image={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
}

export default events;
