import classes from "./comment-list.module.css";

function CommentList({ data }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {data &&
        data.map((list) => (
          <p key={list.id}>
            <div>
              <li>
                <p>{list.content}</p>
                <div>
                  By <address>{list.name}</address>
                </div>
              </li>
            </div>
          </p>
        ))}
    </ul>
  );
}

export default CommentList;
