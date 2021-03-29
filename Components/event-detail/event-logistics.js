import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <span>
          <DateRangeIcon />
          <time>{humanReadableDate}</time>
        </span>
        <span>
          <LocationOnIcon />
          <address>{addressText}</address>
        </span>
      </ul>
    </section>
  );
}

export default EventLogistics;
