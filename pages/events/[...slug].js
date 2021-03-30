import { useRouter } from "next/router";
import EventList from "../../Components/EventList";
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
    return <p>Invalid filter, Please adjust your values</p>;
  }
  console.log(filterData);
  const filteredEvents = getFilteredEvents({
    year: Year,
    month: Month,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>NO such events is found</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default Filter;
