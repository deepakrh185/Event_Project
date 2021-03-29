import classes from "./EventSearch.module.css";
import Button from "../Components/ui/button";
import { useRef } from "react";

function EventSearch(props) {
  const referMonth = useRef();
  const referYear = useRef();

  const clickHandler = (event) => {
    event.preventDefault();
    const month = referMonth.current.value;
    const year = referYear.current.value;
    props.onSubmit(month, year);
  };
  return (
    <form className={classes.form} onSubmit={clickHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={referMonth}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={referYear}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
}

export default EventSearch;
