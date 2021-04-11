import classes from "./EventItem.module.css";
import Button from "../Components/ui/button";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function EventItems({ id, title, image, date, location }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");
  const linkForId = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateRangeIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <LocationOnIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={linkForId}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <KeyboardArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItems;
