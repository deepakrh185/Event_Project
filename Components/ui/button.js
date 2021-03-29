import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <div>
        <Link href={props.link}>
          <a className={classes.btn}>{props.children}</a>
        </Link>
      </div>
    );
  }
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
}

export default Button;
