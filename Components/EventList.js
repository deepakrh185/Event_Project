import EventItems from "./EventItems";
import classes from "./EventList.module.css";

function EventList({ items }) {
  return (
    <div className={classes.list}>
      {items.map((events) => (
        <EventItems
          key={events.id}
          id={events.id}
          title={events.title}
          location={events.location}
          date={events.date}
          image={events.image}
        />
      ))}
    </div>
  );
}

export default EventList;
