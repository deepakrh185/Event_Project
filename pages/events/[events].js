import { getEventById, getFeaturedEvents } from "../../helper/helper-api";
import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";
import Head from "next/head";
import Comments from "../../Components/input/comments";

function events(props) {
  const event = props.selectedId;

  if (!event) {
    return <h3 className="center">Loading...</h3>;
  }

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta name="Events page" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
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
