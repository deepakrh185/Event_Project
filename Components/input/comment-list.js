import classes from "./comment-list.module.css";

function CommentList({ data }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {data &&
        data.map((list) => (
          <div key={list._id}>
            <li>
              <p>{list.text}</p>
              <div>
                By <address>{list.name}</address>
              </div>
            </li>
          </div>
        ))}
    </ul>
  );
}

export default CommentList;
