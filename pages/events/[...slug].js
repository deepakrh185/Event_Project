import Head from "next/head";
import EventList from "../../Components/EventList";
import ResultsTitle from "../../Components/results-title/ResultTiltle";
import Button from "../../Components/ui/button";
import ErrorAlert from "../../Components/ui/error-alert/ErrorAlert";
import { getFilteredEvents } from "../../helper/helper-api";

function Filter(props) {
  //const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p>Loading</p>;
  // }
  // const filterYear = filterData[0];
  // const filterMonth = filterData[1];

  // const Year = +filterYear;
  // const Month = +filterMonth;
  const head = (
    <Head>
      <title>Filter EventsPage</title>
      <meta
        name="Filter Events"
        content={`Events in ${props.date.year}, ${props.date.month}`}
      />
    </Head>
  );
  if (props.hasError) {
    return (
      <>
        {head}
        <ErrorAlert>Invalid! Please enter the right dates</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = props.events;
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        {head}
        <ErrorAlert>No such record is found!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </div>
    );
  }
  const date = new Date(props.date.year, props.date.month - 1);
  return (
    <div>
      {head}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const filterData = context.params.slug;
  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const Year = +filterYear;
  const Month = +filterMonth;

  if (
    isNaN(Year) ||
    isNaN(Month) ||
    Year > 2030 ||
    Year < 2020 ||
    Month > 12 ||
    Month < 1
  ) {
    return {
      props: { hasError: true },
      //notFound: true,
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: Year,
    month: Month,
  });
  return {
    props: {
      events: filteredEvents,
      date: {
        year: Year,
        month: Month,
      },
    },
  };
}
export default Filter;
