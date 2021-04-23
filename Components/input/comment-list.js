import classes from "./comment-list.module.css";

function CommentList({ data }) {
  return (
<<<<<<< HEAD
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {data &&
        data.map((list) => (
          <div key={list._id}>
            <li>
              <p>{list.text}</p>
=======
    <div>
      <ul className={classes.comments}>
        {/* Render list of comments - fetched from API */}
        {data &&
          data.map((list) => (
            <div key={list._id}>
>>>>>>> 8c5dc2ce2d450977edd5824bdd7ea5efce5006da
              <div>
                By <address>{list.name}</address>
              </div>
<<<<<<< HEAD
            </li>
          </div>
        ))}
    </ul>
=======
            </div>
          ))}
      </ul>
    </div>
>>>>>>> 8c5dc2ce2d450977edd5824bdd7ea5efce5006da
  );
}

export default CommentList;
