import {
  getEventById,
  allEvents,
  getFeaturedEvents,
} from "../../helper/helper-api";
import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";

function events(props) {
  const event = props.selectedId;

  if (!event) {
    return <h3 className="center">Loading...</h3>;
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
export async function getStaticProps(context) {
  const events = context.params.events;
  const selectedEvent = await getEventById(events);

  return {
    props: {
      selectedId: selectedEvent,
    },
  };
}
export async function getStaticPaths() {
  const eventsId = await getFeaturedEvents();
  const eventsPaths = eventsId.map((event) => ({
    params: { events: event.id },
  }));

  return {
    paths: eventsPaths,
    fallback: false,
  };
}
export default events;
