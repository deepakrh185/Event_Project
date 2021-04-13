import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import classes from "./event-logistics.module.css";
import Image from "next/image";

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
        <Image src={`/${image}`} alt={imageAlt} width={300} height={400} />
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
