import Comment from "./Comment";

function CommentList(props) {
  let content;

  if (props.comments.length === 0) {
    content = <p className="comment__empty">Empty comment</p>;
  } else {
    content = props.comments.map(function (comment) {
      return (
        <Comment
          key={`message_${props.messageId}_comment_${comment.id}`}
          content={comment.content}
        />
      );
    });
  }

  return <div className="comment-list__wrapper">{content}</div>;
}

export default CommentList;
