import EventList from "../../Components/EventList";
import { allEvents } from "../../helper/helper-api";
import EventSearch from "../../Components/EventSearch";
import { useRouter } from "next/router";
import Head from "next/head"

function index({ events }) {
  const event = events;

  const router = useRouter();

  const handleChange = (month, year) => {
    const yearAndMonth = `/events/${month}/${year}`;
    router.push(yearAndMonth);
  };
  return (
    <div>
      <Head>
        <title>Filter Events</title>
        <meta title="Filter Events" content="Filtering the specific events"/>
      </Head>
      <EventSearch onSubmit={handleChange} />
      <EventList items={event} />
    </div>
  );
}
export async function getStaticProps() {
  const events = await allEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
export default index;
