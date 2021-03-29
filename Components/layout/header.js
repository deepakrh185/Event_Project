import Link from "next/link";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">EVENTS</Link>
      </div>
      <nav className={classes.navigation}>
        <Link href="/events"> Browse Events</Link>
      </nav>
    </header>
  );
}

export default Header;
