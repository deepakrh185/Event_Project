import Link from "next/link";
import classes from "./EventItem.module.css";

function EventItems({ id, title, image, date, location, description }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(", ", "\n");
  const linkForId = `/events/${id}`;

  return (
    <div className={classes.item}>
      <img src={image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.address}>
          <address>{formattedLocation}</address>
        </div>
        <div>{description}</div>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.actions}>
          <Link href={linkForId}>Explore Events</Link>
        </div>
      </div>
    </div>
  );
}

export default EventItems;
