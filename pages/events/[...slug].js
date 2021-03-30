import { useRouter } from "next/router";
import EventList from "../../Components/EventList";
import ResultsTitle from "../../Components/results-title/ResultTiltle";
import Button from "../../Components/ui/button";
import ErrorAlert from "../../Components/ui/error-alert/ErrorAlert";
import { getFilteredEvents } from "../../dummy-data";

function Filter() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading</p>;
  }
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
    return (
      <>
        <ErrorAlert>Invalid! Please enter the right dates</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </>
    );
  }
  console.log(filterData);
  const filteredEvents = getFilteredEvents({
    year: Year,
    month: Month,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No such record is found!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(Year, Month - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default Filter;
